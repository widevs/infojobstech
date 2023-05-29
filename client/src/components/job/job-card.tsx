import { formatDateOrComputeDifference } from '@/functions/functions'
import { Job, Technology } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import { IconSwitcher } from '../icons/IconSwitcher'

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <li className="job-card flex flex-col items-start justify-start gap-2 border border-primaryDark p-5 rounded-md md:min-h-[310px] relative">
      <h2
        className="font-bold text-md max-w-[210px] line-clamp-2"
        title={job.title}
      >
        {job.title}
      </h2>
      <p className="text-gray-500 text-xs my-0">
        <strong>{job.company}</strong> / {job.city}
      </p>
      {job.min_salary && job.max_salary && (
        <p className="text-gray-500 text-xs my-0">
          <strong>Salario:</strong> {job.min_salary} € - {job.max_salary} €
        </p>
      )}
      <p className="text-gray-500 text-xs my-0">
        <strong>Publicado:</strong>{' '}
        {formatDateOrComputeDifference(job.createdAt)}
      </p>

      <Link
        className="absolute right-5 top-6 hover:scale-105 focus:scale-105 transition-transform flex"
        title={`Ver todas las ofertas de ${job.stack}`}
        href={`/stacks/${job.stack}`}
      >
        <IconSwitcher classCustom="w-6 h-auto" icon={job.stack} />
      </Link>

      <div className="flex flex-col pt-4 gap-4 w-full mt-auto">
        {job.skills && (
          <div className="flex flex-wrap items-center gap-2 max-w-[450px]">
            {job.skills.slice(0, 3).map((technology: Technology | string) => (
              <span
                key={technology}
                className="flex bg-gray-200 rounded-full border px-3 py-1 text-[12px] flex-nowrap font-semibold text-gray-700"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        <Link
          title={`Ver más info sobre ${job.title}`}
          className="btn text-xs"
          href={`jobs/${job.id}`}
        >
          Ver más info
        </Link>
      </div>
    </li>
  )
}
