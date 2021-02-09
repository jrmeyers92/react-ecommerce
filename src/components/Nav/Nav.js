import React from "react";
import Logo from "../../assets/Logo.png";
import styles from "./Nav.module.css";
import "./Nav.css";

const Nav = ({ cartQuantity }) => {
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
							<i class='fas fa-info-circle'></i>
						</li>
						<li className={styles.nav__top_item}>
							<i class='fas fa-user'></i>
						</li>
					</ul>
				</div>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							hardgoods
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							Mens Clothing
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							Womens Clothing
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							Accessories
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							Bike
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							Brands
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='#' className={styles.nav__link}>
							Sale
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
