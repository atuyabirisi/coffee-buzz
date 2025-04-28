export default function JustInSection() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="text-center mb-4">
        <h1>Just in!</h1>
        <h4>Browse our newest products</h4>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="basis-full md:basis-1/3 bg-zinc-500 p-4">CARD 1</div>
        <div className="basis-full md:basis-1/3 bg-stone-500 p-4">CARD 2</div>
        <div className="basis-full md:basis-1/3 bg-slate-500 p-4">CARD 3</div>
      </div>
    </div>
  );
}
