import http from "../http-common";

class CarDataService {
  getAll() {
    return http.get("/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
  }
}

export default new CarDataService();