import GraphicsDash from '../graphicsDash'
import HeaderDash from '../headerDash'
import CardUsuario from '../userDash'
import './style.css'
export default function MainDash() {
	const dadosDiarios = [250, 45, 20, 5, 5]
	const dadosSemanais = [30, 40, 20, 7, 3]
	const dadosMensais = [28, 42, 18, 7, 5]

	return (
		<div className="dashboard-main">
			<HeaderDash />
			<div className="p-8 bg-gray-50 min-h-screen">
				<h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
					Meu Painel Nutricional
				</h2>
				<div className="grapichs">
					<h1>diario</h1>
					<GraphicsDash titulo="Consumo Diário" dados={dadosDiarios} />
					<h1>Semanal</h1>
					<GraphicsDash titulo="Média Semanal" dados={dadosSemanais} />
					<h1>Mensal</h1>
					<GraphicsDash titulo="Média Mensal" dados={dadosMensais} />
				</div>
			</div>
			<div className="flex flex-wrap gap-6 p-6 bg-gray-50 min-h-screen">
				<CardUsuario
					nome="Lucas Ferreira"
					idade={25}
					peso={72}
					atividade="Sim"
					altura={122}
					foto="https://randomuser.me/api/portraits/men/32.jpg"
				/>
			</div>
		</div>
	)
}
