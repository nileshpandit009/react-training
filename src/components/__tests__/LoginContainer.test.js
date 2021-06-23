import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import LoginContainer from "components/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "redux/reducers";

describe("Login component", () => {
  it("must show required error message for email and password", async () => {
    const emailErr = "email is a required field";
    const passwordErr = "password is a required field";

    const store = createStore(rootReducer);

    const { queryByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginContainer />
        </BrowserRouter>
      </Provider>
    );

    const loginBtn = queryByText("Login");
    // console.log(loginBtn);
    fireEvent.click(loginBtn);

    setTimeout(() => {
      expect(queryByText(emailErr)).toBeInTheDocument();
      expect(queryByText(passwordErr)).toBeInTheDocument();
    }, 3000);
  });
});
