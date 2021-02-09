import React from 'react'
import './styleComponents/HeaderNavMenu.css'

export default function HeaderNavMenu(){
    
    return(
        <nav className="view__menu">
						<ul className="view__menu-list">
							<li className="view__menu-item">
								<a href="categorie.php?c=Art and illustration">Art And Illustration</a>
							</li>
							<li className="view__menu-item">
								<a href="categorie.php?c=Architecture">Architecture</a>
								<ul className="view__menu-sublist">
									<li className="view__menu-subitem"><a href="#">Building design</a></li>
									<li className="view__menu-subitem"><a href="#">Urban planning</a></li>
									<li className="view__menu-subitem view__r">
										<a href="#">Landscape</a>
										<ul className="view__menu-double-sublist">
											<li className="view__menu-double-subitem"><a href="#">English style</a></li>
											<li className="view__menu-double-subitem"><a href="#">Country style</a></li>
											<li className="view__menu-double-subitem"><a href="#">Modern style</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="view__menu-item">
								<a href="categorie.php?c=Fashion">Fashion</a>
							</li>
							<li className="view__menu-item">
								<a href="categorie.php?c=Furniture">Furniture</a>
							</li>
							<li className="view__menu-item">
								<a href="categorie.php?c=Graphing disign">Graphic Design</a>
							</li>
							<li className="view__menu-item">
								<a href="categorie.php?c=Photography">Photography</a>
								<ul className="view__menu-sublist">
									<li className="view__menu-subitem"><a href="#">Conceptual</a></li>
									<li className="view__menu-subitem view__r"><a href="#">Tourist</a></li>
									<li className="view__menu-subitem"><a href="#">Wedding</a></li>
								</ul>
							</li>
							<li className="view__menu-item">
								<a href="about.php">About</a>
							</li>
							<li className="view__menu-item">
								<a href="#">Contacts</a>
							</li>
						</ul>
					</nav>
	
    )
}