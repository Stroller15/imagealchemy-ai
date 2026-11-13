// Sample photos served from Cloudinary's public demo cloud.
// The "before" of the restore sample is the same photo, faded and
// softened with Cloudinary effects to stand in for a damaged print.
const base = "https://res.cloudinary.com/demo/image/upload";

export const samples = {
  restore: {
    before: `${base}/c_fill,w_1200,h_800,g_faces/e_saturation:-75/e_contrast:-45/e_tint:40:9c7a4c/e_blur:70/e_noise:45/couple.jpg`,
    after: `${base}/c_fill,w_1200,h_800,g_faces/couple.jpg`,
  },
  recolor: {
    before: `${base}/c_fill,w_800,h_600/sample.jpg`,
    after: `${base}/c_fill,w_800,h_600/e_replace_color:f2a516:70:e0306a/sample.jpg`,
  },
  removeBackground: {
    before: `${base}/c_fill,w_800,h_600/dog.jpg`,
    after: `${base}/e_background_removal/c_fill,w_800,h_600/f_png/dog.jpg`,
  },
};
