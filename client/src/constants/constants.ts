import { Stack } from '@/types/types'

export const API_JOB_OFFER_BY_ID =
  'https://infojobstech-api.onrender.com/api/offers/'
export const API_JOB_SKILLS_BY_STACK =
  'https://infojobstech-api.onrender.com/api/offers/stack/'
export const API_ALL_JOBS = 'https://infojobstech-api.onrender.com/api/offers'

export const STACKS: Record<string, Stack> = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  FULLSTACK: 'fullstack',
  DATA: 'data',
  DEVOPS: 'devops',
  MOBILE: 'mobile',
  OTHER: 'otro',
}
