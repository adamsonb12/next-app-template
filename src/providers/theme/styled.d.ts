import "styled-components";
import { ThemeColors } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
  }
}
