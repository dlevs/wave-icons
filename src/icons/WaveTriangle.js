import React from 'react'

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
			<polyline points={[
				[left, center],
				[leftQuarter, top],
				[rightQuarter, bottom],
				[right, center],
			].map(point => point.join(',')).join(' ')} />
		</svg>
	)
}
