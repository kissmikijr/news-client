const { colors } = require("tailwindcss/defaultConfig");
module.exports = {
  theme: {
    color: { ...colors },
  },
  variants: {
    backgroundColor: ["focus", "hover", "active"],
  },
};
