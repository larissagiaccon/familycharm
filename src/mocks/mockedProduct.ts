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

export interface INavigationProps {
    id: number
    nome: string
    permalink: string
}
export interface IImageProps {
    grande: string
    media: string
    mini: string
    pequena: string
    principal: boolean
}

export interface ICorrelatoItemProps {
    codigo: string
    deepLink: string
    desconto: number
    freteGratis: boolean
    id: number
    imagemUrl: string
    nome: string
    permalink: string
    precoDe: number
    precoDeTexto: string
    precoPor: number
    precoPorTexto: string
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
    imagem: IImageProps
    nome: string
    permalink: string
    precoDe: number
    precoDeTexto: string
    precoPor: number
    precoPorTexto: string
    sku: string
    tamanhos: Array<IVariationsSizesAvailableProps>
}

export interface IProgressiveItemProps {
    precoUnitario: number
    precoUnitarioTexto: string
    quantidade: number
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
    imagemUrl: string
    imagens: Array<string>
    marca: string
    marcaId: number
    nome: string
    notaMedia: number
    novidade: boolean
    novidadeDataExpiracao: string
    numeroParcela: number
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
    valorParcela: number
    valorParcelaTexto: string
    variacoes: Array<IVariationItemProps>
    videoUrl: string
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
    correlatados: Array<ICorrelatoItemProps>
    deepLink: string
    desconto: number
    descricaoGeral: string
    disponivel: boolean
    ean: string
    ehFavorito: boolean
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
    tipo: string
    valorMinimoParcela: number
    variacoes: IVariationItemProps[]
    videoUrl: string
}

export interface IVariationsColorsProps {
    color: string
    id: number
    name: string
}

export const variationsColors: IVariationsColorsProps[] = [
    {
        color: '#00ff00',
        id: 1,
        name: 'Verde Lima'
    },
    {
        color: '#0000ff',
        id: 2,
        name: 'Azul'
    },
    {
        color: '#ff0000',
        id: 3,
        name: 'Vermelho'
    },
    {
        color: '#ffff00',
        id: 4,
        name: 'Amarelo'
    },
    {
        color: '#66CCff',
        id: 5,
        name: 'Azul Bebê'
    },
    {
        color: '#ff66cc',
        id: 6,
        name: 'Rosa'
    },
    {
        color: '#4B3621',
        id: 7,
        name: 'Marrom'
    }
]

export const product: IProductProps = {
    aplicarPromocao: false,
    categoria: {
        categoriaPaiId: null,
        id: 2905,
        nome: 'Cuidados Diários',
        nomeHierarquia: 'Cuidados Diários'
    },
    cliqueRetire: false,
    codigo: '1339',
    correlatados: [
        {
            codigo: '38547',
            deepLink: 'ultrafarma://produto?sku=38547',
            desconto: 0,
            freteGratis: true,
            id: 53240,
            imagemUrl:
                'https://cdn.ultrafarma.com.br/static/produtos/38547/small-38547.jpg',
            nome: 'ALICATE DE CUTÍCULAS MERHEJE PROFESSIONAL CLUB',
            permalink: 'alicate-de-cuticulas-merheje-profissional',
            precoDe: 20.82,
            precoDeTexto: 'R$ 20,82',
            precoPor: 20.36,
            precoPorTexto: 'R$ 20,36'
        },
        {
            codigo: '806523',
            deepLink: 'ultrafarma://produto?sku=806523',
            desconto: 0,
            freteGratis: true,
            id: 55038,
            imagemUrl:
                'https://cdn.ultrafarma.com.br/static/produtos/806523/small-806523.jpg',
            nome: 'ALICATE DE CUTÍCULAS + ESPÁTULA DE CUTÍCULAS + CORTADOR DE UNHAS + PINÇA MERHEJE - VERDE',
            permalink:
                'alicate-de-cuticulas-espatula-de-cuticulas-cortador-de-unhas-pinca-merheje-verde',
            precoDe: 16.38,
            precoDeTexto: 'R$ 16,38',
            precoPor: 13.92,
            precoPorTexto: 'R$ 13,92'
        }
    ],
    deepLink: 'ultrafarma://produto?sku=alicate-de-cuticulas-merheje-rosa',
    desconto: 15,
    descricaoGeral:
        'Para remoção de cutículas, afiado, aço inox e esterilizável, cabos com proteção antibacteriana.',
    disponivel: true,
    ean: null,
    ehFavorito: false,
    estoqueLoja: 0,
    freteGratis: true,
    habilitaAvaliacao: true,
    id: 50482,
    imagens: [
        {
            grande: 'https://cdn.ultrafarma.com.br/static/produtos/1339/large-1339.jpg',
            media: 'https://cdn.ultrafarma.com.br/static/produtos/1339/medium-1339.jpg',
            mini: 'https://cdn.ultrafarma.com.br/static/produtos/1339/thumb-1339.jpg',
            pequena:
                'https://cdn.ultrafarma.com.br/static/produtos/1339/small-1339.jpg',
            principal: true
        }
    ],
    imagemPrincipal: {
        grande: 'https://cdn.ultrafarma.com.br/static/produtos/1339/large-1339.jpg',
        media: 'https://cdn.ultrafarma.com.br/static/produtos/1339/medium-1339.jpg',
        mini: 'https://cdn.ultrafarma.com.br/static/produtos/1339/thumb-1339.jpg',
        pequena:
            'https://cdn.ultrafarma.com.br/static/produtos/1339/small-1339.jpg',
        principal: true
    },
    lojasDisponiveis: [],
    marca: {
        id: 3076,
        nome: 'MERHEJE',
        permalink: 'merheje'
    },
    medidas: null,
    navegacao: [
        {
            id: 2905,
            nome: 'Cuidados Diários',
            permalink: '/categoria/cuidados-diarios'
        },
        {
            id: 50482,
            nome: 'ALICATE DE CUTÍCULAS MERHEJE ROSA',
            permalink: '/alicate-de-cuticulas-merheje-rosa'
        }
    ],
    nome: 'ALICATE DE CUTÍCULAS MERHEJE ROSA',
    notaMedia: 0.0,
    novidade: true,
    novidadeDataExpiracao: '2025-03-29T00:00:00',
    parcelamentoMaximo: 3,
    permalink: 'alicate-de-cuticulas-merheje-rosa',
    precoDe: 11.28,
    precoDeTexto: 'R$ 11,28',
    precoPor: 9.58,
    precoPorTexto: 'R$ 9,58',
    promocoesProgressivasRegras: [],
    quantidadeMaximaVenda: 2,
    quantidadeMinimaVenda: 1,
    quantidadeMultiplaVenda: 1,
    resumoAvaliacao: {
        media: 0.0,
        notas: [
            {
                nota: 1,
                porcentagem: 0,
                total: 0
            },
            {
                nota: 2,
                porcentagem: 0,
                total: 0
            },
            {
                nota: 3,
                porcentagem: 0,
                total: 0
            },
            {
                nota: 4,
                porcentagem: 0,
                total: 0
            },
            {
                nota: 5,
                porcentagem: 0,
                total: 0
            }
        ],
        produtoId: 50482,
        total: 0
    },
    sku: null,
    seo: {
        seo_Descricao: null,
        seo_PalavrasChaves: null,
        seo_Titulo: 'ALICATE DE CUTÍCULAS MERHEJE ROSA'
    },
    tipo: 'Utensilio',
    valorMinimoParcela: 50,
    variacoes: [
        {
            cor: 'Azul',
            desconto: 15,
            disponivel: true,
            estoque: 9111,
            imagem: {
                grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                pequena:
                    'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                principal: true
            },
            nome: '',
            permalink: 'vestido/bege123',
            precoDe: 11.28,
            precoDeTexto: 'R$ 11,28',
            precoPor: 9.58,
            precoPorTexto: 'R$ 11,28',
            sku: '1339',
            tamanhos: [
                { disponivel: true, tamanho: 'P' },
                { disponivel: false, tamanho: 'M' }
            ]
        }
    ],
    videoUrl: null
}

export const products: IProductCarouselProps[] = [
    {
        aplicarPromocao: false,
        categoria: 'Ultrafarma Sports Nutrition > Acessórios',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '795556',
        cor: 'Verde Lima',
        desconto: 10,
        descontoProgressivo: true,
        disponivel: true,
        estoque: 976,
        estoqueLojas: null,
        favorito: true,
        freteGratis: false,
        id: 56658,
        imagemUrl:
            'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
        imagens: [
            'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
            'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_3.jpg?v=1741210494&width=823',
            'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_4.jpg?v=1741210506&width=823'
        ],
        marca: 'RISQUÉ',
        marcaId: 0,
        nome: 'ESMALTE RISQUÉ BASE FORTALECEDORA 8ML',
        notaMedia: 0.0,
        novidade: false,
        novidadeDataExpiracao: '0001-01-01T00:00:00',
        numeroParcela: 1,
        permalink: 'esmalte-risque-base-fortalecedora-8ml',
        precoDe: 4.17,
        precoDeTexto: 'R$ 4,17',
        precoPor: 3.75,
        precoPorTexto: 'R$ 3,75',
        promocaoId: null,
        promocaoImagemUrl: null,
        quantidadeMaximaVenda: 0,
        quantidadeMinimaVenda: 0,
        sku: '795556',
        tamanhos: [
            { disponivel: true, tamanho: 'P' },
            { disponivel: false, tamanho: 'M' }
        ],
        tipo: 'COMUM',
        valorParcela: 3.75,
        valorParcelaTexto: 'R$ 3,75',
        variacoes: [
            {
                cor: 'Azul',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagem: {
                    grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    pequena:
                        'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    principal: true
                },
                nome: '',
                permalink: 'vestido/bege123',
                precoDe: 11.28,
                precoDeTexto: 'R$ 11,28',
                precoPor: 9.58,
                precoPorTexto: 'R$ 11,28',
                sku: '1339',
                tamanhos: [
                    { disponivel: true, tamanho: 'P' },
                    { disponivel: false, tamanho: 'M' }
                ]
            }
        ],
        videoUrl: null
    },
    {
        aplicarPromocao: false,
        categoria: 'Cuidados Diários',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '1339',
        cor: 'Rosa',
        desconto: 15,
        descontoProgressivo: false,
        disponivel: true,
        estoque: 9111,
        estoqueLojas: null,
        favorito: false,
        freteGratis: true,
        id: 50482,
        imagemUrl:
            'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
        imagens: [
            'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
            'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21911/5851-verde-lima-2.jpg?ims=630x1008'
        ],
        marca: 'MERHEJE',
        marcaId: 0,
        nome: 'ALICATE DE CUTÍCULAS MERHEJE ROSA',
        notaMedia: 0.0,
        novidade: true,
        novidadeDataExpiracao: '2025-03-29T00:00:00',
        numeroParcela: 1,
        permalink: 'alicate-de-cuticulas-merheje-rosa',
        precoDe: 11.28,
        precoDeTexto: 'R$ 11,28',
        precoPor: 9.58,
        precoPorTexto: 'R$ 9,58',
        promocaoId: null,
        promocaoImagemUrl: null,
        quantidadeMaximaVenda: 2,
        quantidadeMinimaVenda: 1,
        sku: '1339',
        tamanhos: [
            { disponivel: true, tamanho: 'P' },
            { disponivel: false, tamanho: 'M' },
            { disponivel: true, tamanho: 'G' }
        ],
        tipo: 'COMUM',
        valorParcela: 9.58,
        valorParcelaTexto: 'R$ 9,58',
        variacoes: [
            {
                cor: 'Vermelho',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagem: {
                    grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    pequena:
                        'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    principal: true
                },
                nome: '',
                permalink: 'vestido/bege123',
                precoDe: 11.28,
                precoDeTexto: 'R$ 11,28',
                precoPor: 9.58,
                precoPorTexto: 'R$ 11,28',
                sku: '1338',
                tamanhos: [
                    { disponivel: true, tamanho: '36' },
                    { disponivel: true, tamanho: 'PP' },
                    { disponivel: true, tamanho: 'P' },
                    { disponivel: true, tamanho: 'M' },
                    { disponivel: false, tamanho: 'G' },
                    { disponivel: true, tamanho: 'GG' }
                ]
            }
        ],
        videoUrl:
            'https://global-videos.zordcdn.com.br/tatamartello/img/2025/02/produto/22150/5851-shorts-saia-verde.mp4'
    },
    {
        aplicarPromocao: false,
        categoria: 'Cuidados Diários',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '1339',
        cor: 'Amarelo',
        desconto: 15,
        descontoProgressivo: false,
        disponivel: false,
        estoque: 9111,
        estoqueLojas: null,
        favorito: false,
        freteGratis: true,
        id: 50482,
        imagemUrl:
            'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
        imagens: [
            'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276'
        ],
        marca: 'MERHEJE',
        marcaId: 0,
        nome: 'ALICATE DE CUTÍCULAS MERHEJE ROSA',
        notaMedia: 0.0,
        novidade: true,
        novidadeDataExpiracao: '2025-03-29T00:00:00',
        numeroParcela: 1,
        permalink: 'alicate-de-cuticulas-merheje-rosa',
        precoDe: null,
        precoDeTexto: null,
        precoPor: 9.58,
        precoPorTexto: 'R$ 9,58',
        promocaoId: null,
        promocaoImagemUrl: null,
        quantidadeMaximaVenda: 2,
        quantidadeMinimaVenda: 1,
        sku: '1339',
        tamanhos: [
            { disponivel: false, tamanho: 'G' },
            { disponivel: false, tamanho: 'GG' }
        ],
        tipo: 'COMUM',
        valorParcela: 9.58,
        valorParcelaTexto: 'R$ 9,58',
        variacoes: [
            {
                cor: 'Azul Bebê',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagem: {
                    grande: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    media: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    mini: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    pequena:
                        'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    principal: true
                },
                nome: '',
                permalink: 'vestido/bege123',
                precoDe: 11.28,
                precoDeTexto: 'R$ 11,28',
                precoPor: 9.58,
                precoPorTexto: 'R$ 11,28',
                sku: '1338',
                tamanhos: [
                    { disponivel: true, tamanho: 'P' },
                    { disponivel: false, tamanho: 'M' },
                    { disponivel: true, tamanho: 'G' }
                ]
            }
        ],
        videoUrl: null
    },
    {
        aplicarPromocao: false,
        categoria: 'Cuidados Diários',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '1339',
        cor: 'Azul',
        desconto: 15,
        descontoProgressivo: false,
        disponivel: false,
        estoque: 9111,
        estoqueLojas: null,
        favorito: false,
        freteGratis: true,
        id: 50482,
        imagemUrl:
            'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
        imagens: [
            'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg'
        ],
        marca: 'MERHEJE',
        marcaId: 0,
        nome: 'ALICATE DE CUTÍCULAS MERHEJE ROSA',
        notaMedia: 0.0,
        novidade: true,
        novidadeDataExpiracao: '2025-03-29T00:00:00',
        numeroParcela: 1,
        permalink: 'alicate-de-cuticulas-merheje-rosa',
        precoDe: null,
        precoDeTexto: null,
        precoPor: 9.58,
        precoPorTexto: 'R$ 9,58',
        promocaoId: null,
        promocaoImagemUrl: null,
        quantidadeMaximaVenda: 2,
        quantidadeMinimaVenda: 1,
        sku: '1339',
        tamanhos: [
            { disponivel: false, tamanho: '36' },
            { disponivel: true, tamanho: 'PP' },
            { disponivel: true, tamanho: 'P' },
            { disponivel: true, tamanho: 'M' },
            { disponivel: true, tamanho: 'G' },
            { disponivel: true, tamanho: 'GG' }
        ],
        tipo: 'COMUM',
        valorParcela: 9.58,
        valorParcelaTexto: 'R$ 9,58',
        variacoes: [
            {
                cor: 'Marrom',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagem: {
                    grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    media: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    pequena:
                        'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    principal: true
                },
                nome: '',
                permalink: 'vestido/bege123',
                precoDe: 11.28,
                precoDeTexto: 'R$ 11,28',
                precoPor: 9.58,
                precoPorTexto: 'R$ 11,28',
                sku: '1338',
                tamanhos: [
                    { disponivel: true, tamanho: '36' },
                    { disponivel: false, tamanho: 'PP' },
                    { disponivel: true, tamanho: 'P' },
                    { disponivel: true, tamanho: 'M' },
                    { disponivel: true, tamanho: 'G' },
                    { disponivel: true, tamanho: 'GG' }
                ]
            }
        ],
        videoUrl: null
    }
]
