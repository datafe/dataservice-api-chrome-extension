try {
  chrome?.devtools?.panels?.create?.(chrome?.i18n?.getMessage?.('appName'), 'logo-64.png', 'src/pages/panel/index.html');
} catch (e) {
  console.error(e);
}
