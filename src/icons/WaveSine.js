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
	getRef,
	curve,
	adjustHeightForCurve
}) => (
	<svg {...svgProps}>
		<path
			ref={getRef}
			d={[
				// Start
				`M${left} ${CENTER}`,

				// Left curve above center line
				`C ${left + curve} ${top}, ${CENTER - curve} ${top},`,

				// Center
				`${CENTER} ${CENTER}`,

				// Right curve below center line
				`S ${right - curve} ${bottom},`,

				// End
				`${right} ${CENTER}`
			].join(' ')}
		/>
	</svg>
)
