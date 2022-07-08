import { createStitches } from '@stitches/react'

export const { styled, getCssText, keyframes, globalCss, css } = createStitches(
  {
    theme: {
      colors: {
        blue: '#240668',
        pink600: '#AC2682',
        pink500: '#DC28A3',
        pink400: '#E479C2',
        purple600: '#B660B5',
        purple500: '#BEA4FF',
        purple400: '#EEE7FF',
        yellow: '#FFEDB3',
        error: '#FF4A4A',
        confirm: '#27AE60',
        gray: '#A6A6A6',
        black: '#000000',
        white: '#FFFFFF',
        // NEW CI
        'new-primary': '#26294C',
        'new-primary-active': '#161833',
        'new-primary-disabled': '#898CB0',
        'new-gray': '#ECEDF2',
        'new-secondary': '#AE1C5D',
        'new-success': '#27AE60',
        'new-error': '#BB0B0B',
        'new-error-active': '#A30B0B',
        'new-footer': '#101223',
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
  }
)

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
