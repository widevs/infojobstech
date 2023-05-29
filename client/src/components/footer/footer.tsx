import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer md:mt-24 pb-8 border-t border-grayBrand pt-8 w-full flex justify-center">
      {/* <!-- Help for Candidates --> */}

      <div className="container--home container-wrapper">
        {/* <!-- Help for Companies --> */}

        <div className="footer-nav inner">
          <ul className="row clearfix flex justify-center md:justify-between gap-4 w-full">
            {/* <!-- Seccion: Nosotros --> */}
            <li className="col-3 col-12-medium col-centered">
              <div className="col-child">
                <div className="font-bold pb-4 hidden md:block">Nosotros</div>
                <ul className="list-default w-full flex md:flex-col items-center gap-4 md:gap-0 mx-auto md:mx-0 md:items-start">
                  <li>
                    <Link href="/" id="helpLink" title="Ayuda">
                      Ayuda
                    </Link>
                  </li>
                  <li className="hidden md:block">
                    <Link href="/" id="seguridadLink" title="Seguridad">
                      Seguridad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      id="condicionesLink"
                      title="Condiciones legales"
                    >
                      Condiciones legales
                    </Link>
                  </li>
                  <li className="hidden md:block">
                    <Link href="/" id="lexLink" title="Política de Privacidad">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li className="hidden md:block">
                    <Link
                      href="/"
                      id="reglasLink"
                      title="Reglas de uso y características de servicio de InfoJobs"
                    >
                      Uso del servicio
                    </Link>
                  </li>
                  <li className="hidden md:block">
                    <Link href="/" id="cookiesLink" title="Política de cookies">
                      Política de cookies
                    </Link>
                  </li>
                  <li className="hidden md:block">
                    <Link
                      href="/"
                      id="manageAdvertisingLink"
                      title="Gestionar cookies"
                    >
                      Gestionar cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* <!-- Seccion: Sobre InfoJobs --> */}
            <li className="col-3 hide-small-device col-centered hidden md:block">
              <div className="col-child">
                <div className="font-bold pb-4">Sobre InfoJobs</div>
                <ul className="list-default">
                  <li>
                    <Link
                      href="/"
                      id="infojobsTodayFooter"
                      title="El equipo y la filosofía de la empresa"
                    >
                      InfoJobs hoy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      id="workWithUsFooter"
                      title="¿Quieres formar parte de nuestro equipo?"
                    >
                      Trabaja con nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      id="offersFooter"
                      title="Buscar ofertas de empleo"
                    >
                      Ofertas de empleo
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* <!-- Seccion: + InfoJobs --> */}
            <li className="col-3 hide-small-device col-centered hidden md:block">
              <div className="col-child">
                <div className="font-bold pb-4">+ InfoJobs</div>
                <ul className="list-default">
                  <li>
                    <Link href="/" id="awardsFooter" title="InfoJobs Awards">
                      InfoJobs Awards
                    </Link>
                  </li>
                  <li>
                    <Link href="/" id="academyFooter" title="InfoJobs Academy">
                      InfoJobs Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      id="jobGuidanceFooter"
                      title="Orientación laboral y coaching en la búsqueda de empleo"
                    >
                      Orientación laboral
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      id="formacionFooter"
                      title="Qué puedo estudiar para trabajar - Formación InfoJobs"
                    >
                      InfoJobs Formación
                    </Link>
                  </li>

                  <li>
                    <Link href="/" id="blogFooter" title="Blog empresas">
                      Blog empresas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      lang="it"
                      id="italyFooter"
                      title="Accedi a InfoJobs.it"
                    >
                      Oferte di lavoro in Italia
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* <!-- Seccion: Prensa --> */}
            <li className="col-3 hide-small-device col-centered hidden md:block">
              <div className="col-child">
                <div className="font-bold pb-4">Prensa</div>
                <ul className="list-default">
                  <li>
                    <Link
                      href="/"
                      id="newsIndicatorsFooter"
                      title="El barómetro en el mercado laboral"
                    >
                      Indicadores de InfoJobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      id="newsNotesFooter"
                      title="Notas de prensa publicadas por InfoJobs"
                    >
                      Notas de prensa
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      id="newsContactFooter"
                      title="Contacto de prensa"
                    >
                      Contacto de prensa
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* <!-- Seccion: Network --> */}
          </ul>
        </div>
        <div className="social-footer py-6">
          <div className="row row-faux flex flex-wrap flex-col md:flex-row justify-between items-center mx-auto border-y border-grayBrand w-full py-4 px-6">
            {/* <!-- Social Area --> */}
            <div className="col-6 col-12-medium flex gap-4 mb-8 md:mb-0">
              <div className="col-child">
                <dl className="social-icons flex gap-4 ">
                  <dt className="hidden sm:block">¡Síguenos!</dt>
                  <dd>
                    <Link
                      className="iconfont-Facebook iconfont-36px script"
                      href="/"
                      title="InfoJobs en Facebook"
                    >
                      {' '}
                      <span className="hide">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8457 1.75C7.18478 1.75 2.5957 6.33908 2.5957 12C2.5957 17.6609 7.18478 22.25 12.8457 22.25C18.5066 22.25 23.0957 17.6609 23.0957 12C23.0902 6.34137 18.5043 1.75551 12.8457 1.75ZM21.5957 12C21.5957 16.8325 17.6782 20.75 12.8457 20.75C8.01321 20.75 4.0957 16.8325 4.0957 12C4.0957 7.16751 8.01321 3.25 12.8457 3.25C17.6759 3.25551 21.5902 7.16979 21.5957 12ZM13.4901 17.75V12.2758H15.2593L15.5239 10.1421H13.4901V8.78043C13.4901 8.16319 13.6557 7.74228 14.5085 7.74228L15.5957 7.74149V5.83324C15.4074 5.80811 14.7625 5.75 14.0103 5.75C12.4422 5.75 11.3686 6.74339 11.3686 8.56997V10.1421H9.5957V12.2758H11.3686V17.75H13.4901Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Link>
                  </dd>
                  <dd>
                    <Link
                      className="iconfont-Twitter iconfont-36px script"
                      href="/"
                      title="InfoJobs en Twitter"
                    >
                      {' '}
                      <span className="hide">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8457 1.75C18.5043 1.75551 23.0902 6.34137 23.0957 12C23.0957 17.6609 18.5066 22.25 12.8457 22.25C7.18478 22.25 2.5957 17.6609 2.5957 12C2.5957 6.33908 7.18478 1.75 12.8457 1.75ZM12.8457 3.25C8.01321 3.25 4.0957 7.16751 4.0957 12C4.0957 16.8325 8.01321 20.75 12.8457 20.75C17.6782 20.75 21.5957 16.8325 21.5957 12C21.5902 7.16979 17.6759 3.25551 12.8457 3.25ZM14.1531 8.02115C15.0506 7.53483 16.1588 7.7152 16.8601 8.46174C17.3646 8.35993 17.8482 8.17182 18.2901 7.90549C18.1166 8.4238 17.7654 8.86224 17.3001 9.1416C17.7476 9.08631 18.1843 8.96339 18.5957 8.77695C18.3451 9.15804 18.0403 9.49913 17.6917 9.78943L17.4774 9.95743V10.2541C17.4889 11.9804 16.8159 13.6394 15.6089 14.8601C14.4019 16.0808 12.7615 16.7615 11.0546 16.7499C9.82819 16.7505 8.62748 16.3944 7.5957 15.7239C7.77421 15.7448 7.95378 15.7551 8.13348 15.7548C9.14618 15.7543 10.1295 15.4104 10.9263 14.7783C9.9617 14.7597 9.11499 14.1243 8.81793 13.196C9.16869 13.2576 9.52888 13.2343 9.86904 13.1281C8.86237 12.9343 8.11893 12.0814 8.04224 11.0621L8.0357 10.8907L8.22764 10.9867C8.48887 11.102 8.77006 11.1662 9.05626 11.175C8.0663 10.5038 7.76149 9.17062 8.35959 8.12799C9.50066 9.56751 11.1946 10.4466 13.0163 10.5446C12.7902 9.54051 13.2556 8.50748 14.1531 8.02115Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Link>
                  </dd>
                  <dd>
                    <Link
                      className="iconfont-Youtube iconfont-36px script"
                      href="/"
                      title="InfoJobs en Youtube"
                    >
                      {' '}
                      <span className="hide">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8457 1.75C7.18478 1.75 2.5957 6.33908 2.5957 12C2.5957 17.6609 7.18478 22.25 12.8457 22.25C18.5066 22.25 23.0957 17.6609 23.0957 12C23.0902 6.34137 18.5043 1.75551 12.8457 1.75ZM21.5957 12C21.5957 16.8325 17.6782 20.75 12.8457 20.75C8.01321 20.75 4.0957 16.8325 4.0957 12C4.0957 7.16751 8.01321 3.25 12.8457 3.25C17.6759 3.25551 21.5902 7.16979 21.5957 12ZM18.5949 8.99923C18.4569 8.50748 18.0504 8.12026 17.534 7.98884C16.5982 7.75 12.8457 7.75 12.8457 7.75C12.8457 7.75 9.09318 7.75 8.15738 7.98884C7.64111 8.12026 7.23448 8.50748 7.09648 8.99923C6.8457 9.89045 6.8457 11.75 6.8457 11.75C6.8457 11.75 6.8457 13.6095 7.09648 14.5008C7.23448 14.9925 7.64111 15.3797 8.15738 15.5112C9.09318 15.75 12.8457 15.75 12.8457 15.75C12.8457 15.75 16.5982 15.75 17.534 15.5112C18.0504 15.3797 18.4569 14.9925 18.5949 14.5008C18.8457 13.6095 18.8457 11.75 18.8457 11.75C18.8457 11.75 18.8457 9.89045 18.5949 8.99923ZM11.5957 13.75L14.5957 11.7501L11.5957 9.75V13.75Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Link>
                  </dd>
                  <dd>
                    <Link
                      className="iconfont-LinkedIn iconfont-36px script"
                      href="/"
                      title="InfoJobs en LinkedIn"
                    >
                      {' '}
                      <span className="hide">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8457 1.75C7.18478 1.75 2.5957 6.33908 2.5957 12C2.5957 17.6609 7.18478 22.25 12.8457 22.25C18.5066 22.25 23.0957 17.6609 23.0957 12C23.0902 6.34137 18.5043 1.75551 12.8457 1.75ZM21.5957 12C21.5957 16.8325 17.6782 20.75 12.8457 20.75C8.01321 20.75 4.0957 16.8325 4.0957 12C4.0957 7.16751 8.01321 3.25 12.8457 3.25C17.6759 3.25551 21.5902 7.16979 21.5957 12ZM17.8458 15.9824H15.7738V12.7404C15.7738 11.9664 15.7598 10.9714 14.6978 10.9714C13.6178 10.9714 13.4538 11.8144 13.4538 12.6844V15.9824H11.3828V9.31441H13.3698V10.2264H13.3988C13.6748 9.70241 14.3518 9.14941 15.3598 9.14941C17.4578 9.14941 17.8458 10.5304 17.8458 12.3254V15.9824ZM9.0457 8.404C8.3817 8.404 7.8457 7.865 7.8457 7.202C7.8457 6.539 8.3817 6 9.0457 6C9.7087 6 10.2467 6.539 10.2467 7.202C10.2467 7.865 9.7087 8.404 9.0457 8.404ZM8.00977 15.9825H10.0828V9.31445H8.00977V15.9825Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Link>
                  </dd>
                </dl>
              </div>
            </div>

            {/* <!-- App Area --> */}
            <div className="col-6 col-12-medium">
              <div className="col-child">
                <ul className="apps flex flex-col md:flex-row gap-4">
                  <li>
                    <Link href="/">
                      <Image
                        height={50}
                        width={100}
                        alt="Google play"
                        src="https://media.infojobs.net/appgrade/pictures/pic-google-play-2.png"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image
                        height={50}
                        width={100}
                        alt="App Store "
                        src="https://media.infojobs.net/appgrade/pictures/pic-app-store-2.png"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-nav-bar hidden sm:flex flex-col gap-4 items-center ">
          {/* <!-- Otras webs de Schibsted --> */}
          <ul className="footer-nav-bar-sites list-inline-center small flex flex-wrap gap-6 text-sm text-grayBrand">
            <li>
              <span>InfoJobs es parte de</span>
              <span>
                <Link target="_blank" href="/">
                  {' '}
                  Adevinta
                </Link>
              </span>
            </li>
            <li>
              <Link target="_blank" href="/">
                Fotocasa
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                habitaclia
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                Coches.net
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                Motos.net
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                Milanuncios
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                JobisJob
              </Link>
            </li>
            <li>
              <span>© Adevinta Spain S.L.U. </span>
            </li>
          </ul>

          {/* <!-- Epilogo legal Italia --> */}

          {/* <!-- Logos Propiedad --> */}
          <div className="break">
            <ul className="footer-nav-bar-badges list-inline-center margin-top">
              <li>
                <Link href="/" title="Adevinta">
                  <Image
                    width={80}
                    height={40}
                    alt="Adevinta"
                    src="https://media.infojobs.net/appgrade/pictures/pic-adevinta-logo.png"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
