import { IUserDataProps } from 'store/modules/profile'

export const user = {
    id: 5150437,
    codigo: '32f28609-c89f-439d-9d98-b693a0c9fd07',
    nomeExibicao: 'LARISSA GIACCON',
    nomeCompleto: 'LARISSA DE SOUZA GiACCON',
    email: 'larissa.souza.jacon@gmail.com',
    documento: '12723205614',
    assinanteNewsletter: false,
    dataNascimento: new Date(),
    genero: 'F',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6IjUxNTA0MzciLCJjb2RpZ28iOiIzMmYyODYwOS1jODlmLTQzOWQtOWQ5OC1iNjkzYTBjOWZkMDciLCJub21lIjoiSk9OQVRBUyBERSBTT1VaQSIsImVtYWlsIjoibGFyaXNzYS5zb3V6YS5qYWNvbkBnbWFpbC5jb20iLCJkb2N1bWVudG8iOiIxMTU5NTU1NjY0OCIsImFzc2luYW50ZU5ld3NsZXR0ZXIiOiJGYWxzZSIsImRhdGFOYXNjaW1lbnRvIjoiMjMvMDgvMTk5NiAwMDowMDowMCIsImdlbmVybyI6Ik0iLCJjbHViZSI6IkZhbHNlIiwiZXhwIjoiMTc3MTUyNTcyMiJ9.MeL76gIIib59hvhD8d_17DZVZ5UVtZf3cimeqU2DNP9l3jUM3ZsavFLG1UxvzP-G71tP1gH2B8XK1qVsLeT-6g',
    expiracaoToken: '2026-02-19T15:28:42.0716404',
    uf: 'MG'
}

export const userProfile: IUserDataProps = {
    assinanteNewsletter: false,
    ativo: true,
    codigo: 'dbd0c486-63bc-42f2-a221-f05ddb8eebae',
    criadoEm: new Date(),
    dataNascimento: new Date(),
    dataNascimentoFormatado: '23/08/1996',
    documento: '12723205614',
    email: 'larissa.giaccon@leanwork.com.br',
    genero: 'FEMININO',
    id: 5150377,
    inscricaoEstadual: null,
    nomeCompleto: 'LARISSA GIACCON',
    nomeFantasia: null,
    razaoSocial: null,
    tipo: 'PF',
    endereco: {
        bairro: 'CENTRO',
        cidade: 'BOTELHOS',
        codigoPostal: '37720000',
        codigoPostalFormatado: '37720-000',
        complemento: 'CASA',
        descricao: 'COBRANÇA',
        ibge: null,
        incompleto: false,
        inconsistente: false,
        logradouro: 'RUA DA BIQUINHA',
        nomeCompleto: 'LARISSA GIACCON',
        numero: '211',
        referencia: '',
        telefone1: '43991041670',
        telefone2: '',
        uf: 'MG'
    },
    situacao: 'APROVADO',
    ultimoLogin: null
}
