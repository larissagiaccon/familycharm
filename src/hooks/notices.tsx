import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useState
} from 'react'

import NoticeModal from 'components/common/NoticeModal'
import { objectIsEmpty } from 'utils/objectEmpty'

export interface INoticesProps {
    messages: Array<string>
    type: 'success' | 'warn' | 'errors' | 'allMessages'
    needConfirmation?: boolean
    onlyClose?: boolean
    action?(): void
}

interface INoticesContextData {
    addNotices(data: INoticesProps): void
}

const NoticesContext = createContext<INoticesContextData>(
    {} as INoticesContextData
)

export const NoticesProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [notices, setNotices] = useState<INoticesProps>({} as INoticesProps)

    const addNotices = useCallback((data: INoticesProps) => {
        setNotices(data)
    }, [])

    const removeNotices = useCallback(() => {
        if (notices.onlyClose && typeof notices.action === 'function')
            notices.action()
        setNotices({} as INoticesProps)
    }, [notices])

    const onConfirm = useCallback(() => {
        if (typeof notices.action === 'function') notices.action()
        removeNotices()
    }, [notices, removeNotices])

    return (
        <NoticesContext.Provider value={{ addNotices }}>
            {children}
            {!objectIsEmpty(notices) && (
                <NoticeModal
                    notices={notices}
                    onClose={removeNotices}
                    onConfirm={onConfirm}
                />
            )}
        </NoticesContext.Provider>
    )
}

export function useNotices(): INoticesContextData {
    const context = useContext(NoticesContext)

    return context
}
