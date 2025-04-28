export default function BestSeller() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-full md:basis-1/2 bg-purple-500 p-4">
        <h3>Try our Best-sellers</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          repellendus fugiat in voluptatem, necessitatibus obcaecati consequatur
          magnam dignissimos, id, sunt officia ut.
        </h5>
      </div>
      <div className="basis-full md:basis-1/2 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="basis-full md:basis-1/2 bg-violet-500 p-4">CARD1</div>
          <div className="basis-full md:basis-1/2 bg-stone-700 p-4">CARD2</div>
        </div>
      </div>
    </div>
  );
}
