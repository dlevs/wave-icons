import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, xPadding, yPadding, curve, adjustHeightForCurve, getRef }) => {
	const top = yPadding * adjustHeightForCurve
	const bottom = SIZE - top

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${SIZE} ${SIZE}`}
			width={size}
			height={size}
			stroke-linecap="round"
		>
			<path
				ref={getRef}
				d={[
					// Start
					`M${xPadding} ${CENTER}`,

					// Left curve above center line
					`C ${curve + xPadding} ${top}, ${CENTER - curve} ${top},`,

					// Center
					`${CENTER} ${CENTER}`,

					// Right curve below center line
					`S ${SIZE - xPadding - curve} ${bottom},`,

					// End
					`${SIZE - xPadding} ${CENTER}`
				].join(' ')}
				stroke="black"
				stroke-width="2"
				fill="transparent"
			/>
		</svg>
	)
}
