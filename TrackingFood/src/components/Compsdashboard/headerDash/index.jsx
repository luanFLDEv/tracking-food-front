import './style.css'
export default function HeaderDash() {
	return (
		<div className="dashboard">
			<h2>DashBoard</h2>
			<nav className="dash-nav">
				<ul className="dash-ul">
					<li className="dash-li">Home</li>
					<li className="dash-li">Plano</li>
					<li className="dash-li">Metricas Pessoais</li>
					<li className="dash-li">Suporte</li>
				</ul>
			</nav>
		</div>
	)
}
