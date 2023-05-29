import { getJobById } from '@/api/getJobById'
import type { Metadata } from 'next'
import NotFound from '@/app/not-found'
import BackButton from '@/components/back-button/back-button'
import HeroGeneral from '@/components/hero/hero-general'
import { ConnectionError } from '@/functions/errors'
import { convertDateToStandardFormat } from '@/functions/utils'

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  return {
    title: `Oferta para el id ${params.id}`,
    description: 'Encuentra tu nuevo trabajo de forma fácil con InfoJobs Tech',
    keywords: [`${params.id}`, 'infojobs tech'],
  }
}

async function getJobData(id: string) {
  try {
    const data = await getJobById({ jobId: id })
    return data
  } catch (error) {
    throw new ConnectionError('There was an issue with the fetch of the jobId')
  }
}

export default async function Page({ params }: { params: { jobId: string } }) {
  const job = await getJobData(params.jobId)

  if (!job || job?.error) {
    return <NotFound />
  }

  const jobDescription = job?.description.split('\n').filter((p) => p)
  const minRequirements = job?.minRequirements.split('\n').filter((p) => p)

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-16">
        <HeroGeneral iconStack={job?.stack} />
        <div className="container-wrapper">
          <BackButton classCustom="w-fit my-6" />

          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold self-start mb-2 max-w-[612px]">
              {job?.title}
            </h1>
            <p>
              {' '}
              <strong>Lugar:</strong> {job?.city}, {job?.country?.value}
            </p>
            {job.creationDate && (
              <p>
                <strong>Fecha de publicación:</strong>{' '}
                {convertDateToStandardFormat(job.creationDate)}
              </p>
            )}
            {job.profile.name && (
              <p>
                <strong>Empresa:</strong> {job.profile.name}
              </p>
            )}
          </div>

          <h2 className="text-2xl font-bold border-b border-primaryDark mb-8">
            Información de la oferta
          </h2>

          <div className="two-col flex flex-col md:flex-row gap-12 justify-between">
            {/* // General info  */}
            <div>
              {job.subcategory && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">
                    Subcategoría de la oferta:
                  </h3>
                  <p>{job.subcategory.value}</p>
                </div>
              )}

              {job.skillsList.length > 0 && (
                <div className="flex flex-col gap-2 mb-8">
                  <h3 className="font-bold text-xl">
                    Conocimientos que buscan:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job?.skillsList.map((skill) => (
                      <span
                        className="flex bg-gray-200 rounded-full border px-3 py-1 text-[12px] flex-nowrap font-semibold text-gray-700"
                        key={skill.skill}
                      >
                        {skill.skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {job.teleworking && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Modalidad de trabajo:</h3>
                  <p>{job.teleworking.value}</p>
                </div>
              )}

              {job.jobLevel && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Nivel del puesto:</h3>
                  <p>{job.jobLevel.value}</p>
                </div>
              )}

              {job.contractDuration && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Duración del contrato:</h3>
                  <p>{job.contractDuration}</p>
                </div>
              )}

              {job.contractType && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Tipo de contrato:</h3>
                  <p>{job.contractType.value}</p>
                </div>
              )}

              {job.studiesMin && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Estudios mínimos:</h3>
                  <p>{job.studiesMin.value}</p>
                </div>
              )}

              {job.experienceMin && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Experiencia mínima:</h3>
                  <p>{job.experienceMin.value}</p>
                </div>
              )}

              {job.minRequirements && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Requisitos mínimos:</h3>
                  {minRequirements.map((paragraph, index) => (
                    <p className="my-2" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {job.desiredRequirements && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Requisitos que suman:</h3>
                  <p>{job.desiredRequirements}</p>
                </div>
              )}

              {job.salaryDescription && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">
                    Descripción del salario:
                  </h3>
                  <p>{job.salaryDescription}</p>
                </div>
              )}

              <div className="flex flex-col">
                <h2 className="font-bold text-xl">Descripción de la oferta:</h2>
                <div>
                  {jobDescription.map((paragraph, index) => (
                    <p className="my-2" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <a
                className="btn hidden md:flex md:my-4"
                href={job?.link}
                title="Aplicar a la oferta"
              >
                Link de la oferta
              </a>
            </div>

            {/* // Extra info and apply  */}
            <div className="md:max-w-[300px]">
              <div className="bg-primaryTransparent min-w-[300px] p-6 border border-black flex flex-col gap-4 text-center items-center">
                <p className="text-white">¿Te interesa? Aplica aquí</p>
                <a
                  className="btn"
                  href={job?.link}
                  target="_blank"
                  title="Aplicar a la oferta"
                >
                  Link de la oferta
                </a>
              </div>

              <div className="flex flex-col my-8 border-t border-primary">
                <h2 className="font-bold text-xl self-center py-4">
                  Sobre {job.profile.name}
                </h2>

                {job.profile.logoUrl && (
                  <a
                    target="_blank"
                    className="flex hover:scale-105 focus:scale-105 transition-transform justify-center"
                    href={job.profile.url}
                    title={job.profile.name}
                  >
                    <picture>
                      <img
                        width="auto"
                        height="200px"
                        src={job.profile.logoUrl}
                        alt={job.profile.name}
                        title={job.profile.name}
                        className="my-4 self-center max-h-[200px]"
                      />
                    </picture>
                  </a>
                )}
                {job.profile.numberWorkers && (
                  <p className="my-2">
                    <strong>Número de trabajadores:</strong>{' '}
                    {job.profile.numberWorkers}
                  </p>
                )}
                {job.profile.description && <p>{job.profile.description}</p>}
                <a
                  className="btn mt-8"
                  href={job.profile.url}
                  title="Aplicar a la oferta"
                  target="_blank"
                >
                  Ver más de la compañía
                </a>
              </div>
              <div>
                <div className="flex flex-wrap mt-8 py-4 border-t border-primary items-center gap-2">
                  <div className="font-bold text-xl">Solicitudes:</div>
                  <p>{job.applications}</p>
                </div>

                {job.vacancies && (
                  <div className="flex flex-wrap mb-4 items-center gap-2">
                    <div className="font-bold text-xl">Vacantes:</div>
                    <p>{job.vacancies}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
