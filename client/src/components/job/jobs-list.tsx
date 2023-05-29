import { Job, Stack } from '@/types/types'
import React, { useEffect, useMemo } from 'react'
import { JobCard } from './job-card'
import usePagination from '@/hooks/usePagination'
import { filterJobsByCity, filterJobsByStack } from '@/functions/functions'
import { animate, stagger } from 'motion'
import { STACKS } from '@/constants/constants'

type JobsListProps = {
  jobs: Job[]
  selectedStack: Stack | null
  selectedLocation: string
  numberOfJobsPerPage?: number
}

export const JobsList = ({
  jobs,
  selectedStack,
  numberOfJobsPerPage,
  selectedLocation,
}: JobsListProps) => {
  const filteredJobs = useMemo(() => {
    let filtered = jobs

    if (selectedLocation && selectedLocation.length > 0) {
      filtered = filterJobsByCity(filtered, selectedLocation)
    }

    if (selectedStack !== null) {
      filtered = filterJobsByStack(filtered, selectedStack)
    }

    filtered = [...filtered].sort((a, b) => {
      if (a.stack === STACKS.OTHER && b.stack !== STACKS.OTHER) return 1
      if (b.stack === STACKS.OTHER && a.stack !== STACKS.OTHER) return -1

      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return dateB.getTime() - dateA.getTime()
    })

    return filtered
  }, [jobs, selectedStack, selectedLocation])

  const initialState = {
    currentPage: 1,
    pageSize: window.innerWidth > 768 ? numberOfJobsPerPage || 6 : 3,
    total: filteredJobs.length,
  }
  const [state, actions] = usePagination(initialState)

  const isPrevDisabled = state.currentPage === 1
  const isNextDisabled =
    state.currentPage === Math.ceil(filteredJobs.length / state.pageSize) ||
    filteredJobs.length === 0

  useEffect(() => {
    if (initialState.currentPage !== 1) actions.jumpToPage(1)
    const li = document.querySelectorAll('.job-card')
    if (!li[0]) return

    animate(
      li,
      { opacity: [0, 1], scale: [0, 1] },
      { delay: stagger(0.1), easing: 'ease-in-out' }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStack, jobs])

  const displayedJobsPaginated = useMemo(() => {
    const start = (state.currentPage - 1) * state.pageSize
    const end = state.currentPage * state.pageSize
    return filteredJobs.slice(start, end)
  }, [filteredJobs, state.currentPage, state.pageSize])

  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {displayedJobsPaginated.length > 0 ? (
          displayedJobsPaginated.map((job, index) => (
            <JobCard key={`${job.id}_${index}`} job={job} />
          ))
        ) : (
          <p>
            Por ahora no tenemos ofertas que se ajusten a esos criterios. Lo
            sentimos.
          </p>
        )}
      </ul>
      <div className="flex flex-col mt-12">
        <div className="flex justify-center gap-8">
          <button
            onClick={actions.prevPage}
            disabled={isPrevDisabled}
            className="disabled:text-gray-300 disabled:pointer-events-none"
          >
            Ofertas anteriores
          </button>
          <button
            onClick={actions.nextPage}
            disabled={isNextDisabled}
            className="disabled:text-gray-300 disabled:pointer-events-none"
          >
            Siguientes ofertas
          </button>
        </div>
      </div>
    </>
  )
}
