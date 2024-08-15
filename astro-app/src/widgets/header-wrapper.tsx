import clsx from 'clsx'
import {
  createSignal,
  type JSXElement,
  onCleanup,
  createEffect,
} from 'solid-js'

export default function HeaderWrapper(props: { children: JSXElement }) {
  const [isVisibleBorder, setIsVisibleBorder] = createSignal(false)
  createEffect(() => {
    const handleScroll = () => setIsVisibleBorder(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })
  return (
    <header
      class={clsx(
        isVisibleBorder()
          ? 'before:backdrop-hack border-b-black/[.1] before:backdrop-blur-md dark:border-b-white/[.2]'
          : 'border-b-transparent',
        'fixed top-0 z-30 h-16 w-screen border-b transition duration-300'
      )}
    >
      {props.children}
    </header>
  )
}
