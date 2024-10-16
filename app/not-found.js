import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col max-w-lg gap-4 p-10 w-full h-full justify-center">
      <h1 className="text-xl font-bold mb-10">Not Found</h1>
      <Image
        src="/icons/close-circle.svg"
        alt="Not Found"
        width={100}
        height={100}
        className="mx-auto size-24"
      />
      <span className="text-center mt-1">Symbol not found!</span>
    </div>
  );
}
