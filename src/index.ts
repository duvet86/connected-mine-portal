import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCRipple } from "@material/ripple/index";
import { MDCDrawer } from "@material/drawer";

// Instantiation
const button = document.getElementById("my-button");
if (button != null) {
  MDCRipple.attachTo(button);
}

const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const drawer = document.querySelector(".mdc-drawer");
if (topAppBarElement && drawer) {
  if (drawer != null) {
    const drawerMDC = MDCDrawer.attachTo(drawer);
    drawerMDC.open = true;

    const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
    const mainContent = document.getElementById("main-content");
    if (mainContent != null) {
      topAppBar.setScrollTarget(mainContent);
      topAppBar.listen("MDCTopAppBar:nav", () => {
        drawerMDC.open = !drawerMDC.open;
      });
    }
  }
}
