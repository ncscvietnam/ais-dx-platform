import React from 'react'
import Footer from '../../pages/Footer'
import Header from '../../pages/Header'
type LayoutPageProps = {
    children?: React.ReactNode
}
const Layout = ({ children }: LayoutPageProps) => {
    return (
        <div className="flex flex-col ">
            <header>
                {' '}
                <Header />
            </header>
            <main className="h-auto  ">{children}</main>
            <footer className="relative  ">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
