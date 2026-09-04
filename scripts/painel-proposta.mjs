// Painel local para publicar propostas: sobe uma página em http://localhost:4321
// onde você arrasta o HTML, e ao publicar ele injeta a expiração, grava o
// arquivo, atualiza o registro e faz commit + push no GitHub. Somente localhost.

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { buildSlug, slugify, injectExpiry, expiresAtFromDays } from './lib-proposta.mjs'

const execFileAsync = promisify(execFile)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PROPOSTAS_DIR = path.join(ROOT, 'public', 'propostas')
const REGISTRY = path.join(PROPOSTAS_DIR, 'registry.json')
const BASE_URL = 'https://multinexo.com.br'
const PORT = 4321
const HOST = '127.0.0.1'

function readRegistry() {
  try {
    return JSON.parse(fs.readFileSync(REGISTRY, 'utf8'))
  } catch {
    return []
  }
}

async function git(args) {
  return execFileAsync('git', args, { cwd: ROOT })
}

const PAGE = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Publicar proposta — Multinexo</title>
<style>
  :root{color-scheme:dark}
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#070A12;color:#fff;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px}
  .card{width:100%;max-width:560px;background:#0F1424;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:32px}
  h1{font-size:20px;margin:0 0 4px}
  p.sub{color:#9AA3B8;font-size:13.5px;margin:0 0 24px}
  label{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.5px;color:#6B7488;margin:16px 0 6px;font-weight:700}
  input[type=text],input[type=number]{width:100%;background:#070A12;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;padding:12px 14px;font-size:14px}
  .drop{border:2px dashed rgba(255,255,255,.18);border-radius:14px;padding:26px;text-align:center;color:#9AA3B8;font-size:14px;cursor:pointer;transition:.2s}
  .drop.drag{border-color:#7C3AED;background:rgba(124,58,237,.08)}
  .drop b{color:#06B6D4}
  button{width:100%;margin-top:24px;background:linear-gradient(90deg,#7C3AED,#2563EB);color:#fff;border:0;border-radius:999px;padding:15px;font-size:15px;font-weight:700;cursor:pointer}
  button:disabled{opacity:.5;cursor:not-allowed}
  .row{display:flex;gap:12px}.row>div{flex:1}
  #out{margin-top:22px;font-size:14px;display:none}
  #out.ok{display:block}
  .link{display:flex;gap:8px;margin-top:8px}
  .link input{flex:1}
  .copy{width:auto;margin:0;padding:12px 16px;border-radius:10px;font-size:13px}
  .muted{color:#6B7488;font-size:12.5px;margin-top:10px}
  .err{color:#ff9d9d}
</style></head>
<body><div class="card">
  <h1>Publicar proposta</h1>
  <p class="sub">Arraste o HTML da proposta. Ele será publicado com validade e link automático.</p>

  <div class="drop" id="drop">Clique ou arraste o arquivo <b>.html</b> aqui</div>
  <input type="file" id="file" accept=".html,text/html" hidden>

  <label>Cliente</label>
  <input type="text" id="cliente" placeholder="Ex: Ketlyn Gomes Estética">

  <div class="row">
    <div><label>Slug (opcional)</label><input type="text" id="slug" placeholder="gerado automaticamente"></div>
    <div><label>Validade (dias)</label><input type="number" id="dias" value="15" min="1"></div>
  </div>

  <button id="publicar" disabled>Publicar e enviar ao GitHub</button>

  <div id="out"></div>
</div>
<script>
  var fileEl=document.getElementById('file'),drop=document.getElementById('drop'),
      btn=document.getElementById('publicar'),out=document.getElementById('out');
  var htmlContent=null,fileName='';
  function setFile(f){ if(!f)return; fileName=f.name; var r=new FileReader();
    r.onload=function(){ htmlContent=r.result; drop.innerHTML='✅ <b>'+f.name+'</b> pronto'; btn.disabled=false; }; r.readAsText(f); }
  drop.onclick=function(){fileEl.click()};
  fileEl.onchange=function(){setFile(fileEl.files[0])};
  ;['dragover','dragenter'].forEach(function(e){drop.addEventListener(e,function(ev){ev.preventDefault();drop.classList.add('drag')})});
  ;['dragleave','drop'].forEach(function(e){drop.addEventListener(e,function(ev){ev.preventDefault();drop.classList.remove('drag')})});
  drop.addEventListener('drop',function(ev){setFile(ev.dataTransfer.files[0])});
  btn.onclick=async function(){
    if(!htmlContent)return;
    btn.disabled=true; btn.textContent='Publicando...'; out.className='';
    try{
      var res=await fetch('/publicar',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({html:htmlContent,fileName:fileName,
          cliente:document.getElementById('cliente').value,
          slug:document.getElementById('slug').value,
          dias:document.getElementById('dias').value})});
      var data=await res.json();
      if(!res.ok)throw new Error(data.error||'Falha');
      out.className='ok';
      out.innerHTML='<b>Publicado!</b> Válida até '+new Date(data.expiresAt).toLocaleDateString('pt-BR')+
        '<div class="link"><input type="text" readonly value="'+data.url+'"><button class="copy" onclick="navigator.clipboard.writeText(\\''+data.url+'\\')">Copiar</button></div>'+
        '<div class="muted">O link fica no ar após o deploy da Vercel (~1 min).</div>';
    }catch(e){ out.className='ok'; out.innerHTML='<span class="err">Erro: '+e.message+'</span>'; }
    btn.disabled=false; btn.textContent='Publicar e enviar ao GitHub';
  };
</script>
</body></html>`

async function handlePublicar(body, res) {
  const { html, fileName, cliente, slug, dias } = JSON.parse(body)
  if (!html || !String(html).trim()) {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ error: 'HTML vazio.' }))
  }

  const base = slug ? slugify(slug) : (cliente || (fileName || '').replace(/\.html?$/i, ''))
  const finalSlug = slug ? slugify(slug) : buildSlug(base)
  const dd = dias === '' || dias == null ? 15 : Number(dias)
  const expiresAt = expiresAtFromDays(dd)

  const finalHtml = injectExpiry(html, expiresAt)

  fs.mkdirSync(PROPOSTAS_DIR, { recursive: true })
  const filePath = path.join(PROPOSTAS_DIR, `${finalSlug}.html`)
  fs.writeFileSync(filePath, finalHtml, 'utf8')

  const registry = readRegistry()
  registry.push({
    slug: finalSlug,
    cliente: cliente || null,
    createdAt: new Date().toISOString(),
    expiresAt,
  })
  fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2), 'utf8')

  // git add / commit / push
  await git(['add', `public/propostas/${finalSlug}.html`, 'public/propostas/registry.json'])
  await git(['commit', '-m', `Publica proposta: ${cliente || finalSlug}`])
  await git(['push', 'origin', 'main'])

  const url = `${BASE_URL}/propostas/${finalSlug}.html`
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ url, expiresAt, slug: finalSlug }))
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    return res.end(PAGE)
  }
  if (req.method === 'POST' && req.url === '/publicar') {
    let body = ''
    req.on('data', (c) => (body += c))
    req.on('end', () => {
      handlePublicar(body, res).catch((e) => {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: e.message || String(e) }))
      })
    })
    return
  }
  res.writeHead(404)
  res.end('Not found')
})

server.listen(PORT, HOST, () => {
  console.log(`\n  Painel de propostas: http://localhost:${PORT}\n  (Ctrl+C para encerrar)\n`)
})
