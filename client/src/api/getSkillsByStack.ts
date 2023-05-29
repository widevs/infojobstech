import { Job } from '@/types/types'
import fakeJobsData from '../../data/jobs.json' // the path to your fake JSON file
import { API_JOB_SKILLS_BY_STACK } from '@/constants/constants'

export async function getSkillsByStack({
  stack,
}: {
  stack: string
}): Promise<any> {
  const url = `${API_JOB_SKILLS_BY_STACK}${stack}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)

    return data
  } catch (error) {
    console.error(`Fetch failed: ${error}`)
    return
  }
}
