# Workshop: Storybook — Praxisteil

## Setup

```bash
# 1. Node.js prüfen
node -v
npm -v
# Falls nicht installiert: https://nodejs.org (LTS-Version)

# 2. Projekt anlegen
mkdir storybook-workshop
cd storybook-workshop
npm init -y

# 3. Storybook installieren
npx storybook@latest init --type html

npm pkg set type=module

# 5. Storybook starten
npm run storybook
```

## Setup-Hinweise

- Frage nach dem Builder → **Vite** auswählen, Enter
- Rote Kreuze bei `addon-vitest` / `addon-a11y` → ignorieren
- Instalieren "Recommended: Component development, docs, and testing features."
- „Playwright mit Chromium installieren?" → **No** wählen

*(Vite ist hier nur der interne Bundler, den Storybook im Hintergrund nutzt –
ihr müsst ihn nicht konfigurieren oder verstehen, einmal auswählen reicht.
Storybook braucht zwingend einen Bundler; Vite ist davon aktuell die
schlankere, schnellere Option.)*

## Orientierung in der Oberfläche**