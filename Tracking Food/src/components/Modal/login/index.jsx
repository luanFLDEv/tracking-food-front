import '../style.css'
import Logo from '../assets/trackingfood.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function ModalLogin({ isOpen, onClose }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	if (!isOpen) return null // se não estiver aberto, não renderiza nada

	async function handleSubmit(e) {
		e.preventDefault()

		if (!email || !password) {
			alert('Preencha email e senha')
			return
		}

		setLoading(true)

		try {
			const res = await fetch('http://localhost:5000/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			})

			const data = await res.json()

			if (!res.ok) {
				alert(data.message || 'Erro ao logar')
			} else {
				if (data.userId) localStorage.setItem('user_id', data.userId)
				alert(data.message || 'Login realizado com sucesso!')
				setEmail('')
				setPassword('')

				onClose() // fecha o modal após sucesso
				navigate('/dashboard')
			}
		} catch (err) {
			console.error('Erro ao logar:', err)
			alert('Erro ao se conectar com o servidor.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="modal-predominante">
			<div className="container-modal">
				<span onClick={onClose} className="close">
					x
				</span>

				<div className="modal-header">
					<img className="logo-modal" src={Logo} alt="" />
					<h2 className="modal-title">Entrar</h2>
				</div>

				<form className="form-modal" onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="email"
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
					<input
						type="password"
						name="senha"
						id="senha"
						placeholder="senha"
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
					<div className="container-btn">
						<button className="btn-form" type="submit" disabled={loading}>
							{loading ? 'Entrando...' : 'Entrar'}
						</button>
					</div>
				</form>

				<div className="login-form-register">
					<p className="login-acounnt">
						<a href="">Esqueceu a senha ?</a>
					</p>
					<div className="linha">
						<span></span>
						<p>OU</p>
						<span></span>
					</div>
					<div className="container-btn">
						<button className="btn-form">Entrar com Google</button>
					</div>
				</div>
			</div>
		</div>
	)
}
