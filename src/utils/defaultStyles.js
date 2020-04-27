export const defaultStyles = {
  animation: 'all .4s ease',
  indent: 15,
  borderRadius: '3px',
  smallPadding: '4px 10px',
  mediumPadding: '6px 16px',
  largePadding: '10px 16px',
  smallFontSize: '12px',
  mediumFontSize: '14px',
  largeFontSize: '18px',
};

export const setDefaultStyles = (newStyles) => {
  Object.keys(newStyles).forEach((style) => {
    defaultStyles[style] = newStyles[style];
  });
};
