const BASE_URL = "https://api.tvmaze.com";

const api = {
  list: async <T>(url: string): Promise<T> => {
    const [...data] = await fetch(`${BASE_URL}${url}`).then((res) =>
      res.json()
    );

    return data;
  },
  get: async <T>(url: string): Promise<T> => {
    const data = await fetch(`${BASE_URL}${url}`).then((res) => res.json());

    return data;
  },
};

export default api;
