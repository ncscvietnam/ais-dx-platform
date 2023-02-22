import Head from 'next/head'
import React from 'react'

type LayoutPageProps = {
    children?: React.ReactNode
    title?: any
}
const LayoutPage = ({ children, title }: LayoutPageProps) => {
    return (
        <div>
            <Head>
                <title>{title || 'Threat Intelligence'}</title>
                <link
                    rel="icon"
                    href="https://cyberdefenses.com/wp-content/uploads/2017/01/cyberdefenses-shield-large.png"
                />
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default LayoutPage
