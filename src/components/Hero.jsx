const brands = [
  "google", "creative-market", "airbnb", "shopify", "amazon",
  "dropbox", "spotify", "asana", "deliveroo", "nissan"
];

export default function Hero() {
  return (
    <section className="text-center px-2 md:px-6 py-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Trusted by 1500+ popular companies
      </h2>
      <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
        Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {brands.map((brand) => (
          <img
            key={brand}
            src={`/brands/${brand}.svg`}
            alt={brand}
            className="w-24 h-auto grayscale hover:grayscale-0 transition duration-300 mb-3"
          />
        ))}
      </div>
    </section>
  );
}
