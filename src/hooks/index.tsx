import React, { PropsWithChildren } from 'react'

import { NoticesProvider } from './notices'
import { MiniCartProvider } from './minicart'

const hooks: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <NoticesProvider>
            <MiniCartProvider>{children}</MiniCartProvider>
        </NoticesProvider>
    )
}

export default hooks

export * from './notices'
export * from './minicart'
