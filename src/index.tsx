import r2wc from "@r2wc/react-to-web-component";

import { Checklist } from "./Checklist";

const ChecklistWC = r2wc(Checklist, {
  props: {
    items: "json"
  }
});

customElements.define("checklist-wc", ChecklistWC);
