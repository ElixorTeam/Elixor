import team from '@/assets/team.png'
import {FaBrandsJava, FaBrandsReact} from "solid-icons/fa";
import {SiTypescript} from "solid-icons/si";
import { For } from 'solid-js'

function BlockTitle({ number, title }: { number: string; title: string }) {
  return (
    <div class="flex items-baseline gap-2">
      <p class="font-mono text-2xl">{number}.</p>
      <p class="text-3xl tracking-tight">{title}</p>
    </div>
  )
}

export default function Home() {
  const people = [
    { name: 'Artyom Vlasov', role: 'Frontend Developer', imageUrl: team },
    { name: 'Danil Aleksandrov', role: 'Backend Developer', imageUrl: team },
    { name: 'A.', role: 'Developer', imageUrl: team },
  ]
  return (
    <div class="mx-auto h-full w-full">
      <div class="h-screen w-full px-2">
        <div class="flex h-full w-full flex-col items-center justify-center">
          <p class="max-w-sm text-center text-7xl font-bold tracking-tight antialiased md:max-w-4xl md:text-9xl">
            Invent. Create. Release.
          </p>
          <p class="pt-10 text-center text-lg font-light text-neutral-800 dark:text-zinc-500 md:text-2xl">
            The primary slogan embraced by the Elixor team
          </p>
          <a href="#about">
            <button
              type="button"
              class="mt-10 h-20 w-60 border-2 border-black transition-colors ease-in-out hover:bg-black
               hover:text-white dark:border-white hover:dark:bg-white hover:dark:text-black"
            >
              <p class="text-xl">Checkout</p>
            </button>
          </a>
        </div>
      </div>
      <div
        class="mx-auto h-fit w-full max-w-screen-2xl px-5 pb-10 pt-1 sm:px-10 md:px-20"
        id="about"
      >
        <div class="mb-14 mt-20 max-w-2xl bg-black p-4 text-white dark:bg-white dark:text-black">
          <BlockTitle number="01" title="Our team" />
          <p class="pt-4 text-xl font-light">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-16">
          <For each={people}>
            {(person) => (
              <li>
                <div class="space-y-4">
                  <div class="aspect-h-2 aspect-w-3">
                    <img class="object-cover" src={person.imageUrl} alt="" />
                  </div>
                  <div class="space-y-2">
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p class="text-zinc-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
      <div class="mx-auto h-fit w-full max-w-screen-2xl py-20">
        <div class="relative mx-5 max-w-2xl sm:mx-10 md:mx-20">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-black dark:border-white" />
          </div>
          <div class="relative flex justify-start">
            <span class="bg-black p-2 px-4 text-white dark:bg-white dark:text-black">
              <BlockTitle number="02" title="Projects" />
            </span>
          </div>
        </div>
        <div class="mt-10 flex h-fit w-full flex-col items-center justify-center px-5 sm:flex-row sm:px-10 md:px-20">
          <img src={team} alt="" class="h-auto max-w-sm" />
          <div class="h-fit max-w-sm bg-black p-4 text-white dark:bg-white dark:text-black">
            <p class="pb-4 text-3xl">Shorty</p>
            <p class="text-lg font-light">
              With just a few clicks, you can transform those cumbersome URLs
              into concise, easy-to-share links. Simplify your online presence
              and enhance your communication by using our efficient link
              shortening service. Experience the power of brevity with us today!
            </p>
            <div class="flex gap-4 fill-zinc-500 pt-4 dark:fill-zinc-800">
              <FaBrandsJava class="h-6 w-6 hover:fill-zinc-200 dark:hover:fill-zinc-950" />
              <SiTypescript class="h-6 w-6 hover:fill-zinc-200 dark:hover:fill-zinc-950" />
              <FaBrandsReact class="h-6 w-6 hover:fill-zinc-200 dark:hover:fill-zinc-950" />
            </div>
          </div>
        </div>
      </div>
      {/*<div class="h-screen w-full">*/}
      {/*  <BlockTitle number="03" title="Contacts" />*/}
      {/*</div>*/}
    </div>
  )
}
