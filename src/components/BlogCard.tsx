import { cn } from "../utils/cn";

export const Card = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full px-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
          className
        )}
      >
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };

  export const CardTitle = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <h4 className={cn("text-zinc-100 font-bold tracking-wide text-xl mt-4", className)}>
        {children}
      </h4>
    );
  };
  export const CardDescription = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {children}
      </div>
    );
  };
  
  export const CardFooter = ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    }) => {
      return (
        <div
          className={cn(
            "mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm font-thin",
            className
          )}
        >
          {children}
        </div>
      );
    };
  
    export const CardHeader = ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    }) => {
      return (
        <div
          className={cn(
            "mt-4 text-zinc-600 tracking-wide leading-relaxed text-sm",
            className
          )}
        >
          {children}
        </div>
      );
    };
  