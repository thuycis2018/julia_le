import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("renders the footer with the current year and copyright text", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const footerText = `© ${currentYear}`;

    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
