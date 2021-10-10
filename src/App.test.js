import { render, screen } from '@testing-library/react';
import App from './App';
import RepositoryContainer from './components/RepositoryContainer';

test('Renders search bar in home', () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText("Type a")
  expect(searchBar).toBeInTheDocument();
});

test('Renders repositories of user CallmeMehdi', () => {
  const { container } = render(<RepositoryContainer reposUrl="https://api.github.com/users/CallmeMehdi/repos"/>);
  const currentProject = container.querySelector(".css-ifuklx")  
  expect(currentProject).not(null)

})
