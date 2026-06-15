import { render, screen } from '@testing-library/react';
import AmsterdamTicTacToeLoader from './AmsterdamTicTacToeLoader';

describe('AmsterdamTicTacToeLoader', () => {
  it('renders the loading message', () => {
    render(<AmsterdamTicTacToeLoader />);

    expect(screen.getByText(/even geduld/i)).toBeInTheDocument();
  });
});
