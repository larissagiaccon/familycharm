// eslint-disable-next-line no-shadow
export enum ActionTypes {
    loadProductData = 'LOAD_PRODUCT_DATA',
    updateProductData = 'UPDATE_PRODUCT_DATA',

    loadProductReviews = 'LOAD_PRODUCT_REVIEWS',
    addProductReview = 'ADD_PRODUCT_REVIEW',
    updateProductReviews = 'UPDATE_PRODUCT_REVIEWS',

    productFreightCalculation = 'PRODUCT_FREIGHT_CALCULATION',
    updateProductFreightCalculation = 'UPDATE_PRODUCT_FREIGHT_CALCULATION'
}

export interface ILoadReviewsRequest {
    page?: number
    productId: number
    quantity?: number
}

export interface ILoadReviewResponse {
    reviews: Array<IReviewProps>
}

export interface IAddProductReviewRequest {
    comment: string
    evaluation: number
    productId: number
    recommends: boolean
    title: string
}

export interface IProductFreightCalculationRequest {
    quantity?: number
    sku: string
    zipCode: string
}

export interface IProductState {
    product: IProductProps
    reviews: Array<IReviewProps>
    shipping_options: Array<IShippingProps>
}

export interface IReviewProps {
    cidade: string
    comentario: string
    criadoEm: Date
    nome: string
    nota: number
    recomenda: boolean
    titulo: string
    uf: string
}

export interface IShippingProps {
    codigo: string
    dataAtual: Date
    mensagem: string
    nome: string
    prazoEntrega: string
    prazoEntregaAteEmDias: number
    prazoEntregaDeEmDias: number
    valor: string
    valorCobrado: number
}

export interface ILoadProductDataRequest {
    sku: string | Array<string>
}

export interface IVariationsColorsProps {
    color: string
    id: number
    name: string
}

export interface IVariationsSizesAvailableProps {
    disponivel: boolean
    tamanho: string
}

export interface IVariationItemProps {
    cor: string
    desconto: number
    disponivel: boolean
    estoque: number
    imagemPrincipal: IImageProps
    imagens: Array<IImageProps>
    nome: string
    permalink: string
    precoDe: number
    precoDeTexto: string
    precoPor: number
    precoPorTexto: string
    sku: string
    tamanhos: Array<IVariationsSizesAvailableProps>
    videoUrl: string
}

export interface IGiftProps {
    produtoId: number
    skuOrigem: string
    produtoBrindeId: number
    quantidade: number
    vigencia_Inicio: Date
    vigencia_Fim: Date
    descricao: string
    valorLiquidoVenda: number
    imagem: IImageProps
}

export interface IProgressiveItemProps {
    precoUnitario: number
    precoUnitarioTexto: string
    quantidade: number
}

export interface IProductProps {
    aplicarPromocao: boolean
    categoria: {
        categoriaPaiId: number
        id: number
        nome: string
        nomeHierarquia: string
    }
    cliqueRetire: boolean
    codigo: string
    cor: string
    correlatados: Array<IProductCarouselProps>
    deepLink: string
    desconto: number
    descontoProgressivo: boolean
    descricaoGeral: string
    disponivel: boolean
    ean: string
    favorito: boolean
    estoque: number
    estoqueLoja: number
    freteGratis: boolean
    habilitaAvaliacao: boolean
    id: number
    imagemPrincipal: IImageProps
    imagens: Array<IImageProps>
    lojasDisponiveis: Array<{
        cd: number
        codigo: string
        dadosCd: string
        quantidade: number
    }>
    marca: {
        id: number
        nome: string
        permalink: string
    }
    medidas: {
        altura: number
        largura: number
        peso: number
        profundidade: number
    }
    navegacao: Array<INavigationProps>
    maximoParcelas: number
    nome: string
    notaMedia: number
    novidade: boolean
    novidadeDataExpiracao: string
    parcelamentoMaximo: number
    permalink: string
    precoDe: number
    precoDeTexto: string
    precoPor: number
    precoPorTexto: string
    promocaoId: number
    promocaoImagemUrl: string
    promocoesProgressivasRegras: IProgressiveItemProps[]
    quantidadeMaximaVenda: number
    quantidadeMinimaVenda: number
    quantidadeMultiplaVenda: number
    resumoAvaliacao: IEvaluationSummaryProps
    seo: {
        seo_Titulo: string
        seo_Descricao: string
        seo_PalavrasChaves: string
    }
    sku: string
    tamanhos: Array<IVariationsSizesAvailableProps>
    tipo: string
    totalParcelado: number
    totalParceladoTexto: string
    valorMinimoParcela: number
    valorParcela: number
    valorParcelaTexto: string
    variacoes: Array<IVariationItemProps>
    videoUrl: string
}

export interface IProductCarouselProps {
    aplicarPromocao: boolean
    categoria: string
    categoriaId: number
    cliqueRetire: boolean
    codigo: string
    cor: string
    desconto: number
    descontoProgressivo: boolean
    disponivel: boolean
    estoque: number
    estoqueLojas: string
    favorito: boolean
    freteGratis: boolean
    id: number
    imagemPrincipal: IImageProps
    imagens: Array<IImageProps>
    marca: string
    marcaId: number
    maximoParcelas: number
    nome: string
    notaMedia: number
    novidade: boolean
    novidadeDataExpiracao: string
    permalink: string
    precoDe: number
    precoDeTexto: string
    precoPor: number
    precoPorTexto: string
    promocaoId: number
    promocaoImagemUrl: string
    quantidadeMaximaVenda: number
    quantidadeMinimaVenda: number
    sku: string
    tamanhos: Array<IVariationsSizesAvailableProps>
    tipo: string
    totalParcelado: number
    totalParceladoTexto: string
    valorParcela: number
    valorParcelaTexto: string
    variacoes: Array<IVariationItemProps>
    videoUrl: string
}

export interface IProductEvaluationProps {
    nome: string
    cidade: string
    uf: string
    titulo: string
    comentario: string
    nota: number
    recomenda: boolean
    criadoEm: Date
}

export interface IEvaluationSummaryProps {
    media: number
    notas: Array<{
        nota: number
        total: number
        porcentagem: number
    }>
    produtoId: number
    total: number
}

export interface IImageProps {
    grande: string
    media: string
    mini: string
    pequena: string
    principal: boolean
}

export interface IProductPropsPDP {
    codigo: string
    deepLink: string
    id: number
    imagemUrl: string
    nome: string
    nomeTruncado: string
    permalink: string
    precoDe: number
    precoDeTexto: string
    precoPor: number
    precoPorTexto: string
    desconto: number
    comissao: number
    comissaoTexto: string
    selos: boolean
    freteGratis: boolean
}

export interface INavigationProps {
    id: number
    nome: string
    permalink: string
}
