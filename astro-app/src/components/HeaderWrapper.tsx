import {createEffect, createSignal, JSXElement, onCleanup} from 'solid-js'

export default function HeaderWrapper({children}: {children: JSXElement}) {
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
                    ? 'border-b border-b-black/[.1] backdrop-blur-md dark:border-b-white/[.2]'
                    : 'border-b-white/[.0]'
            } sticky top-0 z-30 h-14 w-screen transition-colors`}
        >
            {children}
        </header>
    )
}
