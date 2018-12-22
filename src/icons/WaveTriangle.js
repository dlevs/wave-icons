import React from 'react'
import formatPoints from '../lib/formatPoints'

export default ({
	svgProps,
	top,
	left,
	bottom,
	right,
	center
}) => {
	const leftQuarter = ((center - left) / 2) + left
	const rightQuarter = ((center - right) / 2) + right

	return (
		<svg {...svgProps}>
			<polyline points={formatPoints([
				[left, center],
				[leftQuarter, top],
				[rightQuarter, bottom],
				[right, center],
			])} />
		</svg>
	)
}
