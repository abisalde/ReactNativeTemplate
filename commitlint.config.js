module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "perf",
        "revert",
      ],
    ],
    "subject-full-stop": [0, "never"],
    "header-max-length": [0, "always", 72],
    "body-max-line-length": [2, "always", 80],
    "footer-max-line-length": [2, "always", 80],
  },
};
