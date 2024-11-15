import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Globe } from "lucide-react";

const languages = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  return (
    <Select
      value={currentLocale}
      onValueChange={(value) => {
        changeLocale(value);
      }}
    >
      <SelectTrigger className="w-32">
        <SelectValue placeholder={currentLocale} />
        <Globe className="w-5 h-5 text-secondary-foreground" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
