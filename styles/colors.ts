// styles/colors.ts

/**
 * SHPE brand palette—keys are kebab-case so
 * Tailwind generates bg-shpe-<key>, text-shpe-<key>, etc.
 */
export const shpeColors = {
  'red':        '#CF371B', // primary
  'main-navy':  '#1A2B52',
  'light-navy': '#1B69B0',
  'orange':     '#ED5D29',
  'dark':       '#1C1B1A', // text
  'mid-navy':   '#2F4D87',
  'light-blue': '#79ABBE',
  'light-gray': '#BADEEC',
} as const

export type ShpeColorKey = keyof typeof shpeColors
