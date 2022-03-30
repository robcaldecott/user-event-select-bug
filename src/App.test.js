import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("userEvent bug", async () => {
  render(<App />);
  await userEvent.selectOptions(
    screen.getByRole("combobox", { name: /fruit/i }),
    ["Orange"]
  );
});
