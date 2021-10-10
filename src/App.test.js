import { render, screen } from "@testing-library/react";
import App from "./App";
import RepositoryContainer from "./components/RepositoryContainer";
import UserContainer from "./components/UserContainer";

test("Renders title in home page", () => {
  render(<App />);

  const title = screen.getByTestId("home-title");

  expect(title).toBeInTheDocument();
});

test("Renders user search bar in home page", () => {
  render(<App />);

  const searchUser = screen.getByTestId("search-user");

  expect(searchUser).toBeInTheDocument();
});

test("Renders search bar of repositories of user CallmeMehdi", () => {
  render(
    <RepositoryContainer reposUrl="https://api.github.com/users/CallmeMehdi/repos" />
  );

  const searchRepo = screen.getByTestId("search-repo");

  expect(searchRepo).toBeInTheDocument();
});

test("Renders no Users where there is no callback user function", () => {
  render(
    <UserContainer username="callmemeh" />
  );

  const userContainer = screen.getByText("There are no users found.");

  expect(userContainer).toBeInTheDocument();
});
