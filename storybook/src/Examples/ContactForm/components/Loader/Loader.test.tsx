import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Examples / ContactForm - Loader', () => {
  it('renders the component', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
