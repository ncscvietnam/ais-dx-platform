import React, { FC } from 'react'

interface SelectProps {
    optionSelected?: any
    options: any[]
    onChange: (_value: any) => void
    defaultValue?: any
    placeholder: string
    value: string | undefined
}
const Select: FC<SelectProps> = (props) => {
    const { optionSelected, options, onChange, placeholder, value } = props

    return (
        <div
            className={`sm:text-md block w-auto  rounded-xl border border-gray-300 bg-gray-50 p-3.5 text-lg ${
                !value && 'text-gray-400'
            }`}
        >
            <select
                className="custom-select w-full bg-gray-50 focus-visible:outline-none"
                value={optionSelected}
                defaultValue={'Default'}
                onChange={({ target: { value } }) => {
                    onChange(value)
                }}
            >
                <option disabled value={'Default'}>
                    {' '}
                    -- {placeholder} --{' '}
                </option>
                {Array.isArray(options)
                    ? options.map((option, idx) => (
                          <option
                              value={option.id}
                              key={idx}
                              className="text-black"
                          >
                              {option.name}
                          </option>
                      ))
                    : null}
            </select>
        </div>
    )
}

export default Select
