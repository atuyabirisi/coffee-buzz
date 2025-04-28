export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-1/3 bg-fuchsia-500 p-4">
          <h6>Additional Info</h6>
        </div>
        <div className="basis-full md:basis-2/3 bg-rose-200 p-4">
          <h6>Links</h6>
        </div>
      </div>
      <div className="bg-indigo-500 p-2 text-center">
        <h6>© Copyright</h6>
      </div>
    </div>
  );
}
