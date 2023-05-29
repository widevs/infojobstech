'use client'

import { Card, Title, BarChart } from '@tremor/react'

type SkillsEntry = {
  name: string
  'Skills más demandadas': number
}

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('us').format(number).toString()
}

function transformDictionary(dict: Record<string, number>): SkillsEntry[] {
  return Object.entries(dict)
    .slice(0, 25)
    .map(([name, count]) => ({
      name: name.trim(),
      'Skills más demandadas': count,
    }))
}

export const BarMostPopularSkills = ({
  skills,
  title = 'Título de la gráfica por defecto',
}: {
  skills: { [key: string]: number }
  title?: string
}) => {
  const data: SkillsEntry[] = transformDictionary(skills)

  return (
    <Card className="my-4 container-wrapper">
      <Title>{title}</Title>
      <BarChart
        className="mt-6"
        data={data}
        index="name"
        categories={['Skills más demandadas']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        showLegend={false}
      />
    </Card>
  )
}
