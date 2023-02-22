import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { setLoggedIn, setToken } from '../redux/slices/auth'

import Button from './Button'

const ButtonLogin = ({ className }: { className?: string }) => {
    const { loggedIn, token } = useAppSelector(({ auth }) => auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (token && token !== '') {
            dispatch(setLoggedIn(true))
        } else {
            dispatch(setLoggedIn(false))
        }
    }, [dispatch, token])

    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: 'http://localhost:3000' })
    }
    async function handleGooogleLogout() {
        signOut()
        dispatch(setToken(null))
        localStorage.removeItem('nextauth.message')
    }

    return loggedIn ? (
        <Button
            onClick={handleGooogleLogout}
            className={`hover:bg-primary-500 ${className}`}
            variant="secondary"
        >
            Đăng xuất
        </Button>
    ) : (
        <Button
            onClick={handleGoogleSignin}
            className={`hover:bg-primary-500 ${className}`}
            variant="secondary"
        >
            Đăng nhập với Google
        </Button>
    )
}
export default ButtonLogin
