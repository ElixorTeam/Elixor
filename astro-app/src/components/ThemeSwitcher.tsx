import { HiSolidMoon, HiSolidSun } from 'solid-icons/hi'
import { createSignal } from 'solid-js'

export default function ThemeSwitcher() {
  const root = document.documentElement
  const [theme, setTheme] = createSignal<'dark' | 'light'>(
    root.classList.contains('dark') ? 'dark' : 'light'
  )
  const switchTheme = () => {
    const switchedTheme = theme() === 'dark' ? 'light' : 'dark'
    setTheme(switchedTheme)
    localStorage.setItem('theme', switchedTheme)
    root.classList.toggle('dark', switchedTheme === 'dark')
  }
  return (
    <button onClick={switchTheme}>
      {theme() === 'dark' ? (
        <HiSolidMoon class="h-6 w-6" />
      ) : (
        <HiSolidSun class="h-6 w-6" />
      )}
    </button>
  )
}
