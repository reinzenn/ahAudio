import React from "react";

const newsletter = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl lg:w-full rounded-2xl px-4 py-12 md:py-12 mx-2 lg:mx-auto my-20  text-white">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-[40px]">Mantenete Actualizado</h1>
        <p className="text-xl md:text-base text-gray-500/90 mt-2 max-w-xl">
          Ingresa a nuestro newsletter para ver las últimas novedades y ofertas
          exclusivas.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input
          type="text"
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
          placeholder="Ingresa tu email"
        />
        <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
          Suscribirse
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-500 mt-6 text-xs text-center">
        Al Suscribirse, estas de acuerdo con nuestra Política de Privacidad y
        das tu consentimiento para recibir actualizaciones.
      </p>
    </div>
  );
};

export default newsletter;
