import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

import { filters } from '../data/filters'

const Filters = () => {
  return (
    <div>
      <form action="">
        {filters.map((section) => (
          <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6" defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex items-center justify-between">
                  <span>{section.name}</span>
                  <span className="flex items-center">
                    {open ? (
                      <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </div>
  )
}

export default Filters
