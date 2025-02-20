"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomSlider({ selectedCurrency, setMaxSalary, maxSalary }) {
	const [value, setValue] = useState(50);
	const sliderContainer = useRef(null);

	const handleSliderChange = (e) => {
		if (sliderContainer.current) {
			const tempX = sliderContainer.current.getBoundingClientRect().x;
			const newValue = e.clientX - tempX;
			setValue(Math.min(Math.max(newValue, 0), sliderContainer.current.getBoundingClientRect().width));
		}
	};

	useEffect(() => {
		setMaxSalary((value * selectedCurrency.maxSalary) / 100);
	}, [selectedCurrency]);

	useEffect(() => {
		setMaxSalary((value * selectedCurrency.maxSalary) / 100);
	}, [value]);

	return (
		<div
			ref={sliderContainer}
			onClick={(e) => {
				handleSliderChange(e);
			}}
			className="relative w-full h-2 bg-gray-200 rounded-full cursor-pointer"
		>
			{/* this is the line where the slider will be */}
			<div
				className="relative w-full h-2 bg-violet-500 rounded-full flex items-center justify-end"
				style={{ width: `${value}px` }}
			>
				{/* div below is for the slider handle */}
				<div className="absolute h-[20px] w-[20px] -translate-x-[10px] rounded-full bg-white border-2 border-violet-500 left-0"></div>
				<div
					className="absolute h-[20px] w-[20px] rounded-full cursor-pointer bg-white border-2 border-violet-500"
					style={{ left: `${value - 10}px` }}
					onMouseDown={(e) => {
						e.preventDefault();
						// Start dragging slider
						const moveHandler = (moveEvent) => handleSliderChange(moveEvent);
						const stopHandler = () => {
							window.removeEventListener("mousemove", moveHandler);
							window.removeEventListener("mouseup", stopHandler);
						};
						window.addEventListener("mousemove", moveHandler);
						window.addEventListener("mouseup", stopHandler);
					}}
				></div>
			</div>
		</div>
	);
}
