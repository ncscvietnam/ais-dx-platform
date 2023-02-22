import React from 'react'

// import IconSearch from '../../../assets/icons/search.svg'
// import { Input } from './Input'
type SearchProps = {
    placeholder?: string
    className?: string
    onChange?: (_event: any) => void
    onSubmit?: (_event: any) => void
    value?: string
    searching?: boolean
    icon?: any
}

const SearchDropdown: React.FC<SearchProps> = ({
    // placeholder,
    className,
    // onChange,
    // onSubmit,
    // value,
}) => {
    return (
        <div className={`${className}`}>
            {/* <Input placeholder="Search other domain" onChange={onChange} value={value} icon={<Image src={IconSearch} />} /> */}
        </div>
    )
}

export default SearchDropdown
