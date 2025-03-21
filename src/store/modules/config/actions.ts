import { ActionTypes, IConfigProps, IRedirectProps, IUFProps } from './types';

export function loadConfigApplication() {
  return {
    type: ActionTypes.loadConfigApplication,
    payload: {},
  };
}

export function updateConfigApplication({
  config,
  categories,
  porcentagem,
}: Omit<IConfigProps, 'redirectData'>) {
  return {
    type: ActionTypes.updateConfigApplication,
    payload: {
      config,
      categories,
      porcentagem,
    },
  };
}

export function setRedirect({ redirect, path }: IRedirectProps) {
  return {
    type: ActionTypes.setRedirect,
    payload: {
      redirect,
      path,
    },
  };
}

export function clearRedirect() {
  return {
    type: ActionTypes.clearRedirect,
    payload: {},
  };
}

export function setUF(uf: IUFProps) {
  return {
    type: ActionTypes.setUF,
    payload: {
      uf,
    },
  };
}

export function setPorcentagem(porcentagem: string) {
  return {
    type: ActionTypes.setPorcentagem,
    payload: {
      porcentagem,
    },
  };
}

export function setBackgroundColorHeader(color: string) {
  return {
    type: ActionTypes.setBackgroundColorHeader,
    payload: {
      color,
    },
  };
}
