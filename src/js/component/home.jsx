import React, { useState } from "react";

//create your first component
const TrafficLight = (props) => {
	const [color, setColor] = useState("red");
	return (
		<>
			<div className="bar"></div>
			<div className="box">
				<div
					onClick={() => setColor("red")}
					className={color === "red" ? "red glow" : "red"}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						color === "yellow" ? "yellow glow" : "yellow"
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						color === "green" ? "green glow" : "green"
					}></div>
			</div>
		</>
	);
};

export default TrafficLight;
