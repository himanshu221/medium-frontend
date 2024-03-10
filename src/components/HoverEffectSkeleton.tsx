import { cn } from "../utils/cn";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./BlogCard";
let mp = [1,2,3,4,5]
export const HoverEffectSkeleton = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn('grid grid-cols-1 py-10', className)}>
      {mp.map((_, ind) => (
        <div key={ind} className="relative z-0 group animate-pulse block p-2 h-full w-full">
          <Card>
            <CardHeader className="flex items-center">
            <div className="flex items-center">
                <div className="w-3 h-3 flex justify-center items-center rounded-full p-3 mr-2 bg-neutral-700"></div>
                <div>
                    <div className="h-2.5  rounded-full bg-neutral-700 w-52"></div>
                </div>
            </div>
            </CardHeader>
            <CardTitle>
                <div className="h-2.5 rounded-full bg-neutral-700 w-72 mb-4"></div>
                </CardTitle>
            <CardDescription>
                <div className="h-2.5 rounded-full bg-neutral-700 w-full mb-4"></div>
            </CardDescription>
            <CardFooter>
                <div className="h-2.5 rounded-full bg-neutral-700 w-48 mb-4"></div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
