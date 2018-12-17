import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, xPadding, yPadding, curve }) => {
	const top = yPadding
	const bottom = SIZE - yPadding
	const leftQuarter = ((CENTER - xPadding) / 2) + xPadding
	const rightQuarter = SIZE - leftQuarter

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${SIZE} ${SIZE}`}
			width={size}
			height={size}
			stroke-linecap="round"
		>
			<polyline
				points={[
					[xPadding, CENTER],
					[leftQuarter, top],
					[rightQuarter, bottom],
					[SIZE - xPadding, CENTER],
				].map(point => point.join(',')).join(' ')}
				stroke="black"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	)
}
