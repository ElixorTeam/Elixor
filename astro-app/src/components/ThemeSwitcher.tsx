import { HiSolidMoon, HiSolidSun } from "solid-icons/hi";
import { createSignal} from 'solid-js'
import initializeTheme from "@/utils/initializeTheme";

export default function ThemeSwitcher() {
    const initTheme = () => {
        const root = document.documentElement
        if (root.classList.contains('dark'))
            return 'dark'
        return 'light'
    }

  const [theme, setTheme] = createSignal<'dark' | 'light'>(initTheme())

  const switchTheme = () => {
    const newTheme = theme() === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    if (root.classList.contains('dark') && newTheme === 'light')
        root.classList.remove('dark')
    else
        root.classList.add('dark')
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
