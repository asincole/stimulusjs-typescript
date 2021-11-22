import { Controller } from "@hotwired/stimulus";
import { Context } from "@hotwired/stimulus/dist/types/core/context";

export default class extends Controller {
  connect() {
    super.connect();
    console.log("Hello, Stimulus!", this.element);
    console.log("huhi");
  }
}
