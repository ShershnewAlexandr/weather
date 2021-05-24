import React from 'react';
import { Link } from 'react-router-dom';
import { createRoute } from 'utils/constants/routes';
import styles from './ControllerDesktopButton.module.scss';

interface IControllerDesktopProps {
  cityName: string;
}

const ControllerDesktopButton: React.FC<IControllerDesktopProps> = (props) => {
  const { cityName } = props;

  return (
    <Link
      to={createRoute.CITY(cityName)}
      className={styles.ControllerDesktopButtonLink}
    >
      <div className={styles.ControllerDesktopButton}>{cityName}</div>
    </Link>
  );
};

export { ControllerDesktopButton };
