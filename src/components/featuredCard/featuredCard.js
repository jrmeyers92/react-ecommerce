import React from "react";

const featuredCard = (props) => {
	return (
		<div>
			<img src={props.featuredImage} alt='featured product' />
			<div>
				<h5>{props.featuredBrand}</h5>
				<p>{props.featuredModel}</p>
				<span>${props.featuredPrice}</span>
			</div>
		</div>
	);
};

export default featuredCard;
