import React, { PropsWithChildren } from 'react'

import { AuthProvider } from './auth'
import { NoticesProvider } from './notices'
import { MiniCartProvider } from './minicart'

const hooks: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <AuthProvider>
            <NoticesProvider>
                <MiniCartProvider>{children}</MiniCartProvider>
            </NoticesProvider>
        </AuthProvider>
    )
}

export default hooks

export * from './auth'
export * from './notices'
export * from './minicart'
