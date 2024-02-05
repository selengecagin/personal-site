import React, { createContext, useEffect, useState } from "react";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post("/post", data)
      .then((res) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      });
  });

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext();
