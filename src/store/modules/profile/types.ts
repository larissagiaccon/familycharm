// eslint-disable-next-line no-shadow
export enum ActionTypes {
    loadAddressList = 'LOAD_ADDRESS_LIST',
    updateAddressList = 'UPDATE_ADDRESS_LIST',
    selectDefaultAddress = 'SELECT_DEFAULT_ADDRESS',
    deleteAddress = 'DELETE_ADDRESS',
    addNewAddress = 'ADD_NEW_ADDRESS',
    updateAddress = 'UPDATE_ADDRESS',

    loadRequestList = 'LOAD_REQUEST_LIST',
    updateRequestList = 'UPDATE_REQUEST_LIST',

    loadRequestViewer = 'LOAD_REQUEST_VIEWER',
    updateRequestViewer = 'UPDATE_REQUEST_VIEWER',
    resendRequest = 'RESEND_REQUEST',

    updatePassword = 'UPDATE_PASSWORD',

    loadUserData = 'LOAD_USER_DATA',
    updateUserData = 'UPDATE_USER_DATA',
    updateUserRegister = 'UPDATE_USER_REGISTER',

    loadFavoritesList = 'LOAD_FAVORITIES_LIST',
    updateFavoritesList = 'UPDATE_FAVORITIES_LIST',
    setFavorite = 'SET_FAVORITE',
    removeFavorite = 'REMOVE_FAVORITE',

    signIn = 'SIGN_IN',
    signOut = 'SIGN_OUT',
    updateUserSessionData = 'UPDATE_USER_SESSION_DATA',
    subscribeUser = 'SUBSCRIBE_USER'
}

export interface IProfileState {
    user: IUserProps
    userData: IUserDataProps
    requests: Array<IRequestProps>
    addresses: Array<IAddressProps>
    requestViewer: IRequestItemProps
    favorites: Array<IFavoritesProps>
}

export interface IUserProps {
    id: number
    codigo: string
    nome: string
    nomeCompleto: string
    email: string
    documento: string
    assinanteNewsletter: boolean
    dataNascimento: Date
    genero: string
    token: string
    uf: string
}

export interface IRegisterProps {
    name: string
    typePerson: string
    genre: {
        label: string
        value: string
    }
    birth: Date
    phone: string
    cell_phone: string
    zip_code: string
    address: string
    complement: string
    number: string
    ibge: string
    district: string
    city: string
    state: {
        value: string
        label: string
    }
    reference_point: string
    email: string
    email_confirmation: string
    password: string
    password_confirmation: string
    check_box: Array<string>
}

export interface IAddressProps {
    id: number
    padrao: boolean
    nomeCompleto: string
    descricao: string
    codigoPostal: string
    logradouro: string
    numero: string
    cidade: string
    bairro: string
    uf: string
    complemento: string
    referencia: string
    telefone1: string
    telefone2?: string
    ibge: string
    codigoPostalFormatado?: string
    enderecoCompleto?: string
    inconsistente?: boolean
    incompleto?: boolean
}

export interface IRequestProps {
    numero: string
    transacao: string
    totalItens: number
    total: number
    status: string
    criadoEm: Date
    totalPedidos: number
    criadoEmFormatado: string
    totalTexto: string
}

export interface IItemProps {
    sku: string
    nome: string
    descricao: string
    quantidade: number
    precoUnitario: number
    desconto: number
    precoTotal: number
    brinde: boolean
    imagem: string
    precoTotalComDesconto: number
    precoUnitarioTexto: string
    descontoTexto: string
    precoTotalTexto: string
    precoTotalComDescontoTexto: string
}

export interface IRequestItemProps {
    id: number
    numero: string
    status: string
    transacao: string
    cliente: {
        id: number
        tipo: string
        nomeCompleto: string
        documento: string
        dataNascimento: string
        telefone: string
        email: string
    }
    entrega: {
        servico: string
        formaEntrega: string
        responsavel: string
        codigoPostal: string
        logradouro: string
        numero: string
        bairro: string
        cidade: string
        uf: string
        complemento: string
        telefone: string
        dataEntregaPrevista: Date
        codigoRastreio: string
        linkRastreio: string
        prazoDescricao: string
        freteGratis: boolean
        mensagem: string
    }
    pagamento: {
        tipo: string
        nome: string
        servico: string
        descricao: string
        numeroParcelas: number
        valorParcela: number
        valorJuros: number
        valorParcelaTexto: string
        valorJurosTexto: string
    }
    subtotal: number
    desconto: number
    credito: number
    frete: number
    total: number
    criadoEm: Date
    itens: Array<IItemProps>
    historico: Array<{
        status: string
        dataOcorrencia: Date
        dataOcorrenciaFormatado: string
    }>
    subtotalTexto: string
    descontoTexto: string
    creditoTexto: string
    freteTexto: string
    totalTexto: string
    criadoEmFormatado: string
    dataEntregaPrevistaTexto: string
    contemImagemItens: boolean
}

export interface IUserDataProps {
    id: number
    ativo: boolean
    codigo: string
    tipo: string
    nomeCompleto: string
    email: string
    documento: string
    dataNascimento: Date
    genero: string
    nomeFantasia: string
    razaoSocial: string
    inscricaoEstadual: string
    autorizaCatalogo: boolean
    autorizaNewsletter: boolean
    endereco: {
        nomeCompleto: string
        descricao: string
        logradouro: string
        complemento: string
        numero: string
        bairro: string
        referencia: string
        cidade: string
        uf: string
        ibge: string
        telefone1: string
        telefone2: string
        codigoPostal: string
        codigoPostalFormatado: string
        incompleto: boolean
        inconsistente: boolean
    }
    criadoEm: Date
    dataNascimentoFormatado: string
}

export interface IUpdateRegisterProps {
    name: string
    cpf: string
    documento: string
    genre: {
        label: string
        value: string
    }
    birth: Date
    phone: string
    cell_phone: string
    zip_code: string
    address: string
    complement: string
    number: string
    ibge: string
    district: string
    city: string
    state: {
        value: string
        label: string
    }
    reference_point: string
    email: string
    address_default: boolean
    check_box: Array<string>
}

export interface IZipCodeInfoProps {
    sucesso: boolean
    codigo: string
    logradouro: string
    bairro: string
    cidade: string
    uf: string
    ibge: string
    mensagem: string
}

export interface IPreRegisterResponse {
    bairro: string
    cidade: string
    codigo: string
    codigoPostal: string
    complemento: string
    documento: string
    enderecoErro: boolean
    ibge: string
    id: string
    logradouro: string
    tipo: string
    trace: string
    uf: string
}

export interface IFavoritesProps {
    id: number
    produtoId: number
    permalink: string
    nome: string
    precoVenda: number
    precoOrigem: number
    imagemUrl: string
    disponivel: true
    codigo: string
    sku: string
    quantidade: number
    precoVendaFormatado: string
    precoOrigemFormatado: string
    totalFavoritos: number
}
