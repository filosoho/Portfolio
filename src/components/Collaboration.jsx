import { Suspense, memo } from "react";
import GlobeVisualization from "../components/GlobeVisualization";

const Collaboration = memo(() => (
  <div className="grid-container">
    <div className="rounded-3xl max-w-full max-h-[226px] flex justify-center items-center mt-5 mb-2">
      <Suspense fallback={<div>Loading globe...</div>}>
        <GlobeVisualization />
      </Suspense>
    </div>
    <div>
      <h4 className="grid-headtext">Effective Remote Collaboration</h4>
      <p className="grid-subtext">
        As a London-based developer, I embrace the flexibility of remote work
        across various time zones. I believe that strong communication and a
        collaborative spirit are essential for delivering successful projects.
        I&apos;m well-versed in using remote work tools and best practices,
        ensuring that every team member feels connected and engaged, no matter
        where they are.
      </p>
    </div>
  </div>
));

export default Collaboration;
