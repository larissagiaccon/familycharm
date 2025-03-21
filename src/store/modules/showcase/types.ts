import { IProductCarouselProps } from '../product/types'

// eslint-disable-next-line no-shadow
export enum ActionTypes {
    loadShowCaseData = 'LOAD_SHOWCASE_DATA',
    updateShowCaseData = 'UPDATE_SHOWCASE_DATA',
    clearShowCaseData = 'CLEAR_SHOWCASE_DATA',

    updateShowCaseBanners = 'UPDATE_SHOWCASE_BANNERS',

    updateFilters = 'UPDATE_FILTERS',
    resetFilters = 'RESET_FILTERS'
}

export interface IShowCaseState {
    showcase: IShowCaseProps
    banners: Array<IBannerProps>
    filters: IFilterProps
}

export interface ILoadShowCaseProps {
    permaLink: string
    routeParams?: IFilterProps
}

export interface IFilterProps {
    termo?: string
    ord?: string
    ma?: Array<number>
    ca?: Array<number>
    produtos?: Array<number>
    promocaoId?: number
    freteGratis?: boolean
    produtoBrinde?: boolean
    inativos?: boolean
    pg?: number
    t?: number
    pagina?: number
    tamanho?: number
}

export interface IShowCaseProps {
    categoriaId: number
    filtros: {
        categorias: Array<IFilterCategoryProps>
        categoriasArvore: Array<IFilterCategoryThreeProps>
        marcas: Array<string>
        nomeCategoriaPai: string
        opcoesSelecionadas: {
            ca: Array<number>
            categorias: Array<number>
            freteGratis: boolean
            inativos: boolean
            ma: Array<string>
            marcas: Array<string>
            offSet: number
            ord: string
            pagina: number
            pg: number
            produtoBrinde: boolean
            produtos: Array<string>
            promocaoId: number
            promocaoProgressivaId: number
            t: number
            tamanho: number
        }
        precoMaximo: number
        precoMinimo: number
    }
    marcaId: number
    navegacao: Array<{
        id: number
        nome: string
        permalink: string
    }>
    opcoesOrdenacao: Array<{
        disabled: boolean
        group: string
        selected: boolean
        text: string
        value: string
    }>
    opcoesTamanho: Array<{
        disabled: boolean
        group: string
        selected: boolean
        text: string
        value: string
    }>
    tipoFiltro: string
    titulo: string
    tituloCompleto: string
    vitrine: Array<IProductCarouselProps>
    hasMore: boolean
    seo_Descricao: string
    seo_PalavrasChaves: string
    totalPaginas: number
    totalRegistros: number
}

export interface IFilterCategoryThreeProps {
    categoriaPaiId: string
    contador: number
    deepLink: string
    descricao: string
    exibirMenu: boolean
    filhos: Array<IFilterCategoryThreeProps>
    id: number
    imagemThumbUrl: string
    imagemUrl: string
    nome: string
    permalink: string
    tipoDeepLink: string
    valorDeepLink: string
}

interface IFilterCategoryProps {
    id: number
    nome: string
    permalink: string
    categoriaPaiId: number
    ordem: number
    contador: number
    deepLink: string
}

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
