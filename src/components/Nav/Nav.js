import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import styles from "./Nav.module.css";
import "./Nav.css";

const Nav = ({ cartQuantity }) => {
	const [itemHovered, setItemHovered] = useState(false);

	const mouseIn = (e) => {
		const item = e.target;
		console.log(item);
		setItemHovered(true);
		item.classList.add("red");
	};

	const mouseOut = (e) => {
		setItemHovered(false);
		e.target.classList.remove("red");
	};

	return (
		<nav className={styles.nav}>
			<img src={Logo} alt='Logo' className={styles.nav__logo} />
			<div className={styles.nav__right}>
				<div className={styles.nav__top}>
					<ul className={styles.nav__top_list}>
						<li className={styles.nav__top_item}>
							<span className={styles.phoneNumber}>970.547.4417</span>
						</li>
						<li className={styles.nav__top_item}>
							<i className='fas fa-shopping-cart'> </i>
							<span className={styles.cart}>{cartQuantity} </span>
						</li>
						<li className={styles.nav__top_item}>
							<i className='fas fa-info-circle'></i>
						</li>
						<li className={styles.nav__top_item}>
							<i className='fas fa-user'></i>
						</li>
					</ul>
				</div>
				<ul className={styles.nav__list} id='nav__list'>
					<li className={styles.nav__item}>
						<a
							href='#'
							className={styles.nav__link}
							onMouseEnter={mouseIn}
							onMouseLeave={mouseOut}>
							hardgoods
						</a>
					</li>
					<li className={styles.nav__item}>
						<a
							href='#'
							className={styles.nav__link}
							onMouseEnter={mouseIn}
							onMouseLeave={mouseOut}>
							Bikes
						</a>
					</li>
					<li className={styles.nav__item}>
						<a
							href='#'
							className={styles.nav__link}
							onMouseEnter={mouseIn}
							onMouseLeave={mouseOut}>
							Brands
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
