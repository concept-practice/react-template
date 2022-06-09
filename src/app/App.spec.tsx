import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("Renders", () => {
    render(<App />);

    expect(screen.getByText(/Hello There!/i)).toBeInTheDocument();
  });

  it("Counter", async () => {
    render(<App />);

    const user = userEvent.setup();

    await user.click(screen.getByText(/Increase/i));

    expect(await screen.findByText("1")).toBeVisible();
  });
});
