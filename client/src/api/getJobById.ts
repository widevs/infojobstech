import { API_JOB_OFFER_BY_ID } from '@/constants/constants'
import { JobSpecific } from '@/types/types'

export async function getJobById({
  jobId,
}: {
  jobId: string
}): Promise<JobSpecific | null> {
  const url = `${API_JOB_OFFER_BY_ID}${jobId}`

  try {
    const response = await fetch(url)
    // console.log('RESPONSE:', response)
    const data = await response.json()
    // console.log('JOB OFFER:', data)
    return data as JobSpecific
  } catch (error) {
    console.error(`Fetch failed: ${error}`)
    return null
  }
}
