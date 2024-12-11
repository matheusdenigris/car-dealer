"use client";

import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFilterVehicleMakes } from "./useFilterVehicleMakes";
import { useApp } from "@/contexts/app-context";

export function FilterVehicleMakes() {
  const { fetchVehicleMakes, vehicleMakes } = useFilterVehicleMakes();

  const { handleChangeCar, selectedCar } = useApp();

  useEffect(() => {
    fetchVehicleMakes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Select
      onValueChange={(MakeName: string) =>
        handleChangeCar(
          vehicleMakes.find((item) => item.MakeName === MakeName)!
        )
      }
      defaultValue={selectedCar?.MakeName}
    >
      <SelectTrigger className="w-[180px] bg-zinc-900 px-3 py-3 ring-zinc-700 rounded-full">
        <SelectValue
          className="text-zinc-500"
          placeholder={
            <div className="flex items-center justify-center text-zinc-500">
              <span className="text-sm">Select a vehicle</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent className="bg-zinc-800 text-zinc-200">
        <SelectGroup>
          <SelectLabel className="text-zinc-400">Vehicle Makes</SelectLabel>
          {vehicleMakes.map((make) => (
            <SelectItem
              key={make.MakeId}
              value={make.MakeName}
              className="hover:bg-zinc-700"
            >
              {make.MakeName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
