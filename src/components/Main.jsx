import React from 'react'
import './styleComponents/Main.css'

export default function Main(){
    
    return(
    <main className="main">
		<div className="view">
			<div className="main-container">
				<div className="view__row">


					<div className="view__text">
						<div className="view__text-title">
							Home Page
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="content">
			<div className="main-container">
				<div className="content__row">
					<section className="content__section">
						<h1>New Posts</h1>

								
										<div className="content__article article">
											<div className="article__image" >
												
													<img  src="" alt="" />
												
											</div>
											<div className="article__title">
												<a href=""></a>
											</div>
											<div className="article__info info">
												<div className="info__user">
													<div className="info__user-avatar">

														<img  src="img/avatar_dafault.png" alt="" />
													</div>
													<div className="info__user-name"><a href="#"> </a></div>
												</div>
												<div className="info__category">
												
													<a href="categorie.php?c=<?php echo $art['categorie'];?>">
												
													</a>
												</div>
												<div className="info__time">
												
												</div>
												<div className="info__views">
												
												</div>
											</div>
										</div>
									
											
											
										
									
									




							
								
						 <div className="content__article article">
							<div className="article__image">
								<a href="#">
									<img src="" alt="" />
								</a>
							</div>
							<div className="article__title">
								<a href="#">Enlightenment Is Not Just One State</a>
							</div>
							<div className="article__info info">
								<div className="info__user">
									<div className="info__user-avatar">
										<img src="" alt="" />
									</div>
									<div className="info__user-name"><a href="#">Mabelle Fox</a></div>
								</div>
								<div className="info__category">
									<a href="#">Art And Illustration</a>
								</div>
								<div className="info__time">
									2 hours ago
								</div>
							</div>
						</div>
						<div className="content__article article">
							<div className="article__image">
								<a href="#">
									<img src="" alt="" />
								</a>
							</div>
							<div className="article__title">
								<a href="#">Secrets of hallway design</a>
							</div>
							<div className="article__info info">
								<div className="info__user">
									<div className="info__user-avatar">
										<img src="" alt="" />
									</div>
									<div className="info__user-name"><a href="#">Christine Kelly</a></div>
								</div>
								<div className="info__category">
									<a href="#">Graphic Design</a>
								</div>
								<div className="info__time">
									08:02am
								</div>
							</div> 
						</div> 
					</section>
					<aside className="content__aside">
						<div className="content__aside-item popular">
							<div className="popular__title aside-title">
								most popular
							</div>

							

							
								
							
								<div className="popular__article">
									<div  className="popular__arcticle-image">
									<a href="#">
										<img  src="" alt="" /> 
									</a>
								</div>
								<div className="popular__arcticle-text aside-text">
									<div className="aside-text__subtitle">
										<a href=""></a>
									</div>
									<div className="aside-text__title">
										<a href=""></a>
									</div>
									<div className="aside-text__views"> </div>
								</div>
							</div>
							
									
									
								 
							
							
							
						</div>

						

						<div className="content__aside-item tweet">
							<div className="popular__title aside-title">
								Latest tweet
							</div>
							<div className="tweet__account account"><a href="#">@HelloBloger</a></div>
							<div className="tweet__text">
								The best way to start Friday is... to read Yomac blog! Check out our latest articles —
								"Fashion…
								<a href="#">https://www.instagram.com/p/Bafe5G4/</a>
							</div>
						</div>
						<div className="content__aside-item newsletter">
							<div className="popular__title aside-title">
								Newsletter
							</div>
							<div className="newsletter__text">
								Enter your email address to receive all news, updates on new arrivals, special offers
								and other information.
							</div>
							<form action="" className="newsletter__form">
								<input type="text" className="newsletter__form-input" placeholder="Your e-mail" />
								<button className="newsletter__form-btn">subscribe</button>
							</form>
						</div>
						<div className="content__aside-item instagram">
							<div className="popular__title aside-title">
								instagram
							</div>
							<div className="instagram__account account"><a href="#">#Bloger</a></div>
							<div className="instagram__photos">
								<div className="instagram__photos-photo">
									<img src="" alt="" />
								</div>
								<div className="instagram__photos-photo">
									<img src="" alt="" />
								</div>
								<div className="instagram__photos-photo">
									<img src="" alt="" />
								</div>
								<div className="instagram__photos-photo">
									<img src="" alt="" />
								</div>
								<div className="instagram__photos-photo">
									<img src="" alt="" />
								</div>
								<div className="instagram__photos-photo">
									<img src="" alt="" />
								</div>
							</div>
						</div>
						<div className="content__aside-item tags">
							<div className="popular__title aside-title">
								popular Tags
							</div>
							<div className="tags__items">
								<div className="tags__items-tag">
									<a href="categorie.php?c=Architecture">Architecture</a>
								</div>
								<div className="tags__items-tag">
									<a href="categorie.php?c=Graphing disign">Graphing disign</a>
								</div>
								<div className="tags__items-tag">
									<a href="categorie.php?c=Art and illustration">Art And illustration</a>
								</div>
								
								<div className="tags__items-tag">
									<a href="categorie.php?c=Fashion">Fashion</a>
								</div>
								<div className="tags__items-tag">
									<a href="categorie.php?c=Photography">Photography</a>
								</div>
								
							</div>
						</div>
					</aside>
				</div>
				
				
				
					
			</div>
			
		</div>
		
	</main>
	
    )
}
