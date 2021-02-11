import React from "react";
import "./featured.css";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import FactionPic from "../../assets/factionSkis.jpg";

const featured = () => {
	return (
		<div className='.featured'>
			<h2 className='featured__header'>Featured Products</h2>
			<div className='featuredCards'>
				<FeaturedCard
					brand='Faction'
					model='Prodigy 2021'
					price='$699.99'
					pic={FactionPic}
				/>
				<FeaturedCard
					brand='Faction'
					model='Prodigy 2021'
					price='$699.99'
					pic={FactionPic}
				/>
				<FeaturedCard
					brand='Faction'
					model='Prodigy 2021'
					price='$699.99'
					pic={FactionPic}
				/>
				<FeaturedCard
					brand='Faction'
					model='Prodigy 2021'
					price='$699.99'
					pic={FactionPic}
				/>
				<FeaturedCard
					brand='Faction'
					model='Prodigy 2021'
					price='$699.99'
					pic={FactionPic}
				/>
				<FeaturedCard
					brand='Faction'
					model='Prodigy 2021'
					price='$699.99'
					pic={FactionPic}
				/>
			</div>
		</div>
	);
};

export default featured;
