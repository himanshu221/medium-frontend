import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./BlogCard";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorProps } from "@tiptap/pm/view";

interface blogsType {
    id: number,
    title: string,
    content: string,
    publishDate: string,
    author: {
        firstname: string,
        lastname: string
    }
}

const intDateFormat = new Intl.DateTimeFormat('default',{
    year: "numeric", month: "long", day: "numeric"
});

const editorProps: EditorProps = {
  attributes: {
    class: 'prose prose-invert !h-auto'
  }
}
export const HoverEffect = ({
  items,
  className,
}: {
  items: blogsType[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 py-10', className)}>
      {items.map((item, idx) => (
        <Link
          to={`/blog/${item.id.toString()}`}
          key={item.id}
          className="relative z-0 group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 z-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardHeader className="flex items-center">
              <div className="w-3 h-3 flex justify-center items-center rounded-full p-3 mr-2 bg-neutral-800">
                {item.author.firstname.toUpperCase().charAt(0)}
              </div>
              <div className="text-zinc-300">
                {item.author.firstname + ' ' + item.author.lastname}
              </div>
              <div className="px-2">&#x2022;</div>
              <div>{intDateFormat.format(new Date(item.publishDate))}</div>
            </CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              <div className="dashboard">
                <EditorProvider editable={false} children={<div></div>} extensions={[StarterKit]} content={item.content.length > 100 ? item.content.slice(0, 100) + '...'  : item.content} editorProps={editorProps} />
              </div>
            </CardDescription>
            <CardFooter>{`${Math.ceil(
                item.content.length / 300
                )} min read`}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
