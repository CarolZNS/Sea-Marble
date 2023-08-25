import NavigationContext from "../context/navigation";
import { useContext } from "react";

export default function useNavigation() {
  return useContext(NavigationContext);
}
