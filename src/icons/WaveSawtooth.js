import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, xPadding, yPadding, curve }) => {
	const top = yPadding
	const bottom = SIZE - yPadding

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
					[xPadding, bottom],
					[xPadding, top],
					[SIZE - xPadding, bottom],
					[SIZE - xPadding, top],
				].map(point => point.join(',')).join(' ')}
				stroke="black"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	)
}
