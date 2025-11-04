const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors()) // permite conexões do frontend
app.use(express.json()) // permite ler JSON do body

// Usuários temporários (array em memória)
const users = []

// Rota de cadastro
app.post('/register', (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(400).json({ message: 'Email e senha são obrigatórios' })
	}

	// verifica se já existe
	const userExists = users.find(u => u.email === email)
	if (userExists) {
		return res.status(400).json({ message: 'Usuário já cadastrado' })
	}

	// cadastra usuário
	const newUser = { id: Date.now().toString(), email, password }
	users.push(newUser)

	res
		.status(201)
		.json({ message: 'Usuário cadastrado com sucesso!', userId: newUser.id })
})

// Rota de login
app.post('/login', (req, res) => {
	const { email, password } = req.body

	const user = users.find(u => u.email === email && u.password === password)
	if (!user) {
		return res.status(400).json({ message: 'Email ou senha incorretos' })
	}

	res.json({ message: 'Login realizado com sucesso!', userId: user.id })
})

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`)
})
