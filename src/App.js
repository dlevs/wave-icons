import React, { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'
import DownloadSVGChildren from './components/DownloadSVGChildren'
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

const App = () => {
  const [heightText, setHeightText] = useState('')
  const viewBoxSize = useInput('viewBox Size', 24, { min: 0, max: 400 })
  const size = useInput('size', 100, { min: 0, max: 400 })
  const xPadding = useInput('xPadding', 1, { min: 0, max: size.value / 2 })
  const yPadding = useInput('yPadding', 6, { min: 0, max: size.value / 2 })
  const curve = useInput('curve', 3, { min: 0, max: 10, step: 0.01 })
  const adjustHeightForCurve = useInput('adjust height for curve', 0, { min: -6, max: 6, step: 0.01 })
  const sine = useRef(null)
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

  useEffect(() => {
    setHeightText(`
Sine shape height:   ${sine.current.getBoundingClientRect().height}
Square shape height: ${square.current.getBoundingClientRect().height}
    `)
  })

  return (
    <div>
      <p>Adjust the SVG settings here. Then click the individual SVG icon to download it.</p>
      {xPadding.input}
      {yPadding.input}
      {size.input}
      {curve.input}

      <p>
        I can't be bothered to work out the maths to have the sine wave be the
        same height as the other icons.<br/>
        Just adjust the range input below until they are close.
      </p>
      <pre>{heightText}</pre>
      {adjustHeightForCurve.input}

      <DownloadSVGChildren filename='sine.svg' className='svgWrapper'>
        <WaveSine
          {...sharedProps}
          adjustHeightForCurve={adjustHeightForCurve.value}
          curve={curve.value}
          getRef={sine}
        />
      </DownloadSVGChildren>
      <DownloadSVGChildren filename='square.svg' className='svgWrapper'>
        <WaveSquare
          {...sharedProps}
          getRef={square}
        />
      </DownloadSVGChildren>
      <DownloadSVGChildren filename='sawtooth.svg' className='svgWrapper'>
        <WaveSawtooth {...sharedProps} />
      </DownloadSVGChildren>
      <DownloadSVGChildren filename='triangle.svg' className='svgWrapper'>
        <WaveTriangle {...sharedProps} />
      </DownloadSVGChildren>
    </div>
  );
}

export default App;
