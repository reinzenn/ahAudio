import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";

const SplineCard = ({ detalle }) => {
  const splineRef = useRef();

  const handleLoad = (spline) => {
    splineRef.current = spline;
    const obj = spline.findObjectByName("9a2bfe37-d725-457f-a51b-c79a6b0c39d3");

    if (obj) {
      obj.text = detalle;
      console.log("Objetos disponibles en la escena:");
      console.log(spline?.scene?.children); // o `spline.findAllObjects()` si disponible
    } else {
      console.warn("No se encontró el objeto 'textDetalle'");
    }
  };

  return (
    <div className="w-full h-[300px]">
      <Spline
        scene="https://prod.spline.design/MxzlYOrGyo5DYb2h/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default SplineCard;
