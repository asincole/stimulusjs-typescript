import { Application } from "@hotwired/stimulus";
import HelloController from "./hello-controller";

let crel = require("crel");

describe("HelloController", () => {
	beforeEach(() => {
		/**
		 * create dom elements first, we use crel instead of accessing the dom directly, it doesnt matter
		 * how you create it though
		 */

		crel(
			document.body,
			crel(
				"div",
				{ "data-controller": "hello" },
				crel("input", { "data-hello-target": "name", type: "text" }),
				crel("button", { "data-action": "click->hello#greet" }, "Greet"),
				crel("span", { "data-hello-target": "output" }, "cole")
			)
		);
		// initialise stimulus
		const application = Application.start();
		// register controller
		application.register("hello", HelloController);
	});

	it("should output greeting with string typed into the input", () => {
		const inputEl: HTMLInputElement | null = document.querySelector(
			"input[data-hello-target]"
		);
		const buttonEl: HTMLButtonElement | null = document.querySelector(
			"button[data-action]"
		);
		const spanEL: HTMLElement | null = document.querySelector("span");

		// @ts-ignore
		inputEl?.value = "Femi";
		buttonEl?.click();
		expect(spanEL?.innerHTML).toBe("Hello, Femi!");
	});
});
