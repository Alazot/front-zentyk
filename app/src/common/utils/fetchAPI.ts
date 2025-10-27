/**
 * fetchAPI
 * @param url - endpoint de la API
 * @param options - opciones de fetch (method, body, headers)
 */
export const fetchAPI = async (url: string, options?: RequestInit) => {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('fetchAPI error:', error);
    throw error;
  }
};
