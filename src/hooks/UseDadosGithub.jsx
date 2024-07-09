import { useEffect, useState } from "react";
const URL = "https://api.github.com/users/lucas3324k0/repos";

const UseDadosGithub = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Erro ao carregar dados do GitHub");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data }; 
};

export default UseDadosGithub;
