import "./styles/index.css";
import { doThing } from "src/utils/something";

((): void => {
  const element = document.createElement("div");

  element.innerHTML = doThing('hello');
  document.body.appendChild(element);
})();
