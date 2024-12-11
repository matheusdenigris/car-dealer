import { FilterVehicleProps, VehicleModel } from "@/@types/Vehicle";
import { useApp } from "@/contexts/app-context";
import { useState } from "react";

export const useHeader = () => {
  const { setFilteredVehicles } = useApp();
  const [dataFilter, setDataFilter] = useState<VehicleModel[]>([]);

  const fetchFilterVehicle = async ({ makeId, year }: FilterVehicleProps) => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );
      const data = await response.json();
      setDataFilter(data.Results);
      setFilteredVehicles(data.Results);
    } catch (error) {
      console.error("Error fetching vehicle makes:", error);
    }
  };

  return {
    fetchFilterVehicle,
    dataFilter,
  };
};