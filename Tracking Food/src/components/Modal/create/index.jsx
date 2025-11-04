import '../style.css'
import { useState } from 'react'
import Logo from '../assets/trackingfood.png'

export default function ModalCreate({ isOpen, onClose }) {
	const [step, setStep] = useState(1) // controla a etapa
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [weight, setWeight] = useState('')
	const [height, setHeight] = useState('')
	const [loading, setLoading] = useState(false)

	if (!isOpen) return null

	// Valida apenas a etapa atual
	function validateStep1() {
		if (!email || !password) {
			alert('Preencha o email e a senha para continuar.')
			return false
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			alert('Insira um email válido.')
			return false
		}
		return true
	}

	function validateStep2() {
		if (!name || !age || !weight || !height) {
			alert('Preencha todas as informações para concluir o cadastro.')
			return false
		}

		const ageNum = Number(age)
		const weightNum = Number(weight)
		const heightNum = Number(height.replace(',', '.'))

		if (ageNum <= 0 || ageNum > 130) {
			alert('Insira uma idade válida.')
			return false
		}
		if (weightNum <= 0 || weightNum > 1000) {
			alert('Insira um peso válido (kg).')
			return false
		}
		if (heightNum <= 0 || heightNum > 3) {
			alert('Insira uma altura válida (em metros, ex: 1.75).')
			return false
		}

		return true
	}

	async function handleSubmit(e) {
		e.preventDefault()
		if (!validateStep2()) return

		setLoading(true)
		try {
			const res = await fetch('http://localhost:5000/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					password,
					name,
					age: Number(age),
					weight: Number(weight),
					height: Number(height.replace(',', '.'))
				})
			})

			const data = await res.json()

			if (!res.ok) {
				alert(data.message || 'Erro ao cadastrar.')
			} else {
				if (data.userId) localStorage.setItem('user_id', data.userId)
				alert('Cadastro concluído com sucesso!')
				// reset
				setEmail('')
				setPassword('')
				setName('')
				setAge('')
				setWeight('')
				setHeight('')
				setStep(1)
				onClose()
			}
		} catch (err) {
			console.error('Erro ao cadastrar:', err)
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
					<img className="logo-modal" src={Logo} alt="logo" />
					<h2 className="modal-title">Criar conta</h2>
				</div>

				{/* ETAPA 1 - email e senha */}
				{step === 1 && (
					<form className="form-modal" onSubmit={e => e.preventDefault()}>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Senha"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<div className="container-btn">
							<button
								className="btn-form"
								onClick={() => {
									if (validateStep1()) setStep(2)
								}}
							>
								Próximo
							</button>
						</div>
					</form>
				)}

				{/* ETAPA 2 - informações extras */}
				{step === 2 && (
					<form className="form-modal" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Nome completo"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input
							type="number"
							placeholder="Idade"
							value={age}
							onChange={e => setAge(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Altura (m) ex: 1.75"
							value={height}
							onChange={e => setHeight(e.target.value)}
						/>
						<input
							type="number"
							placeholder="Peso (kg)"
							value={weight}
							onChange={e => setWeight(e.target.value)}
							step="0.1"
						/>

						<div
							className="container-btn"
							style={{ display: 'flex', gap: '10px' }}
						>
							<button
								type="button"
								className="btn-form btn-voltar"
								onClick={() => setStep(1)}
							>
								Voltar
							</button>

							<button className="btn-form" type="submit" disabled={loading}>
								{loading ? 'Cadastrando...' : 'Concluir cadastro'}
							</button>
						</div>
					</form>
				)}

				{/* Rodapé (mantido) */}
				<div className="login-form-register">
					<p className="login-acounnt">
						Já tem conta? <a href="">Entre no Tracking Food</a>
					</p>
					<div className="linha">
						<span></span>
						<p>OU</p>
						<span></span>
					</div>
					<div className="container-btn">
						<button className="btn-form">Criar com Google</button>
					</div>
				</div>
			</div>
		</div>
	)
}
