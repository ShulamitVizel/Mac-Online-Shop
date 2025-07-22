# 💄 Mac Online Shop

A modern online cosmetics store inspired by the MAC Cosmetics brand. This project demonstrates a full-featured frontend shopping experience built with React, Redux, and Material UI.

## 🛍 Features

- 🧾 Display categorized product lists (Lips, Eyes, Face, etc.)
- 🛒 Add products to cart with quantity selection
- 🚚 Add optional delivery fee
- 🧾 Dynamic cart summary and checkout dialog
- 💎 Styled using Material UI (MUI) + custom gradients and effects
- 🔄 Simulated async loading with Skeletons (fake delay for realism)
- 🔍 Route-based filtering by category via React Router

## ⚙️ Tech Stack

- **Frontend:** React (Hooks), Redux Toolkit, React Router DOM
- **Styling:** Material UI (MUI), custom CSS
- **Data Source:** Static `products.json` or [DummyJSON API](https://dummyjson.com/)
- **Icons:** Local image assets (van, delete)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShulamitVizel/Mac-Online-Shop.git
cd Mac-Online-Shop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Open in browser

Go to: `http://localhost:3000`

## 📁 Project Structure

```
├── public/
│   └── products.json       # Local product data (optional)
├── src/
│   ├── components/         # Reusable components (NavBar, Product, etc.)
│   ├── pages/              # Main page components (HomePage, ProductsPage, CartPage)
│   ├── redux/              # Redux slices (productsSlice, cartSlice)
│   ├── services/           # API fetching logic
│   └── assets/             # Images like icons, spinner
```

## 🔧 Customization

- To use local product data, make sure to point fetch to `/products.json`.
- To connect to a real backend, modify the `fetchProducts` method in `productsSlice.js`.

## 🙋‍♀️ Author

Built with ❤️ by [Shulamit Vizel](https://github.com/ShulamitVizel)
