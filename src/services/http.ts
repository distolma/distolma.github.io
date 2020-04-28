export function get<T>(input: RequestInfo): Promise<T> {
  const headers = new Headers();
  headers.append(
    'Authorization',
    `Client-ID ${process.env.UNSPLASH_CLIENT_ID}`,
  );

  return fetch(input, { headers }).then((response) => response.json());
}
