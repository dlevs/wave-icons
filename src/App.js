import React, { useState, useCallback } from 'react'
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
  const lineHeight = useInput('line height', 6, { min: 0, max: SIZE / 2 })
  const curve = useInput('curve', 3, { min: 0, max: SIZE })
  // const curve = useInput('curve', 3, { min: 0, max: SIZE })
  // const isVe = use('curve', 6, { min: 0, max: SIZE })

  return (
    <div>
      {padding.input}
      {size.input}
      {lineHeight.input}
      {curve.input}
      <style>
        {`svg * {
          vector-effect: non-scaling-stroke;
        }`}
      </style>
      <div style={styleIconWrapper}>
        <WaveSine
          size={size.value}
          padding={padding.value}
          lineHeight={lineHeight.value}
          curve={curve.value}
        />
      </div>
      <div style={styleIconWrapper}>
        <WaveSquare
          size={size.value}
          padding={padding.value}
          lineHeight={lineHeight.value}
        />
      </div>
      <div style={styleIconWrapper}>
        <WaveSawtooth
          size={size.value}
          padding={padding.value}
          lineHeight={lineHeight.value}
        />
      </div>
      <div style={styleIconWrapper}>
        <WaveTriangle
          size={size.value}
          padding={padding.value}
          lineHeight={lineHeight.value}
        />
      </div>
    </div>
  );
}

export default App;
