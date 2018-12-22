import React from 'react'
import formatPoints from '../lib/formatPoints'

export default ({
	svgProps,
	top,
	left,
	bottom,
	right,
	center
}) => (
	<svg {...svgProps}>
		<polyline points={formatPoints([
			[left, bottom],
			[left, top],
			[right, bottom],
			[right, top],
		])} />
	</svg>
)
