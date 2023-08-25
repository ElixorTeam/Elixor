import { For, JSX } from 'solid-js'

type BrandListProps = {
  icons: Array<(props: JSX.IntrinsicElements['svg']) => JSX.Element>
}

export default function BrandList(props: BrandListProps) {
  return (
    <ul class="flex gap-4 fill-zinc-500 pt-4 dark:fill-zinc-800">
      <For each={props.icons}>
        {(Icon) => (
          <Icon class="h-6 w-6 hover:fill-zinc-200 dark:hover:fill-zinc-950" />
        )}
      </For>
    </ul>
  )
}
