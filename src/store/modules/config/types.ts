// eslint-disable-next-line no-shadow
export enum ActionTypes {
    loadConfigApplication = 'LOAD_CONFIG_APPLICATION',
    updateConfigApplication = 'UPDATE_CONFIG_APPLICATION',

    setRedirect = 'SET_REDIRECT',
    clearRedirect = 'CLEAR_REDIRECT',

    setUF = 'SET_UF',

    setPorcentagem = 'SET_PORCENTAGEM',

    setBackgroundColorHeader = 'SET_BACKGROUND_HEADER_COLOR'
}

export interface IConfigProps {
    backgroundColorHeader?: string
    categories: Array<INavigationCategoryProps>
    config: IConfigApplicationProps
    porcentagem?: string
    redirectData: IRedirectProps
    uf: IUFProps
}

export interface IConfigApplicationProps {
    aparencia: {
        icone: string
        logo: string
        openGraph: string
    }
    checkout: {
        valorMinimoCompra: number
    }
    layout: {
        textColor: string
        backgroundColor: string
        primaryColor: string
        secondaryColor: string
        imagesSize: string
        defaultShowcaseMobile: string
    }
    loja: {
        bairro: string
        blogUrl: string
        cidade: string
        codigoPostal: string
        complemento: string
        documento: string
        email: string
        horarioAtendimento: string
        inscricaoEstadual: string
        logradouro: string
        nome: string
        nomeFantasia: string
        numero: string
        razaoSocial: string
        seo_Descricao: string
        seo_PalavrasChaves: string
        seo_Titulo: string
        telefone: string
        televendas: string
        uf: string
        whatsapp: string
    }
    redesSociais: {
        facebook: string
        twitter: string
        instagram: string
        youtube: string
        linkedin: string
        whatsapp: string
    }
}

export interface INavigationCategoryProps {
    categoriaPaiId: string
    contador: number
    deepLink: string
    descricao: string
    exibirMenu: boolean
    filhos: Array<INavigationCategoryProps>
    id: number
    imagemThumbUrl: string
    imagemUrl: string
    nome: string
    permalink: string
    tipoDeepLink: string
    valorDeepLink: string
}

export interface IRedirectProps {
    path: string
    redirect: boolean
}

export interface IUFProps {
    label: string
    value: string
}
