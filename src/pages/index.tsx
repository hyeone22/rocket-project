import First from "@/component/First";
import Graph from "@/component/Graph";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} max-w-[448px] w-full mx-auto`}
    >
      <main className="flex flex-col items-center">
        <div className="w-full relative">
          <First />
        </div>
        <div className="w-full p-2 -mt-12">
          <Graph />
        </div>
      </main>
    </div>
  );
}
