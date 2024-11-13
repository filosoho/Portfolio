import $ from "jquery";

export const createSVGElement = (width, height, widthGain, heightGain) => {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");

  $(svg)
    .css({
      width: width,
      height: height,
      transform: `scale(${(2 * widthGain * width) / height}, ${heightGain})`,
    })
    .attr({
      width: width,
      height: height,
      viewBox: "-1 -1 2 2",
    });

  return svg;
};

export const createPathElement = () => {
  const ns = "http://www.w3.org/2000/svg";
  const path = document.createElementNS(ns, "path");

  $(path).attr({
    pathLength: 100,
    "vector-effect": "non-scaling-stroke",
  });

  return path;
};

export const setCircleVisibility = (path, showElement) => {
  $(path).css("visibility", showElement ? "visible" : "hidden");
  const pathLength = 1000 * path.getTotalLength();

  // Set path attributes and styles
  $(path).attr({
    "stroke-dasharray": pathLength,
    "stroke-dashoffset": pathLength,
  });
};

export const circlePath = (dr_min, dr_max, θ0_min, θ0_max, dθ_min, dθ_max) => {
  const c = 0.551915024494;
  const β = Math.atan(c);
  const d = Math.sqrt(c * c + 1 * 1);
  let r = 0.9;
  let θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180;
  let path = "M";

  path += [r * Math.sin(θ), r * Math.cos(θ)];
  path += " C" + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)];

  for (let i = 0; i < 4; i++) {
    θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
    r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
    path +=
      " " + (i ? "S" : "") + [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)];
    path += " " + [r * Math.sin(θ), r * Math.cos(θ)];
  }
  return path;
};
