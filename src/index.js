// Install chroma.js by running: npm install chroma-js
const chroma = require('chroma-js');

/**
 * Generate a color palette based on a given base color.
 * @param {string} baseColor - The base color in HEX format (e.g., '#3498db').
 * @param {number} numColors - The number of colors to generate in the palette.
 * @returns {string[]} An array of HEX color codes representing the generated color palette.
 */
function generatePalette(baseColor, numColors) {
  const base = chroma(baseColor);
  const scale = chroma.scale(['white', base, 'black']).mode('lab');
  
  // Generate an array of color codes using the chroma.js color scale
  const palette = Array.from({ length: numColors }, (_, index) => {
    const color = scale(index / (numColors - 1)).hex();
    return color.toUpperCase(); // Convert to uppercase for consistency
  });

  return palette;
}

// Example usage:
const baseColor = '#3498db';
const numColors = 5;
const colorPalette = generatePalette(baseColor, numColors);

console.log('Generated Color Palette:', colorPalette);
