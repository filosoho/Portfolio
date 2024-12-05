import React, { Suspense, memo } from "react";
const GlobeVisualization = React.lazy(() =>
  import("../components/GlobeVisualization")
);
import globeImage from "/assets/globe.png";
import { useMediaQuery } from "react-responsive";
import ErrorBoundary from "../components/ErrorBoundary";

const Collaboration = memo(() => {
  const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <div className="grid-container">
      <div className="rounded-3xl max-w-full max-h-[226px] flex justify-center items-center mt-5 mb-2">
        {isSmall ? (
          <div>
            <img src={globeImage} alt="Globe" />
          </div>
        ) : (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="text-center text-white">Loading globe...</div>
              }
            >
              <GlobeVisualization />
            </Suspense>
          </ErrorBoundary>
        )}
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
  );
});

export default Collaboration;
