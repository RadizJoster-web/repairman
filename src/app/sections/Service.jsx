import TagLineService from "../components/section/service/TagLine";
import CardListService from "../components/section/service/CardList";

export default function Service() {
  return (
    <section
      id="Service"
      className="min-h-screen flex flex-col items-center justify-start gap-10 bg-white px-2 py-20"
    >
      <TagLineService />
      <CardListService />
    </section>
  );
}
