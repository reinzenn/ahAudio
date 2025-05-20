import React from "react";
import "./banners.css"; // Import your CSS file for custom styles

const BannerPromociones = () => {
  return (
    <div className="banner-promociones">
      <div className="bg-url-auriculares w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
          Nuestras Promociones
        </h1>
      </div>
    </div>
  );
};

export default BannerPromociones;
