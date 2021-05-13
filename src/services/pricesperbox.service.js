import http from "../http-common";

class PricesPerBoxDataService {
  getAll(params) {
    return http.get("/pricesperbox", { params });
  }

  get(id) {
    return http.get(`/pricesperbox/${id}`);
  }

  create(data) {
    return http.post("/pricesperbox", data);
  }

  update(id, data) {
    return http.put(`/pricesperbox/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pricesperbox/${id}`);
  }

  deleteAll() {
    return http.delete(`/pricesperbox`);
  }

  findByTitle(title) {
    return http.get(`/pricesperbox?title=${title}`);
  }
}

export default new PricesPerBoxDataService();