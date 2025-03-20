import React from 'react'

import { PiWarningCircle } from 'react-icons/pi'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

import { INoticesProps } from 'hooks/notices'

import Modal from '../Modal'
import Button from '../Button'

import * as S from './styles'

const icons = {
    success: <FiCheckCircle title="Sucesso" className="success-icon" />,
    errors: <FiXCircle title="Erro" className="error-icon" />,
    warn: <PiWarningCircle title="Alerta" className="warning-icon" />
}

interface INoticeModalProps {
    onClose(): void
    onConfirm(): void
    notices: INoticesProps
}

const NoticeModal: React.FC<INoticeModalProps> = ({
    onClose,
    onConfirm,
    notices
}) => {
    return (
        <Modal onClose={onClose} classNameContainer="notice-modal">
            <S.Container className="notification-modal-container">
                {icons[notices.type]}

                <ul>
                    {notices.messages?.map((message, index) => (
                        <li key={index} className={`${notices.type}`}>
                            {message}
                        </li>
                    ))}
                </ul>

                {notices.needConfirmation && (
                    <div className="group-buttons">
                        <Button
                            onClick={onClose}
                            className="button-component-outline"
                        >
                            Cancelar
                        </Button>
                        <Button className="outline" onClick={onConfirm}>
                            Sim
                        </Button>
                    </div>
                )}
            </S.Container>
        </Modal>
    )
}

export default NoticeModal
