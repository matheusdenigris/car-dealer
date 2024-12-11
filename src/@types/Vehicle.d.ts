export interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

export interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface FilterVehicleProps {
  makeId: string | number;
  year: string | number;
}
