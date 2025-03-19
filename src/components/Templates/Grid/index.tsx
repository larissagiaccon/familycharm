import ProductItem from '../ProductItem'

import { IProductCarouselProps } from 'mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from './styles'

interface IGridProps {
    products: IProductCarouselProps[]
}

export default function Grid({ products }: IGridProps) {
    return (
        <S.Container className="grid">
            {products.map((item, index) => (
                <ProductItem key={index} product={item} />
            ))}
        </S.Container>
    )
}
