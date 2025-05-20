import React from "react";
import Newsletter from "../newsletter/newsletter";
import ListaProductos from "../components/productos/ListaProductos";
import Banners from "../banners/BannerHome";

const Productos = () => {
  return (
    <div>
      <Banners />

      <div className="w-full p-5 text-center grid place-items-center">
        <ListaProductos categoria="AURICULARES" />
        <ListaProductos categoria="PARLANTES" />
        <ListaProductos categoria="ACCESORIOS" />
      </div>

      <Newsletter id="newsletter" />
    </div>
  );
};

export default Productos;
