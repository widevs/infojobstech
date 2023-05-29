import HeroGeneral from '@/components/hero/hero-general'
import { IconSwitcher } from '@/components/icons/IconSwitcher'
import InteractiveElement from '@/components/interactive-element/interactive-element'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 pb-8">
      <HeroGeneral />

      <div className="container-wrapper mt-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-bold self-start">
            404 - Página no encontrada
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
            <IconSwitcher icon="error" classCustom="min-w-[300px]" />
            <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start">
              <p>
                La página que estás buscando o bien no existe o bien ha dejado
                de existir. Navega al menu principal o échale un vistazo al
                stack que te interese
              </p>
              <a className="btn w-fit" href="/">
                Volver al menú principal
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
