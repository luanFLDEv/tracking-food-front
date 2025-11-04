import './style.css'
import Balance from './assets/balance.svg'
export default function Advantagens() {
	return (
		<div>
			<section>
				<div className="advantagens">
					<div className="card card-advantagens">
						<div className="cardsepara">
							<p className="card-points"></p>
							<h4 className="card-title">Praticidade absoluta</h4>
						</div>
						<div className="card-paragraph">
							Use foto, texto ou voz, do jeito que for mais rápido para você.
						</div>
					</div>
					<div className="card card-advantagens">
						<div className="cardsepara">
							<p className="card-points"></p>
							<h4 className="card-title">Controle total</h4>
						</div>
						<div className="card-paragraph">
							Saiba exatamente o que está consumindo.
						</div>
					</div>
				</div>
				<img className="card-balance" src={Balance} alt="Balança" />
				<div className="advantagens">
					<div className="card card-advantagens">
						<div className="cardsepara">
							<p className="card-points"></p>
							<h4 className="card-title">Relatórios inteligentes</h4>
						</div>
						<div className="card-paragraph">
							Visualize seu progresso diário, semanal e mensal.
						</div>
					</div>
					<div className="card card-advantagens">
						<div className="cardsepara">
							<p className="card-points "></p>
							<h4 className="card-title">Mais saúde, menos preocupação</h4>
						</div>
						<div className="card-paragraph">
							Mantenha o equilíbrio sem precisar decorar tabelas de calorias.
						</div>
					</div>
				</div>
				<div className="text-benefits">
					<h3>
						Está esperando o quê para começar a cuidar da sua saúde de forma
						simples e prática?
					</h3>
					<p>
						Com o Tracking Food você tem o controle da sua alimentação na palma
						da mão, sem complicação. Escolha o plano que combina com você e dê o
						primeiro passo para uma vida mais equilibrada.
					</p>
				</div>
			</section>
		</div>
	)
}
