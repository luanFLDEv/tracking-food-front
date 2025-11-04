import Trackingfood from './assets/modern-smartphone-showing-food-tracking-app-interf.jpg'
import './style.css'
export default function Main() {
	return (
		<section>
			<div className="main-text">
				<span className="detaque-text">
					Testado e aprovado por mais de 100 usuarios!
				</span>
				<h2 className="main-title">
					Cuide da sua alimentação nunca foi tão <span>fácil</span>
				</h2>
				<p className="main-paragraph">
					Calcule os macros dos alimentos apenas com um clique. Fotografe, grave
					áudio ou digite - nós fazemos o resto.
				</p>
				<div>
					<button className="btn-header btn-cmc">
						Escaneie sua Primeira Refeição
					</button>
					<button className="btn-header btn-demostracao">
						Ver demonstração
					</button>
				</div>
				<div className="paragraph-btn">
					<p className="icon">
						<i class="bi bi-stopwatch"></i>seguro
					</p>
					<p className="icon">
						{' '}
						<i class="bi bi-stopwatch"></i> resultados em segundos
					</p>
				</div>
			</div>
			<div>
				<img className="main-img" src={Trackingfood} alt="" />
			</div>
		</section>
	)
}
