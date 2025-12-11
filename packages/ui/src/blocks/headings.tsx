import { cn } from "@workspace/ui/lib/utils";

export const Heading1 = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={cn(
      "font-light text-2xl tracking-tight md:text-3xl lg:text-4xl",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const Heading2 = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "mb-2 font-light font-sans text-xl tracking-tight md:text-2xl lg:text-3xl",
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

export const Heading3 = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn(
      "mb-2 font-light font-sans text-lg text-foreground md:text-xl lg:text-2xl",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

export const Heading4 = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4
    className={cn(
      "mb-2 font-light font-sans text-base tracking-tight md:text-lg lg:text-xl",
      className
    )}
    {...props}
  >
    {children}
  </h4>
);

export const Heading5 = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h5
    className={cn(
      "mb-2 font-light font-sans text-base tracking-tight md:text-lg lg:text-xl",
      className
    )}
    {...props}
  >
    {children}
  </h5>
);
