import "styled-components";
import { ThemeColors, ThemeMisc } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
    misc: ThemeMisc;
  }
}
