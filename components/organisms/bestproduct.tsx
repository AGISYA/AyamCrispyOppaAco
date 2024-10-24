import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="flex-1 relative h-full">
        <Image
          src="/images/20.jpg"
          alt="Three mugs of different fall-themed beverages"
          layout="fill"
          objectFit="cover"
          className="block md:hidden"
        />
        <Image
          src="/images/20.jpg"
          alt="Three mugs of different fall-themed beverages"
          layout="fill"
          objectFit="cover"
          className="hidden md:block"
        />
      </div>
      <div className="flex-1 bg-green-600 text-white flex flex-col items-center justify-center p-8">
        <div className="mb-4">
          <Image
            src="/images/logoaco3.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <p className="text-base md:text-lg mb-6 text-center">
          Nikmati Ayam Crispy Oppa Aco yang disajikan dengan bumbu khas yang
          renyah dan lezat. Rasakan cita rasa otentik dalam setiap gigitannya.
          Cocok untuk semua suasana dan dijamin memuaskan selera Anda!
        </p>
        <button className="bg-yellow-400 text-green-800 border border-white py-2 px-6 text-lg uppercase transition duration-300 hover:bg-yellow-500 hover:text-white">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}
