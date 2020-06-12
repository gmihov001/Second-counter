import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Seconds counter</h1>
			<div className="counter">
				<div>0</div>
				<div>0</div>
				<div>0</div>
				<div>0</div>
			</div>
		</div>
	);
}
