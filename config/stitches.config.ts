import { createStitches, globalCss } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      blue: '#240668',
      pink: '#DC28A3',
      purple700: '#AC2682',
      purple600: '#B660B5',
      purple500: '#BEA4FF',
      purple400: '#EEE7FF',
      yellow: '#FFEDB3',
      error: '#FF4A4A',
      confirm: '#27AE60',
      gray: '#A6A6A6',
      black: '#000000',
      white: '#FFFFFF',
    },
    fonts: {
      FCSubjectRounded: "'FCSubjectRounded', sans-serif",
    },
  },
  media: {
    xs: '(max-width: 360px)',
    sm: '(max-width: 496px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 960px)',
    xl: '(max-width: 1280px)',
  },
})

globalCss({
  '@font-face': [
    {
      fontFamily: 'FCSubjectRounded',
      src: 'url("../fonts/FC Subject Rounded Regular [Non-commercial use].otf") format("opentype")',
    },
    {
      fontFamily: 'FCSubjectRounded',
      src: 'url("../fonts/FC Subject Rounded Bold [Non-commercial use].otf") format("opentype")',
      fontWeight: 'bold',
    },
  ],
})()
