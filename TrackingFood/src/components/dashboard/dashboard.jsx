import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Dashboard() {
	const navigate = useNavigate()

	useEffect(() => {
		const userId = localStorage.getItem('user_id')
		if (!userId) {
			alert('Você precisa estar logado para acessar o Dashboard.')
			navigate('/')
		}
	}, [navigate])

	function handleLogout() {
		localStorage.removeItem('user_id')
		navigate('/')
	}

	const userId = localStorage.getItem('user_id')

	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>Bem-vindo ao Dashboard!</h1>
			<p>
				Seu ID de usuário é: <b>{userId}</b>
			</p>
			<button
				onClick={handleLogout}
				style={{
					marginTop: '20px',
					padding: '10px 20px',
					background: '#e74c3c',
					color: '#fff',
					border: 'none',
					borderRadius: '8px',
					cursor: 'pointer'
				}}
			>
				Sair
			</button>
		</div>
	)
}
