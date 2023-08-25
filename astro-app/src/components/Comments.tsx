import { For } from 'solid-js'
import avatar_danil from '@/assets/avatar_danil.jpg'
import avatar_artyom from '@/assets/avatar_artyom.jpg'
import avatar_gosha from '@/assets/avatar_grigory.jpg'

const posts = [
  {
    comment:
      'Elixor - your reliable IT partner. We provide innovative solutions, keeping your business in sync with' +
      ' technological progress.',
    author: {
      name: 'Danil Aleksandrov (BaggerFast)',
      post: 'Founder / Backend dev',
      imageUrl: avatar_danil,
    },
  },
  {
    comment:
      'At Elixor, we turn your ideas into code. Our experts create unique IT solutions, optimizing processes' +
      " and enhancing your enterprise's efficiency.",
    author: {
      name: 'Artyom Vlasov (Ap73MKa)',
      post: 'Co-Founder / Fullstack dev',
      imageUrl: avatar_artyom,
    },
  },
  {
    comment:
      'Turn IT complexities into your competitive advantage. Elixor ensures integration, development, and support' +
      ' of cutting-edge technologies, helping your business thrive in the digital age.',
    author: {
      name: 'Georgy Gusev',
      post: 'Backend dev',
      imageUrl: avatar_gosha,
    },
  },
]

export default function Comments() {
  return (
    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      <For each={posts}>
        {(post) => (
          <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex flex-1 flex-col justify-between bg-stone-50 p-6">
              <div class="flex items-center">
                <div class="shrink-0">
                  <span class="sr-only">{post.author.name}</span>
                  <img
                    class="h-12 w-12 rounded-full"
                    src={post.author.imageUrl.src}
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="font-semibold text-gray-900">{post.author.name}</p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <p>{post.author.post}</p>
                  </div>
                </div>
              </div>
              <div class="flex-1">
                <p class="mt-4 lg:text-lg text-gray-900">{post.comment}</p>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}
