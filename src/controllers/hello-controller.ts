import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
	outputTarget!: HTMLElement;
	nameTarget!: HTMLInputElement;
	static targets = ["name", "output"];

	connect() {
		super.connect();
	}

	greet() {
		this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
	}
}
