import React from "react";
import PropTypes from "prop-types";
import "./TimerButton.css";

type timerButtonType = {
	buttonAction: Function;
	buttonValue: string;
};

const TimerButton: React.FC<timerButtonType> = ({
	buttonAction,
	buttonValue,
}) => (
	<div className="button-container">
		<button className="button-value" onClick={() => buttonAction()}>
			{buttonValue}
		</button>
	</div>
);

export default TimerButton;
