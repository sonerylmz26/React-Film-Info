import { createContext, useContext, useState } from "react";
import { data } from "../helper/data";

export const FilmContext = createContext();

const FilmContextProvider = ({ children }) => {
const [year , setYear ] = useState("2022")

    const values = {
        data, year,setYear
    };

    return (
        <FilmContext.Provider value={values}>{children}</FilmContext.Provider>
    );
};

export default FilmContextProvider;

export const useFilmContext = () => {
    return useContext(FilmContext);
};
