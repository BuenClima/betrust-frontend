type a11y = { id: string; 'aria-controls': string }

/**
 * @description a11yProps function
 * @param {number} index - index
 * @returns {JSX.Element} a11yProps function
 */
export const a11yProps = (index: number): a11y => {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
