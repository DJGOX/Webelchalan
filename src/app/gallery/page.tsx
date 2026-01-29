import Image from "next/image";

export const metadata = {
  title: "Gallery | Pollos A La Brasa El Chalan",
};

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Gallery</h1>
      <p className="mt-2 text-[#8E8E8E]">A look at our most popular dishes and customer favorites.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image src={src} alt="Food photo" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
