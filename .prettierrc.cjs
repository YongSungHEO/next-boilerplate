module.exports = {
	singleQuote: true,
	semi: true,
	plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
	importOrder: [
		"^@/pages/(.*)$",
		"^@/components/(.*)$",
		"^@/service/(.*)$",
		"^@/types/(.*)$",
		"^@/styles/(.*)$",
		"^[./]"
	],
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true
}
