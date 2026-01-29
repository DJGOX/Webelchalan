export type MenuItem = {
  name: string;
  price?: number | null; // null/undefined => Price varies
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  image: string; // ruta en /public/images/menu/...
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "chicken",
    title: "Chicken",
    image: "/images/menu/chicken.jpg",
    items: [
      { name: "Arroz Chaufa de Pollo", price: 22.89 },
      { name: "Aji de Gallina", price: 16.03 },
      { name: "Chicken Milanese", price: 19.46 },
      { name: "Tallarin Saltado de Pollo", price: 21.75 },
      { name: "Arroz Chaufa Mixto", price: 24.49 },
      { name: "Chicharron de Pollo", price: 16.61 },
      { name: "Fajitas (Chicken or Beef)", price: 20.61 },
      // Ejemplo sin precio confirmado:
      { name: "Special Chicken Plate", price: null },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    image: "/images/menu/seafood.jpg",
    items: [
      { name: "Seafood Chaufa", price: null },
      { name: "Ceviche", price: null },
    ],
  },
  {
    id: "beef",
    title: "Beef",
    image: "/images/menu/beef.jpg",
    items: [
      { name: "Lomo Saltado", price: null },
      { name: "Bistec a lo Pobre", price: null },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    image: "/images/menu/soups.jpg",
    items: [{ name: "Chicken Soup", price: null }],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    image: "/images/menu/breakfast.jpg",
    items: [{ name: "Peruvian Breakfast", price: null }],
  },
  {
    id: "drinks",
    title: "Drinks",
    image: "/images/menu/drinks.jpg",
    items: [{ name: "Inca Kola", price: null }],
  },
  {
    id: "desserts",
    title: "Desserts",
    image: "/images/menu/desserts.jpg",
    items: [{ name: "Dessert", price: null }],
  },
  {
    id: "sides",
    title: "Sides",
    image: "/images/menu/sides.jpg",
    items: [{ name: "French Fries", price: null }],
  },
  {
    id: "specials",
    title: "Specials",
    image: "/images/menu/specials.jpg",
    items: [{ name: "Daily Special", price: null }],
  },
];
