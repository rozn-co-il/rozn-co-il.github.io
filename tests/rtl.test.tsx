import { render, screen } from "@testing-library/react";
import Header from "@/layouts/partials/Header";
import Footer from "@/layouts/partials/Footer";
import { getDirectionClass, isRtlLanguage } from "@/lib/utils/rtlUtils";

describe("RTL Tests", () => {
  test("isRtlLanguage function works correctly", () => {
    expect(isRtlLanguage("en")).toBe(false);
    expect(isRtlLanguage("fr")).toBe(false);
    expect(isRtlLanguage("ar")).toBe(true);
  });

  test("getDirectionClass function works correctly", () => {
    expect(getDirectionClass("en")).toBe("ltr");
    expect(getDirectionClass("fr")).toBe("ltr");
    expect(getDirectionClass("ar")).toBe("rtl");
  });

  test("Header component renders with RTL styles", () => {
    render(<Header lang="ar" menu={{ main: [] }} rtl={true} />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("rtl");
  });

  test("Footer component renders with RTL styles", () => {
    render(<Footer lang="ar" menu={{ footer: [] }} />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass("rtl");
  });

  test("RTL styles are applied correctly", () => {
    render(<Header lang="ar" menu={{ main: [] }} rtl={true} />);
    render(<Footer lang="ar" menu={{ footer: [] }} />);

    const rtlElements = screen.getAllByTestId("rtl");
    rtlElements.forEach((element) => {
      expect(element).toHaveClass("rtl");
      expect(element).toHaveStyle("direction: rtl");
    });
  });
});
