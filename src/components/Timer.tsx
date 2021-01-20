import React, { useState, useEffect } from "react";
import "./Timer.css";
import TimerButton from "./TimerButton/TimerButton";

const Timer = () => {
	const [minutes, setMinutes] = useState<number>(25);
	const [seconds, setSeconds] = useState<number>(0);
	const [isOn, setIsOn] = useState<boolean>(false);

	let myInterval: any;

	const startTimer = () => {
		if (isOn) {
			return;
		}
		myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds((seconds) => seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		setIsOn(true);
	};

	const stopTimer = () => {
		clearInterval(myInterval);
		setIsOn(false);
	};

	const resetTimer = () => {
		stopTimer();
		setMinutes(25);
		setSeconds(0);
	};

	return (
		<div className="timer-container">
			<div className="time-display">
				{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
			</div>
			<div className="timer-button-container">
				<TimerButton buttonAction={startTimer} buttonValue={"Start"} />
				<TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
				<TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
			</div>
		</div>
	);
};

export default Timer;
