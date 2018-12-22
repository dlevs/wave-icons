import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({
	svgProps,
	top,
	left,
	bottom,
	right,
	center,
	getRef
}) => (
	<svg {...svgProps}>
		<polyline
			ref={getRef}
			points={[
				[left, CENTER],
				[left, top],
				[CENTER, top],
				[CENTER, bottom],
				[right, bottom],
				[right, CENTER],
			].map(point => point.join(',')).join(' ')}
		/>
	</svg>
)
