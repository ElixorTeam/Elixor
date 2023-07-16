import GithubMark from '@/assets/github-mark.svg'
import YoutubeMark from '@/assets/youtube-mark.svg'
import { For } from 'solid-js'

export default function Footer() {
  const navigation = [
    { name: 'Github', href: 'https://github.com/ElixorTeam', icon: GithubMark },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/@baggerfast',
      icon: YoutubeMark,
    },
  ]
  return (
    <footer class="w-full border-t border-t-black/[.1] dark:border-t-white/[.2]">
      <div class="mx-auto max-w-7xl p-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-2">
          <For each={navigation}>
            {(nav) => (
              <a
                href={nav.href}
                target="_blank"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">{nav.name}</span>
                <nav.icon
                  class="h-6 w-6 fill-zinc-700 transition-colors hover:fill-zinc-900
                                 dark:fill-zinc-500 dark:hover:fill-zinc-300"
                  aria-hidden="true"
                />
              </a>
            )}
          </For>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-xs leading-5 text-neutral-600">
            &copy; 2023 Elixor, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
