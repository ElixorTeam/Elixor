import appScreenshoot from '@/assets/shorty_app_screenshoot.jpg'
import { VsGithubAlt } from 'solid-icons/vs'
import { HiSolidLink } from 'solid-icons/hi'
import { For } from 'solid-js'

const links = [
  {
    url: 'https://github.com/ElixorTeam/ShortyReactClient',
    icon: VsGithubAlt,
  },
  {
    url: 'https://myshorty.ru',
    icon: HiSolidLink,
  },
]

export default function ShortyBlock(props: { blockText: string }) {
  return (
    <div class="overflow-hidden py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:flex lg:max-w-lg lg:flex-col lg:justify-center lg:text-left">
              <p class="mt-2 text-2xl font-extralight uppercase tracking-tight text-sky-400 sm:text-4xl lg:text-4xl">
                Shorty
              </p>
              <p class="mt-4 text-lg font-light leading-8 tracking-tight lg:text-2xl ">
                {props.blockText}
              </p>
              <ul class="mt-4 flex gap-4">
                <For each={links}>
                  {(link) => (
                    <li>
                      <a href={link.url} target="_blank">
                        <link.icon
                          class="h-8 w-8 fill-sky-400 text-sky-400 transition ease-in-out
                        hover:fill-gray-600 hover:text-gray-600 dark:hover:fill-gray-200 dark:hover:text-gray-200"
                        />
                      </a>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
          <div class="flex items-center">
            <img
              src={appScreenshoot.src}
              alt="Product screenshot"
              class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
