import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import UserDetails from "components/UserDetails";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
    goBack: jest.fn(),
  }),
}));

it("renders correctly", () => {
  const user = {
    id: 12345,
    full_name_display: "Test User",
    username: "testuser123",
    email: "test@example.com",
    is_active: true,
  };

  const { getByText } = render(<UserDetails user={user} />);
  expect(getByText(user.id)).toBeTruthy();
});
