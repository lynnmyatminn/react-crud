import http from "../http-common";

class LocationDataService {
  getAll(params) {
    return http.get("/locations", { params });
  }

  get(id) {
    return http.get(`/locations/${id}`);
  }

  create(data) {
    return http.post("/locations", data);
  }

  update(id, data) {
    return http.put(`/locations/${id}`, data);
  }

  delete(id) {
    return http.delete(`/locations/${id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  findByTitle(title) {
    return http.get(`/locations?title=${title}`);
  }
}

export default new LocationDataService();