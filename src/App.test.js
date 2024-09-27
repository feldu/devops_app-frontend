import { render, screen } from '@testing-library/react';
import App from './App';

// Мокаем (имитируем) компонент Router для теста
jest.mock('./router/Router', () => () => <div>Mocked Router</div>);

test('renders Router component in App', () => {
    render(<App />);

    // Проверяем, что компонент Router рендерится
    const routerElement = screen.getByText('Mocked Router');
    expect(routerElement).toBeInTheDocument();
});
