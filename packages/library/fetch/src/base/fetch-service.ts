import { IFetchError, REQUEST_METHOD, RequestBase, RequestMethod } from './request-base';

export interface PromiseThrowable<T, R = unknown> extends Promise<T> {
  catch<E = R>(onrejected?: (reason: IFetchError<E>) => PromiseLike<E> | E): Promise<T | E>;
}

export interface ConfigRequest {
  url: string;
  headers?: Headers;
  token?: string;
  searchParams?: URLSearchParams;
}

export interface ConfigRequestPost extends ConfigRequest {
  body: object;
}

export const isConfigRequestPost = (config: ConfigRequest): config is ConfigRequestPost =>
  (config as ConfigRequestPost).body !== undefined;

export interface ConfigRequestPut extends ConfigRequestPost {}

export interface ConfigRequestPatch extends ConfigRequestPost {}

export interface ConfigRequestDelete extends ConfigRequest {}

export interface ConfigRequestGet extends ConfigRequest {}

export class FetchService {
  get<T = unknown, E = unknown>(configGetRequest: ConfigRequestGet) {
    const request = this._generateRequest(configGetRequest, REQUEST_METHOD.GET);
    return this._fetch<T, E>(request);
  }

  delete<T = unknown, E = unknown>(configDeleteRequest: ConfigRequestDelete) {
    const request = this._generateRequest(configDeleteRequest, REQUEST_METHOD.DELETE);
    return this._fetch<T, E>(request);
  }

  post<T = unknown, E = unknown>(configPostRequest: ConfigRequestPost) {
    const request = this._generateRequest(configPostRequest, REQUEST_METHOD.POST);
    return this._fetch<T, E>(request);
  }

  put<T = unknown, E = unknown>(configPutRequest: ConfigRequestPut) {
    const request = this._generateRequest(configPutRequest, REQUEST_METHOD.PUT);
    return this._fetch<T, E>(request);
  }

  patch<T = unknown, E = unknown>(configPatchRequest: ConfigRequestPatch) {
    const request = this._generateRequest(configPatchRequest, REQUEST_METHOD.PATCH);
    return this._fetch<T, E>(request);
  }

  private _generateRequest(
    configRequest: ConfigRequest | ConfigRequestPost,
    method: RequestMethod,
  ) {
    const body = isConfigRequestPost(configRequest)
      ? JSON.stringify(configRequest.body)
      : undefined;
    return new RequestBase({
      headers: this._addEssentialHeaders(configRequest.headers, configRequest.token),
      method,
      body,
      url: configRequest.url,
      searchParams: configRequest.searchParams,
      mode: 'cors',
    });
  }

  private _fetch<T, E>(requestBase: RequestBase): PromiseThrowable<T> {
    return fetch(requestBase.request).then(async response => {
      if (response.status < 200 || response.status >= 300) {
        const error = (await response.json()) as E;
        throw { status: response.status, ok: response.ok, error } as IFetchError<E>;
      }
      return response.json();
    });
  }

  private _addEssentialHeaders(header?: Headers, token?: string): Headers {
    const headers = header ?? new Headers();
    if (!headers.get('Content-Type')) {
      headers.append('Content-Type', 'application/json');
    }
    if (token) headers.append('Authorization', `Bearer ${token ?? ''}`);
    return headers;
  }

  getUrlSearchParams(criteria: any) {
    Object.keys(criteria).forEach(
      key => (criteria[key] == null || criteria[key] == undefined) && delete criteria[key],
    );
    return new URLSearchParams(criteria);
  }
}
