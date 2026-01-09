<?php
/**
 * Template Name: Landing Page - Gestão Ads & IA
 * Description: Template de alta conversão para serviços de tráfego e automação
 */
get_header(); ?>

<!-- HERO SECTION -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>
                    Transforme Seu Negócio com 
                    <span class="highlight">Gestão de Tráfego</span> e 
                    <span class="highlight">Automações com IA</span>
                </h1>
                <p>
                    Aumente suas vendas em até 300% com estratégias comprovadas de tráfego pago 
                    e automações inteligentes que trabalham 24/7 para o seu negócio.
                </p>
                <div class="hero-cta-group">
                    <a href="https://wa.me/5531993121211?text=Olá, vim do site e gostaria de saber mais sobre gestão de tráfego" target="_blank" class="btn-primary">Quero Crescer Agora</a>
                    <a href="#servicos" class="btn-secondary">Conhecer Serviços</a>
                </div>
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">+500</span>
                        <span class="stat-label">Clientes Atendidos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">R$ 50M+</span>
                        <span class="stat-label">Investidos em Ads</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4.5x</span>
                        <span class="stat-label">ROI Médio</span>
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <!-- Placeholder para imagem/animação -->
                <div style="background: rgba(255,255,255,0.05); border-radius: 20px; padding: 60px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);">
                    <div style="text-align: center; font-size: 120px;">📊</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SERVICES SECTION -->
<section id="servicos" class="services-section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Nossos Serviços</span>
            <h2>Soluções Completas para Seu Crescimento Digital</h2>
            <p>Combinamos expertise em tráfego pago com o poder da inteligência artificial para maximizar seus resultados</p>
        </div>
        
        <div class="services-grid">
            <!-- Serviço 1: Gestão de Tráfego -->
            <div class="service-card">
                <div class="service-icon">🎯</div>
                <h3>Gestão de Tráfego Pago</h3>
                <p>Campanhas estratégicas no Google Ads, Meta Ads e TikTok Ads com foco em ROI e conversão.</p>
                <ul class="service-features">
                    <li>Análise e planejamento estratégico</li>
                    <li>Criação de campanhas otimizadas</li>
                    <li>Otimização contínua de performance</li>
                    <li>Relatórios detalhados semanais</li>
                    <li>Testes A/B constantes</li>
                </ul>
                <a href="#contato" class="service-link">Solicitar Proposta →</a>
            </div>

            <!-- Serviço 2: Automações com IA -->
            <div class="service-card">
                <div class="service-icon">🤖</div>
                <h3>Automações com IA</h3>
                <p>Implemente inteligência artificial para automatizar processos e escalar seu atendimento.</p>
                <ul class="service-features">
                    <li>Chatbots inteligentes 24/7</li>
                    <li>Qualificação automática de leads</li>
                    <li>Follow-up automatizado</li>
                    <li>Integração com CRM</li>
                    <li>Análise preditiva de dados</li>
                </ul>
                <a href="#contato" class="service-link">Solicitar Proposta →</a>
            </div>

            <!-- Serviço 3: Consultoria Estratégica -->
            <div class="service-card">
                <div class="service-icon">💡</div>
                <h3>Consultoria Estratégica</h3>
                <p>Diagnóstico completo e planejamento personalizado para acelerar seus resultados.</p>
                <ul class="service-features">
                    <li>Auditoria de marketing digital</li>
                    <li>Análise de concorrência</li>
                    <li>Definição de personas e jornada</li>
                    <li>Estratégia de funil de vendas</li>
                    <li>Plano de ação 90 dias</li>
                </ul>
                <a href="#contato" class="service-link">Solicitar Proposta →</a>
            </div>
        </div>
    </div>
</section>

<!-- RESULTS SECTION -->
<section class="results-section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Resultados Reais</span>
            <h2>Números que Comprovam Nossa Expertise</h2>
            <p>Veja o impacto que geramos para nossos clientes</p>
        </div>
        
        <div class="results-grid">
            <div class="result-card">
                <div class="result-icon">📈</div>
                <div class="result-value">+287%</div>
                <div class="result-description">Aumento médio em conversões</div>
            </div>
            <div class="result-card">
                <div class="result-icon">💰</div>
                <div class="result-value">R$ 4.50</div>
                <div class="result-description">Retorno para cada R$ 1 investido</div>
            </div>
            <div class="result-card">
                <div class="result-icon">⚡</div>
                <div class="result-value">-45%</div>
                <div class="result-description">Redução no custo por aquisição</div>
            </div>
            <div class="result-card">
                <div class="result-icon">🎯</div>
                <div class="result-value">98%</div>
                <div class="result-description">Taxa de satisfação dos clientes</div>
            </div>
        </div>
        
        <!-- Galeria de Imagens de Resultados -->
        <div class="section-header" style="margin-top: 80px;">
            <h3 style="font-size: 32px; font-weight: 700; margin-bottom: 40px;">Resultados Comprovados</h3>
        </div>
        
        <div class="results-gallery">
            <!-- Campanhas de Tráfego -->
            <div class="result-image-card">
                <img src="<?php echo get_template_directory_uri(); ?>/images/01-CAMPANHA.png" alt="Resultado Campanha 1" class="result-image">
                <div class="result-image-overlay">
                    <p>📊 Campanha de Tráfego Pago</p>
                </div>
            </div>
            <div class="result-image-card">
                <img src="<?php echo get_template_directory_uri(); ?>/images/02-CAMPANHA.png" alt="Resultado Campanha 2" class="result-image">
                <div class="result-image-overlay">
                    <p>📊 Resultados Google Ads</p>
                </div>
            </div>
            <div class="result-image-card">
                <img src="<?php echo get_template_directory_uri(); ?>/images/03-CAMPANHA.png" alt="Resultado Campanha 3" class="result-image">
                <div class="result-image-overlay">
                    <p>📊 Performance Meta Ads</p>
                </div>
            </div>
            
            <!-- Automações com IA -->
            <div class="result-image-card">
                <img src="<?php echo get_template_directory_uri(); ?>/images/04-AUTOMOCAO-AI.png" alt="Automação IA 1" class="result-image">
                <div class="result-image-overlay">
                    <p>🤖 Projeto Automação com IA</p>
                </div>
            </div>
            <div class="result-image-card">
                <img src="<?php echo get_template_directory_uri(); ?>/images/05-AUTOMOCAO-AI.png" alt="Automação IA 2" class="result-image">
                <div class="result-image-overlay">
                    <p>🤖 Chatbot Inteligente</p>
                </div>
            </div>
            <div class="result-image-card">
                <img src="<?php echo get_template_directory_uri(); ?>/images/06-AUTOMOCAO-AI.png" alt="Automação IA 3" class="result-image">
                <div class="result-image-overlay">
                    <p>🤖 Sistema de Automação</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- TESTIMONIALS SECTION -->
<section class="testimonials-section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag" style="background: rgba(255,255,255,0.1); color: var(--white);">Depoimentos</span>
            <h2 style="color: var(--white);">O Que Nossos Clientes Dizem</h2>
            <p style="color: rgba(255,255,255,0.7);">Histórias reais de transformação e crescimento</p>
        </div>
        
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-text">
                    "Em 3 meses, triplicamos nossas vendas online. A gestão de tráfego foi impecável 
                    e as automações com IA liberaram nossa equipe para focar no que realmente importa."
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar"></div>
                    <div class="author-info">
                        <h4>Maria Silva</h4>
                        <p>CEO - E-commerce de Moda</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card">
                <div class="testimonial-text">
                    "O ROI que conseguimos com as campanhas superou todas as expectativas. 
                    Profissionalismo e resultados que realmente fazem diferença no faturamento."
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar"></div>
                    <div class="author-info">
                        <h4>João Santos</h4>
                        <p>Diretor - Infoprodutos</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card">
                <div class="testimonial-text">
                    "As automações com IA transformaram nosso atendimento. Conseguimos qualificar 
                    leads 24/7 e nossa taxa de conversão aumentou 180%."
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar"></div>
                    <div class="author-info">
                        <h4>Ana Costa</h4>
                        <p>Fundadora - SaaS B2B</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA SECTION -->
<section id="contato" class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Pronto Para Transformar Seus Resultados?</h2>
            <p>Agende uma consultoria gratuita e descubra como podemos acelerar o crescimento do seu negócio</p>
            
            <?php echo do_shortcode('[contact-form-7 id="1" title="Formulário de contato"]'); ?>
            
            <!-- Botão direto para WhatsApp -->
            <div style="text-align: center; margin-top: 40px;">
                <a href="https://wa.me/5531993121211?text=Olá, vim do site e gostaria de saber mais sobre gestão de tráfego" target="_blank" class="btn-primary" style="display: inline-block; font-size: 18px;">Quero Crescer Agora</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 14px; opacity: 0.8;">
                🔒 Seus dados estão seguros. Não fazemos spam.
            </p>
        </div>
    </div>
</section>

<?php get_footer(); ?>
