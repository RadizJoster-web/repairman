import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
    </div>
  );
}
