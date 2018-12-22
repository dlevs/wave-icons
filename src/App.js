import React, { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'
import WaveSine from './icons/WaveSine'
import WaveSquare from './icons/WaveSquare'
import WaveSawtooth from './icons/WaveSawtooth'
import WaveTriangle from './icons/WaveTriangle'

const useInput = (name, initialValue, inputProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback(({ target }) => {
    setValue(Number(target.value))
  })

  return {
    value,
    input: (
      <div>
        <label>
          {`${name} (${value})`}<br />
          <input
            type='range'
            value={value}
            onChange={onChange}
            {...inputProps}
          />
        </label>
      </div>
    )
  }
}
// TODO: Move to variables file
const styleIconWrapper = {
  // border: '2px dashed #444',
  display: 'inline-block',
  margin: 10
}

const DownloadSVGChildren = ({ children, filename }) => {
  const [href, setHref] = useState(null)
  const link = useRef(null)

  useEffect(() => {
    setHref(`data:image/svg+xml;utf8,${link.current.innerHTML}`)
  }, [children])

  return (
    <a ref={link} href={href} download={filename}>
      {children}
    </a>
  )
}

const App = () => {
  const viewBoxSize = useInput('viewBox Size', 24, { min: 0, max: 400 })
  const size = useInput('size', 100, { min: 0, max: 400 })
  const xPadding = useInput('xPadding', 1, { min: 0, max: size.value / 2 })
  const yPadding = useInput('yPadding', 6, { min: 0, max: size.value / 2 })
  const curve = useInput('curve', 3, { min: 0, max: 10 })
  const adjustHeightForCurve = useInput('adjust height for curve', 0, { min: -3, max: 3, step: 0.01 })
  const sine = useRef(null)
  const sineLink = useRef(null)
  const square = useRef(null)
  const sharedProps = {
    left: xPadding.value,
    right: viewBoxSize.value - xPadding.value,
    top: yPadding.value,
    bottom: viewBoxSize.value - yPadding.value,
    center: viewBoxSize.value / 2,

    svgProps: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: `0 0 ${viewBoxSize.value} ${viewBoxSize.value}`,
      width: size.value,
      height: size.value,
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: 2,
      fill: 'none'
    }
  }

  return (
    <div>
      {xPadding.input}
      {yPadding.input}
      {size.input}
      {curve.input}
      {adjustHeightForCurve.input}
      <div>
        Sine: {sine.current && sine.current.getBoundingClientRect().height}<br />
        Square: {square.current && square.current.getBoundingClientRect().height}
      </div>

      <div style={styleIconWrapper}>
        <DownloadSVGChildren filename='sine.svg'>
          <WaveSine
            {...sharedProps}
            adjustHeightForCurve={adjustHeightForCurve.value}
            curve={curve.value}
            getRef={sine}
          />
        </DownloadSVGChildren>
      </div>
      <div style={styleIconWrapper}>
        <DownloadSVGChildren filename='square.svg'>
          <WaveSquare
            {...sharedProps}
            getRef={square}
          />
        </DownloadSVGChildren>
      </div>
      <div style={styleIconWrapper}>
        <DownloadSVGChildren filename='sawtooth.svg'>
          <WaveSawtooth {...sharedProps} />
        </DownloadSVGChildren>
      </div>
      <div style={styleIconWrapper}>
        <DownloadSVGChildren filename='triangle.svg'>
          <WaveTriangle {...sharedProps} />
        </DownloadSVGChildren>
      </div>
    </div>
  );
}

export default App;
