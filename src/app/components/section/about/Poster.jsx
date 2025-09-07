import Image from "next/image";

export default function Poster() {
  return (
    <div className="max-w-md">
      <Image
        src="/images/poster-about.jpg"
        alt="Poster"
        width={300}
        height={300}
        className="hidden lg:block rounded-3xl object-cover w-full h-auto shadow-lg filter grayscale hover:grayscale-0 transition-all duration-200"
      />
    </div>
  );
}
