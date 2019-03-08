import { MDCTopAppBar } from "@material/top-app-bar/index";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
if (topAppBarElement) {
  const topAppBar = new MDCTopAppBar(topAppBarElement);
}
