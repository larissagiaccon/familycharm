import { useCallback, useState } from 'react'

import Link from 'next/link'
import { FiEdit, FiTrash } from 'react-icons/fi'

import ItemCounter from 'components/common/ItemCounter'

import * as S from './styles'

export default function MiniCartProductItem({ product }) {
    const [quantity, setQuantity] = useState(product.quantidade)

    const handleDecrementItem = useCallback(() => {}, [])

    const handleIncrementItem = useCallback(() => {}, [])

    return (
        <S.Container className="layout">
            <div className="icons-group">
                <FiTrash title="Remover item" />
                <FiEdit title="Mudar opção" />
            </div>

            <Link href={product.permalink} passHref>
                <a href="">
                    <img
                        src={product.imagemPrincipal.pequena}
                        alt={product.nome}
                        className="featured-product-image"
                    />
                </a>
            </Link>

            <div className="info">
                <span>{product.nome}</span>
                <span>COR / TAMANHO</span>
                <span>{product.precoPorTexto}</span>

                <ItemCounter
                    quantityMin={product.quantidadeMinimaVenda}
                    quantityMax={product.quantidadeMaximaVenda}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    handleIncrementItem={handleIncrementItem}
                    handleDecrementItem={handleDecrementItem}
                />
            </div>
        </S.Container>
    )
}
