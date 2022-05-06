import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Renders", () => {
    render(<App />);

    expect(screen.getByText(/Hello There!/i)).toBeInTheDocument();
  });
});
