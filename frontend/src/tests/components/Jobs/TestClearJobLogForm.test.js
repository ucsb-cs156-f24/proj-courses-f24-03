import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ClearJobLogsForm from "main/components/Jobs/ClearJobLogsForm";
import { QueryClient, QueryClientProvider } from "react-query";

import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const queryClient = new QueryClient();

describe("ClearJobLogsForm tests", () => {
  const axiosMock = new AxiosMockAdapter(axios);

  it("renders correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <ClearJobLogsForm />
        </Router>
      </QueryClientProvider>,
    );

    expect(screen.getByText(/Clear/)).toBeInTheDocument();
  });

  test("renders without crashing when fallback values are used", async () => {
    axiosMock.onGet("/api/systemInfo").reply(200, {
      springH2ConsoleEnabled: false,
      showSwaggerUILink: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <ClearJobLogsForm />
        </Router>
      </QueryClientProvider>,
    );

    expect(await screen.findByTestId("clearJobLogsButn")).toBeInTheDocument();
  });
});
