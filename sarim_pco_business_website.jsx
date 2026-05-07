export default function SarimPCOWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img
            src="/mnt/data/Screenshot 2026-05-07 115946.jpg"
            alt="Sarim PCO Logo"
            className="w-40 h-40 mx-auto rounded-full shadow-2xl border-4 border-white object-cover"
          />
          <h1 className="text-5xl font-bold mt-4">SARIM PCO</h1>
          <p className="text-lg mt-2">Your Trusted Digital & Mobile Service Center</p>
          <div className="mt-4 text-xl font-semibold">
            📞 9935150094 / 7275575797
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-3">Mobile Accessories</h3>
            <p>
              All types of mobile accessories available with best quality and affordable prices.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">💸</div>
            <h3 className="text-2xl font-bold mb-3">Money Transfer</h3>
            <p>
              Fast and secure domestic & international money transfer services.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">🖨️</div>
            <h3 className="text-2xl font-bold mb-3">Xerox & Online Services</h3>
            <p>
              Xerox, printout, online form filling and digital services available.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold mb-3">Air Ticket Booking</h3>
            <p>
              Domestic and international flight ticket booking at reasonable prices.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">🚆</div>
            <h3 className="text-2xl font-bold mb-3">Rail Ticket Booking</h3>
            <p>
              Quick and reliable train ticket booking service.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-3">WhatsApp Support</h3>
            <p>
              Contact us anytime on WhatsApp for fast customer support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-700 text-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

          <div className="space-y-4 text-lg">
            <p>📍 Opp Police Chowki, Pura Rani, Mubarakpur, Azamgarh, UP - 276404</p>
            <p>📞 Call: 9935150094 / 7275575797</p>
            <p>💬 WhatsApp: 9935150094 / 7275575797</p>
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:9935150094"
              className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919935150094"
              className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-5 text-center text-sm">
        © 2026 SARIM PCO | All Rights Reserved
      </footer>
    </div>
  );
}
