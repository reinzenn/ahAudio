import React, { useState } from "react";
import AutoCSVReader from "../CSV/AutoCSVReader";
//import SplineCard from "./SplineCard";

const ListaProductos = ({ categoria }) => {
  const [allData, setAllData] = useState([]);
  const categoriaDeseada = categoria;
  const g = 1.4;

  const filtrado = allData.filter(
    (item) =>
      item.CATEGORIA &&
      item.CATEGORIA.trim().toUpperCase() === categoriaDeseada.toUpperCase()
  );

  return (
    <div className="w-full p-10 text-center grid place-items-center ">
      <AutoCSVReader onDataLoaded={setAllData} />

      <h1 className="text-lg font-semibold mb-10 gradient-text-1 shadow">
        {categoriaDeseada}
      </h1>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6 items-top">
        {filtrado.map((item, i) => (
          <div
            key={i}
            className="mt-0 flex flex-col justify-between gap-2 xl:w-[200px] card-border rounded-xl p-4 bg-[#ffffff]"
          >
            <p className="card-detalle">{item["DETALLE"]}</p>
            <div className="mix-blend-multiply">
              <img src={item["IMAGEN"]} alt={item["DETALLE"]} />
            </div>
            <p className="card-codigo">CODIGO: {item["CODIGO"]}</p>
            <p className="card-precio-iva">
              ${(item["PRECIO PESOS CON IVA"] * g).toFixed(0)}
            </p>
            <button className="shadow-button text-xs hover:text-blue-400 transition-all ease-out duration-1000 ">
              VER MAS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
