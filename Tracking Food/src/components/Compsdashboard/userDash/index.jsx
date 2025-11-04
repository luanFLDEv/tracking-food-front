import React from 'react'
import './style.css'
export default function CardUsuario({
	nome,
	idade,
	peso,
	atividade,
	foto,
	altura
}) {
	return (
		<div className="user">
			{/* Foto do usuário */}
			<img
				src={foto || 'https://via.placeholder.com/100'}
				alt="Foto do usuário"
				className=" img-user w-24 h-24 rounded-full object-cover mb-3 border-4 border-green-200"
			/>
			{/* Nome */}
			<h2 className=" name-user text-lg font-bold text-gray-800">{nome}</h2>
			{/* Idade,peso e altura */}
			<div className=" dados-user flex justify-center gap-4 mt-2 text-gray-600 text-sm">
				<p>
					<span className="font-semibold text-gray-700">Idade:</span> {idade}{' '}
					anos
				</p>
				<p>
					<span className="font-semibold text-gray-700">Peso:</span> {peso} kg
				</p>
				<p>
					<span className="font-semibold text-gray-700">Altura:</span> {altura}{' '}
					m
				</p>
			</div>

			{/* Atividade física */}
			<div
				className={`mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
					atividade === 'Sim'
						? 'bg-green-100 text-green-600'
						: 'bg-red-100 text-red-600'
				}`}
			>
				{atividade === 'Sim'
					? 'Pratica atividade física'
					: 'Não pratica atividade'}
			</div>
		</div>
	)
}
