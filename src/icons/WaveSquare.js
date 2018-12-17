import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, padding, extraVerticalPadding, curve, getRef }) => {
	const top = extraVerticalPadding + padding
	const bottom = SIZE - extraVerticalPadding - padding

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${SIZE} ${SIZE}`}
			width={size}
			height={size}
			stroke-linecap="round"
		>
			<polyline
				ref={getRef}
				points={[
					[padding, CENTER],
					[padding, top],
					[CENTER, top],
					[CENTER, bottom],
					[SIZE - padding, bottom],
					[SIZE - padding, CENTER],
				].map(point => point.join(',')).join(' ')}
				stroke="black"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	)
}
