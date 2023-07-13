import { Outlet } from '@solidjs/router'
import Header from '@/layout/Header'

export default function Layout() {
  return (
    <div class="min-h-screen max-w-[100vw] dark:bg-black dark:text-white">
      <div class="h-full w-full">
        <Header />
        <main class="mx-auto h-full max-w-screen-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
