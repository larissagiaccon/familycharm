import {
    MouseEvent,
    useCallback,
    useEffect,
    useState,
    PropsWithChildren
} from 'react'

import { FiX } from 'react-icons/fi'

import * as S from './styles'

interface IModalProps {
    onClose(): void
    withScroll?: boolean
    canClose?: boolean
    classNameContainer?: string
}

const Modal = ({
    onClose,
    withScroll = false,
    canClose = true,
    classNameContainer = '',
    children
}: PropsWithChildren<IModalProps>) => {
    const [itsClosing, setItsClosing] = useState(false)
    const handleControlPropagation = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
        },
        []
    )

    const handleCloseModal = useCallback(() => {
        setItsClosing(true)
        setTimeout(() => {
            onClose()
        }, 200)
    }, [onClose])

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100vh'

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.height = 'initial'
        }
    }, [])

    return (
        <S.ContainerWrapper onClick={handleCloseModal} role="presentation">
            <S.Container
                onClick={handleControlPropagation}
                className={`modal-container${
                    classNameContainer ? ' ' + classNameContainer : ''
                }${canClose ? ' canClose' : ''}${itsClosing ? ' closing' : ''}`}
                withScroll={withScroll}
            >
                {canClose && (
                    <FiX className="close-icon" onClick={handleCloseModal} />
                )}

                <div
                    className={`modal-content${
                        withScroll ? ' withScroll' : ''
                    }`}
                >
                    {children}
                </div>
            </S.Container>
        </S.ContainerWrapper>
    )
}

export default Modal
