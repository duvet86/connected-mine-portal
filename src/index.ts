import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCRipple } from "@material/ripple/index";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
if (topAppBarElement) {
  MDCTopAppBar.attachTo(topAppBarElement);
}

const button = document.getElementById("my-button");
if (button != null) {
  MDCRipple.attachTo(button);
}
