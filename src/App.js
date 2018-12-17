import React, { useState, useCallback, useRef } from 'react'
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
const SIZE = 24
const styleIconWrapper = {
  // border: '2px dashed #444',
  display: 'inline-block',
  margin: 10
}

const App = () => {
  const padding = useInput('padding', 1, { min: 0, max: 6 })
  const size = useInput('size', 100, { min: 0, max: 400 })
  const extraVerticalPadding = useInput('extra vertical padding', 6, { min: 0, max: SIZE / 2 })
  const curve = useInput('curve', 3, { min: 0, max: SIZE })
  const adjustHeightForCurve = useInput('adjust height for curve', 1, { min: 0, max: 2, step: 0.01 })
  // const isVe = use('curve', 6, { min: 0, max: SIZE })
  const sine = useRef(null)
  const square = useRef(null)

  return (
    <div>
      {padding.input}
      {size.input}
      {extraVerticalPadding.input}
      {curve.input}
      {adjustHeightForCurve.input}
      <style>
        {`svg * {
          vector-effect: non-scaling-stroke;
        }`}
      </style>
      <div>
        Sine: {sine.current && sine.current.getBoundingClientRect().height}<br />
        Square: {square.current && square.current.getBoundingClientRect().height}
      </div>

      <div style={styleIconWrapper}>
        <WaveSine
          size={size.value}
          padding={padding.value}
          extraVerticalPadding={extraVerticalPadding.value}
          adjustHeightForCurve={adjustHeightForCurve.value}
          curve={curve.value}
          getRef={sine}
        />
      </div>
      <div style={styleIconWrapper}>
        <WaveSquare
          size={size.value}
          padding={padding.value}
          extraVerticalPadding={extraVerticalPadding.value}
          getRef={square}
        />
      </div>
      <div style={styleIconWrapper}>
        <WaveSawtooth
          size={size.value}
          padding={padding.value}
          extraVerticalPadding={extraVerticalPadding.value}
        />
      </div>
      <div style={styleIconWrapper}>
        <WaveTriangle
          size={size.value}
          padding={padding.value}
          extraVerticalPadding={extraVerticalPadding.value}
        />
      </div>
    </div>
  );
}

export default App;
