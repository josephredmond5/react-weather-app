import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: "2022-04-04",
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummary {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(getByText(validProps.date)).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});

// This code block sets up a test suite for a component called "ForecastSummary" using a testing framework like Jest or Mocha. It imports the React library, which is used for building user interfaces, and the "render" function from the "@testing-library/react" library. It also imports the "ForecastSummary" component that will be tested. The "describe" function is used to group together related test cases. It defines an object called "validProps" that contains example data to be passed to the component during testing. Finally, it defines an empty test case that will be filled out in the subsequent code blocks.

// This code block is a test case that checks whether the ForecastSummary component renders correctly. It uses the "it" function to define a specific test case. Inside the test case, the "render" function is called with the "ForecastSummary" component and the "validProps" object. The result of this function is an object that includes a method called "asFragment". The "expect" function is then called with the "asFragment" object, and the "toMatchSnapshot" method is called on it to generate a snapshot of the component's rendered output. This snapshot can be compared to a previously saved snapshot to check for any changes in the component's output over time. If the rendered component matches the snapshot, the test passes.

// In this code block, another test case is defined to further test the "ForecastSummary" component. Inside the test case, the "render" function is called with the "ForecastSummary" component and the "validProps" object. The result of this function is an object that includes methods to query and manipulate the rendered component. The "getByText" and "getByTestId" methods are used to select elements within the component's rendered output, based on their text content and data-testid attribute, respectively. The "toHaveClass" method is used to assert that the selected elements have the expected CSS class names. If all of the assertions pass, the test case passes.

// Overall, these three code blocks work together to thoroughly test the "ForecastSummary" component. They ensure that the component renders correctly with the given "validProps", and that its output remains consistent over time. The tests also check that specific elements within the component's output have the expected CSS class names.
