function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-10 mb-20">
      <div className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
          <img src={img} className="rounded-2xl" alt="d" />
        </div>
        <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{description}</p>
          <button
            className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:border-2 
          hover:text-black transition transform duration-200 ease-out hover:bg-white"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;
