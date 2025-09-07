import CardList from "./CardList";

export default function CommentList() {
  return (
    <div className="w-full h-70 flex flex-col xl:flex-row items-center lg:items-start lg:justify-between gap-5 md:gap-0 px-2 lg:px-20 py-10 bg-dark text-white">
      <h1 className="text-xl md:text-3xl text-center md:text-start font-semibold font-montserrat md:min-w-120">
        Let's see what our clients say?
      </h1>

      <CardList />
    </div>
  );
}
