import Layout from '../components/Layout'
import Grid from '../components/Templates/Grid'

import { products } from '../mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from '../styles/pages/Home'

export default function Home() {
    return (
        <Layout>
            <S.Container>
                <Grid products={products} />
            </S.Container>
        </Layout>
    )
}
