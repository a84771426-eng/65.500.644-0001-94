const siteConfig = {
  companyName: "Ws Despachante LTDA",
  companyDocument: "65.500.644/0001-94",
  email: "wsdespachante2800@hotmail.com",
  phoneDisplay: "(51) 99778-2164",
  phoneRaw: "5551997782164",
  address:
    "Avenida Cruz de Malta 1949 Sala 3 Pavmtoterreo - Centro - Charqueadas/RS - CEP 96745-000",
};

const bySelector = (selector) => document.querySelectorAll(selector);

function setText(selector, value) {
  bySelector(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLink(selector, href, label) {
  bySelector(selector).forEach((element) => {
    element.setAttribute("href", href);
    if (label) {
      element.textContent = label;
    }
  });
}

function applyCompanyData() {
  setText("[data-company-name]", siteConfig.companyName);
  setText("[data-company-document]", siteConfig.companyDocument);
  setText("[data-company-address]", siteConfig.address);
  setText("[data-current-year]", String(new Date().getFullYear()));

  setLink("[data-company-email]", `mailto:${siteConfig.email}`, siteConfig.email);
  setLink("[data-company-phone]", `tel:+${siteConfig.phoneRaw}`, siteConfig.phoneDisplay);
}

applyCompanyData();
const menuToggleButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
