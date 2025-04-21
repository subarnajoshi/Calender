import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalenderComponent from './Calender';
import '@testing-library/jest-dom';

describe('CalenderComponent', () => {
  test('renders calendar component', () => {
    render(<CalenderComponent />);
    const calendarGrid = screen.getByRole('grid');
    expect(calendarGrid).toBeInTheDocument();
  });

  test('does not allow selecting past dates', () => {
    render(<CalenderComponent />);
    const pastDateCell = screen.getAllByRole('gridcell').find((cell) =>
      cell.getAttribute('aria-disabled') === 'true'
    );
    expect(pastDateCell).toBeDefined();
    expect(pastDateCell).toHaveAttribute('aria-disabled', 'true');
  });

  test('allows selecting today or future date', async () => {
    render(<CalenderComponent />);
    const user = userEvent.setup();
    const today = new Date().getDate().toString();

    const todayCell = screen.getAllByRole('gridcell').find(
      (cell) => cell.textContent === today && cell.getAttribute('aria-disabled') === 'false'
    );

    expect(todayCell).toBeDefined();
    await user.click(todayCell!);
    expect(todayCell).toHaveAttribute('aria-selected', 'true');
  });
});
