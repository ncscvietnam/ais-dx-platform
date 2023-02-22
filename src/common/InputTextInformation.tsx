import React from 'react'

type InputTextInformationProps = {
    className?: string
    disabled?: boolean
    padding?: string
    children?: React.ReactNode
    onChange: (_str: string) => void
    onKeyDown?: () => void
    value?: string
    placeholder?: string
    maxlength?: number
    width?: string
}

const InputTextInformation = ({
    className = '',
    disabled = false,
    // padding = '',
    // value = '',
    placeholder = '',
    onChange,
    onKeyDown,
    children,
    maxlength = 256,
    width = 'w-auto md:w-4/5',
}: InputTextInformationProps) => {
    const handleEnter = (e: { keyCode: number } | undefined) => {
        if (e?.keyCode === 13) {
            if (onKeyDown) onKeyDown()
        }
    }
    return (
        <div className=" flex w-full flex-row  items-center py-3">
            <input
                autoComplete="off"
                onKeyDown={(e) => handleEnter(e)}
                onChange={(e) => onChange(e.target.value)}
                className={` ${className} ${width}
         sm:text-md block h-32 w-full rounded-xl border border-gray-300  bg-gray-50 p-3.5 text-gray-900 `}
                name="url"
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxlength}
            />
            {children}
        </div>
    )
}

export default InputTextInformation
