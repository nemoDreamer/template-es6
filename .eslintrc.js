module.exports = {
  extends: ["airbnb-base", "prettier", "plugin:jest/recommended"],
  plugins: ["prettier", "jest"],
  env: {
    "browser": true,
    "jest/globals": true
  },
  rules: {
    "prettier/prettier": "error",
    "no-param-reassign": 0,
    "no-plusplus": 0
  }
};
