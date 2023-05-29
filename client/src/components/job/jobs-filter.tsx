import { getAllStacks } from '@/functions/functions'
import { Job, Stack } from '@/types/types'
import { IconSwitcher } from '../icons/IconSwitcher'
import { STACKS } from '@/constants/constants'

type JobsFilterProps = {
  jobs: Job[] | null
  selectedStack: Stack | null
  setSelectedStack: (stack: Stack | null) => void
}

const JobsFilter = ({
  jobs,
  selectedStack,
  setSelectedStack,
}: JobsFilterProps) => {
  const handleStackClick = (stack: Stack | null) => {
    setSelectedStack(stack)
  }

  if (!jobs) return null

  return (
    <div className="flex flex-wrap gap-4 my-4 items-start w-full">
      <button
        onClick={() => handleStackClick(null)}
        className={`${
          selectedStack === null ? 'bg-primary text-white' : ''
        } py-2 px-4 rounded-md border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
      >
        Todos
      </button>
      {getAllStacks(jobs)
        .filter((stack) => stack !== STACKS.OTHER)
        .sort()
        .map((stack, index) => (
          <button
            className={`${
              selectedStack === stack
                ? 'bg-primary text-white hover:bg-primary focus:bg-primary border-primaryDark active:bg-primary'
                : ''
            } flex items-center gap-2 py-2 px-4 rounded-md border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
            key={index}
            onClick={() => handleStackClick(stack)}
          >
            <IconSwitcher classCustom="w-6 h-auto" icon={stack} />
            {stack}
          </button>
        ))}
    </div>
  )
}

export default JobsFilter
