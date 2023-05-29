const MONTH_NAMES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

export function firstLetterUppercase(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function getTodayInSpanishFormat(showYear?: boolean): string {
  const date = new Date()
  const day = date.getDate().toString().padStart(2, '0')
  const month = MONTH_NAMES[date.getMonth()]

  return `${day} de ${month}${showYear ? ` de ${date.getFullYear()}` : ''}`
}

export function convertDateToStandardFormat(input: string): string {
  const date = new Date(input)
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = date.getUTCFullYear()

  return `${day}/${month}/${year}`
}

export const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()} €`

export function wait(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}
