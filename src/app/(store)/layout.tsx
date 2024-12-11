import { Header } from "@/components/header";
import { AppProvider } from "@/contexts/app-context";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </AppProvider>
  );
}
