"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Icon } from "@iconify/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface LanguageOption {
  value: string;
  label: string;
  icon: JSX.Element;
}

const LanguageSwitcher = () => {
  const segment = useSelectedLayoutSegment();
  const t = useTranslations("language");
  const router = useRouter();

  const enPath = segment ? `/en/${segment}` : "/en";
  const dePath = segment ? `/de/${segment}` : "/de";

  const options: LanguageOption[] = [
    {
      value: enPath,
      label: t("en"),
      icon: <Icon icon="flag:gb-4x3" width="20" height="15" />,
    },
    {
      value: dePath,
      label: t("de"),
      icon: <Icon icon="flag:de-4x3" width="20" height="15" />,
    },
  ];

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
  }, []);

  const handleChange = (option) => {
    if (option) {
      setSelectedOption(option);
      localStorage.setItem("selectedLanguage", option.value);
      router.push(option.value);
    }
  };

  const customOption = (props) => (
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

  const customStyles = {
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
  const formatOptionLabel = (option) => (
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
