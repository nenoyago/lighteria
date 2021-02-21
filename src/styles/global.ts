import { Dimensions } from "react-native";
import Toast, { ToastOptions } from "react-native-tiny-toast";

export const Colors = {
  BACKGROUND: '#F4F0F4',
  WHITE: '#FFF',
  DARK: '#242424',
  GRAY_100: '#CACACA',
  GRAY_150: '#A1A5AA',
  GRAY_200: '#ACAAAB',
  GRAY_250: '#848486',
  LIGHT_BLUE: '#00ADEF',
  LIGHT_GREEN: '#00B300',
  DANGER: '#B00020'
};

export const FontSizes = {
  FONT_SIZE_XX_LARGE: 30,
  FONT_SIZE_X_LARGE: 24,
  FONT_SIZE_LARGE: 20,
  FONT_SIZE_MEDIUM: 16,
  FONT_SIZE_SMALL: 14,
  FONT_SIZE_X_SMALL: 12
}

export const CustomToast = {
  position: Toast.position.BOTTOM,
  duration: 2000,
  textColor: Colors.WHITE,
  animation: true,
  containerStyle: {
    backgroundColor: Colors.DARK,
    padding: 16
  }
} as ToastOptions;

export const SuccesToast = {
  position: Toast.position.TOP,
  duration: 2000,
  textColor: Colors.WHITE,
  animation: true,
  containerStyle: {
    backgroundColor: Colors.LIGHT_GREEN,
    padding: 16
  }
} as ToastOptions;