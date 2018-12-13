module.exports = {
  extends: ["airbnb-base", "prettier", "plugin:jest/recommended"],
  plugins: ["prettier", "jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
