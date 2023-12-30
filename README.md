<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>PRODUCT-LISTING-PART2-NEXTJS</h1>
<h3>◦ Next Level Listing: Productivity in Action with NextJS!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/lukef7fywmrp/product-listing-part2-nextjs?style=flat&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/lukef7fywmrp/product-listing-part2-nextjs?style=flat&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/lukef7fywmrp/product-listing-part2-nextjs?style=flat&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/lukef7fywmrp/product-listing-part2-nextjs?style=flat&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running product-listing-part2-nextjs](#-running-product-listing-part2-nextjs)
  - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The repository contains a Next.js web app for product listing. It provides interactive product listing components, including a product list, price info, product cards, and detailed product info. It utilizes various utilities and data definitions, and offers an efficient toolset for eCommerce websites, prioritizing UX with elements like tooltips, badges, and scrollable areas. Its comprehensive ESLint and TypeScript configurations ensure code quality and type safety, while Tailwind CSS and PostCSS handle aesthetics and style management.

---

## 📦 Features

HTTPStatus Exception: 429

---

## 📂 Repository Structure

```sh
└── product-listing-part2-nextjs/
    ├── .eslintrc.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── logos/
    │   ├── page.tsx
    │   └── products/
    │       ├── [id]/
    │       ├── error.tsx
    │       └── page.tsx
    ├── components/
    │   ├── PriceInfo.tsx
    │   ├── ProductCard.tsx
    │   ├── ProductInfo.tsx
    │   ├── ProductList.tsx
    │   ├── ProductSkeleton.tsx
    │   └── ui/
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── scroll-area.tsx
    │       ├── skeleton.tsx
    │       ├── sonner.tsx
    │       └── tooltip.tsx
    ├── components.json
    ├── lib/
    │   ├── data.ts
    │   ├── definitions.ts
    │   └── utils.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public/
    ├── tailwind.config.ts
    └── tsconfig.json

```

---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [.eslintrc.json](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/.eslintrc.json)         | The code represents directory structure for a Next.js application for product listing. It includes elements for styling (globals.css, tailwind.config.ts), layout settings (layout.tsx), individual product pages ([id]/), and product list (ProductList.tsx). Component specific files (PriceInfo.tsx, ProductCard.tsx etc.), UI elements (badge.tsx, button.tsx etc.), and utilities (data.ts, utils.ts) are also part of the structure. ESLint configuration extends Next.js's core web vitals for performance optimization.                                                                        |
| [components.json](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components.json)       | This code represents the file structure and configuration for a product listing Next.js application. The app employs TypeScript, ESLint, CSS styling with Tailwind CSS, and organizes its core functionality into components. components.json defines global configurations like the project's UI schema, styling preferences, resource usage, and path aliases. The components folder contains a host of UI components like product cards and information, while the lib folder manages data, definitions, and utilities.                                                                             |
| [package-lock.json](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/package-lock.json)   | The code represents the directory structure of a Next.js web application for a product listing. It includes component files for product-related UI elements, utility functions, application layouts, product data, and configurations. There's also mention of a `package-lock.json` file, which manages project dependencies such as `@radix-ui/react-scroll-area` and `next-themes`. The project uses Tailwind for styling, TypeScript for typing, and ESLint for linting.                                                                                                                           |
| [next.config.js](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/next.config.js)         | The given code features a Next.js project for a product listing application. The project's key functionalities include rendering UI components for products, price, and other attributes, based on data and utils from the lib folder. The next.config.js file configures remote image handling from fakestoreapi.com. ESLint, TailwindCSS, and PostCSS are used for enforcing code quality, handling CSS, and managing styles respectively.                                                                                                                                                           |
| [tailwind.config.ts](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/tailwind.config.ts) | The code is a configuration file for Tailwind CSS, a utility-first CSS framework. It defines settings like enabling dark mode, specifying where to look for CSS classes, additional color variables, border radius sizes, keyframes for accordion-down and accordion-up animations, and includes a plugin for animations. It also sets up the theme, including container settings and color extensions.                                                                                                                                                                                                |
| [tsconfig.json](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/tsconfig.json)           | The directory structure represents a Next.js product listing application with a TypeScript configuration. It contains reusable components for product info, price, card, and list, and UI elements like badges, buttons, cards, etc. The lib directory has utilities and data definitions while.eslintrc.json and next.config.js ensure linting and configuration respectively. The tsconfig.json regulates TypeScript's compiler options, including ESNext module resolution, JSX preservation, and target output as ES5. It also sets path resolution and includes or excludes certain files.        |
| [package.json](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/package.json)             | The code represents a Next.js project structure for a product listing application. It contains a layout, error handling, and product-page components, with related UI elements (buttons, cards, tooltips etc.) organized in a components directory. There're scripts for development, production and linting routines, while dependencies cater to UI aesthetics, image handling, scrolling, and tooltips. DevDependencies include type definitions, eslint for code quality, autoprefixer for CSS, and TypeScript enabling static typing. The project follows strict linting rules via.eslintrc.json. |
| [postcss.config.js](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/postcss.config.js)   | The code is a directory structure for a Next.js application that lists products. It includes specific setup files for TypeScript and ESLint, PostCSS, and Tailwind CSS styling. The app and components folders structure the application's UI, with page layouts, custom components, and assorted UI utilities. A lib directory holds utility and data functions. The itemized postcss.config.js file configures the Tailwind CSS and autoprefixer plugins for processing CSS.                                                                                                                         |

</details>

<details closed><summary>Components</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PriceInfo.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/PriceInfo.tsx)             | The PriceInfo.tsx file is a component module that displays product price details. It shows VAT inclusive price, a shopping bag icon indicating a cart function, and logos of different platforms where the product is also available. Each logo is encased in a tooltip that displays the name of the platform on hover. The component takes price as input and outputs a stylized price information section. It utilizes logos sourced from the /logos/ folder and several UI components.                                  |
| [ProductCard.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ProductCard.tsx)         | The code outlines a ProductCard component in a Next.js eCommerce web application. This card displays product details like title, description, category, price, and an image gallery for each product. Thumbnail images are generated dynamically with active image indication. Users can zoom in on the images and navigate to respective product pages using a Buy Now button. The component employs external libraries like react-medium-image-zoom and react-image-gallery for image functionalities.                    |
| [ProductInfo.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ProductInfo.tsx)         | The given `ProductInfo.tsx` file is a React component that displays product information including title, description, and category. It also includes static specifications data — capacity, warranty, and price. The component visually presents badges for certain product labels (like a new year offer, selling out fast, and best in UAE), a wishlist button, product specifications, and a product title. The file uses badge, button UI components and an image from Next.js.                                         |
| [ProductList.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ProductList.tsx)         | The code imports a function from a library to asynchronously retrieve product data and a component to display each product. Within the ProductList function, it fetches and maps over this data, rendering a ProductCard component for every product-all of which is bundled within a React fragment. This setup forms part of a Next.js application that allows interactive product listing and features a detailed directory structure with custom UI components, theming, TypeScript configuration, and an ESLint setup. |
| [ProductSkeleton.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ProductSkeleton.tsx) | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

</details>

<details closed><summary>Ui</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [scroll-area.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/scroll-area.tsx) | The code defines and exports two custom React components, ScrollArea and ScrollBar, that build upon ScrollAreaPrimitive components from @radix-ui/react-scroll-area library. ScrollArea provides a scrollable viewport area for inner content, alongside embedded ScrollBar handling vertical/horizontal scrolling, styled with CSS classes. The ScrollBar component adjusts its styling based on its orientation and further customizes the ScrollAreaThumb appearance. The classNames utility from @/lib/utils is utilized for conditional class assignment. |
| [sonner.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/sonner.tsx)           | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [skeleton.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/skeleton.tsx)       | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [card.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/card.tsx)               | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [button.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/button.tsx)           | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [badge.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/badge.tsx)             | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [tooltip.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/components/ui/tooltip.tsx)         | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

</details>

<details closed><summary>Lib</summary>

| File                                                                                                        | Summary                   |
| ----------------------------------------------------------------------------------------------------------- | ------------------------- |
| [utils.ts](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/lib/utils.ts)             | HTTPStatus Exception: 429 |
| [data.ts](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/lib/data.ts)               | HTTPStatus Exception: 429 |
| [definitions.ts](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/lib/definitions.ts) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>App</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [globals.css](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/app/globals.css) | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [layout.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/app/layout.tsx)   | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [page.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/app/page.tsx)       | The code essentially structures a Next.js application for product listing. The directory contains configurations, utility scripts, component definitions, data files, and globally applied styles. There is a main app with a layout and a products page, alongside error handling capabilities. Components facilitate product listing, information display, and UI elements. The page.tsx script in the app folder redirects the user to the /products page upon visit to the home page. |

</details>

<details closed><summary>Products</summary>

| File                                                                                                       | Summary                   |
| ---------------------------------------------------------------------------------------------------------- | ------------------------- |
| [error.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/app/products/error.tsx) | HTTPStatus Exception: 429 |
| [page.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/app/products/page.tsx)   | HTTPStatus Exception: 429 |

</details>

<details closed><summary>[id]</summary>

| File                                                                                                          | Summary                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [page.tsx](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/app/products/[id]/page.tsx) | HTTPStatus Exception: 429 |

</details>

---

## 🚀 Getting Started

**_Dependencies_**

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the product-listing-part2-nextjs repository:

```sh
git clone https://github.com/lukef7fywmrp/product-listing-part2-nextjs.git
```

2. Change to the project directory:

```sh
cd product-listing-part2-nextjs
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running product-listing-part2-nextjs

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

```sh
npm test
```

---

## 🛣 Project Roadmap

> - [x] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/lukef7fywmrp/product-listing-part2-nextjs/issues)**: Submit bugs found or log feature requests for LUKEF7FYWMRP.

#### _Contributing Guidelines_

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---
