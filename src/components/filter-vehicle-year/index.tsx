"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFilterVehicleYear } from "./useFilterVehicleYear";
import { useApp } from "@/contexts/app-context";

export function FilterVehicleYear() {
  const { years } = useFilterVehicleYear();

  const { handleChangeYear, selectedYear } = useApp();

  return (
    <Select onValueChange={handleChangeYear} defaultValue={selectedYear}>
      <SelectTrigger className="w-[180px] bg-zinc-900 px-3 py-3 ring-zinc-700 rounded-full">
        <SelectValue
          className="text-zinc-500"
          placeholder={
            <div className="flex items-center justify-center text-zinc-500">
              <span className="text-sm">Select year</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent className="bg-zinc-800 text-zinc-200">
        <SelectGroup>
          <SelectLabel className="text-zinc-400">years</SelectLabel>
          {years.map((year: number) => (
            <SelectItem
              key={year}
              className="hover:bg-zinc-700"
              value={year.toString()}
            >
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
