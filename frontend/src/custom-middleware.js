import axios from "axios";

export const auth = async () => {
  if (localStorage.getItem("sanctum-token")) {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        localStorage.getItem("sanctum-token")
      )}`;
      let response = await axios.get("http://127.0.0.1:8000/api/authinticate");
      console.log(response);
      return true;
    } catch (error) {
      if (error.response.status == 401) {
        localStorage.removeItem("sanctum-token");
        localStorage.removeItem("user");
        return false;
      }
    }
  } else {
    localStorage.removeItem("sanctum-token");
    localStorage.removeItem("user");
    return false;
  }
};

export const guest = () => {
  if (!localStorage.getItem("sanctum-token")) {
    return true;
  } else {
    return false;
  }
};
