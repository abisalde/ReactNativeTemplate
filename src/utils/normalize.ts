/** CORE */
import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

const normalize = (size: number, based = "width"): number => {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for width  pixel
const widthPixel = (size: number): number => normalize(size, "width");
// for height  pixel
const heightPixel = (size: number): number => normalize(size, "height");
// for font  pixel
const fontPixel = (size: number): number => heightPixel(size);
// for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number): number => heightPixel(size);
// for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number): number => widthPixel(size);

const getPixel = (size: number) => {
  let roundedSize = PixelRatio.roundToNearestPixel(size / 3);
  roundedSize = PixelRatio.getPixelSizeForLayoutSize(roundedSize);

  return roundedSize;
};

const scaledPixel = (size: number) =>
  getPixel(size) * PixelRatio.getFontScale();

export {
  widthPixel,
  heightPixel,
  fontPixel,
  scaledPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
