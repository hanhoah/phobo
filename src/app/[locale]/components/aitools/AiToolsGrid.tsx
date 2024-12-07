"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

type Tool = {
  title: string;
  short_description: string;
  description: string;
  link: string;
  freeversion: boolean;
  pricing: string;
  pricing_short: string;
  affiliate: boolean;
  category: string;
};

export default function AiToolsGrid({ tools }: { tools: Tool[] }) {
  const t = useTranslations("common");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = selectedCategory
    ? tools.filter((tool) => tool.category === selectedCategory)
    : tools;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div>
      {selectedCategory && (
        <div className="mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <span>✕</span>
            {selectedCategory}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => handleCategoryClick(tool.category)}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  {tool.category}
                </button>
                {tool.freeversion && (
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                    {t("free")}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {tool.short_description}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span>{t("try_it")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <div className="relative group">
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {tool.pricing_short}
                  </span>
                  <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
                    <div className="bg-black text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap">
                      {tool.pricing}
                      <div className="absolute top-full right-4 w-2 h-2 -mt-1 rotate-45 bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
