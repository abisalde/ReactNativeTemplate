const { ESLint } = require("eslint");

const removeIgnoredFiles = async files => {
  const eslint = new ESLint();
  const ignoredFiles = await Promise.all(
    files.map(file => eslint.isPathIgnored(file)),
  );
  const filteredFiles = files.filter((_, i) => !ignoredFiles[i]);
  return filteredFiles.join(" ");
};

module.exports = {
  "*.{js,jsx,ts,tsx}": async files => {
     const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --max-warnings=0 ${filesToLint}`];
   },
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "**/*.ts?(x)": () => "npm run type-check",
  "**/*.ts?(x)": () => "npx prettier --write .",
  "*.{json,yaml}": ["prettier --write ."],
};
