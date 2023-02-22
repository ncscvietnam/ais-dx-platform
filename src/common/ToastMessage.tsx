import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/solid'
import { toast, ToastOptions } from 'react-toastify'

function createToast(content: string, options?: ToastOptions) {
    const commonOpts: ToastOptions = {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // progress: undefined,
        theme: 'light',
    }

    return toast(content, {
        ...commonOpts,
        ...options,
    })
}

export const success = (content: string, options?: ToastOptions) => {
    return createToast(content, {
        icon: <CheckCircleIcon color="green" />,
        type: 'success',
        ...options,
    })
}

export const error = (content: string, options?: ToastOptions) => {
    return createToast(content, {
        icon: <ExclamationCircleIcon color="red" />,
        type: 'error',
        ...options,
    })
}

export const warning = (content: string, options?: ToastOptions) => {
    return createToast(content, {
        icon: <InformationCircleIcon color="blue" />,
        type: 'warning',
        ...options,
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    success,
    error,
    warning,
}
