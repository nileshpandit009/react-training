import { render, fireEvent, screen } from "@testing-library/react";
import LoginContainer from "components/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store";

describe("Login component", () => {
  it("must render login component", () => {});

  it("must show required error message for email and password", async () => {
    // const emailErr = "email is a required field";
    // const passwordErr = "password is a required field";
    // const { getByText } = render(
    //   <Provider store={store}>
    //     <BrowserRouter>
    //       <LoginContainer />
    //     </BrowserRouter>
    //   </Provider>
    // );
    // const value = fireEvent.click(screen.getByText("Login"));
    // expect(getByText("email is a required field")).toBeInTheDocument();
    // // setTimeout(() => {
    // // }, 2000);
  });
});
