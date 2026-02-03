
# 🎭 SauceDemo Automation Framework

Framework E2E usando Playwright, TypeScript, Page Object Model y Data Driven Testing.

## 📁 Estructura de archivos

```
saucedemo-automation-framework/
├── data/
│   └── testData.json
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckOutPage.ts
├── tests/
│   ├── login.spec.ts
│   └── inventory.spec.ts
├── playwright.config.ts
└── package.json
```

## 🚀 Instalación

```bash
npm install
npx playwright install
```

## ▶️ Ejecución

```bash
# Ejecutar todos los tests
npx playwright test

# Modo headed (con navegador visible)
npx playwright test --headed

# Generar y visualizar reporte
npx playwright show-report
```

## 📊 Evidencias

El framework genera reportes HTML con grabaciones de video de los tests, permitiendo una auditoría completa de la ejecución.
