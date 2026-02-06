"use client";

import React, { createContext, useContext } from "react";
import type { Locale } from "@/app/[lang]/dictionaries";
import { DictionatiesTypes } from "@/types/types";

type LocaleContextType = {
  dict: DictionatiesTypes 
  lang: Locale;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({
  children,
  dict,
  lang,
}: React.PropsWithChildren<LocaleContextType>) => {
  return (
    <LocaleContext.Provider value={{ dict, lang }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
