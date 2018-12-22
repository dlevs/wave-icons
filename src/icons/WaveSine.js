import React from 'react'

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
}) => {
	top += adjustHeightForCurve
	bottom -= adjustHeightForCurve

	return (
		<svg {...svgProps}>
			<path
				ref={getRef}
				d={[
					// Start
					`M${left} ${center}`,

					// Left curve above center line
					`C ${left + curve} ${top}, ${center - curve} ${top},`,

					// Center
					`${center} ${center}`,

					// Right curve below center line
					`S ${right - curve} ${bottom},`,

					// End
					`${right} ${center}`
				].join(' ')}
			/>
		</svg>
	)
}
