import React from 'react';
import { ControllerDesktopButton } from './ControllerDesktopButton';
import styles from './ControllerDesktop.module.scss';

interface IControllerDesktopProps {
  currentCityName: string;
  cities: string[];
}

const ControllerDesktop: React.FC<IControllerDesktopProps> = (props) => {
  const { currentCityName, cities } = props;
  const activeCities = React.useMemo(
    () => cities.filter((cityName) => cityName !== currentCityName),
    [currentCityName, cities]
  );

  return (
    <div className={styles.ControllerDesktopContainer}>
      {activeCities.map((cityName) => (
        <ControllerDesktopButton key={cityName} cityName={cityName} />
      ))}
    </div>
  );
};

export { ControllerDesktop };
