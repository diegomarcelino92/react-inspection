import { request } from './request';

export const inspectionAPI = {
  inspection: (cep: string) => request(`address/${cep}`).get(),
};
