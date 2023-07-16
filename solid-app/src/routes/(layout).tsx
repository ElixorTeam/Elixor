import { Outlet } from '@solidjs/router'
import Header from '@/layout/Header'
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <div class="relative min-h-screen max-w-[100vw]">
      <div class="h-full w-full">
        <Header />
        <main class="h-full w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
