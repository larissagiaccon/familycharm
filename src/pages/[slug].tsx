import { END } from 'redux-saga'
import { GetServerSideProps } from 'next'
import { loadProductData } from 'store/modules/product'

import { SagaStore, storeWrapper } from 'store'

import Layout from 'components/Layout'
import Product from 'components/Templates/Product'
import ProductCarousel from 'components/Templates/Carousel/ProductCarousel'

import { product } from 'mocks' // TODO REMOVER MOCK

import * as S from '../styles/pages/PDP'

export default function PDP() {
    return (
        <Layout>
            <S.Container>
                <Product product={product} />

                {product.correlatados.length > 1 && (
                    <div className="similar-products">
                        <h3 className="section-title">Produtos relacionados</h3>
                        <ProductCarousel products={product.correlatados} />
                    </div>
                )}
            </S.Container>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps =
    storeWrapper.getServerSideProps(async ({ params, store, res, query }) => {
        res.setHeader(
            'Cache-Control',
            'public, s-maxage=600, stale-while-revalidate=600'
        )

        const { slug } = params

        store.dispatch(loadProductData({ sku: slug }))

        store.dispatch(END)

        await (store as SagaStore).sagaTask.toPromise()

        return {
            props: {}
        }
    })
