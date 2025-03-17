import { products } from './mockedProduct'

export interface IBannerProps {
    id: number
    titulo: string
    imagemUrl: string
    imagemMobileUrl: string
    redirecionarUrl: string
    tipoDeepLink: string
    valorDeepLink: string
    abrirNovaJanela: true
    tipo: string
    plataforma: string
    campanha: string
    backgroundColor: string
    localExibicao: string
    duracao: number
    ordem: number
    vigenciaFim: Date
    categoriaId: Array<number>
    marcaId: Array<number>
    deepLink: string
}

export const showcase = {
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
            itens: products,
            quantidadePreCarregada: null,
            componenteVitrineId: 7255,
            tipo: 'PRODUTO',
            exibirTitulo: false,
            titulo: null,
            template: 'CARROSSEL',
            ordem: 90
        }
    ]
}
