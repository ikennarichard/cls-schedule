/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import Providers from './test-utils.js';

it('renders the app with the student component', () => {
  render(
    <Providers>
      <App/>
    </Providers>

);
  expect(screen.getByTestId('submit')).toBeInTheDocument();
})