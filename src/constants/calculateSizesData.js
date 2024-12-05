export const calculateSizes = (isSmall, isMedium, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.43 : isMobile ? 0.65 : 1,
    deskPosition: isSmall
      ? [0.35, 5, 3.5]
      : isMedium
      ? [0.35, 3, 3.5]
      : isMobile
      ? [0.35, 0, 3.5]
      : isTablet
      ? [0.35, -2, 3.5]
      : [0.35, -2, 3.5],
    deskRotation: isSmall
      ? [0.15, 0, 0]
      : isMedium
      ? [0.1, 0, 0]
      : isMobile
      ? [-0.03, 0, 0]
      : isTablet
      ? [-0.1, 0, 0]
      : [-0.1, 0, 0],
  };
};
