"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ClientMarquee = ({ lists }: ClientMarquee) => {
  const [clients, setClients] = useState<string[]>([]);

  useEffect(() => {
    // In a real application, you might fetch this data from an API
    setClients(lists);
  }, [lists]);

  return (
    <div
      className="relative  overflow-hidden 
     lg:py-12"
    >
      <div className="flex animate-marquee items-center gap-4">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className=" flex-shrink-0 ">
            <Image
              src={client || "/placeholder.svg"}
              alt={`Client ${index + 1}`}
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;
interface ClientMarquee {
  lists: string[];
}
