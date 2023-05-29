'use client'

import { animate, stagger } from 'motion'
import { useEffect, useState } from 'react'
import { IconSwitcher } from '../icons/IconSwitcher'
import { Stack, Technology } from '@/types/types'
import Link from 'next/link'

type OptionProps = {
  id: number
  icon: Technology | Stack | string
  label: string
  title: string
  description?: string
  cta?: {
    label: string
    intern: boolean
    url: string
  }
}

type DataProps = {
  data: {
    headline: string
    options: OptionProps[]
  }
  numberOfCols?: number
}

export default function InteractiveElement({
  data,
  numberOfCols = 3,
}: DataProps) {
  const [selectedOption, setSelectedOption] = useState({} as OptionProps)
  const [viewSelected, setViewSelected] = useState(false)

  const handleOptionSelection = (option: OptionProps) => {
    setSelectedOption(option)
    setViewSelected(true)
  }

  useEffect(() => {
    const allButtons = document.querySelectorAll('.animated')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(
            allButtons,
            { opacity: [0, 1], scale: [0, 1] },
            { delay: stagger(0.1), easing: 'ease-in-out' }
          )
          observer.unobserve(entry.target)
        }
      })
    })

    allButtons.forEach((button) => {
      observer.observe(button)
    })

    return () => {
      if (allButtons.length > 0) {
        allButtons.forEach((button) => {
          observer.unobserve(button)
        })
      }
    }
  }, [])

  return (
    <section className="w-full my-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-12 md:my-2 min-h-[20vh] md:min-h-[35vh]">
        {!viewSelected ? (
          <>
            <h2 className="text-3xl md:text-5xl max-w-[350px] lg:max-w-[500px] font-bold mb-4 text-center md:text-left">
              {data.headline}
            </h2>
            <div
              className={`justify-center gap-6 grid grid-cols-2 ${
                numberOfCols == 3 ? 'md:grid-cols-3' : ''
              } gap-6 `}
            >
              {data.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelection(option)}
                  className="animated bg-white border rounded-3xl flex flex-col items-center justify-center min-w-[125px] min-h-[125px] gap-4 hover:bg-accentLight focus:bg-accent"
                >
                  <IconSwitcher
                    classCustom="w-8 h-auto"
                    icon={option.icon as Stack | Technology}
                  />
                  <div>{option.label}</div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto text-center relative p-12 lg:p-6">
            <button
              className="bg-primary hover:bg-primaryDark focus:bg-primaryDark text-white p-4 w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-2 top-0"
              onClick={() => setViewSelected(false)}
            >
              x
            </button>
            <h2 className="text-3xl font-bold mb-4 max-w-[600px] ">
              {selectedOption.title}
            </h2>
            <p className="text-xl mb-8">{selectedOption.description}</p>
            {selectedOption.cta?.url &&
              selectedOption.cta?.label &&
              (selectedOption.cta?.intern ? (
                <Link
                  href={selectedOption.cta.url}
                  className="border btn px-4 py-2 rounded mt-4"
                >
                  {selectedOption.cta.label}
                </Link>
              ) : (
                <a
                  href={selectedOption.cta.url}
                  className="border btn px-4 py-2 rounded mt-4"
                >
                  {selectedOption.cta.label}
                </a>
              ))}
          </div>
        )}
      </div>
    </section>
  )
}
