'use client'

import { useApp } from '@/contexts/app-context';
import Image from 'next/image'

export default function FilteredPage() {
  const { filteredVehicles } = useApp();

  return (
    <div className="relative grid grid-cols-3 gap-10">
      {filteredVehicles.map((vehicle, index) => (
        <div key={`${vehicle.Model_ID}-${index}`} className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center">
          <Image
            src="/car-generic.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={120}
            height={120}
            quality={100}
            alt="Carro genérico"
          />
          <div className="p-4">
            <h2 className="text-white text-xl">{vehicle.Make_Name}</h2>
            <p className="text-zinc-400">{vehicle.Model_Name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}