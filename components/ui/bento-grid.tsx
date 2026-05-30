import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  style,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-6 dark:bg-black/40 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4 backdrop-blur-md hover:border-cyan-500/50 hover:bg-neutral-900/10 dark:hover:bg-neutral-900/40 relative overflow-hidden",
        className
      )}
      style={style}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300 z-10">
        <div className="flex items-center space-x-2 mb-2">
          {icon}
          <div className="font-bold text-neutral-800 dark:text-neutral-200">
            {title}
          </div>
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};
