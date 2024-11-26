import React, { Suspense, memo } from "react";
const Globe = React.lazy(() => import("react-globe.gl"));
import earthNight from "/assets/earth-night.jpg";
import earthTopology from "/assets/earth-topology.png";

const GlobeVisualization = memo(() => (
  <div className="rounded-3xl max-w-full max-h-[226px] flex justify-center items-center mt-5 mb-2">
    <Suspense fallback={<div className="text-white">Loading globe...</div>}>
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
    </Suspense>
  </div>
));

export default GlobeVisualization;
