import {
  ActionTypes,
  IBannerProps,
  IFilterProps,
  ILoadShowCaseProps,
  IShowCaseProps,
} from './types';

export function loadShowCaseData({
  permaLink,
  routeParams,
}: ILoadShowCaseProps) {
  return {
    type: ActionTypes.loadShowCaseData,
    payload: {
      permaLink,
      routeParams,
    },
  };
}

export function updateShowCaseData(showcase: IShowCaseProps) {
  return {
    type: ActionTypes.updateShowCaseData,
    payload: {
      showcase,
    },
  };
}

export function updateShowCaseBanners(banners: Array<IBannerProps>) {
  return {
    type: ActionTypes.updateShowCaseBanners,
    payload: {
      banners,
    },
  };
}

export function updateFilters(filters: IFilterProps) {
  return {
    type: ActionTypes.updateFilters,
    payload: {
      filters,
    },
  };
}

export function resetFilters() {
  return {
    type: ActionTypes.resetFilters,
    payload: {},
  };
}
