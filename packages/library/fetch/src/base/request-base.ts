export const REQUEST_METHOD = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
  CONNECT: 'CONNECT',
  TRACE: 'TRACE',
});

export type RequestMethod = keyof typeof REQUEST_METHOD;

export class RequestBase {
  method!: RequestMethod;
  headers!: Headers;
  mode!: RequestMode;
  body!: string;
  url!: string;
  searchParams?: URLSearchParams;
  private _request!: Request;

  constructor(partial: Partial<RequestBase>) {
    Object.assign(this, partial);
    if (this.method && this.url) {
      this._request = this.createInstanceRequest();
    }
  }

  public get request(): Request {
    return this._request;
  }

  public createInstanceRequest(): Request {
    const slug = this.searchParams?.toString() ? '?' + this.searchParams.toString() : '';
    return new Request(this.url + slug, {
      method: this.method,
      headers: this.headers,
      mode: this.mode,
      body: this.body,
    });
  }
}

export interface IFetchError<E> {
  status: number;
  ok: boolean;
  error: E;
}
