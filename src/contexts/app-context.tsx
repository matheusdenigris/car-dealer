"use client";
import { VehicleMake, VehicleModel } from "@/@types/Vehicle";
import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  selectedCar: VehicleMake | null;
  selectedYear: string;
  filteredVehicles: VehicleModel[];
  handleChangeCar: (value: VehicleMake) => void
  handleChangeYear: (value: string) => void
  setFilteredVehicles: (vehicles: VehicleModel[]) => void;
}
const AppContext = createContext({} as AppContextType);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedCar, setSelectedCar] = useState<VehicleMake | null>(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState<VehicleModel[]>([]);

  const handleChangeCar = (car: VehicleMake) => {
    setSelectedCar(car);
  };

  const handleChangeYear = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <AppContext.Provider value={{ selectedCar, selectedYear, filteredVehicles, handleChangeCar, handleChangeYear, setFilteredVehicles }}>
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);
