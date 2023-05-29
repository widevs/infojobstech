import { useState } from 'react'
import { IconClose, IconMenu } from '../icons/Icons'
import Link from 'next/link'
import { Logo } from '../logo'
import { IconGithub } from '@/icons/github'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <HeroLogo />
      <nav>
        {/* Desktop Menu  */}
        {isNavOpen && (
          <ul className="flex flex-col justify-center items-center gap-8 absolute top-0 left-0 bg-primaryLight h-screen w-full z-10 md:flex-row md:static md:bg-transparent md:h-full">
            <li>
              <Link
                href="/"
                className={`text-md md:text-sm ${
                  pathname === '/' ? 'font-bold' : ''
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-nosotros"
                className={`text-md md:text-sm ${
                  pathname === '/sobre-nosotros' ? 'font-bold' : ''
                }`}
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <a
                className="btn text-xs items-center"
                href="https://github.com/manuelsanchezweb/infojobs-tech"
              >
                <IconGithub customClass="w-4" /> Ver repo
              </a>
            </li>
          </ul>
        )}
        <ul className="hidden md:flex md:flex-row items-center gap-8 md:static md:bg-transparent md:h-full">
          <li>
            <Link
              href="/"
              className={`text-md md:text-sm ${
                pathname === '/' ? 'font-bold' : ''
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros"
              className={`text-md md:text-sm ${
                pathname === '/sobre-nosotros' ? 'font-bold' : ''
              }`}
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <a
              className="btn text-xs items-center"
              href="https://github.com/manuelsanchezweb/infojobs-tech"
            >
              <IconGithub customClass="w-4" /> Ver repo
            </a>
          </li>
        </ul>

        {!isNavOpen ? (
          <button
            key="open-menu"
            className="nav-open md:hidden"
            aria-label="Abrir menú"
            onClick={toggleNav}
          >
            <IconMenu />
          </button>
        ) : (
          ''
        )}

        {/* Close Button  */}
        {isNavOpen ? (
          <button
            key="close-menu"
            className="nav-close absolute right-4 top-8 z-20 md:hidden"
            aria-label="Cerrar menú"
            onClick={toggleNav}
          >
            <IconClose />
          </button>
        ) : (
          ''
        )}
      </nav>
    </>
  )
}

export default Navigation

const HeroLogo = () => {
  return (
    <Link
      title="Logo"
      href="/"
      className="flex flex-col justify-end hover:scale-105 focus:scale-105 transition-transform items-end hover:no-underline focus:no-underline"
    >
      <Logo customClass="text-primary w-32 md:w-52 h-auto" />
    </Link>
  )
}
