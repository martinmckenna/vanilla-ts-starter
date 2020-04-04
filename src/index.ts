import "./styles/index.css";
import { doThing } from "src/utils/something";

((): void => {
  const element = document.createElement("div");

  element.innerHTML = doThing();
  document.body.appendChild(element);
})();
