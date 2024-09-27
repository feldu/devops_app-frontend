// Greeting.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import '@testing-library/jest-dom';

describe('Greeting component', () => {
    test('renders greeting message', () => {
        render(<Greeting />);
        const greetingElement = screen.getByText(/wroom-ru/i);
        expect(greetingElement).toBeInTheDocument();
    });

    test('renders without crashing', () => {
        const { container } = render(<Greeting />);
        expect(container).toBeInTheDocument(); // Проверяем, что контейнер существует
    });

    test('does not render unexpected text', () => {
        render(<Greeting />);
        const unexpectedText = screen.queryByText(/hello/i); // Ищем текст, который не должен быть
        expect(unexpectedText).not.toBeInTheDocument(); // Проверяем, что он не присутствует
    });
});
