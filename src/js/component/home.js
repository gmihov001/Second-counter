import React from "react";

//create your first component
export function Counter() {
	return (
		<div className="text-center mt-5">
			<h1>Seconds counter</h1>
			<div className="counter">
				<div className="one">0</div>
				<div className="two">0</div>
				<div className="three">0</div>
				<div className="four">0</div>
			</div>
		</div>
	);
}
