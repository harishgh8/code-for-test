import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

// render method expects jsx component, it doesnt work with hook as it doent return jsx
// so we use renderHook for hooks
describe("renders component correctly", () => {
  it("initial value also checks for initital value with state", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  it("should expect same initial value as passed", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });
  it("testing decrement function", () => {
    const { result } = renderHook(useCounter);
    // testing state updates when it is not in jsx use act as a wrapper
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
    // act(() => result.current.increment());
    // expect(result.current.count).toBe(0);
  });
  it("testing increment function", () => {
    const { result } = renderHook(useCounter);
    // testing state updates when it is not in jsx use act as a wrapper
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  //   tests for incremnet and decrement
});
