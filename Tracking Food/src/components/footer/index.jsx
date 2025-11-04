import './style.css'
export default function Footer() {
	return (
		<div>
			<div className="footer-container">
				<h2 className="footer-title">
					{' '}
					Pronto para transformar sua alimentação?
				</h2>
				<p className="footer-paragraph">
					Junte-se a milhares de pessoas que já estão cuidando melhor da saúde
					com o Tracking Food
				</p>
				<button className="btn-header btn-footer">Começar Gratuitamente</button>
			</div>
			<footer>
				<div className="footer-marca">
					<h2>
						{' '}
						<i class="bi bi-apple footer__icon"></i>Tracking Food
					</h2>
					<p>Cuide da sua alimentação de forma inteligente e simples.</p>
				</div>
				<div className="footer-element">
					<h2 className="footer-h2">Produto</h2>
					<div className="footer-element-Link">
						<a className="footer-a" href="">
							Recursos
						</a>
						<a className="footer-a" href="">
							Preços
						</a>
					</div>
				</div>
				<div className="footer-element">
					<h2 className="footer-h2">Produto</h2>
					<div className="footer-element-Link">
						<a className="footer-a" href="">
							Central de ajuda
						</a>
						<a className="footer-a" href="">
							Contato
						</a>
						<a className="footer-a" href="">
							Status
						</a>
					</div>
				</div>
				<div className="footer-element">
					<h2 className="footer-h2">Produto</h2>
					<div className="footer-element-Link">
						<a className="footer-a" href="">
							Privacidade
						</a>
						<a className="footer-a" href="">
							Termos
						</a>
						<a className="footer-a" href="">
							Cookies
						</a>
					</div>
				</div>
			</footer>
			<h2 className="copyright">
				© 2024 Tracking Food. Todos os direitos reservados.
			</h2>
		</div>
	)
}
