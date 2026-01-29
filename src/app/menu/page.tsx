import CategoryMenu from "@/components/CategoryMenu";

export const metadata = {
  title: "Menu | Pollos A La Brasa El Chalan",
};

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Menu</h1>
      <p className="mt-2 text-[#8E8E8E]">
        Browse categories. Some items may be marked as “Price varies”.
      </p>

      <div className="mt-6">
        <CategoryMenu />
      </div>
    </section>
  );
}
