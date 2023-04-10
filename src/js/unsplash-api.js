import axios from 'axios';

export class UnsplashApi {
  static BASE_URL = 'https://api.unsplash.com';
  static API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.query = null;
    this.page = 1;
  }

  fetchPhotosByQuery() {
    const searchParams = {
      params: {
        query: this.query,
        page: this.page,
        per_page: 20,
        orientation: 'portrait',
        client_id: UnsplashApi.API_KEY,
      },
    };

    return axios.get(`${UnsplashApi.BASE_URL}/search/otos`, searchParams);
  }

  fetchRandomPhotos() {
    const searchParams = {
      params: {
        orientation: 'portrait',
        count: 20,
        client_id: UnsplashApi.API_KEY,
      },
    };

    return axios.get(`${UnsplashApi.BASE_URL}/photos/random`, searchParams);
  }
}
