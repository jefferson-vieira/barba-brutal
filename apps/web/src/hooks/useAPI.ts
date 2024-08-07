import { useCallback } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (uri: string): Promise<any> {
    try {
      const res = await fetch(`${API_URL}/${uri}`);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const httpPost = useCallback(async (uri: string, body: any): Promise<any> => {
    const response = await fetch(`${API_URL}/${uri}`, {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${jwt}`,
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }, []);

  return { httpGet, httpPost } as const;
}
