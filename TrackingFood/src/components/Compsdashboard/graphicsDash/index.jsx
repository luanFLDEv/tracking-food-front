import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import './style.css'
// Registrar os elementos necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend)

export default function GraphicsDash({ titulo, dados }) {
	const data = {
		labels: ['Proteína', 'Carboidratos', 'Gorduras', 'Fibras', 'Açúcares'],
		datasets: [
			{
				label: 'Distribuição (%)',
				data: dados,
				backgroundColor: [
					'#7ed957',
					'#57c7ff',
					'#f4b400',
					'#ff6f61',
					'#a97fff'
				],
				borderColor: '#fff',
				borderWidth: 2
			}
		]
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
				labels: { color: '#333', font: { size: 13 } }
			},
			title: {
				display: true,
				text: titulo,
				color: '#333',
				font: { size: 18, weight: 'bold' }
			}
		}
	}

	return (
		<div className="p-4 bg-white rounded-2xl shadow-md w-full max-w-xs mx-auto">
			<div className="graphics-controler">
				<Pie className="teste" data={data} options={options} />
			</div>
		</div>
	)
}
