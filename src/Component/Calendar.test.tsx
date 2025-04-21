import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

describe('Calendar Component', () => {
  beforeEach(() => {
    // Mock the current date to March 15, 2024
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2024, 2, 15));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders current month and year', () => {
    render(<Calendar />);
    expect(screen.getByText('March 2024')).toBeInTheDocument();
  });

  test('renders all weekdays', () => {
    render(<Calendar />);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(day => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test('highlights today\'s date', () => {
    render(<Calendar />);
    const todayCell = screen.getByText('15');
    expect(todayCell).toHaveClass('today');
  });

  test('disables past dates', () => {
    render(<Calendar />);
    const pastDate = screen.getByText('14');
    expect(pastDate).toHaveClass('disabled');
  });

  test('allows selection of future dates', () => {
    render(<Calendar />);
    const futureDate = screen.getByText('16');
    expect(futureDate).not.toHaveClass('disabled');
    
    fireEvent.click(futureDate);
    expect(futureDate).toHaveClass('selected');
  });

  test('navigates to next month', () => {
    render(<Calendar />);
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);
    debugger;
    expect(screen.getByText('April 2024')).toBeInTheDocument();
  });

  test('navigates to previous month', () => {
    render(<Calendar />);
    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);
    expect(screen.getByText('February 2024')).toBeInTheDocument();
  });

  test('handles date selection', () => {
    render(<Calendar />);
    const dateToSelect = screen.getByText('20');
    fireEvent.click(dateToSelect);
    expect(dateToSelect).toHaveClass('selected');
  });

  test('does not allow selection of disabled dates', () => {
    render(<Calendar />);
    const disabledDate = screen.getByText('14');
    fireEvent.click(disabledDate);
    expect(disabledDate).not.toHaveClass('selected');
  });

  test('renders correct number of days in month', () => {
    render(<Calendar />);
    // March 2024 has 31 days + two button for next and previous
    const days = screen.getAllByRole('button');
    expect(days.length).toBe(33);
  });
}); 