import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("green");
	return (
		<div className="text-center mt-5">
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={`red $(color === === "red" ? "light" : "") `}
					onClick={() => setColor("red")}></div>
				<div
					className={`yellow $(color === === "yellow" ? "light" : "") `}
					onClick={() => setColor("yellow")}></div>
				<div
					className={`green $(color === === "green" ? "light" : "") `}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
