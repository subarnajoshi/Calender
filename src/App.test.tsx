import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders calendar component', () => {
    render(<App />);
    const calendarElement = screen.getByRole('application');
    expect(calendarElement).toBeInTheDocument();
  });
});
