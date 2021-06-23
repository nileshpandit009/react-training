export const capitalize = (str) => {
  if (str)
    return str
      .split(" ")
      .map((s) => {
        const lower = s.toLowerCase();
        return s.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join(" ");
  else return "";
};
