
export const BASE_URL = "http://localhost:5000";

type LoginFormData = {
  email: string;
  password: string;
};

type RegistrationData = {
  email: string,
  name: string,
  password: string,
  description : string
};
type PostsData = {
  title: string;
  author: string;
  text_body : string;
}
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
         method: "POST",
         //credentials: "include",
       headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(data)
      });
      await errorHandler(response);
    },
   
  },
  user: {
    register: async (data: RegistrationData) => {
      const response = await fetch(`${BASE_URL}/auth/registration`, {
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
  posts: {
      createPost: async (data: PostsData) => {
        
        const response = await fetch(`http://localhost:5000/posts/createPost`, {
          method: "POST",
          
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(data)
        });
        await errorHandler(response);
      },
      getAllPosts: async  () => {
        const response = await fetch(`${BASE_URL}/posts/PostsList`, {
          credentials: "include",
          method: "GET"
        });
        await errorHandler(response);
        return await response.json();
      },
    }
  };