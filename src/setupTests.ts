// setupTests.js (versión mínima)
import "@testing-library/jest-dom";

// Mock básico de matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Cleanup básico
beforeEach(() => {
  jest.clearAllMocks();
});
