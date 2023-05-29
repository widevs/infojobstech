import { Job, Stack } from '@/types/types'
import { convertDateToStandardFormat } from './utils'

export function getAllStacks(jobs: Job[]) {
  const stacks = new Set(jobs.map((job) => job.stack))
  return Array.from(stacks)
}

export function filterJobsByStack(jobs: Job[], stack: Stack) {
  return jobs.filter((job) => job.stack === stack)
}

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function filterJobsByCity(jobs: Job[], city: string) {
  const lowerCaseCity = removeAccents(city.toLowerCase())
  return jobs.filter(
    (job) =>
      removeAccents(job.city.toLowerCase()) === lowerCaseCity ||
      removeAccents(job.city.toLowerCase()).startsWith(lowerCaseCity)
  )
}

/**
 *
 * @param input Date in ISO format
 * @returns Formatted date or difference in hours/days
 */
export function formatDateOrComputeDifference(input: string): string {
  // Parse the input string as a Date object
  const inputDate = new Date(input)
  const currentDate = new Date()

  const difference = currentDate.getTime() - inputDate.getTime()

  const hoursDifference = Math.floor(difference / 1000 / 60 / 60)
  const daysDifference = Math.floor(hoursDifference / 24)

  if (hoursDifference < 0) return convertDateToStandardFormat(input)

  if (hoursDifference < 1) {
    return `Hace menos de 1 hora`
  }

  if (hoursDifference < 2) {
    return `Hace 1 hora`
  }

  if (hoursDifference < 48) {
    return `Hace ${hoursDifference} horas`
  }

  if (hoursDifference < 168) {
    // less than 7 days
    return `Hace ${daysDifference} días`
  }

  return convertDateToStandardFormat(input)
}

export function calculateAverageSalariesByStack(jobOffers: Job[]): {
  [key: string]: number
} {
  const stackSums: { [key: string]: number } = {
    frontend: 0,
    backend: 0,
    fullstack: 0,
    data: 0,
    mobile: 0,
    devops: 0,
  }

  const stackCounts: { [key: string]: number } = {
    frontend: 0,
    backend: 0,
    fullstack: 0,
    data: 0,
    mobile: 0,
    devops: 0,
  }

  // Iterate over job offers
  for (let job of jobOffers) {
    if (job.min_salary && job.max_salary) {
      // Calculate average salary for this job offer
      const avgSalary = (Number(job.min_salary) + Number(job.max_salary)) / 2

      // Add to sum and increment count for the stack
      stackSums[job.stack] += avgSalary
      stackCounts[job.stack]++
    }
  }

  // Calculate and return averages
  const stackAvgs: { [key: string]: number } = {}
  for (let stack in stackSums) {
    if (stackCounts[stack] > 0) {
      stackAvgs[stack] = stackSums[stack] / stackCounts[stack]
    } else {
      stackAvgs[stack] = 0
    }
  }

  return stackAvgs
}
