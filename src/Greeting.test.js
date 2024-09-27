import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message', () => {
    render(<Greeting />);
    const greetingElement = screen.getByText(/wroom-ru/i);
    expect(greetingElement).toBeInTheDocument();
});
