import { Icon } from 'solid-heroicons'
import { moon, sun } from 'solid-heroicons/solid-mini'
import { createEffect, createSignal, JSX } from 'solid-js'

function ThemeButton({
  onClick,
  iconPath,
}: {
  onClick: () => void
  iconPath: {
    path: JSX.Element
    outline?: boolean
    mini?: boolean
  }
}) {
  return (
    <button onClick={onClick}>
      <Icon path={iconPath} class="h-6 w-6" />
    </button>
  )
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = createSignal<'dark' | 'light'>('light')
  const switchTheme = () => setTheme(theme() === 'dark' ? 'light' : 'dark')
  createEffect(() => {
    const root = document.documentElement
    if (theme() === 'light') {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [theme()])
  return (
    <>
      {theme() === 'dark' ? (
        <ThemeButton onClick={switchTheme} iconPath={moon} />
      ) : (
        <ThemeButton onClick={switchTheme} iconPath={sun} />
      )}
    </>
  )
}
