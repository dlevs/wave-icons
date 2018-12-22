import React from 'react'
import formatPoints from '../lib/formatPoints'

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
			points={formatPoints([
				[left, center],
				[left, top],
				[center, top],
				[center, bottom],
				[right, bottom],
				[right, center],
			])}
		/>
	</svg>
)
