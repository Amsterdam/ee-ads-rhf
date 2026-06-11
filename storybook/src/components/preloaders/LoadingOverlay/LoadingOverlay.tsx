import { PropsWithChildren } from 'react';
import styles from './LoadingOverlay.module.css';

interface LoadingOverlayProps extends PropsWithChildren {
  label?: string;
}

const LoadingOverlay = ({
  children,
  label = 'Bezig met verzenden',
}: LoadingOverlayProps) => {
  return (
    <div
      className={styles.root}
      role="status"
      aria-label={label}
      aria-live="polite"
      aria-busy="true"
    >
      {children}
    </div>
  );
};

export default LoadingOverlay;
