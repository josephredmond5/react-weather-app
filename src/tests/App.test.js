import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: "2022-04-04",
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: "2022-04-05",
      description: "Stub description 2",
      icon: "stubIcon2",
      temperature: {
        max: 24,
        min: 14,
      },
    },
  ];
  

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
