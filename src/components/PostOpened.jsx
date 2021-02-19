import React from "react";
import { Context } from "./context.js"
import { useContext } from "react";
import { useParams} from "react-router-dom"

import "./styleComponents/PostOpened.css"

export default function PostOpened(props) {
    let { postId } = useParams();

    let {posts} = useContext(Context);

    let postOnId;
    posts.forEach(post => {
        if (post.id == postId) {
            postOnId = post;
        }
    });
  return (
    <section className="content">
		<div className="content__image image-container">
			<img src="" alt="" />
		</div>
		<div className="text-container">
			<div className="content__text">
				{postOnId.text}
			</div>
		</div>
		<div className="content__images image-container images">
			<div className="images__double">
				<div className="images__double-item">
					<img src="" alt="" />
				</div>
				<div className="images__double-item">
					<img src="" alt="" />
				</div>
			</div>
			<div className="images__big">
				<img src="" alt="" />
			</div>
		</div>
		<div className="text-container">
			
		</div>
		<div className="thoughts">
			<div className="text-container">
				<div className="thoughts__title">
					
				</div>
				<ul className="thoughts__list">
					<li className="thoughts__item">Hypnotherapy For Motivation Getting The Drive Back</li>
					<li className="thoughts__item">Roar With Confidence</li>
					<li className="thoughts__item">Motivational Sayings Ten Great Ones</li>
					<li className="thoughts__item">Harness The Power Of Words In Your Life</li>
				</ul>
			</div>
		</div>
		<div className="tags">
			<div className="text-container">
				<div className="tags__title">
					Tags
				</div>
				<div className="tags__set set">
					<div className="set__item">{postOnId.category}</div>
					
				</div>
			</div>
		</div>
	</section>
  );
}
