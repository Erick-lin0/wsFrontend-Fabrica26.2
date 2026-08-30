import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Evita que o DOM de um teste vaze para o seguinte.
afterEach(() => {
  cleanup();
});