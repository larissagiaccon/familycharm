import React, { useCallback, useEffect, useState } from 'react'

// import { useNotices } from 'hooks'; // TODO ADICIONAR HOOK

import { Container } from './styles'

interface IItemCounterProps {
    quantityMax?: number
    quantityMin?: number
    quantity?: number
    setQuantity(quantity: number): void
    handleIncrementItem?(): void
    handleDecrementItem?(): void
}

const ItemCounter: React.FC<IItemCounterProps> = ({
    quantityMax,
    quantityMin = 1,
    quantity = 1,
    setQuantity,
    handleIncrementItem,
    handleDecrementItem
}) => {
    //   const { addNotices } = useNotices();

    const handleChangeQuantity = useCallback(
        (type: string) => {
            const newQuantity = type === 'minus' ? quantity - 1 : quantity + 1

            setQuantity(newQuantity)
        },
        [quantity]
    )

    const handleSetQuantity = useCallback((quantityItens: Number) => {
        if (Number.isNaN(Number(quantityItens))) {
            // addNotices({
            //   messages: ['Informe um número válido'],
            //   type: 'allMessages',
            // });
        } else {
            setQuantity(Number(quantityItens))
        }
    }, [])

    return (
        <Container className="item-counter">
            <button
                type="button"
                disabled={handleDecrementItem ? false : quantity <= quantityMin}
                onClick={() => {
                    if (handleDecrementItem) {
                        if (quantity > 1) handleChangeQuantity('minus')
                        handleDecrementItem()
                    } else handleChangeQuantity('minus')
                }}
            >
                -
            </button>
            <input
                type="text"
                value={quantity}
                onChange={e => handleSetQuantity(Number(e.target.value))}
            />
            <button
                type="button"
                disabled={!!quantityMax && quantity >= quantityMax}
                onClick={() => {
                    handleChangeQuantity('plus')
                    if (handleIncrementItem) handleIncrementItem()
                }}
            >
                +
            </button>
        </Container>
    )
}

export default ItemCounter
