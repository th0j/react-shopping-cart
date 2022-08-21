import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'

import { useProducts } from '../../../contexts/products'
import { filters as filterAvailable } from '../data/filters'

const Filters = () => {
  const { products, filters, setFilters } = useProducts()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let sizes = [...filters]

    if (e.target.checked) sizes = [...filters, e.target.value]
    else sizes.splice(filters.indexOf(e.target.value), 1)

    setFilters(sizes)
  }

  useEffect(() => {}, [])

  return (
    <div>
      <form action="">
        <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex items-center justify-between">
                <span>Size</span>
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
                  {filterAvailable.map((value: string, index: number) => (
                    <div key={value} className="flex items-center">
                      <input
                        id={`filter-size-${index}`}
                        name="size[]"
                        defaultValue={value}
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`filter-size-${index}`} className="ml-3 text-sm text-gray-600">
                        {value}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </form>
    </div>
  )
}

export default Filters
