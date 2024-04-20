# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
-

## How to start

- Clone this project to your development directory

```bash
git clone https://github.com/bunnybunbun37204/projectchula888.git
```

- install nodejs latest lts version and install bun as a following guide [click](https://bun.sh/docs/installation)
- cd to your project directory by using this command

```bash
cd projectchula888
```

- then use **bun** to install package/library

```bash
bun install .
```

- wait a minute and then start project by

```bash
bun run dev
```

## Resource

- UI Library : [headlessui](https://headlessui.com/)
- Styling : [tailwindcss](https://tailwindcss.com/)
- Icon : [heroicon](https://heroicons.com/)

## Enjoy Kub Pom
