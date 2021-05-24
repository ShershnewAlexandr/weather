export const formatKelvinToCel = (temp: number) =>
  `${Math.round(temp - 273.15)}℃`;

export const formatWindDegToString = (deg: number) => {
  const directions = [
    {
      name: 'Northern',
      deg: [337.5, 360],
    },
    {
      name: 'Northern',
      deg: [360, 22.5],
    },
    {
      name: 'Northeastern',
      deg: [22.5, 67.5],
    },
    {
      name: 'Oriental',
      deg: [67.5, 112.5],
    },
    {
      name: 'Southeastern',
      deg: [112.5, 157.5],
    },
    {
      name: 'Southern',
      deg: [157.5, 202.5],
    },
    {
      name: 'Southwestern',
      deg: [202.5, 247.5],
    },
    {
      name: 'West',
      deg: [247.5, 292.5],
    },
    {
      name: 'Northwestern',
      deg: [292.5, 337.5],
    },
  ];

  const currentDirection = directions.find(
    (direction) => deg >= direction.deg[0] && deg <= direction.deg[1]
  );

  return `Wind ${currentDirection?.name}`;
};

export const formatWindSpeed = (speed: number) =>
  `Speed ${Math.round(speed)} m/s`;
