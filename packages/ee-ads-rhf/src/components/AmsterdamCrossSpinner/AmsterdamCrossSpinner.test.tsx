import { render } from '@testing-library/react';
import { AmsterdamCrossSpinner } from '../../index';

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

  it('staggers the spinner animations', () => {
    const { container } = render(<AmsterdamCrossSpinner />);

    container.querySelectorAll('svg').forEach((svg, index) => {
      expect(svg.style.animationDelay).toBe(`${index * 0.75}s`);
    });
  });
});
