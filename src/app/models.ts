export interface Deputado {
  email: string,
  id: string,
  idLegislatura: number,
  nome: string,
  siglaPartido: string,
  siglaUf: string,
  uri: string,
  uriPartido: string,
  urlFoto: string
}

export interface DeputadoDetails {
  cpf: string,
  dataFalecimento: string,
  dataNascimento: string,
  escolaridade: string,
  id: string,
  municipioNascimento: string,
  nomeCivil: string,
  redeSocial: [
    string
  ],
  sexo: string,
  ufNascimento: string,
  ultimoStatus: {
    condicaoEleitoral: string,
    data: string,
    descricaoStatus: string,
    email: string,
    gabinete: {
      andar: string,
      email: string,
      nome: string,
      predio: string,
      sala: string,
      telefone: string
    },
    id: string,
    idLegislatura: string,
    nome: string,
    nomeEleitoral: string,
    siglaPartido: string,
    siglaUf: string,
    situacao: string,
    uri: string,
    uriPartido: string,
    urlFoto: string
  },
  uri: string,
  urlWebsite: string
}

export interface APIResponse<T> {
  dados: Array<T>;
}
