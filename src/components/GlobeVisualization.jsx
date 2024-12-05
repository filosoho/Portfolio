import React, { memo } from "react";
const Globe = React.lazy(() => import("react-globe.gl"));
import earthNight from "/assets/earth-night.jpg";
import earthTopology from "/assets/earth-topology.png";

const GlobeVisualization = memo(() => {
  return (
    <Globe
      height={276}
      width={276}
      backgroundColor="rgba(0,0,0,0)"
      backgroundImageOpacity={0.5}
      showAtmosphere
      showGraticules
      globeImageUrl={earthNight}
      bumpImageUrl={earthTopology}
    />
  );
});

export default GlobeVisualization;
