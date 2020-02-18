import fetch from 'fetch';

class Requests {
  post(url, data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  put(url, data) {
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  get(url) {
    return fetch(url, {
      method: "GET",
    }).then(response => response.json());
  }

  delete(url) {
    return fetch(url, {
      method: "DELETE",
    });
  }
}