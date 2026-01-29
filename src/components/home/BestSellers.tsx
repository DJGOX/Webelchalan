import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";

const bestSellers = [
    {
        name: "Pollo a la Brasa (Whole Chicken)",
        price: 26.00,
        description: "Marinated for 24 hours in our secret family blend of Peruvian spices, then slow-roasted over natural wood charcoal for crispy skin and smoky, juicy meat.",
        image: "/images/menu/chicken.png",
    },
    {
        name: "Lomo Saltado",
        price: 22.95,
        description: "A Peruvian classic. Tender sirloin strips wok-seared with fresh onions, tomatoes, and cilantro in a soy-vinegar reduction. Served with golden fries and fluffy white rice.",
        image: "/images/menu/beef.png",
    },
    {
        name: "Arroz Chaufa de Pollo",
        price: 22.89,
        description: "The ultimate comfort food. Wok-fried rice with tender chicken, eggs, and green onions, infused with ginger and sesame oil for that authentic 'chifa' smoky flavor.",
        image: "/images/menu/chaufa.png",
    },
];

export default function BestSellers() {
    return (
        <Section variant="muted">
            <SectionHeading
                title="Best Sellers"
                subtitle="Discover our most loved dishes, prepared fresh daily with authentic ingredients."
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {bestSellers.map((item, index) => (
                    <ProductCard
                        key={item.name}
                        {...item}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </Section>
    );
}
