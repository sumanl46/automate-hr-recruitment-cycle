import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Option 1: Disable the rule entirely
			"react/no-unescaped-entities": "off",

			// Option 2: Set to "warn" instead of "error" for more flexibility
			// "react/no-unescaped-entities": "warn",

			// Option 3: Keep as "error" but customize (rarely needed)
			// "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],

			"@next/next/no-html-link-for-pages": "off",
		},
	},
];

export default eslintConfig;
