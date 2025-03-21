import { useCallback, useEffect, useState } from 'react'

import { FiArrowDown } from 'react-icons/fi'

import { IComponentsProps, IItemsProps } from 'store/modules/home'

import Button from 'components/common/Button'
import Grid from 'components/Templates/Grid'

import * as S from './styles'

interface IShowcaseAside {
    component: IComponentsProps
}

const ShowcaseGrid = ({ component }: IShowcaseAside) => {
    const [items, setItems] = useState<IItemsProps[]>([])
    const [disabledButton, setDisabledButton] = useState(false)
    const [quantity, setQuantity] = useState(component.quantidadePreCarregada)

    useEffect(() => {
        setItems(component.itens.slice(0, quantity))

        if (quantity >= component.itens.length) {
            setDisabledButton(true)
        }
    }, [component, quantity])

    const handleShowMore = useCallback(() => {
        if (quantity < component.itens.length) {
            setQuantity(state => state + component.quantidadePreCarregada)
        }
    }, [component, quantity])

    return (
        <S.Container className="showcase-grid">
            <Grid products={items} />

            {!disabledButton && component.quantidadePreCarregada > 0 && (
                <Button onClick={handleShowMore}>
                    Ver mais
                    <FiArrowDown />
                </Button>
            )}
        </S.Container>
    )
}

export default ShowcaseGrid
