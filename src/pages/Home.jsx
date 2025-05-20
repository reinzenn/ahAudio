import React from "react";
import Newsletter from "../newsletter/newsletter";
import ListaProductos from "../components/productos/ListaProductos";
import BannerHome from "../banners/BannerHome";

const Home = () => {
  return (
    <div>
      <BannerHome />

      <div className="w-full p-5 text-center grid place-items-center">
        <ListaProductos categoria="AURICULARES" />
        <ListaProductos categoria="PARLANTES" />
        <ListaProductos categoria="ACCESORIOS" />
      </div>

      <Newsletter id="newsletter" />
    </div>
  );
};

export default Home;
