export interface Deputado {
  id: string,
  uri: string,
  nome: string,
  siglaPartido: string,
  uriPartido: string,
  siglaUF: string,
  idLegislatura: number,
  urlFoto: string,
  email: string,
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
