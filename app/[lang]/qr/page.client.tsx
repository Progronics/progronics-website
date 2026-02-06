"use client";

import { Button } from "@/components/ui/button";
import { Globe, MapPin, Save } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
        <div className="w-full flex flex-col max-w-[200px] space-y-4">
          <Link href="https://progronics.com"
            target="_blank">
            <Button className="text-white bg-black w-full rounded-full">
              <Globe /> Visit Website
            </Button>
          </Link>

          <Link
            href="https://maps.app.goo.gl/5uVgGr9xmdLVqnwc7"
            target="_blank">
            <Button variant={"destructive"} className="text-white w-full rounded-full">
              <MapPin /> Location
            </Button>
          </Link>



          <Button className="text-white rounded-full" onClick={handleSaveContact}>
            <Save /> Save Contact
          </Button>


        </div>
      }
    </div>
  );
}
