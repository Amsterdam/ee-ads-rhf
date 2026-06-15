import { render } from '@testing-library/react';
import AmsterdamCrossSpinner from './AmsterdamCrossSpinner';

describe('AmsterdamCrossSpinner', () => {
  it('renders three spinner icons', () => {
    const { container } = render(<AmsterdamCrossSpinner />);

    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });

  it('hides the decorative spinner from assistive technology', () => {
    const { container } = render(<AmsterdamCrossSpinner />);

    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');

    container.querySelectorAll('svg').forEach((svg) => {
      expect(svg).toHaveAttribute('focusable', 'false');
    });
  });
});
