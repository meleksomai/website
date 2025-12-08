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
      "font-light text-2xl tracking-tight md:text-3xl lg:text-4xl",
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
      "mb-2 font-light font-sans text-xl tracking-tight md:text-2xl lg:text-3xl",
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
      "mb-2 font-light font-sans text-lg text-foreground md:text-xl lg:text-2xl",
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
      "mb-2 font-light font-sans text-base tracking-tight md:text-lg lg:text-xl",
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
      "mb-2 font-light font-sans text-base tracking-tight md:text-lg lg:text-xl",
      className
    )}
  >
    {children}
  </h5>
);
