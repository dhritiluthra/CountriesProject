import { useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
