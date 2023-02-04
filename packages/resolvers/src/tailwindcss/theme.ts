
import { borderRadius, colors, elevations, fontFamily, fontSizes, fontWeights, lineHeights } from '@bsafer-system/tokens'

const fontSize = {
  xs: [fontSizes.xs, lineHeights.lg],
  sm: [fontSizes.sm, lineHeights.lg],
  md: [fontSizes.md, lineHeights.md],
  lg: [fontSizes.lg, lineHeights.md],
  xl: [fontSizes.xl, lineHeights.md],
  "2xl": [fontSizes['2xl'], lineHeights.md],
  "3xl": [fontSizes['3xl'], lineHeights.sm],
  "4xl": [fontSizes['4xl'], lineHeights.xs],
} as const

const theme = {
  colors,
  fontFamily,
  fontSize,
  fontWeight: fontWeights,
  boxShadow: elevations,
  borderRadius,
  extend: {
    keyframes: {
      fade: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: {
      "fade-in-out": "fade 350ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
  }
}

const content = [
  './src/**/*.{ts,js,tsx,tsx}',
  'node_modules/@bsafer-system/react/**/*.{ts,js,tsx,tsx}',
] as const

export const defaultTailwindTheme = {
  theme,
  content,
  darkMode: 'class',
  plugins: []
} as const
