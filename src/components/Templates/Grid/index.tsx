import { IProductCarouselProps } from '../../../mocks/mockedProduct'
import ProductItem from '../ProductItem'

import * as S from './styles'

interface IGridProps {
    products: IProductCarouselProps[]
}

export default function Grid({ products }: IGridProps) {
    return (
        <S.Container className="grid">
            {products.concat(products.concat(products)).map((item, index) => (
                <ProductItem key={index} product={item} />
            ))}
        </S.Container>
    )
}
