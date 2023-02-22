import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

type InputTextProps = {
    className?: string
    disabled?: boolean
    padding?: string
    children?: React.ReactNode
    onChange: (_event: string) => void
    onKeyDown?: () => void
    value?: string
    placeholder?: string
    maxlength?: number
    width?: string
    type?: string
    defaultValue?: string
}

const InputText = ({
    className = '',
    disabled = false,
    // padding = '',
    // value = '',
    placeholder = '',
    onChange,
    onKeyDown,
    type = 'text',
    children,
    maxlength = 256,
    width = 'w-auto md:w-96',
    defaultValue,
}: InputTextProps) => {
    const handleEnter = (e: { keyCode: number } | undefined) => {
        if (e?.keyCode === 13) {
            if (onKeyDown) onKeyDown()
        }
    }
    const isPasswordField = type === 'password'
    const [isHidden, setIsHidden] = useState(type === 'password')

    return (
        <div className="relative flex flex-row items-center justify-center">
            <input
                autoComplete="off"
                onKeyDown={(e) => handleEnter(e)}
                onChange={(e) => onChange(e.target.value)}
                className={`${className} ${width}
                sm:text-md block  flex-1 
				rounded-lg border  border-gray-300  bg-gray-50  p-3.5 text-gray-900 outline-none `}
                name="url"
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxlength}
                type={type}
                defaultValue={defaultValue}
            />
            {children}
            {isPasswordField && (
                <div
                    onClick={() => setIsHidden(!isHidden)}
                    className="mx-3 cursor-pointer"
                >
                    {isHidden ? (
                        <EyeSlashIcon width={25} color={'black'} />
                    ) : (
                        <EyeIcon width={25} color={'black'} />
                    )}
                </div>
            )}
        </div>
    )
}

export default InputText
