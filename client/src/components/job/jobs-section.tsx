'use client'

import { Job, Stack } from '@/types/types'
import React, { useEffect, useState } from 'react'
import JobsFilter from './jobs-filter'
import { JobsList } from './jobs-list'
import { getTodayInSpanishFormat } from '@/functions/utils'
import { Logo } from '../logo'
import { getJobsData } from '@/api/getJobsData'
import { notFound } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'

const JobsSection = ({
  showStackFilters,
  stack,
  title,
  numberOfJobsPerPage,
}: {
  showStackFilters?: boolean
  stack?: Stack
  title?: string
  numberOfJobsPerPage?: number
}) => {
  const [selectedStack, setSelectedStack] = useState<Stack | null>(
    stack || null
  )
  const [location, setLocation] = useState<string>('')
  const selectedLocation = useDebounce(location, 400)

  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    const fetchData = async () => {
      try {
        const jobsData = await getJobsData()
        setJobs(jobsData || [])
        setLoading(false)
      } catch (error) {
        setError('There was an issue with the fetch of the jobs')
      } finally {
        document.body.classList.remove('overflow-hidden')
      }
    }

    fetchData()

    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  if (loading) {
    return (
      <div className="h-screen flex flex-col gap-8 fixed top-0 left-0 overflow-hidden overflow-y-hidden w-screen m-auto justify-center items-center bg-white z-10 px-4">
        <Logo customClass="text-primary w-48 md:w-64 h-auto" />
        <p className="text-xl font-bold text-center max-w-[600px]">
          El sector IT en España es como un gran código en constante evolución.
          ¡Estás a un commit de ser parte de él!
        </p>
      </div>
    )
  }

  if (error) {
    notFound()
  }

  return (
    <section className="w-full">
      <h1 className="self-start text-left font-bold text-3xl md:text-4xl max-w-[900px] mb-6">
        {title ||
          `Últimas ofertas de trabajo tecnológicas a ${getTodayInSpanishFormat()}`}
      </h1>
      {showStackFilters && (
        <JobsFilter
          setSelectedStack={setSelectedStack}
          selectedStack={selectedStack}
          jobs={jobs}
        />
      )}
      <div className="flex flex-col my-6">
        <label htmlFor="location">Busco en: </label>
        <input
          className="border border-black rounded-md w-[200px] p-4 my-2"
          id="location"
          name="location"
          type="text"
          placeholder="Toda España"
          defaultValue={selectedLocation}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <JobsList
        numberOfJobsPerPage={numberOfJobsPerPage}
        jobs={jobs}
        selectedStack={selectedStack}
        selectedLocation={selectedLocation}
      />
    </section>
  )
}

export default JobsSection
