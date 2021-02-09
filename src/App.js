import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import styles from "./App.module.css";
import Landing from "./pages/landing/landing";
import Featured from "./pages/featured/featured";
function App() {
	const [cartQuantity, setCartQuantity] = useState(0);

	return (
		<div className={styles.app}>
			<Nav cartQuantity={cartQuantity} />
			<Landing />
			<Featured />
		</div>
	);
}

export default App;
