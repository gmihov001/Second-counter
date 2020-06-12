//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(function() {
	const one = Math.floor(counter / 1);
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	counter++;

	ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));
}, 1000);
