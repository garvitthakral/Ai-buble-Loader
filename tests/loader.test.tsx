import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { AiLoader } from "../src/index"; // Import directly from source for local test

describe("AiLoader component", () => {
  it("renders without crashing", () => {
    render(<AiLoader size="md" />);
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
  });

  it("exports correctly", async () => {
    const mod = await import("../dist/index.js");
    expect(mod).toHaveProperty("AiLoader");
    expect(typeof mod.AiLoader).toBe("function");
    expect(mod).toHaveProperty("default");
  });
});
