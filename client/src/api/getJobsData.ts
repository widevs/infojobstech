import { Job } from '@/types/types'
import fakeJobsData from '../../data/jobs.json' // the path to your fake JSON file
import { API_ALL_JOBS } from '@/constants/constants'

export async function getJobsData(): Promise<Job[] | null> {
  const url = API_ALL_JOBS

  try {
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)

    return data
  } catch (error) {
    console.error(`Fetch failed: ${error}`)
    return null
  }
}

// https://infojobstech-api.onrender.com/api/offers
