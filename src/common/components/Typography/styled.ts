import { styled } from 'config/stitches.config'

export const Typography = styled('div', {
  fontFamily: '$FCSubjectRounded',
  variants: {
    variant: {
      h1: {
        fontSize: '4rem',
        fontWeight: 'bold',
        '@sm': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 'bold',
        '@sm': {
          fontSize: '1.75rem',
        },
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        lineHeight: '50.4px',
        '@sm': {
          fontSize: '1.5rem',
          lineHeight: '33.6px',
        },
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        '@sm': {
          fontSize: '1rem',
        },
      },
      subhead1: {
        fontSize: '2.5rem',
        '@sm': {
          fontSize: '1.5rem',
        },
      },
      subhead2: {
        fontSize: '2rem',
        '@sm': {
          fontSize: '1.125rem',
        },
      },
      subhead3: {
        fontSize: '1.5rem',
        '@sm': {
          fontSize: '1rem',
        },
      },
      body: {
        fontSize: '1rem',
        '@sm': {
          fontSize: '0.75rem',
        },
      },
      description: {
        fontSize: '0.75rem',
        '@sm': {
          fontSize: '0.625rem',
        },
      },
    },
    color: {
      pink: {
        color: '$pink500',
      },
      blue: {
        color: '$blue',
      },
      yellow: {
        color: '$yellow',
      },
      error: {
        color: '$new-error',
      },
      confirm: {
        color: '$new-success',
      },
      white: {
        color: '$white',
      },
      'new-primary': {
        color: '$new-primary',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})
