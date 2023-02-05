import React, { useState } from 'react'
import { imageData } from './CarouselData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length


    return (
        <div>
            <FaArrowAltCircleRight className='left-arrow' />
            <FaArrowAltCircleLeft className='right-arrow' />
            {imageData.map((slide, index) => {
                return (
                    <img src={slide.imageUrl} alt='placeholder image' className='image' />
                )
            })}
        </div>
    )
}

export default Carousel
