import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Counter(props) {
	return (
		<div className="text-center mt-5">
			<h1>Seconds counter</h1>
			<div className="counter">
                <div className="one">{props.digitOne}</div>
				<div className="two">{props.digitTwo}</div>
				<div className="three">{props.digitThree}</div>
				<div className="four">{props.digitFour}</div>
			</div>
		</div>
	);
}

Counter.protoTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
}
