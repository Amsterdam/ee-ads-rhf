import { render, screen } from '@testing-library/react';
import WritingLoader from './WritingLoader';

describe('WritingLoader', () => {
  it('renders the loading message', () => {
    render(<WritingLoader />);

    expect(screen.getByText(/even geduld/i)).toBeInTheDocument();
  });
});
