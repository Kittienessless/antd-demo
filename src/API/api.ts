export const BASE_URL = "http://localhost:3000";

type LoginFormData = {
  login: string;
  password: string;
};

type RegistrationData = {
  login: string;
  password: string;
  description : string;
  email: string;
};

const errorHandler = async (response: Response) => {
  if (response.status !== 200) {
    const responseData = await response.json();
    throw Error(responseData.message);
  }
};

export const API = {
  auth: {
    login: async (data: LoginFormData) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        mode: 'cors', 
        method: "POST",
       // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(data)
      });
      await errorHandler(response);
    },
  /*   logout: async () => {
      const response = await fetch(`${BASE_URL}/auth`, {
        method: "DELETE",
        credentials: "include",
      });
      await errorHandler(response);
    }, */
  },
  user: {
    register: async (data: RegistrationData) => {
      const response = await fetch(`${BASE_URL}/auth/registration`, {
        mode: 'cors', 
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data)
      });
      await errorHandler(response);
    },
  
  },
  getCurrentUser: async () => {
    const response = await fetch(`${BASE_URL}/user`, {
      credentials: "include",
      method: "GET"
    });
    await errorHandler(response);
    return await response.json();
  },
};