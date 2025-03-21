import {
    IBannerFullProps,
    IComponentsProps,
    IItemsProps
} from 'store/modules/home'

import { products } from './mockedProduct'

export interface IShowcaseProps {
    banners: IBannerFullProps[]
    componentes: IComponentsProps[]
}

const productsShowcase: IItemsProps[] = products.map(item => ({
    ...item,
    campanha: '',
    imagemMobileUrl:
        'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
    imagemUrl: item.imagemPrincipal.grande,
    ordem: 0,
    redirecionarUrl: '',
    titulo: ''
}))

export const showcase: IShowcaseProps = {
    banners: [
        {
            abrirNovaJanela: false,
            backgroundColor: '',
            campanha: '',
            duracao: 10,
            id: 600,
            imagemMobileUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/03/banner/22904/dsk.jpg',
            imagemUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/03/banner/22904/dsk.jpg',
            ordem: 0,
            redirecionarUrl: '',
            titulo: 'Thais Rodrigues Mirage',
            videoUrl:
                'https://www.thaisrodrigues.com.br/cdn/shop/videos/c/vp/1182ed2f58084ab88469537c3d4d44e3/1182ed2f58084ab88469537c3d4d44e3.HD-720p-4.5Mbps-44468312.mp4?v=0'
        },
        {
            abrirNovaJanela: false,
            backgroundColor: '',
            campanha: '',
            duracao: 5,
            id: 651,
            imagemMobileUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/03/banner/22904/dsk.jpg',
            imagemUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/03/banner/22904/dsk.jpg',
            ordem: 0,
            redirecionarUrl: '',
            titulo: 'Tata Martello Entre Laços',
            videoUrl: ''
        },
        {
            abrirNovaJanela: false,
            backgroundColor: '',
            campanha: '',
            duracao: 5,
            id: 649,
            imagemMobileUrl:
                'https://www.thaisrodrigues.com.br/cdn/shop/files/BANNER_DESKTOP_dc9f0c58-e2b4-4b5d-9100-7a685137cfe1.jpg?v=1741898467&width=1800',
            imagemUrl:
                'https://www.thaisrodrigues.com.br/cdn/shop/files/BANNER_DESKTOP_dc9f0c58-e2b4-4b5d-9100-7a685137cfe1.jpg?v=1741898467&width=1800',
            ordem: 1,
            redirecionarUrl: '',
            titulo: 'Thais Rodrigues Mirage',
            videoUrl: ''
        },
        {
            abrirNovaJanela: false,
            backgroundColor: '',
            campanha: '',
            duracao: 5,
            id: 650,
            imagemMobileUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/banner/22231/desktop-2.png',
            imagemUrl:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/banner/22231/desktop-2.png',
            ordem: 2,
            redirecionarUrl: '',
            titulo: 'Tata Martello Moda Praia',
            videoUrl: ''
        }
    ],
    componentes: [
        {
            bannerImagemUrl: '',
            bannerLinkUrl: '',
            campanha: '',
            exibirTitulo: true,
            itens: productsShowcase.concat(
                productsShowcase.concat(productsShowcase)
            ),
            ordem: 1,
            quantidadePreCarregada: 4,
            template: 'GRADE',
            tipo: 'PRODUTO',
            titulo: 'SALE'
        },
        {
            bannerImagemUrl: '',
            bannerLinkUrl: '',
            campanha: '',
            exibirTitulo: true,
            itens: productsShowcase.concat(productsShowcase),
            ordem: 1,
            quantidadePreCarregada: productsShowcase.length,
            template: 'CARROSSEL',
            tipo: 'PRODUTO',
            titulo: 'LANÇAMENTO'
        }
    ]
}
