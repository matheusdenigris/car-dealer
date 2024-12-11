export const useFilterVehicleYear = () => {
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);

  return {
    years,
  };
};
