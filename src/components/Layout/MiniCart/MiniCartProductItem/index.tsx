import { useCallback, useState } from 'react'

import Link from 'next/link'
import { FiEdit, FiTrash } from 'react-icons/fi'

import { useNotices } from 'hooks'
import {
    IVariationItemProps,
    IVariationsSizesAvailableProps
} from 'store/modules/product'

import Modal from 'components/common/Modal'
import Button from 'components/common/Button'
import ItemCounter from 'components/common/ItemCounter'

import { variationsColors } from 'mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from './styles'

export default function MiniCartProductItem({ product }) {
    const { addNotices } = useNotices()

    const [sizeSelected, setSizeSelected] =
        useState<IVariationsSizesAvailableProps>()
    const [featuredProduct, setFeaturedProduct] =
        useState<IVariationItemProps>(product)
    const [quantity, setQuantity] = useState(product.quantidade)
    const [showChangeOption, setShowChangeOption] = useState(product.quantidade)

    const handleDeleteItem = useCallback(() => {
        addNotices({
            messages: [
                `Você realmente deseja remover o item "${product.nome}" do seu carrinho?`
            ],
            type: 'warn',
            needConfirmation: true,
            action: () => {
                // TODO ADICIONAR FUNÇÃO DE DELETAR ITEM
            }
        })
    }, [addNotices, product])

    const handleDecrementItem = useCallback(() => {}, [])

    const handleIncrementItem = useCallback(() => {}, [])

    return (
        <S.Container className="layout">
            <div className="icons-group">
                <FiTrash title="Remover item" onClick={handleDeleteItem} />
                <FiEdit
                    title="Mudar opção"
                    onClick={() => setShowChangeOption(true)}
                />
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

            {showChangeOption && (
                <Modal onClose={() => setShowChangeOption(false)}>
                    <h4>Deseja mudar de opção?</h4>

                    <div className="modal-change-option">
                        <div className="modal-change-info">
                            <img
                                src={featuredProduct.imagemPrincipal.grande}
                                alt={featuredProduct.nome}
                                className="featured-product-image"
                            />

                            <div className="info">
                                <span>{featuredProduct.nome}</span>
                                <span>{featuredProduct.precoPorTexto}</span>
                            </div>
                        </div>

                        <div className="variations-group">
                            <span>Cor: {featuredProduct.cor}</span>

                            <div className="variations-color">
                                <p
                                    key={0}
                                    style={{
                                        background: `${
                                            variationsColors.find(
                                                color =>
                                                    color.name === product.cor
                                            )?.color || '#000'
                                        }`
                                    }}
                                    title={product.cor}
                                    className={`variation-color${
                                        product.disponivel
                                            ? ' available'
                                            : ' unavailable'
                                    }${
                                        product.sku === featuredProduct.sku
                                            ? ' selected'
                                            : ' not-selected'
                                    }`}
                                    onClick={() => {
                                        setFeaturedProduct(product)
                                    }}
                                />

                                {product.variacoes.map((item, index) => (
                                    <p
                                        key={index + 1}
                                        style={{
                                            background: `${
                                                variationsColors.find(
                                                    color =>
                                                        color.name === item.cor
                                                )?.color || '#000'
                                            }`
                                        }}
                                        title={item.cor}
                                        className={`variation-color${
                                            item.disponivel
                                                ? ' available'
                                                : ' unavailable'
                                        }${
                                            item.sku === featuredProduct.sku
                                                ? ' selected'
                                                : ' not-selected'
                                        }`}
                                        onClick={() => {
                                            setFeaturedProduct({
                                                ...product,
                                                ...item
                                            })
                                        }}
                                    />
                                ))}
                            </div>

                            <span>Tamanho: {sizeSelected?.tamanho}</span>

                            <div className="variations-size">
                                {featuredProduct.tamanhos.map((item, index) => (
                                    <p
                                        key={index}
                                        className={`variation-size${
                                            item.disponivel
                                                ? ' available'
                                                : ' unavailable'
                                        }`}
                                    >
                                        {item.tamanho}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="group-buttons">
                        <Button>Cancelar</Button>
                        <Button className="outline">Confirmar escolha</Button>
                    </div>
                </Modal>
            )}
        </S.Container>
    )
}
