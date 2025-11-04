import './style.css'
export default function Plans() {
	return (
		<div>
			<h2 className="plans-title">Escolha seu plano</h2>
			<p className="plans-paragraph">
				Comece gratuitamente e evolua conforme suas necessidades
			</p>
			<section className="section-cards">
				<div className="card card-plan">
					<div className="plan-card-text">
						<h1 className="plan-title">Plano Gratuito</h1>
						<p className="plan-chamative">Experimente sem compromisso</p>
					</div>
					<div className="plan-price-area">
						<h2 className="plan-price">R$ 0,00</h2>
						<p className="plan-time">mes</p>
					</div>
					<ul className="plan-benefits">
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">1 Reconhecimento por foto por dia</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>{' '}
							<p className="plan-p">Relatórios básicos</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>{' '}
							<p className="plan-p">Histórico de até 7 dias</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>{' '}
							<p className="plan-p">Acesso à comunidade Tracking Food</p>
						</li>
					</ul>

					<div className="plan-button-area">
						<button className="btn-header btn-plans">Começar Gratis</button>
					</div>
				</div>
				<div className="card card-plan plan-recomendade">
					<h1 className="plan-title">Plano Plus</h1>
					<p className="plan-chamative">
						Mais recursos para quem quer praticidade
					</p>
					<h2 className="plan-price">R$ 15,00</h2>
					<p className="plan-time">mes</p>
					<ul className="plan-benefits">
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">Reconhecimento por foto e voz</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>{' '}
							<p className="plan-p">Relatórios avançados</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">Histórico completo das suas refeições</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">
								Sugestões inteligentes de substituições saudáveis
							</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">
								Sugestões inteligentes de substituições saudáveis
							</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">Suporte por chat</p>
						</li>
					</ul>
					<div className="plan-button-area">
						<button className="btn-header btn-plans btn-recomendade">
							Começar Gratis
						</button>
					</div>
				</div>
				<div className="card card-plan">
					<h1 className="plan-title">Plano Premium</h1>
					<p className="plan-chamative">
						O plano ideal para levar sua saúde a sério
					</p>
					<h2 className="plan-price">R$ 25,00</h2>
					<p className="plan-time">mes</p>

					<ul className="plan-benefits">
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>{' '}
							<p className="plan-p">Tudo do plano Plus</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">Acompanhamento personalizado</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">Relatórios detalhados semanais e mensais</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">
								Comparação de progresso mês a mês e metas
							</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">
								Recomendação de cardápios com base nos seus objetivos
							</p>
						</li>
						<li className="plan-benetifs-item">
							<i class="bi bi-check icon_check"></i>
							<p className="plan-p">Prioridade no suporte</p>
						</li>
					</ul>
					<div className="plan-button-area">
						<button className="btn-header btn-plans">Começar Gratis</button>
					</div>
				</div>
			</section>
		</div>
	)
}
