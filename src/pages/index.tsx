import Layout from '../components/Layout'
import Grid from '../components/Templates/Grid'
import BannersFull from '../components/Templates/Carousel/BannersFull'

import { products } from '../mocks/mockedProduct' // TODO REMOVER MOCK
import { showcase } from '../mocks/mockShowcase' // TODO REMOVER MOCK

import * as S from '../styles/pages/Home'

export default function Home() {
    const { banners } = showcase

    return (
        <Layout>
            <S.Container>
                {banners && banners.length > 0 && (
                    <BannersFull banners={banners} />
                )}

                <Grid products={products} />
            </S.Container>
        </Layout>
    )
}
