import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard/home">Home</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard/categories">Categories</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard/products">Products</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

