/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styleComponents/Footer.css'

export default function Footer(){
    
    return(
        <footer className="footer">
		<div className="main-container">
			<div className="footer__row">
				<div className="footer__about">
					<div className="footer__logo">
						<a href="index.php">bloger</a>
					</div>
					<div className="footer__text">
						Perfectly to any kind of news and magazine blogs. Designed responsive and ready for retina.
					</div>
				</div>
				<div className="footer__menu">
					<ul className="footer__list">
						<li className="footer__menu-item"><a href="#">Home</a></li>
						<li className="footer__menu-item"><a href="#">About</a></li>
						<li className="footer__menu-item"><a href="#">Contact</a></li>
					</ul>
					<ul className="footer__list">
						<li className="footer__menu-item"><a href="categorie.php?c=Art and illustration">Art And Illustration</a></li>
						<li className="footer__menu-item"><a href="categorie.php?c=Architecture">Architecture</a></li>
						<li className="footer__menu-item"><a href="categorie.php?c=Fashion">Fashion</a></li>
						<li className="footer__menu-item"><a href="categorie.php?c=Photography">Furniture</a></li>
						<li className="footer__menu-item"><a href="categorie.php?c=Graphing disign">Graphic Design</a></li>
						<li className="footer__menu-item"><a href="categorie.php?c=Photography">Photography</a></li>
					</ul>
				</div>
				<div className="footer__social">
					<div className="footer__social-title">
						We are social
					</div>
					<div className="footer__social-icons">
						<a href="#" className="footer__social-icons-icon">
							<img src="img/facebook-w.png" alt="" />
						</a>
						<a href="#" className="footer__social-icons-icon">
							<img src="img/instagram-w.png" alt="" />
						</a>
						<a href="#" className="footer__social-icons-icon">
							<img src="img/twitter-w.png" alt="" />
						</a>
						<a href="#" className="footer__social-icons-icon">
							<img src="img/pinterest-w.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="footer__top">
			
			<img src="img/up_icon.png" alt="" />
			<div className="footer__top-text"><a href="#">page top</a></div>
		</div>
	</footer>
	
    )
}