import { defineConfig } from 'oxfmt';

export default defineConfig({
  bracketSameLine: true,
  experimentalSortImports: {
    newlinesBetween: false,
  },
  printWidth: 120,
  quoteProps: 'consistent',
  singleQuote: true,
});
