document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    try {
      const resp = await fetch(`/partials/${file}`);
      const html = await resp.text();
      el.innerHTML = html;
    } catch (err) {
      console.error(`Error cargando ${file}:`, err);
    }
  });
});