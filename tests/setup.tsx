import "@testing-library/jest-dom";

// Optional: keep framer-motion from touching the real DOM timers during tests
import { vi } from "vitest";
vi.mock("framer-motion", async () => {
  // minimal passthrough mock: render as normal elements without animations
  return {
    motion: new Proxy({}, {
      get: (_, tag: string) => (props: any) => {
        const { children, ...rest } = props || {};
        const Tag = (tag as any) || "div";
        return <Tag {...rest}>{children}</Tag>;
      },
    }),
  };
});
