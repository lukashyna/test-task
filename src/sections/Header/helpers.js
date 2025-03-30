export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (!section) return;
  return section.scrollIntoView({ behavior: "smooth" });
};
