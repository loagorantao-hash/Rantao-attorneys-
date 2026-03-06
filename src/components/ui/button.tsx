import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-medium hover:-translate-y-[1px]",
        destructive: "bg-destructive text-destructive-foreground shadow-subtle hover:bg-destructive/90 hover:shadow-medium",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-subtle",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-subtle",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-crimson-dark shadow-medium hover:shadow-strong hover:-translate-y-[1px]",
        heroOutline: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-charcoal hover:shadow-medium",
        crimson: "bg-crimson text-white hover:bg-crimson-dark shadow-subtle hover:shadow-medium hover:-translate-y-[1px]",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-medium hover:shadow-strong",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
