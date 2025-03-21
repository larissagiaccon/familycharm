import { IProductCarouselProps } from 'store/modules/product'

import ProductItem from '../ProductItem'

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
