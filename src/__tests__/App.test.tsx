import { render, screen } from "@testing-library/react";
import App from "@/components/App";

describe("App", () => {
  it("renders the project title and guidance", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "RSVP-JP プロジェクト" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Rapid Serial Visual Presentationビューアの基盤プロジェクト/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/ディレクトリ構成/)).toBeInTheDocument();
  });
});
