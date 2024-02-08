import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { dataEng } from "../data";
import { toast } from "react-toastify";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //create post request at component did mount
  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", dataEng)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log("response: ", res);
        toast.success("Data yüklendi.", {
          position: "top-right",
          autoClose: 1500,
        });
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("error: ", err);
        toast.error("Data yüklenemedi,error.", {
          position: "top-right",
          autoClose: 1500,
        });
      });
  }, []);

  console.log("Datacontext datalar", data);

  return (
    <DataContext.Provider value={{ data, setData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
