import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Menu,
  MenuItem,
} from 'solid-headless'
import { BsArrowUpRight } from 'solid-icons/bs'
import { HiOutlineLanguage } from 'solid-icons/hi'
import { For } from 'solid-js'

type LinkListType = {
  name: string
  link: string
}

export default function LocaleMenu(props: { links: LinkListType[] }) {
  return (
    <Popover defaultOpen={false} class="relative">
      {({ isOpen }) => (
        <>
          <PopoverButton class="flex h-full items-center">
            <HiOutlineLanguage class="h-6 w-6" />
          </PopoverButton>
          <Transition
            show={isOpen()}
            enter="transition duration-200"
            enterFrom="opacity-0 -translate-y-1 scale-50"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-1 scale-50"
          >
            <PopoverPanel
              unmount={false}
              class="absolute right-1/2 z-10 mt-2 translate-x-5 px-4 sm:px-0"
            >
              <Menu class="flex list-none flex-col rounded-md bg-white/[.3] px-2 py-3 shadow-lg ring-1 ring-black/[.1] backdrop-blur-md dark:bg-black/[.2] dark:ring-white/[.2]">
                <For each={props.links}>
                  {(link) => (
                    <MenuItem
                      as="a"
                      href={link.link}
                      class="flex w-full items-center gap-2 rounded-md px-6 py-2 text-left text-xl font-light leading-5 text-gray-800 hover:bg-white/[.2]
                       hover:text-black dark:text-white dark:hover:bg-white/[.1]"
                    >
                      {link.name}
                      <BsArrowUpRight class="mt-1 h-3 w-3 text-gray-400" />
                    </MenuItem>
                  )}
                </For>
              </Menu>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
