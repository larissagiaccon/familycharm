import Layout from 'components/Layout'
import Product from 'components/Templates/Product'

import { product } from 'mocks' // TODO REMOVER MOCK

import * as S from '../styles/pages/PDP'

export default function PDP() {
    return (
        <Layout>
            <S.Container>
                <Product product={product} />
            </S.Container>
        </Layout>
    )
}
