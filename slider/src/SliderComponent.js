import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './slider.css'

const SliderComponent = () => {
  const [sliderPos, setSliderPos] = useState(0);
  const [value, setValue] = useState(0)

  const handleChange = (e, newPos) => {
    setSliderPos(newPos)
  }

  // Triggered when user stops moving slider
  const handleChangeCommitted = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className='slider'>
      <Slider
        value={sliderPos}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
      />
      <p>Slider value: {value}</p>
    </Box>
  )
}

export default SliderComponent