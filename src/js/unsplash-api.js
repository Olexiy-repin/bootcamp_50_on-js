export class UnsplashApi {
  static BASE_URL = 'https://api.unsplash.com';
  static API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.query = null;
    this.page = 1;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: 20,
      orientation: 'portrait',
      client_id: UnsplashApi.API_KEY,
    });

    return fetch(`${UnsplashApi.BASE_URL}/search/photos?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
