import { render, screen } from '@testing-library/react';
import{ Students } from '../components/Students.jsx';
import Providers from './test-utils.js';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(
    <Providers>
      <Students/>
    </Providers>
);
});

it('renders correctly', () => {
  expect(screen.getByText(/anna/i)).toBeInTheDocument();
});

it('deletes a subject', async () => {
  await userEvent.click(screen.getByTestId('delete-mathematics'));
  expect(screen.queryByTestId('delete-mathematics')).toBeNull();
});

it('adds a new subject to the schedule', async () => {

  userEvent.selectOptions(screen.getByLabelText('Subject:'), 'Science');
  userEvent.selectOptions(screen.getByLabelText('Mentor:'), 'Mr. Peter');
  userEvent.selectOptions(screen.getByLabelText('Time:'), '10:30 - 11:00');
 
  await userEvent.click(screen.getByTestId('submit'));
  
  expect(screen.getByTestId('delete-science')).toBeInTheDocument();
  expect(screen.getByText(/^Class Mentor - Mr. Peter$/)).toBeInTheDocument();
});