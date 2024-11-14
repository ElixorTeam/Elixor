<script lang="ts">
  import { cn } from '@/shared/utils'
  import type { Snippet } from 'svelte'

  type Props = {
    class: string,
    classScroll: string,
    scrollY: number,
    children: Snippet
  }

  let {
    class: className,
    classScroll,
    scrollY = 10,
    children,
    ...restProps
  }: Props = $props()

  let y = $state<number>(0)
</script>

<svelte:window bind:scrollY={y} />

<div class={cn(className, y > scrollY ? classScroll : '')} {...restProps}>
  {@render children?.()}
</div>
