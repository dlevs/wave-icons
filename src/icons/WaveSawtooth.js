import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, padding, lineHeight, curve }) => {
	const top = lineHeight + padding
	const bottom = SIZE - lineHeight - padding

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
					[padding, bottom],
					[padding, top],
					[SIZE - padding, bottom],
					[SIZE - padding, top],
				].map(point => point.join(',')).join(' ')}
				stroke="black"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	)
}
