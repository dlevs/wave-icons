import React from 'react'

export default ({
	svgProps,
	top,
	left,
	bottom,
	right,
	center
}) => (
	<svg {...svgProps}>
		<polyline points={[
			[left, bottom],
			[left, top],
			[right, bottom],
			[right, top],
		].map(point => point.join(',')).join(' ')} />
	</svg>
)
