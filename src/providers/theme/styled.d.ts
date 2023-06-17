import "styled-components";
import { ThemeColors, ThemeFonts } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
  }
}
