import React from "react";
import "./FeaturedCard.css";

const featuredCard = (props) => {
	return (
		<div className='featuredCard'>
			<img src={props.pic} className='featuredCard__image' />
			<div className='featuredCard__text'>
				<span className='featuredCard__brand'>{props.brand}</span>
				<span className='featuredCard__model'>{props.model}</span>
				<span className='featuredCard__price'>{props.price}</span>
			</div>
		</div>
	);
};

export default featuredCard;
