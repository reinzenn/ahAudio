import React from "react";
import "./banners.css"; // Import your CSS file for custom styles

const BannerHome = () => {
  return (
    <div className="banners">
      <div className="bg-url-auriculares w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
          Bienvenido a tu mundo
        </h1>
        <p className="text-lg text-white mt-2">
          Encontrá los mejores productos
        </p>
      </div>
    </div>
  );
};

export default BannerHome;
