import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import styles from "./App.module.css";
function App() {
	const [cartQuantity, setCartQuantity] = useState(0);

	return (
		<div className={styles.app}>
			<Nav cartQuantity={cartQuantity} />
		</div>
	);
}

export default App;
