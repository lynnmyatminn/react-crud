import http from "../http-common";

class UserDataService {
  login(email, password) {
    let request = http.post("/auth/login", {
      email: email,
      password: password,
    });
    request.then((user) => {
      localStorage.setItem("token", JSON.stringify(user.data.accessToken));
    });
    return request;
  }
}

export default new UserDataService();
