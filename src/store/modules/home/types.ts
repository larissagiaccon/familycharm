import { IProductCarouselProps } from '../product/types'
import { IBannerProps } from '../showcase/types'

// eslint-disable-next-line no-shadow
export enum ActionTypes {
    loadHomeData = 'LOAD_HOME_DATA',
    updateHomeData = 'UPDATE_HOME_DATA',

    updateHomeBannersIntermediate = 'UPDATE_HOME_BANNERS_INTERMEDIATE'
}

export interface IHomeDataState {
    banners: Array<IBannerFullProps>
    bannersIntermediate: Array<IBannersIntermediateProps>
    components: Array<IComponentsProps>
}

export interface IHomeDataResponse {
    banners: Array<IBannerFullProps>
    componentes: Array<IComponentsProps>
}

export interface IBannerFullProps {
    abrirNovaJanela: boolean
    backgroundColor: string
    campanha: string
    duracao: number
    id: number
    imagemMobileUrl: string
    imagemUrl: string
    ordem: number
    redirecionarUrl: string
    titulo: string
    videoUrl: string
}

export interface IComponentsProps {
    bannerImagemUrl: string
    bannerLinkUrl: string
    campanha: string
    exibirTitulo: boolean
    itens: IItemsProps[]
    ordem: number
    quantidadePreCarregada: number
    template: string
    tipo: string
    titulo: string
}

export interface IItemsProps extends IProductCarouselProps {
    campanha: string
    imagemMobileUrl: string
    imagemUrl: string
    ordem: number
    redirecionarUrl: string
    titulo: string
}

export interface IBannerIntermediateProps {
    campanha: string
    id: number
    imagemMobileUrl: string
    imagemUrl: string
    ordem: number
    seO_Permalink: string
    titulo: string
}

export interface IBannersIntermediateProps {
    ativo: boolean
    banners: IBannerIntermediateProps[]
    id: number
    nome: string
    ordem: number
    plataforma: string
    titulo: string
    vigencia_Fim: string
    vigencia_Inicio: string
}
