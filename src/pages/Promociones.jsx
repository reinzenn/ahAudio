import React from "react";
import Newsletter from "../newsletter/newsletter";
import ListaProductos from "../components/productos/ListaProductos";
import BannerPromociones from "../banners/BannerPromociones";

const Promociones = () => {
  return (
    <div>
      <BannerPromociones />

      <div className="w-full p-5 text-center grid place-items-center">
        <ListaProductos categoria="ACCESORIOS" />
      </div>

      <Newsletter id="newsletter" />
    </div>
  );
};

export default Promociones;
