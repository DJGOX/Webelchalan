import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "accent";
    containerClassName?: string;
}

export function Section({
    children,
    className,
    containerClassName,
    variant = "default",
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "py-16 sm:py-24 transition-colors",
                variant === "default" && "bg-white text-[#121212]",
                variant === "muted" && "bg-[#FFF6E5] text-[#121212]",
                variant === "accent" && "bg-[#121212] text-white",
                className
            )}
            {...props}
        >
            <div className={cn("mx-auto max-w-6xl px-4", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
