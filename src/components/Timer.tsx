import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";
import TimerButton from "./TimerButton/TimerButton";

const Timer = () => {
	const [minutes, setMinutes] = useState<number>(25);
	const [seconds, setSeconds] = useState<number>(0);
	const [isOn, setIsOn] = useState<boolean>(false);

	let myInterval = useRef<any>(null);

	useEffect(() => {
		if (isOn) {
			myInterval.current = setTimeout(() => {
				if (seconds > 0) {
					setSeconds((seconds) => seconds - 1);
				}
				if (seconds === 0) {
					if (minutes === 0) {
						clearTimeout(myInterval.current);
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				}
			}, 1000);
		}
	}, [isOn, seconds, minutes]);

	const startTimer = () => {
		setIsOn(true);
		setMinutes(minutes - 1);
		setSeconds(59);
	};

	const stopTimer = () => {
		clearTimeout(myInterval.current);
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
