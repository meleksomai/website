import { cn } from "../lib/utils";

export const Heading1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={cn(
      "font-light text-5xl tracking-tight sm:text-6xl lg:text-7xl",
      className
    )}
  >
    {children}
  </h1>
);

export const Heading2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "mb-2 font-light font-sans text-3xl tracking-tight md:text-4xl lg:text-5xl",
      className
    )}
  >
    {children}
  </h2>
);

export const Heading3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn(
      "mb-2 font-light font-sans text-2xl text-foreground md:text-3xl",
      className
    )}
  >
    {children}
  </h3>
);

export const Heading4 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4
    className={cn(
      "mb-2 font-light font-sans text-xl tracking-tight md:text-2xl lg:text-3xl",
      className
    )}
  >
    {children}
  </h4>
);

export const Heading5 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h5
    className={cn(
      "mb-2 font-light font-sans text-lg tracking-tight md:text-xl lg:text-2xl",
      className
    )}
  >
    {children}
  </h5>
);

export const Heading6 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h6
    className={cn(
      "mb-2 font-light font-sans text-base tracking-tight md:text-lg lg:text-xl",
      className
    )}
  >
    {children}
  </h6>
);
