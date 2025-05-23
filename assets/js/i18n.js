const langData = {};
let currentLang = 'ru';

async function loadLang(lang) {
  const response = await fetch(`assets/lang/${lang}.json`);
  const data = await response.json();
  Object.assign(langData, data);
  applyLang();
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) el.innerText = langData[key];
  });
}

document.getElementById('languageSwitcher').addEventListener('change', (e) => {
  currentLang = e.target.value;
  loadLang(currentLang);
});

loadLang(currentLang);
