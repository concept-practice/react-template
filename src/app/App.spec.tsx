import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Renders", () => {
    render(<App />);

    expect(screen.getByText(/Hello There!/i)).toBeInTheDocument();
  });

  it("Counter", async () => {
    render(<App />);

    fireEvent.click(screen.getByText(/Increase/i));

    expect(await screen.findByText("1")).toBeVisible();
  });
});
