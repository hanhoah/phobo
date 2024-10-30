"use client";

import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { components, OptionProps, StylesConfig } from "react-select";
import { ActionMeta, SingleValue, MultiValue } from "react-select";

import { Icon } from "@iconify/react";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface Option {
  value: string;
  label: string;
  icon: JSX.Element;
}

interface LanguageOption {
  value: string;
  label: string;
  icon: JSX.Element;
}

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const t = useTranslations("language");
  const router = useRouter();

  const options = useMemo(() => {
    const createLocalizedPath = (locale: string) => {
      // Deine Logik zur Generierung des Pfads
      return pathname.includes("/blog/")
        ? `/${locale}/blog`
        : pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    };

    return [
      {
        value: createLocalizedPath("en"),
        label: t("en"),
        icon: <Icon icon="flag:gb-4x3" width="20" height="15" />,
      },
      {
        value: createLocalizedPath("de"),
        label: t("de"),
        icon: <Icon icon="flag:de-4x3" width="20" height="15" />,
      },
      {
        value: createLocalizedPath("vi"),
        label: t("vi"),
        icon: <Icon icon="flag:vn-4x3" width="20" height="15" />,
      },
      {
        value: createLocalizedPath("zh"),
        label: t("zh"),
        icon: <Icon icon="flag:cn-4x3" width="20" height="15" />,
      },
    ];
  }, [pathname, t]);

  const [selectedOption, setSelectedOption] = useState<LanguageOption | null>(
    null
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      const option = options.find((opt) => opt.value === savedLanguage);
      setSelectedOption(option || options[0]);
    } else {
      setSelectedOption(options[0]);
    }
  }, [options]);

  const handleChange = (
    newValue: SingleValue<LanguageOption> | MultiValue<LanguageOption>,
    actionMeta: ActionMeta<LanguageOption>
  ) => {
    if (newValue) {
      const selected = Array.isArray(newValue) ? newValue[0] : newValue; // Wenn es mehrere Werte gibt, nimm den ersten
      setSelectedOption(selected);
      localStorage.setItem("selectedLanguage", selected.value);
      router.push(selected.value);
    }
  };

  const customOption = (props: OptionProps<LanguageOption>) => (
    <div
      className={`flex items-center cursor-pointer ${
        props.isFocused ? "bg-gray-200" : ""
      }`}
      {...props.innerProps}
    >
      {props.data.icon}
      <span className="ml-2">{props.data.label}</span>
    </div>
  );

  const customStyles: StylesConfig<LanguageOption> = {
    control: (provided) => ({
      ...provided,
      width: "200px", // Setze die Breite hier
    }),
    menu: (provided) => ({
      ...provided,
      padding: "10px", // Hier das Padding für das Dropdown-Menü setzen
    }),
    option: (provided) => ({
      ...provided,
      padding: "10px", // Hier das Padding für die Optionen setzen
    }),
  };

  // Funktion zur Darstellung des ausgewählten Wertes
  const formatOptionLabel = (option: LanguageOption) => (
    <div className="flex items-center">
      {option.icon} {/* Flagge der gewählten Sprache */}
      <span className="ml-2">{option.label}</span>{" "}
      {/* Text der gewählten Sprache */}
    </div>
  );

  return (
    <Select
      options={options}
      onChange={handleChange}
      components={{ Option: customOption }}
      styles={customStyles}
      value={selectedOption}
      placeholder="Wählen Sie eine Sprache"
      formatOptionLabel={formatOptionLabel} // Verwende die Funktion zur Darstellung des ausgewählten Wertes
    />
  );
};

export default LanguageSwitcher;
