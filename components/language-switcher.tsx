"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const locales = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
] as const;

export default function LanguageSwitcher({setIsOpen} : {setIsOpen : (val : boolean)=> void}) {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale safely
  const currentLocale =
    locales.find((l) => pathname.startsWith(`/${l.code}`))?.code || "en";

  const handleChange = (locale: string) => {
    const newPath = pathname.replace(/^\/(en|ar|zh)/, `/${locale}`);
    setIsOpen(false)
    router.push(newPath);
  };

  const current = locales.find((l) => l.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="dark:hover:text-white" variant="outline" size="icon">
          {current?.flag}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleChange(locale.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>{locale.flag}</span>
            <span>{locale.label}</span>

            {locale.code === currentLocale && (
              <span className="ml-auto text-xs opacity-60">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
