import React from "react";
import "./featured.css";
import featuredCard from "../../components/featuredCard/featuredCard";
import factionSkis from "../../assets/factionSkis.jpg";

const featured = () => {
	return (
		<div className='.featured'>
			<h2 className='featured__header'>Featured Products</h2>
			<div className='featuredCards'>
				<featuredCard featuredImage={{ factionSkis }} featuredBrand='Faction' />
			</div>
		</div>
	);
};

export default featured;
