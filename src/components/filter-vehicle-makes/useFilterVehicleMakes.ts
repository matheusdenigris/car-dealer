import { VehicleMake } from "@/@types/Vehicle";
import { useState } from "react";



export const useFilterVehicleMakes = () => {

  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([]);

  const fetchVehicleMakes = async () => {
    try {
      const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
      const data = await response.json();
      setVehicleMakes(data.Results);
    } catch (error) {
      console.error('Error fetching vehicle makes:', error);
    }
  };


  return {
    fetchVehicleMakes,
    vehicleMakes
  }

}