import { IProductCarouselProps } from '../product'

// eslint-disable-next-line no-shadow
export enum ActionTypes {
    loadCartData = 'LOAD_CART_DATA',
    updateCartData = 'UPDATE_CART_DATA',
    cleanCartData = 'CLEAN_CART_DATA',

    closeMiniCart = 'CLOSE_MINI_CART',

    loadOthersProductsCart = 'LOAD_OTHERS_PRODUCTS_CART',
    updateOthersProducts = 'UPDATE_OTHERS_PRODUCTS',

    addProductToCart = 'ADD_PRODUCT_TO_CART',
    updateQuantityOfProductInCart = 'UPDATE_QUANTITY_OF_PRODUCT_IN_CART',

    freightCalculation = 'FREIGHT_CALCULATION',
    updateFreightData = 'UPDATE_FREIGHT_DATA',

    addDiscountCoupon = 'ADD_DISCOUNT_COUPON',
    removeDiscountCoupon = 'REMOVE_DISCOUNT_COUPON',

    checkoutStart = 'CHECKOUT_START',
    cleanCheckout = 'CLEAN_CHECKOUT',

    selectFreightOption = 'SELECT_FREIGHT_OPTION',

    loadPaymentOptions = 'LOAD_PAYMENT_OPTIONS',
    updatePaymentOptions = 'UPDATE_PAYMENT_OPTIONS',

    sendPurchaseOrder = 'SEND_PURCHASE_ORDER',
    updatePurchaseOrder = 'UPDATE_PURCHASE_ORDER',
    loadPurchaseOrderData = 'LOAD_PURCHASE_ORDER_DATA',
    updatePurchaseOrderData = 'UPDATE_PURCHASE_ORDER_DATA',
    cleanPurchaseOrderData = 'CLEAN_PURCHASE_ORDER_DATA',

    selectShippingAddress = 'SELECT_SHIPPING_ADDRESS',

    cartRecovery = 'CART_RECOVERY'
}

export interface ICartState {
    cart: ICartProps
    showMiniCart: boolean
    freight: IFreightListProps
    paymentOptions: IPaymentOptionsProps
    purchaseOrder: IPurchaseOrderProps
    purchaseOrderData: IPurchaseOrderDataProps
    othersProducts: Array<IProductCarouselProps>
}

export interface ICartProps {
    codigoCliente: string
    codigoCupom: string
    cupomClienteAutomatico: {
        aplicarPromocao: boolean
        ativo: boolean
        fraseCupomClienteAutomatico: string
        valorTotal: number
    }
    descontoCupom: number
    descontoCupomTexto: string
    descontoPagamento: string
    emailCliente: string
    endereco: {
        bairro: string
        cidade: string
        codigoPostal: string
        complemento: string
        descricao: string
        id: number
        incompleto: boolean
        logradouro: string
        numero: string
        padrao: boolean
        referencia: string
        responsavel: string
        telefone: string
        uf: string
    }
    entrega: {
        codigo: string
        mensagem: string
        nome: string
        prazoAteEmDias: number
        prazoDeEmDias: number
        prazoDescricao: string
    }
    estaVazio: boolean
    fraseRestanteFreteGratis: string
    frete: number
    freteTexto: string
    id: number
    itens: Array<IProductCartItem>
    nomeCliente: string
    opcoesFrete: Array<{
        codigo: string
        nome: string
        valor: string
        valorCobrado: number
        prazoEntrega: string
        dataAtual: Date
        prazoEntregaDeEmDias: number
        prazoEntregaAteEmDias: number
        mensagem: string
    }>
    pesoTotal: number
    prazoTexto: string
    subtotal: number
    subtotalComDesconto: number
    subtotalComDescontoTexto: string
    subtotalTexto: string
    total: number
    totalDesconto: number
    totalDescontoTexto: string
    totalItens: number
    totalSemFrete: number
    totalSemFreteTexto: string
    totalTexto: string
    transacao: string
    usouCredito: boolean
    valeCredito: number
    valeCreditoTexto: string
    valorRestanteFreteGratis: number
    valorRestanteLiberarPedido: number
}

export interface IGiftProductProps {
    sku: string
    nome: string
    descricao: string
    informativo: string
    imagem: string
    quantidade: number
}

export interface IUpdateCartData {
    showMiniCart?: boolean
    cart?: ICartProps
    othersProducts?: Array<IProductCarouselProps>
}

export interface IFreightProps {
    modalidade: string
    prazoEntrega: string
    totalComFrete: string
    ultimaParcela: {
        desconto: number
        descricao: string
        numero: number
        taxaJuros: number
        valor: number
        valorJuros: number
        valorTexto: string
    }
    valor: string
}

export interface IFreightListProps {
    opcoesFrete: Array<{
        nome: string
        valor: string
        prazo: string
        mensagem: string
    }>
}

export interface IProductCartItem {
    id: string
    codigo: string
    sku: string
    permalink: string
    nome: string
    descricao: string
    desconto: number
    imagem: string
    gtin: string
    categoriaId: number
    categoria: string
    categoriaHierarquia: string
    categoriaGoogle: string
    marcaId: number
    marca: string
    precoTotal: number
    precoDeTotal: number
    quantidade: number
    quantidadeMinimaVenda: number
    quantidadeMaximaVenda: number
    quantidadeMultiplaVenda: number
    freteGratis: boolean
    promocaoId: number
    calcularTabelaPreco: boolean
    valorTabelaPreco: number
    promocao: string
    promocaoIdGA4: string
    itensPromocao: Array<{
        promocaoId: number
        precoItem: number
        desconto: number
        quantidade: number
        precoComDesconto: number
        precoComDescontoTexto: string
        precoDescontoQuantidade: number
        precoDescontoQuantidadeTexto: string
    }>
    promocaoProgressivaTexto: Array<string>
    textoPromocao: string
    precoDeTexto: string
    precoPorTexto: string
    precoDeTotalTexto: string
    precoTotalTexto: string
    precoDe: number
    precoPor: number
    comissao: number
    comissaoTexto: string
}

export interface IPaymentOptionsProps {
    boletoBancario: IPaymentProps
    cartaoCredito: IPaymentProps
    cartaoDebito: IPaymentProps
    transferenciaOnline: IPaymentProps
    valeCredito: IPaymentProps
    campanha: IPaymentProps
    brinde: IPaymentProps
    possuiOpcaoPagamento: boolean
    pix: IPaymentProps
}

export interface IPaymentProps {
    tipo: string
    nome: string
    mensagem: string
    servico: string
    parcelas: Array<IPaymentItemProps>
    totalParcelas: number
    parcela: IPaymentItemProps
    ultimaParcela: IPaymentItemProps
    ultimaParcelaSemJuros: IPaymentItemProps
}

interface IPaymentItemProps {
    descricao: string
    numero: number
    valor: number
    taxas: number
    juros: number
    valorJuros: number
    total: number
    desconto: number
    valorDesconto: number
    valorTexto: string
    valorDetalhadoTexto: string
    valorDetalhadoCheckoutTexto: string
}

export interface ISendPurchaseOrder {
    formaPagamento: string
    parcela: number
    cartao?: {
        bandeira: string
        titular: string
        numero: string
        cvv: string
        mes: number
        ano: number
        token: string
    }
    cart: ICartProps
    codigoCliente: string
}

export interface IPurchaseOrderProps {
    pedidoId: number
    numeroPedido: string
    codigoTransacao: string
    retornarCarrinho: boolean
    redirecionarUrl: string
}

export interface IPurchaseOrderDataProps {
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
        agendamento_Data: Date
        retiraEndereco: string
        agendamento_Periodo: string
        agendamento_Valor: number
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
    itens: Array<{
        sku: string
        nome: string
        descricao: string
        quantidade: number
        precoUnitario: number
        desconto: number
        precoTotal: number
        brinde: boolean
        imagem: string
        paridade: number
        precoTotalComDesconto: number
        precoUnitarioTexto: string
        descontoTexto: string
        precoTotalTexto: string
        precoTotalComDescontoTexto: string
    }>
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
    dataEntregaAgendadaTexto: string
    contemImagemItens: boolean
    totalEconomizado: number
    totalEconomizadoTexto: string
}

export interface IPreviewBankSlipProps {
    transacao: string
    nossoNumero: string
    numeroDocumento: string
    linhaDigitavel: string
    codigoBarras: string
    mensagemErro: string
    dataVencimento: Date
    boletoUrl: string
    qrCode: string
    total: number
    status: string
    pedidoId: number
    totalTexto: string
    totalInteiro: number
}

export interface IPreviewPixProps {
    textoQrCode?: string
    dataCriacaoRaw?: string
    dataExpiracaoRaw?: string
    totalTexto?: string
    linkQrCode?: string
    dataExpiracaoUnixTime?: number
    dataCriacao?: string
    dataExpiracao: string
}

export interface IPreviewCreditCard {
    bandeira: string
    titular: string
    mascara: string
    numeroParcelas: number
    valorParcela: number
    valorParcelaTexto: string
    tipo: string
}

export interface IPreviewAccountDebitProps {
    banco: string
    consultaSonda: string
    numero: string
    pedidoId: number
    processado: boolean
    processadoEm: string
    processadoEmFormatado: string
    situacao: string
    status: string
    total: number
    totalInteiro: number
    totalTexto: string
    transferenciaOnlineUrl: string
    urlSonda: string
}

export interface IFreightCalculationResponse extends IFreightListProps {}

export interface ICartRecoveryProps {
    cartId: number
    clientCode: string
}
