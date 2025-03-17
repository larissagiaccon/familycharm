import { IProductCarouselProps, products } from './mockedProduct'

export interface IItemsProps extends IProductCarouselProps {
    campanha: string
    imagemMobileUrl: string
    imagemUrl: string
    ordem: number
    redirecionarUrl: string
    titulo: string
}

export interface IComponentsProps {
    bannerImagemUrl: string
    bannerLinkUrl: string
    campanha: string
    componenteVitrineId: number
    exibirTitulo: boolean
    itens: IItemsProps[]
    ordem: number
    quantidadePreCarregada: number
    template: string
    tipo: string
    titulo: string
}

export interface IBannerFullProps {
    id: number
    titulo: string
    imagemUrl: string
    imagemMobileUrl: string
    redirecionarUrl: string
    abrirNovaJanela: boolean
    campanha: string
    duracao: number
    ordem: number
    backgroundColor: string
}

export interface IShowcaseProps {
    banners: IBannerFullProps[]
    componentes: IComponentsProps[]
}

const productsShowcase: IItemsProps[] = products.map(item => ({
    ...item,
    campanha: '',
    imagemMobileUrl:
        'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
    ordem: 0,
    redirecionarUrl: '',
    titulo: ''
}))

export const showcase: IShowcaseProps = {
    banners: [
        {
            id: 651,
            titulo: 'Tata Martello Entre Laços',
            imagemUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/03/banner/22904/dsk.jpg',
            imagemMobileUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/03/banner/22904/dsk.jpg',
            redirecionarUrl: null,
            abrirNovaJanela: false,
            campanha: null,
            duracao: 1000,
            ordem: 0,
            backgroundColor: null
        },
        {
            id: 649,
            titulo: 'Thais Rodrigues Mirage',
            imagemUrl:
                'https://www.thaisrodrigues.com.br/cdn/shop/files/BANNER_DESKTOP_dc9f0c58-e2b4-4b5d-9100-7a685137cfe1.jpg?v=1741898467&width=1800',
            imagemMobileUrl:
                'https://www.thaisrodrigues.com.br/cdn/shop/files/BANNER_DESKTOP_dc9f0c58-e2b4-4b5d-9100-7a685137cfe1.jpg?v=1741898467&width=1800',
            redirecionarUrl: null,
            abrirNovaJanela: false,
            campanha: null,
            duracao: 1000,
            ordem: 1,
            backgroundColor: null
        },
        {
            id: 650,
            titulo: 'Tata Martello Moda Praia',
            imagemUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/banner/22231/desktop-2.png',
            imagemMobileUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/banner/22231/desktop-2.png',
            redirecionarUrl: null,
            abrirNovaJanela: false,
            campanha: null,
            duracao: 1000,
            ordem: 2,
            backgroundColor: null
        }
    ],
    componentes: [
        {
            bannerImagemUrl: null,
            bannerLinkUrl: null,
            campanha: '',
            componenteVitrineId: 7255,
            exibirTitulo: true,
            itens: productsShowcase.concat(
                productsShowcase.concat(productsShowcase)
            ),
            ordem: 1,
            quantidadePreCarregada: 2,
            template: 'GRADE',
            tipo: 'PRODUTO',
            titulo: 'SALE'
        },
        {
            bannerImagemUrl: null,
            bannerLinkUrl: null,
            campanha: '',
            componenteVitrineId: 7255,
            exibirTitulo: true,
            itens: productsShowcase,
            ordem: 1,
            quantidadePreCarregada: productsShowcase.length,
            template: 'GRADE',
            tipo: 'PRODUTO',
            titulo: 'LANÇAMENTO'
        }
    ]
}
