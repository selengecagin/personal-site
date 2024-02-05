import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //create post request at component did mount
  useEffect(() => {
    axios
      .post("/post", data)
      .then((res) => {
        setData(data);
        console.log("response: ", res);
      })
      .catch((err) => {
        setError(err);
        console.log("error: ", err);
      });
  }, []);

  console.log("datalar", data);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext();
