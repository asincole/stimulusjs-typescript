import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";
import "./style.scss";

declare global {
	interface Window {
		Stimulus: any;
	}
}

declare module Stimulus {}

window.Stimulus = Application.start();

const controllersContext = require.context("./controllers", true, /\.[jt]s$/);

window.Stimulus.load(definitionsFromContext(controllersContext));
window.Stimulus.debug = true;
