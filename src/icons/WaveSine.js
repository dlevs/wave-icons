import React from 'react'

const SIZE = 24
const CENTER = SIZE / 2

export default ({ size, padding, extraVerticalPadding, curve }) =>
  <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox={`0 0 ${SIZE} ${SIZE}`}
		width={size}
		height={size}
		stroke-linecap="round"
	>
		<path
			d={[
        // Start
        `M${padding} ${CENTER}`,

        // Left curve above center line
        `C ${curve + padding} ${extraVerticalPadding}, ${CENTER - curve} ${extraVerticalPadding},`,

        // Center
        `${CENTER} ${CENTER}`,

        // Right curve below center line
        `S ${SIZE - padding - curve} ${SIZE - extraVerticalPadding},`,

        // End
        `${SIZE - padding} ${CENTER}`
      ].join(' ')}
			stroke="black"
			stroke-width="2"
			fill="transparent"
		/>
	</svg>
