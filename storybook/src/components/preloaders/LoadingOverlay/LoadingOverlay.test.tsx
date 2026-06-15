import { render, screen } from '@testing-library/react';
import LoadingOverlay from './LoadingOverlay';

describe('LoadingOverlay', () => {
  it('renders a status region with the default label', () => {
    render(
      <LoadingOverlay>
        <div>Loader</div>
      </LoadingOverlay>,
    );

    expect(
      screen.getByRole('status', { name: /bezig met verzenden/i }),
    ).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Loader')).toBeInTheDocument();
  });

  it('renders a status region with a custom label', () => {
    render(
      <LoadingOverlay label="Bezig met laden">
        <div>Loader</div>
      </LoadingOverlay>,
    );

    expect(
      screen.getByRole('status', { name: /bezig met laden/i }),
    ).toBeInTheDocument();
  });
});
