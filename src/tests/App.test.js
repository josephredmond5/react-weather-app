import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: "2022-04-04",
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      max: 22,
      min: 12,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummary {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct temperature", () => {
    const { getByText } = render(<ForecastSummary {...validProps} />);
    const expectedText = "22°C";
    expect(getByText(expectedText)).toHaveTextContent(expectedText);
  });
});
