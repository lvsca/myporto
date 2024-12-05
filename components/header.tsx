import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-primary text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href={'/'}>
            <div className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-bold">MyPortfolio</span>
            </div>
          </Link>
          <nav>
            <ul className="flex space-x-4 font-serif font-bold">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#skills" className="hover:underline">Skills</Link></li>
              <li><Link href="#experience" className="hover:underline">Experience</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

