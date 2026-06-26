import Container from "../../Common/Container";

export default function Hero() {
  return (
    <section
      className="relative h-[550px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/inews.zoombangla.com/wp-content/uploads/2026/02/Sangsad-Vobon.jpg?ssl=1')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <Container>

      <div className="relative h-[550px] flex items-center px-6">

        <div className="max-w-xl text-white">

          <h2 className="text-5xl font-bold leading-tight">

            Building a Better Tomorrow

          </h2>

          <h3 className="text-4xl mt-4 font-semibold">

            Through Dedication & Service

          </h3>

          <p className="mt-6 text-lg">

            We are committed to providing efficient
            services across the country through
            our nationwide branches.

          </p>

          <button className="mt-8 bg-green-700 hover:bg-green-800 px-8 py-4 rounded font-semibold">
            Learn More
          </button>

        </div>

      </div>
      </Container>
    </section>
  );
}