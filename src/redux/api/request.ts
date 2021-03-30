type Query = {
  [name: string]: string;
};

type MakeRequestParams = {
  endpoint: string;
  method: 'get' | 'put' | 'post' | 'delete';
  query?: Query;
};

async function makeRequest({ endpoint, method, query }: MakeRequestParams) {
  const { REACT_APP_API_URL } = process.env;

  const url = new URL(`${REACT_APP_API_URL}/${endpoint}`);

  url.search = new URLSearchParams(query).toString();

  const response = await fetch(url.href, { method });

  if (!response.ok) throw response;

  return response.json();
}

export const request = (endpoint: string) => ({
  get: (query?: Query) => makeRequest({ endpoint, query, method: 'get' }),
  put: () => makeRequest({ endpoint, method: 'put' }),
  post: () => makeRequest({ endpoint, method: 'post' }),
  delete: () => makeRequest({ endpoint, method: 'delete' }),
});
