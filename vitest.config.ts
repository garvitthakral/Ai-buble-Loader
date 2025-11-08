import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.tsx"],
    globals: true,                // so you can use describe/it without imports
    include: ["tests/**/*.test.ts?(x)"],
  },
});
