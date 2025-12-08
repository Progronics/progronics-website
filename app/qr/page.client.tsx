"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function QrPage() {

  const searchParams = useSearchParams()
  const [search, setSearch] = useState("")
  useEffect(() => {
    const localSearch = searchParams.get("type")
    if (localSearch)
      setSearch(localSearch)
  }, [searchParams])



  const handleSaveContact = () => {

    let vcardData = ``

    if (search === 'ubaid') {

      vcardData = `
BEGIN:VCARD
VERSION:3.0
N:Ur Rehman;Ubaid;;;
FN:Ubaid Ur Rehman
ORG:Progronics Solutions LLP;
TITLE:Chief Technical Officer
TEL;TYPE=CELL:+923104735145
EMAIL:info@progronics.com
ADR;TYPE=WORK:;;Lahore, Pakistan;
END:VCARD
    `.trim();
    } else {
      vcardData = `
BEGIN:VCARD
VERSION:3.0
N:Ahsab;Adeel;;;
FN:Adeel Ahsan
ORG:Progronics Solutions LLP;
TITLE:Chief Executive Officer
TEL;TYPE=CELL:+923234784400
EMAIL:info@progronics.com
ADR;TYPE=WORK:;;Lahore, Pakistan;
END:VCARD
    `.trim();
    }


    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();

    URL.revokeObjectURL(url);

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 text-center">
      {/* Logo */}
      <Image
        src="/combined.png"
        alt="Progronics Logo"
        className="mb-6"
        width={200}
        height={200}
      />

      {/* Buttons */}
      {search &&
        <div className="w-full max-w-xs space-y-4">
          <a
            href="https://progronics.com"
            target="_blank"
            className="text-white block w-full py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700"
          >
            🌐 Visit Website
          </a>

          <a
            href="https://maps.app.goo.gl/5uVgGr9xmdLVqnwc7"
            target="_blank"
            className="text-white block w-full py-3 bg-green-600 rounded-xl font-semibold hover:bg-green-700"
          >
            📍 Location
          </a>

          <button
            onClick={handleSaveContact}
            className="text-white w-full py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-yellow-600"
          >
            📇 Save Contact
          </button>
        </div>
      }
    </div>
  );
}
