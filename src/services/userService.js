import axios from "../configs/axiosConfig";

export const fetchUsers = async (page = 1, count = 6) => {
  try {
    const response = await axios.get(`/users?count=${count}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchPositions = async () => {
  try {
    const response = await axios.get(`/positions`);
    return response.data.positions;
  } catch (error) {
    console.error("Error fetching positions:", error);
    throw error;
  }
};

export const fetchToken = async () => {
  try {
    const response = await axios.get("/token");
    return response.data.token;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const token = await fetchToken();
    if (!token) throw new Error("Failed to get token");

    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await axios.post("/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Token: token,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error.response?.data);
    throw error;
  }
};
