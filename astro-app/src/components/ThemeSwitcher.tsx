import { HiSolidMoon, HiSolidSun } from 'solid-icons/hi'
import { createEffect, createSignal } from 'solid-js'

export default function ThemeSwitcher() {
  const root = document.documentElement
  const [theme, setTheme] = createSignal<'dark' | 'light'>(
    root.classList.contains('dark') ? 'dark' : 'light'
  )
  createEffect(() => {
    localStorage.setItem('theme', theme())
    root.classList.toggle('dark', theme() === 'dark')
  })
  const switchTheme = () => setTheme(theme() === 'dark' ? 'light' : 'dark')
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
