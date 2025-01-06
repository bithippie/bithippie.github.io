import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig.theme.screens;

export default screens;
