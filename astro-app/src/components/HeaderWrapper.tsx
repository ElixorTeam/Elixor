import clsx from 'clsx'
import { createSignal, JSXElement, onCleanup, createEffect } from 'solid-js'

export default function HeaderWrapper(props: { children: JSXElement }) {
  const [showBorder, setShowBorder] = createSignal(false)
  createEffect(() => {
    const handleScroll = () => setShowBorder(window.pageYOffset > 10)
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })
  return (
    <header
      class={clsx(
        showBorder()
          ? 'border-b border-b-black/[.1] backdrop-blur-md dark:border-b-white/[.2]'
          : 'border-b-white/[.0]',
        'fixed top-0 z-30 h-16 w-screen transition duration-300'
      )}
    >
      {props.children}
    </header>
  )
}
