import Layout from 'components/Layout'
import ShowcaseGrid from 'components/pages/Showcase/ShowcaseGrid'
import BannersFull from 'components/Templates/Carousel/BannersFull'
import ProductCarousel from 'components/Templates/Carousel/ProductCarousel'

import { showcase } from 'mocks/mockShowcase' // TODO REMOVER MOCK

import * as S from '../styles/pages/Home'

export default function Home() {
    const { banners, componentes: components } = showcase

    return (
        <Layout>
            <S.Container>
                {banners && banners.length > 0 && (
                    <BannersFull banners={banners} />
                )}

                {components &&
                    components.map(component => {
                        return (
                            <div
                                key={component.componenteVitrineId}
                                className="components-group"
                            >
                                {component.exibirTitulo && (
                                    <h3 className="component-title">
                                        {component.titulo}
                                    </h3>
                                )}

                                {component.tipo === 'PRODUTO' &&
                                    component.template === 'GRADE' && (
                                        <ShowcaseGrid component={component} />
                                    )}

                                {component.tipo === 'PRODUTO' &&
                                    component.template === 'CARROSSEL' && (
                                        <ProductCarousel
                                            products={component.itens}
                                            delay={3000}
                                            speed={2000}
                                        />
                                    )}
                            </div>
                        )
                    })}
            </S.Container>
        </Layout>
    )
}
