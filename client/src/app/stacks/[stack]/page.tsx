import { getSkillsByStack } from '@/api/getSkillsByStack'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import HeroGeneral from '@/components/hero/hero-general'
import JobsSection from '@/components/job/jobs-section'
import { getTodayInSpanishFormat } from '@/functions/utils'
import { Stack } from '@/types/types'
import { ChartMonthTech } from '@/components/tremor/ChartMonthTech'
import { BarMostPopularSkills } from '@/components/tremor/BarMostPopularSkills'
import { ConnectionError } from '@/functions/errors'
import BackButton from '@/components/back-button/back-button'
import { STACKS } from '@/constants/constants'

const validStacks: Set<Stack> = new Set(Object.values(STACKS))

const isStackValid = (stack: string): stack is Stack => {
  return validStacks.has(stack as Stack)
}

async function getStackData(stack: Stack) {
  if (!isStackValid(stack)) return notFound()

  try {
    const data = await getSkillsByStack({ stack })
    return data
  } catch (error) {
    throw new ConnectionError('There was an issue with the fetch of the stack')
  }
}

export function generateMetadata({
  params,
}: {
  params: { stack: Stack }
}): Metadata {
  return {
    title: `Ofertas de ${params.stack}`,
    description: `Descubre aquí lo fácil que es encontrar un nuevo empleo en el mundo ${params.stack}`,
    keywords: [`${params.stack}`, `desarrollo ${params.stack}`],
  }
}

export default async function Page({ params }: { params: { stack: Stack } }) {
  const skills = await getStackData(params.stack)

  return (
    <main className="flex flex-col gap-12 pb-16">
      <HeroGeneral iconStack={params.stack} />

      <div className="container-wrapper">
        <BackButton classCustom="w-fit my-6" />

        <JobsSection
          title={`Últimas ofertas ${
            params.stack
          } a ${getTodayInSpanishFormat()}`}
          showStackFilters={false}
          stack={params.stack}
          numberOfJobsPerPage={9}
        />

        <div className="my-12">
          <BarMostPopularSkills
            title={`25 Skills más demandadas en ${params.stack}`}
            skills={skills}
          />

          <ChartMonthTech
            title="Tecnologías con más ofertas de trabajo"
            data={[
              {
                date: 'Enero 23',
                Python: 3892,
                React: 2318,
                JavaScript: 1756,
                Qwik: 1203,
                PHP: 603,
                Dart: 5000,
              },
              {
                date: 'Febrero 23',
                Python: 3789,
                React: 2810,
                JavaScript: 1789,
                Qwik: 2019,
                PHP: 1603,
                Dart: 5000,
              },
              {
                date: 'Marzo 23',
                Python: 3922,
                React: 1256,
                JavaScript: 1989,
                Qwik: 1876,
                PHP: 403,
                Dart: 3000,
              },
              {
                date: 'Abril 23',
                Python: 4000,
                React: 2156,
                JavaScript: 1210,
                Qwik: 2609,
                PHP: 2603,
                Dart: 5000,
              },
              {
                date: 'Mayo 23',
                Python: 3967,
                React: 2378,
                JavaScript: 356,
                Qwik: 3500,
                PHP: 4603,
                Dart: 5000,
              },
            ]}
          />
        </div>
      </div>
    </main>
  )
}
