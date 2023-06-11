# Shopify: Theme switcher

## Description

This is theme switcher for Shopify. Its work with pure JavaScript and CSS and can be configured on Shopify via settings.

![Script](https://github.com/qcyGH/Shopify--Theme-switcher/blob/main/images_for_github/script.png "Script")

### Settings

Main settings:
- `Enable switching theme`
- `Forced theme for site` Works only when theme switching is disabled.
- `Show reset button` If the user manually changes the scheme, its setting write to localStorage. Reset button clear this setting.

Optional settings:
- `Accent color for dark theme` If not pick, the standard accent color of the light theme will be used.
- `Gradient color for dark theme` If not pick, the standard gradient color of the light theme will be used.

![Switcher settings](https://github.com/qcyGH/Shopify--Theme-switcher/blob/main/images_for_github/settings_in_customizer.png "Switcher settings")

## How to use

1. Download project.
2. Past `assets` folder into your theme folder.
3. Add switcher settings to `config/settings_schema.json` in your theme from `config/settings_schema.json` in this project.
![Switcher settings](https://github.com/qcyGH/Shopify--Theme-switcher/blob/main/images_for_github/settings.png "Switcher settings")
4. Connect switcher assets to `layout/theme.liquid` in your project. And past styles for dark theme (its required for optional settings).
![Theme](https://github.com/qcyGH/Shopify--Theme-switcher/blob/main/images_for_github/theme.png "Theme")
5. Add switcher to `sections/header.liquid` in your theme.
![Header](https://github.com/qcyGH/Shopify--Theme-switcher/blob/main/images_for_github/header.png "Header")

P.s. you can find all code which required to add/past in the project.
