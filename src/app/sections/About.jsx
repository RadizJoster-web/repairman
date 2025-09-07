import Poster from "@/app/components/section/about/Poster";
import TagLine from "@/app/components/section/about/TagLine";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col lg:flex-row items-center justify-center gap-12 px-8 lg:px-20 pb-10 lg:py-16 bg-white"
    >
      <Poster />
      <TagLine />
    </section>
  );
}
