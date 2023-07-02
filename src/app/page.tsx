import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-mobile-background bg-top bg-no-repeat bg-contain sm:bg-none pt-6">
      <div className="flex gap-4 justify-center items-center">
        <div className="h-[33px] w-[33px] flex justify-center items-center border border-white rounded-full text-white">
          1
        </div>
        <div className="h-[33px] w-[33px] flex justify-center items-center border border-white rounded-full text-white">
          2
        </div>
        <div className="h-[33px] w-[33px] flex justify-center items-center border border-white rounded-full text-white">
          3
        </div>
        <div className="h-[33px] w-[33px] flex justify-center items-center border border-white rounded-full text-white">
          4
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-[72px] bg-white sm:hidden"></div>
    </main>
  );
}
