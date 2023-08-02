import { useState, useEffect } from "react";

interface UserModel {
  name: string;
  email: string;
  username: string;
  password: string;
  imageUrl: string | null;
}
// Create a new event

export const useLogin = (username: string, password: string) => {
  const AUTH_URL = process.env.AUTH_API_URL;
  const [data, setData] = useState<UserModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      // try catch finally
      if (AUTH_URL && username && password) {
        try {
          setIsLoading(true);
          //   const config = {
          //     headers: {
          //       Authorization: `Bearer ${user.token}`,
          //     },
          //   };
          const response = await fetch(`${AUTH_URL}/login`, {
            method: "POST",
            // headers: {
            //   ...config.headers,
            // },
            body: JSON.stringify({ username, password }),
          });

          const data = await response.json();
          setData(data.event);
          console.log(data);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getData();
  }, []);

  return { data, isLoading, isError };
};
