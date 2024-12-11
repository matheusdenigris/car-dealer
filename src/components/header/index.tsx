"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchForm } from "../search-form";
import { Suspense } from "react";
import { FilterVehicleMakes } from "../filter-vehicle-makes";
import { FilterVehicleYear } from "../filter-vehicle-year";
import { Button } from "../ui/button";
import { useApp } from "@/contexts/app-context";
import { useHeader } from "./useHeader";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter()
  const { selectedCar, selectedYear } = useApp();

  const { fetchFilterVehicle } = useHeader();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-extrabold text-white ring-zinc-700"
        >
          Develops Car Dealer
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>

        <Suspense fallback={null}>
          <FilterVehicleMakes />
        </Suspense>

        <Suspense fallback={null}>
          <FilterVehicleYear />
        </Suspense>

        <Button
          className="px-6"
          disabled={!selectedCar || !selectedYear}
          onClick={() => {
            fetchFilterVehicle({
              makeId: selectedCar?.MakeId ?? "",
              year: selectedYear,
            });
            router.push(`/filtered?makeId=${selectedCar?.MakeId ?? ""}&year=${selectedYear}`);
          }}
        >
          Filter
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm">Develops Car Dealer</span>

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/matheusdenigris.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
