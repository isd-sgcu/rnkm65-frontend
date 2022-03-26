import React from 'react'

import { ImageContainer } from '../../styled'
import { PlaceholderProps } from './types'

const Placeholder = (props: PlaceholderProps) => {
  const { color, backgroundColor } = props
  return (
    <ImageContainer>
      <svg
        width="120"
        height="160"
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="160" rx="5" fill={backgroundColor} />
        <g mask="url(#mask0_267_2277)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120 131V171H104.722C93.7357 183.275 77.77 191 60 191C42.23 191 26.2643 183.275 15.2779 171H0V131V128H0.073695C1.63679 96.2567 27.8689 71 60 71C92.1311 71 118.363 96.2567 119.926 128H120V131Z"
            fill={color}
          />
          <circle cx="58.5" cy="40.5" r="22.5" fill={color} />
        </g>
      </svg>
    </ImageContainer>
  )
}

export default Placeholder
