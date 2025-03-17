import Image from "next/image";

export default function ClientLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {clients?.map((client, i) => (
        <div key={i} className="w-20 aspect-square relative">
          <Image
            src={client}
            alt={`Client ${i} logo`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
const clients = [
  "/assets/client1.svg",
  "/assets/client2.svg",
  "/assets/client3.svg",
  "/assets/client4.svg",
  "/assets/client5.svg",
  "/assets/client6.svg",
  "/assets/client7.svg",
  "/assets/client8.svg",
];
