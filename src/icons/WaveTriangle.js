import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, padding, lineHeight, curve }) => {
	const top = lineHeight + padding
	const bottom = SIZE - lineHeight - padding
	const leftQuarter = ((CENTER - padding) / 2) + padding
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
					[padding, CENTER],
					[leftQuarter, top],
					[rightQuarter, bottom],
					[SIZE - padding, CENTER],
				].map(point => point.join(',')).join(' ')}
				stroke="black"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	)
}
