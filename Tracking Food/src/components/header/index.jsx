import Logo from './assets/trackingfood.png'
import './style.css'
import { useState } from 'react'
import ModalLogin from '../Modal/login/index'
import ModalCreate from '../Modal/create/index'
export default function Header() {
	const [isModalOpen, setIsModalLoginOpen] = useState(false)
	const [isModalCreateOpen, setIsModalCreateOpen] = useState(false)
	return (
		<div>
			<header className="header">
				<img className="header-logo" src={Logo} alt="" />
				<nav className="header-nav">
					<a className="header-link" href="#">
						Recursos
					</a>
					<a className="header-link" href="#">
						Como funciona
					</a>
					<a className="header-link" href="#">
						Sobre
					</a>
					<a className="header-link" href="#">
						Preços
					</a>
				</nav>
				<div className="btns-header">
					<button
						onClick={() => setIsModalLoginOpen(true)}
						className="btn-header btn-demostracao"
					>
						Já tenho acesso
					</button>

					<button
						onClick={() => setIsModalCreateOpen(true)}
						className="btn-header btn-cmc"
					>
						Comece agora
					</button>
				</div>
			</header>
			<ModalLogin
				isOpen={isModalOpen}
				onClose={() => setIsModalLoginOpen(false)}
			></ModalLogin>
			<ModalCreate
				isOpen={isModalCreateOpen}
				onClose={() => setIsModalCreateOpen(false)}
			></ModalCreate>
		</div>
	)
}
