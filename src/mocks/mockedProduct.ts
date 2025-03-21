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
    descontoProgressivo: true,
    categoria: {
        categoriaPaiId: 123,
        id: 2905,
        nome: 'Thaís Rodrigues',
        nomeHierarquia: 'Thaís Rodrigues'
    },
    cor: 'Verde Lima',
    cliqueRetire: false,
    codigo: '1339',
    correlatados: [
        {
            aplicarPromocao: false,
            categoria: 'Tatá Martello > Vestidos',
            categoriaId: 0,
            cliqueRetire: true,
            codigo: '1339',
            cor: 'Amarelo',
            desconto: 15,
            descontoProgressivo: false,
            disponivel: false,
            estoque: 9111,
            estoqueLojas: '',
            favorito: false,
            freteGratis: true,
            id: 50482,
            imagemPrincipal: {
                grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
                media: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
                mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
                pequena:
                    'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
                principal: true
            },
            imagens: [
                {
                    grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                    media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                    mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                    pequena:
                        'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                    principal: true
                }
            ],
            marca: 'TATÁ MARTELO',
            marcaId: 0,
            maximoParcelas: 1,
            nome: 'Vestido Verão',
            notaMedia: 0.0,
            novidade: true,
            novidadeDataExpiracao: '2025-03-29T00:00:00',
            permalink: 'tata-martello-vestido-verao-amarelo',
            precoDe: 0,
            precoDeTexto: '',
            precoPor: 9.58,
            precoPorTexto: 'R$ 9,58',
            promocaoId: 0,
            promocaoImagemUrl: '',
            quantidadeMaximaVenda: 2,
            quantidadeMinimaVenda: 1,
            sku: '1339',
            tamanhos: [
                { disponivel: false, tamanho: 'G' },
                { disponivel: false, tamanho: 'GG' }
            ],
            tipo: 'COMUM',
            totalParcelado: 20,
            totalParceladoTexto: 'R$ 120,00',
            valorParcela: 9.58,
            valorParcelaTexto: 'R$ 9,58',
            variacoes: [
                {
                    cor: 'Azul Bebê',
                    desconto: 15,
                    disponivel: true,
                    estoque: 9111,
                    imagemPrincipal: {
                        grande: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                        media: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                        mini: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                        pequena:
                            'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                        principal: true
                    },
                    imagens: [
                        {
                            grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            pequena:
                                'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            principal: true
                        }
                    ],
                    nome: 'Vestido Verão',
                    permalink: 'tata-martello-vestido-verao-azul-bebe',
                    precoDe: 11.28,
                    precoDeTexto: 'R$ 11,28',
                    precoPor: 9.58,
                    precoPorTexto: 'R$ 11,28',
                    sku: '1338',
                    tamanhos: [
                        { disponivel: true, tamanho: 'P' },
                        { disponivel: false, tamanho: 'M' },
                        { disponivel: true, tamanho: 'G' }
                    ],
                    videoUrl: ''
                }
            ],
            videoUrl: ''
        },
        {
            aplicarPromocao: false,
            categoria: "D'Vanelle > Vestidos",
            categoriaId: 0,
            cliqueRetire: true,
            codigo: '1339',
            cor: 'Azul',
            desconto: 15,
            descontoProgressivo: false,
            disponivel: false,
            estoque: 9111,
            estoqueLojas: '',
            favorito: false,
            freteGratis: true,
            id: 50482,
            imagemPrincipal: {
                grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
                media: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
                mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
                pequena:
                    'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
                principal: true
            },
            imagens: [
                {
                    grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                    media: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                    mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                    pequena:
                        'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                    principal: true
                }
            ],
            marca: "D'VANELLE",
            marcaId: 0,
            maximoParcelas: 1,
            nome: 'Vestido Social Florido',
            notaMedia: 0.0,
            novidade: true,
            novidadeDataExpiracao: '2025-03-29T00:00:00',
            permalink: 'dvanelle-vestido-social-florido-azul',
            precoDe: 0,
            precoDeTexto: '',
            precoPor: 9.58,
            precoPorTexto: 'R$ 9,58',
            promocaoId: 0,
            promocaoImagemUrl: '',
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
            totalParcelado: 20,
            totalParceladoTexto: 'R$ 120,00',
            valorParcela: 9.58,
            valorParcelaTexto: 'R$ 9,58',
            variacoes: [
                {
                    cor: 'Marrom',
                    desconto: 15,
                    disponivel: true,
                    estoque: 9111,
                    imagemPrincipal: {
                        grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                        media: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                        mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                        pequena:
                            'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                        principal: true
                    },
                    imagens: [
                        {
                            grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            pequena:
                                'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                            principal: true
                        }
                    ],
                    nome: 'Vestido Social Florido Marrom',
                    permalink: 'dvanelle-vestido-social-florido-marrom',
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
                    ],
                    videoUrl: ''
                }
            ],
            videoUrl: ''
        }
    ],
    deepLink:
        'flordodeserto://produto?sku=thais-rodrigues-saia-katrina-verde-lima',
    desconto: 15,
    descricaoGeral:
        'Para remoção de cutículas, afiado, aço inox e esterilizável, cabos com proteção antibacteriana.',
    disponivel: true,
    ean: '456',
    favorito: false,
    estoque: 976,
    estoqueLoja: 0,
    freteGratis: true,
    habilitaAvaliacao: true,
    id: 50482,
    imagemPrincipal: {
        grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
        media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
        mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
        pequena:
            'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
        principal: true
    },
    imagens: [
        {
            grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
            media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
            mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
            pequena:
                'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
            principal: true
        },
        {
            grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            pequena:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            principal: true
        },
        {
            grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
            media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
            mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
            pequena:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
            principal: true
        },
        {
            grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            media: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            pequena:
                'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            principal: true
        },
        {
            grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
            media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
            mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
            pequena:
                'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
            principal: true
        }
    ],
    lojasDisponiveis: [],
    marca: {
        id: 3076,
        nome: 'THAÍS RODRIGUES',
        permalink: 'thais-rodrigues'
    },
    maximoParcelas: 3,
    medidas: { altura: 20, largura: 20, profundidade: 20, peso: 30 },
    navegacao: [
        {
            id: 2905,
            nome: 'Thaís Rodrigues',
            permalink: '/categoria/thais-rodrigues'
        },
        {
            id: 50482,
            nome: 'Saia Katrina',
            permalink: '/thais-rodrigues-saia-katrina-verde-lima'
        }
    ],
    nome: 'Saia Katrina',
    notaMedia: 0.0,
    novidade: true,
    novidadeDataExpiracao: '2025-03-29T00:00:00',
    parcelamentoMaximo: 3,
    permalink: 'thais-rodrigues-saia-katrina-verde-lima',
    precoDe: 11.28,
    precoDeTexto: 'R$ 11,28',
    precoPor: 9.58,
    precoPorTexto: 'R$ 9,58',
    promocaoId: 0,
    promocaoImagemUrl: '',
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
    sku: '123',
    seo: {
        seo_Descricao: '',
        seo_PalavrasChaves: '',
        seo_Titulo: 'Saia Katrina'
    },
    tamanhos: [
        { disponivel: true, tamanho: 'P' },
        { disponivel: false, tamanho: 'M' }
    ],
    tipo: 'Utensilio',
    totalParcelado: 20,
    totalParceladoTexto: 'R$ 120,00',
    valorMinimoParcela: 50,
    valorParcela: 20,
    valorParcelaTexto: 'R$ 20,00',
    variacoes: [
        {
            cor: 'Azul',
            desconto: 15,
            disponivel: true,
            estoque: 9111,
            imagemPrincipal: {
                grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                pequena:
                    'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                principal: true
            },
            imagens: [
                {
                    grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    pequena:
                        'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    principal: true
                }
            ],
            nome: 'Saia Katrina Azul',
            permalink: 'vestido/bege123',
            precoDe: 11.28,
            precoDeTexto: 'R$ 11,28',
            precoPor: 9.58,
            precoPorTexto: 'R$ 11,28',
            sku: '1339',
            tamanhos: [
                { disponivel: true, tamanho: 'P' },
                { disponivel: false, tamanho: 'M' }
            ],
            videoUrl:
                'https://global-videos.zordcdn.com.br/tatamartello/img/2025/03/produto/22881/5831-vestido-2.mp4'
        }
    ],
    videoUrl:
        'https://global-videos.zordcdn.com.br/tatamartello/img/2025/02/produto/22150/5851-shorts-saia-verde.mp4'
}

export const products: IProductCarouselProps[] = [
    {
        aplicarPromocao: false,
        categoria: 'Thaís Rodrigues > Saias',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '795556',
        cor: 'Verde Lima',
        desconto: 10,
        descontoProgressivo: true,
        disponivel: true,
        estoque: 976,
        estoqueLojas: '',
        favorito: true,
        freteGratis: false,
        id: 56658,
        imagemPrincipal: {
            grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
            media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
            mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
            pequena:
                'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_1.jpg?v=1741210460&width=823',
            principal: true
        },
        imagens: [
            {
                grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
                media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
                mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
                pequena:
                    'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0060_001_2.jpg?v=1741210473&width=823',
                principal: true
            }
        ],
        marca: 'THAÍS RODRIGUES',
        marcaId: 0,
        maximoParcelas: 1,
        nome: 'Saia Katrina',
        notaMedia: 0.0,
        novidade: false,
        novidadeDataExpiracao: '0001-01-01T00:00:00',
        permalink: 'thais-rodrigues-saia-katrina-verde-lima',
        precoDe: 4.17,
        precoDeTexto: 'R$ 4,17',
        precoPor: 3.75,
        precoPorTexto: 'R$ 3,75',
        promocaoId: 0,
        promocaoImagemUrl: '',
        quantidadeMaximaVenda: 0,
        quantidadeMinimaVenda: 0,
        sku: '795556',
        tamanhos: [
            { disponivel: true, tamanho: 'P' },
            { disponivel: false, tamanho: 'M' }
        ],
        tipo: 'COMUM',
        totalParcelado: 20,
        totalParceladoTexto: 'R$ 120,00',
        valorParcela: 3.75,
        valorParcelaTexto: 'R$ 3,75',
        variacoes: [
            {
                cor: 'Azul',
                desconto: 0,
                disponivel: true,
                estoque: 9111,
                imagemPrincipal: {
                    grande: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    media: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    mini: 'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    pequena:
                        'https://www.thaisrodrigues.com.br/cdn/shop/files/200_2_0044_004_1.jpg?v=1740922773&width=823',
                    principal: true
                },
                imagens: [
                    {
                        grande: 'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        media: 'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        mini: 'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        pequena:
                            'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        principal: true
                    },
                    {
                        grande: 'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        media: 'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        mini: 'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        pequena:
                            'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        principal: true
                    }
                ],
                nome: 'Saia Katrina',
                permalink: 'thais-rodrigues-saia-katrina-azul',
                precoDe: 0,
                precoDeTexto: '',
                precoPor: 9.58,
                precoPorTexto: 'R$ 11,28',
                sku: '1339',
                tamanhos: [
                    { disponivel: true, tamanho: 'P' },
                    { disponivel: false, tamanho: 'M' }
                ],
                videoUrl:
                    'https://global-videos.zordcdn.com.br/tatamartello/img/2025/03/produto/22881/5831-vestido-2.mp4'
            }
        ],
        videoUrl: ''
    },
    {
        aplicarPromocao: false,
        categoria: 'Tatá Martello > Vestidos',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '1339',
        cor: 'Rosa',
        desconto: 15,
        descontoProgressivo: false,
        disponivel: true,
        estoque: 9111,
        estoqueLojas: '',
        favorito: false,
        freteGratis: true,
        id: 50482,
        imagemPrincipal: {
            grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            pequena:
                'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21912/5851-verde-lima-1.jpg?ims=630x1008',
            principal: true
        },
        imagens: [
            {
                grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
                media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
                mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
                pequena:
                    'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/21910/5851-verde-lima-3.jpg?ims=630x1008',
                principal: true
            }
        ],
        marca: 'TATÁ MARTELLO',
        marcaId: 0,
        maximoParcelas: 1,
        nome: 'Vestido Malha',
        notaMedia: 0.0,
        novidade: true,
        novidadeDataExpiracao: '2025-03-29T00:00:00',
        permalink: 'tata-martelo-vestido-rosa',
        precoDe: 11.28,
        precoDeTexto: 'R$ 11,28',
        precoPor: 9.58,
        precoPorTexto: 'R$ 9,58',
        promocaoId: 0,
        promocaoImagemUrl: '',
        quantidadeMaximaVenda: 2,
        quantidadeMinimaVenda: 1,
        sku: '1339',
        tamanhos: [
            { disponivel: true, tamanho: 'P' },
            { disponivel: false, tamanho: 'M' },
            { disponivel: true, tamanho: 'G' }
        ],
        tipo: 'COMUM',
        totalParcelado: 20,
        totalParceladoTexto: 'R$ 120,00',
        valorParcela: 9.58,
        valorParcelaTexto: 'R$ 9,58',
        variacoes: [
            {
                cor: 'Vermelho',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagemPrincipal: {
                    grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    pequena:
                        'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                    principal: true
                },
                imagens: [
                    {
                        grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                        media: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                        mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                        pequena:
                            'https://tatamartello.cdn.magazord.com.br/img/2025/02/produto/22465/5709-rosa-7.jpg?ims=630x1008',
                        principal: true
                    },
                    {
                        grande: 'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        media: 'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        mini: 'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        pequena:
                            'https://tatamartello.cdn.magazord.com.br/img/2023/10/produto/11767/2105pk-2.jpg?ims=420x672',
                        principal: true
                    },
                    {
                        grande: 'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        media: 'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        mini: 'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        pequena:
                            'https://tatamartello.cdn.magazord.com.br/img/2024/07/produto/16228/5393-1.jpg?ims=420x672',
                        principal: true
                    }
                ],
                nome: 'Vestido Malha',
                permalink: 'tata-martelo-vestido-vermelho',
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
                ],
                videoUrl:
                    'https://global-videos.zordcdn.com.br/tatamartello/img/2025/03/produto/22881/5831-vestido-2.mp4'
            }
        ],
        videoUrl:
            'https://global-videos.zordcdn.com.br/tatamartello/img/2025/02/produto/22150/5851-shorts-saia-verde.mp4'
    },
    {
        aplicarPromocao: false,
        categoria: 'Tatá Martello > Vestidos',
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '1339',
        cor: 'Amarelo',
        desconto: 15,
        descontoProgressivo: false,
        disponivel: false,
        estoque: 9111,
        estoqueLojas: '',
        favorito: false,
        freteGratis: true,
        id: 50482,
        imagemPrincipal: {
            grande: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            media: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            mini: 'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            pequena:
                'https://tatamartello.cdn.magazord.com.br/img/2025/01/produto/21090/5746-2.jpg?ims=630x1008',
            principal: true
        },
        imagens: [
            {
                grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                pequena:
                    'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                principal: true
            }
        ],
        marca: 'TATÁ MARTELO',
        marcaId: 0,
        maximoParcelas: 1,
        nome: 'Vestido Verão',
        notaMedia: 0.0,
        novidade: true,
        novidadeDataExpiracao: '2025-03-29T00:00:00',
        permalink: 'tata-martello-vestido-verao-amarelo',
        precoDe: 0,
        precoDeTexto: '',
        precoPor: 9.58,
        precoPorTexto: 'R$ 9,58',
        promocaoId: 0,
        promocaoImagemUrl: '',
        quantidadeMaximaVenda: 2,
        quantidadeMinimaVenda: 1,
        sku: '1339',
        tamanhos: [
            { disponivel: false, tamanho: 'G' },
            { disponivel: false, tamanho: 'GG' }
        ],
        tipo: 'COMUM',
        totalParcelado: 20,
        totalParceladoTexto: 'R$ 120,00',
        valorParcela: 9.58,
        valorParcelaTexto: 'R$ 9,58',
        variacoes: [
            {
                cor: 'Azul Bebê',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagemPrincipal: {
                    grande: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    media: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    mini: 'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    pequena:
                        'https://tatamartello.cdn.magazord.com.br/img/2024/12/produto/20953/5738-azul.jpg?ims=630x1008',
                    principal: true
                },
                imagens: [
                    {
                        grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        pequena:
                            'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        principal: true
                    }
                ],
                nome: 'Vestido Verão',
                permalink: 'tata-martello-vestido-verao-azul-bebe',
                precoDe: 11.28,
                precoDeTexto: 'R$ 11,28',
                precoPor: 9.58,
                precoPorTexto: 'R$ 11,28',
                sku: '1338',
                tamanhos: [
                    { disponivel: true, tamanho: 'P' },
                    { disponivel: false, tamanho: 'M' },
                    { disponivel: true, tamanho: 'G' }
                ],
                videoUrl: ''
            }
        ],
        videoUrl: ''
    },
    {
        aplicarPromocao: false,
        categoria: "D'Vanelle > Vestidos",
        categoriaId: 0,
        cliqueRetire: true,
        codigo: '1339',
        cor: 'Azul',
        desconto: 15,
        descontoProgressivo: false,
        disponivel: false,
        estoque: 9111,
        estoqueLojas: '',
        favorito: false,
        freteGratis: true,
        id: 50482,
        imagemPrincipal: {
            grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
            media: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
            mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
            pequena:
                'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-2.jpg',
            principal: true
        },
        imagens: [
            {
                grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                media: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                pequena:
                    'https://cdn.entrypoint.directory/assets/62469/produtos/624/vestido-laura-azul-3-d-vanelle.jpg',
                principal: true
            }
        ],
        marca: "D'VANELLE",
        marcaId: 0,
        maximoParcelas: 1,
        nome: 'Vestido Social Florido',
        notaMedia: 0.0,
        novidade: true,
        novidadeDataExpiracao: '2025-03-29T00:00:00',
        permalink: 'dvanelle-vestido-social-florido-azul',
        precoDe: 0,
        precoDeTexto: '',
        precoPor: 9.58,
        precoPorTexto: 'R$ 9,58',
        promocaoId: 0,
        promocaoImagemUrl: '',
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
        totalParcelado: 20,
        totalParceladoTexto: 'R$ 120,00',
        valorParcela: 9.58,
        valorParcelaTexto: 'R$ 9,58',
        variacoes: [
            {
                cor: 'Marrom',
                desconto: 15,
                disponivel: true,
                estoque: 9111,
                imagemPrincipal: {
                    grande: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    media: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    mini: 'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    pequena:
                        'https://cdn.entrypoint.directory/assets/62469/produtos/625/vestido-laura-marrom-1.jpg',
                    principal: true
                },
                imagens: [
                    {
                        grande: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        media: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        mini: 'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        pequena:
                            'https://static.riachuelo.com.br/RCHLO/15631591002/portrait/a5b62f743dd0ac7d9723323a0ae27bc722ef02fc.jpg?imwidth=276',
                        principal: true
                    }
                ],
                nome: 'Vestido Social Florido Marrom',
                permalink: 'dvanelle-vestido-social-florido-marrom',
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
                ],
                videoUrl: ''
            }
        ],
        videoUrl: ''
    }
]
