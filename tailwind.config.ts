import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["var(--font-poppins)"],
            inter: ["var(--font-inter)"],
         },

         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },

         colors: {
            primary: {
               400: "rgba(245, 102, 48, 1)",
               500: "rgba(235, 80, 23, 1)",
               700: "rgba(173, 51, 7, 1)",
               75: "rgba(252, 210, 194, 1)",
               50: "rgba(255, 236, 229, 1)",
            },
            gray: {
               900: "rgba(16, 25, 40, 1)",
               700: "rgba(52, 64, 84, 1)",
               500: "rgba(102, 113, 133, 1)",
               100: "rgba(240, 242, 245, 1)",
               200: "rgba(228, 231, 236, 1)",
               // 900: "rgba(16, 25, 40, 1)",
               // 900: "rgba(16, 25, 40, 1)",
               // 900: "rgba(16, 25, 40, 1)",
               // 900: "rgba(16, 25, 40, 1)",
            },
            success: {
               600: "rgba(4, 128, 46, 1)",
            },
         },
      },
   },

   presets: [
      require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
   ],

   plugins: [],
};
export default config;
