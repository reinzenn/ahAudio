// components/AutoCSVReader.js
import React, { useEffect } from "react";
import Papa from "papaparse";

const AutoCSVReader = ({ onDataLoaded }) => {
  useEffect(() => {
    const fetchCSV = () => {
      const timestamp = new Date().getTime();
      fetch(`./csv/NB-Lista-Precios.csv?t=${timestamp}`)
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
              if (typeof onDataLoaded === "function") {
                onDataLoaded(result.data);
              }
            },
          });
        })
        .catch((err) => console.error("Error leyendo el CSV:", err));
    };

    fetchCSV();
    const intervalId = setInterval(fetchCSV, 15 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [onDataLoaded]);

  return null; // No muestra nada
};

export default AutoCSVReader;
