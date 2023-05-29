import BackButton from '@/components/back-button/back-button'
import HeroGeneral from '@/components/hero/hero-general'
import { IconSwitcher } from '@/components/icons/IconSwitcher'
import Image from 'next/image'

export function generateMetadata() {
  return {
    title: 'Sobre Nosotros y Visión',
    description:
      'Aquí descubrirás quiénese son los que hicieron realidad este proyecto en una Hackathon',
    keywords: [
      'contacto',
      'sobre nosotros',
      'infojobs tech',
      'xavier lopez',
      'manuel sanchez',
    ],
  }
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-8">
        <HeroGeneral />

        <div className="container-wrapper flex flex-col gap-4">
          <BackButton classCustom="w-fit my-6" />

          <h1 className="text-3xl md:text-5xl font-bold self-start mb-4">
            Sobre nosotros
          </h1>

          <div className="flex flex-col md:flex-row-reverse gap-12 my-8 text-justify">
            <div className="flex flex-col gap-4 text-lg max-w-[600px]">
              <p>
                <strong>InfoJobs Tech</strong> es la propuesta de valor para
                InfoJobs de 2 desarrolladores españoles.
              </p>
              <p>
                InfoJobs Tech pretende atraer talento a través de una interfaz
                que hace sentir al desarrollador como en casa.
              </p>
            </div>
            <Image
              width={440}
              height={220}
              src="/img-remoteworking.png"
              alt="Talento tecnológico"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-12 my-8 text-justify">
            <div className="flex flex-col gap-4 text-lg max-w-[600px]">
              <p>
                Las ofertas hablan su idioma:{' '}
                <strong>
                  están clasificadas a través de IA por stacks tecnológicos
                </strong>{' '}
                y puede verse a vista de pájaro{' '}
                <strong>
                  qué están demandando las empresas en tiempo real
                </strong>
                .
              </p>
              <p>
                Con esta propuesta{' '}
                <strong>
                  pretendemos inyectar aire fresco en la plataforma líder del
                  mercado
                </strong>{' '}
                con una propuesta que la acerca al talento tecnológico .
              </p>
            </div>
            <Image
              width={440}
              height={220}
              src="/img-orientation.png"
              alt="Talento tecnológico"
            />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold self-start my-4">
            Visión de futuro y Contacto
          </h2>

          <div className="flex flex-col md:flex-row-reverse gap-12 my-8">
            <div className="flex flex-col gap-4 text-lg max-w-[400px] text-justify">
              <p>
                Esto es solo la <strong>semilla</strong> de la visión que
                tenemos para InfoJobs Tech.
              </p>
              <p>
                En el futuro visionamos un plataforma interactiva guidada por IA
                en la que los profesionales tech pueden disfrutar de una
                experiencia completa con{' '}
                <strong>gráficas en tiempo real</strong>,{' '}
                <strong>conversaciones</strong>
                en cada oferta,{' '}
                <strong>
                  consejos guiados por IA en base a las habilidades
                </strong>{' '}
                más demandadas, etc…
              </p>
              <p>
                Los creadores vemos InfoJobs Tech como{' '}
                <strong>la plataforma inteligente e interactiva</strong> para
                desarrolladores en su búsqueda de <strong>nuevos retos</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 my-4">
              <div className="flex flex-col items-center text-center">
                <a
                  rel="nofollow noreferrer"
                  target="_blank"
                  href="https://github.com/xavierlopez"
                  className="group"
                >
                  <figure className="flex flex-col gap-2 overflow-hidden">
                    <picture className="overflow-hidden rounded-md border border-primary">
                      <Image
                        width={250}
                        height={200}
                        src="/developer-xavi.png"
                        alt="Contacto con Desarrollador Xavi"
                        className="group-hover:scale-105 group-focus:scale-105 transition-transform"
                      />
                    </picture>
                    <figcaption>
                      Xavier López <br /> Desarrollador Full-Stack
                    </figcaption>
                  </figure>
                </a>
                <div className="flex gap-2 my-4">
                  <a
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="hover:scale-105 focus:scale-105 transition-transform"
                    title="Ver GitHub de Xavier"
                    href="https://github.com/xavierlopez"
                  >
                    <IconSwitcher classCustom="w-8 h-auto" icon="web" />
                  </a>
                  <a
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="hover:scale-105 focus:scale-105 transition-transform"
                    title="Ver LinkedIn de Xavier"
                    href="https://www.linkedin.com/in/lopezmorras/"
                  >
                    <IconSwitcher classCustom="w-8 h-auto" icon="linkedin" />
                  </a>
                  <a
                    className="hover:scale-105 focus:scale-105 transition-transform"
                    title="Escribir un email a Xavier"
                    href="mailto:lopezx@gmail.com"
                  >
                    <IconSwitcher classCustom="w-8 h-auto" icon="message" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <a
                  rel="nofollow noreferrer"
                  target="_blank"
                  href="https://github.com/manuelsanchez2"
                  className="group"
                >
                  <figure className="flex flex-col gap-2 overflow-hidden">
                    <picture className="overflow-hidden rounded-md border border-primary">
                      <Image
                        width={250}
                        height={200}
                        src="/developer-manu.png"
                        alt="Contacto con Desarrollador Manuel"
                        className="group-hover:scale-105 group-focus:scale-105 transition-transform"
                      />
                    </picture>
                    <figcaption>
                      Manuel Sánchez <br /> Frontend & Diseñador UI/UX
                    </figcaption>
                  </figure>
                </a>
                <div className="flex gap-2 my-4">
                  <a
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="hover:scale-105 focus:scale-105 transition-transform"
                    title="Ver GitHub de Manuel"
                    href="https://github.com/manuelsanchez2"
                  >
                    <IconSwitcher classCustom="w-8 h-auto" icon="web" />
                  </a>
                  <a
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="hover:scale-105 focus:scale-105 transition-transform"
                    title="Ver LinkedIn de Manuel"
                    href="https://www.linkedin.com/in/manusanchez2/"
                  >
                    <IconSwitcher classCustom="w-8 h-auto" icon="linkedin" />
                  </a>
                  <a
                    className="hover:scale-105 focus:scale-105 transition-transform"
                    title="Escribir un email a Manuel"
                    href="mailto:manusansan22@gmail.com"
                  >
                    <IconSwitcher classCustom="w-8 h-auto" icon="message" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
