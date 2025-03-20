import React, { PropsWithChildren } from 'react'

import { NoticesProvider } from './notices'

const hooks: React.FC<PropsWithChildren> = ({ children }) => {
    return <NoticesProvider>{children}</NoticesProvider>
}

export default hooks

export * from './notices'
