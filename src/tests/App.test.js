import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from '../data/forecast.json';

describe("App", () => {
  test("renders App component correctly", () => {
     render(<App location={forecast.location} />);
     const h1Element = screen.getByText(/Manchester, UK/i);
     expect(h1Element).toBeInTheDocument();
  });
});

// READ THIS AND THN TAKE NOTES ON IT