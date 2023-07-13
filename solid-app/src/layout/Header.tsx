import ElixorBrand from '@/assets/elixor-brand.svg'
import { Icon } from 'solid-heroicons'
import { language } from 'solid-heroicons/solid-mini'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { createEffect, createSignal, onCleanup } from 'solid-js'

export default function Header() {
  const [showBorder, setShowBorder] = createSignal(false)
  createEffect(() => {
    const handleScroll = () => setShowBorder(window.pageYOffset > 10)
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })
  return (
    <header
      class={`${
        showBorder()
          ? 'border-b border-b-gray-200 dark:border-b-neutral-800'
          : 'border-b-white/[.0]'
      } sticky top-0 h-14 w-screen backdrop-blur-md transition-colors`}
    >
      <div class="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-5 md:px-10">
        <ElixorBrand class=" h-10 w-32 dark:fill-white md:w-44" />
        <div class="flex h-10 items-center gap-6 md:gap-8">
          <ThemeSwitcher />
          <Icon path={language} class="h-6 w-6" />
        </div>
      </div>
    </header>
  )
}
