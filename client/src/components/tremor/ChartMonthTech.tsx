'use client'

import { Card, Title, AreaChart } from '@tremor/react'

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('us').format(number).toString()
}

type Technology =
  | 'React'
  | 'Qwik'
  | 'Angular'
  | 'Vue'
  | 'PHP'
  | 'Python'
  | 'Node'
  | 'JavaScript'
  | 'Dart'

type ChartData = {
  date: string
} & {
  [Key in Technology]?: number
}

export const ChartMonthTech = ({
  data,
  title = 'Título de la gráfica por defecto',
}: {
  data: ChartData[]
  title?: string
}) => (
  <Card className="my-4 container-wrapper">
    <Title>{title}</Title>
    <AreaChart
      className="h-72 mt-4"
      data={data}
      index="date"
      categories={['Python', 'React', 'JavaScript', 'Qwik', 'PHP', 'Dart']}
      colors={['blue', 'purple', 'red', 'green', 'amber', 'cyan']}
      valueFormatter={dataFormatter}
    />
  </Card>
)
