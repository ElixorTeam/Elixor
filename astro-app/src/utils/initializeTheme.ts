const initializeTheme = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme'))
    return localStorage.getItem('theme') as 'light' | 'dark'
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    return 'dark'
  return 'light'
}

export default initializeTheme
