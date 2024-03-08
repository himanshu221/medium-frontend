import { AppBar } from "../components/AppBar"
import { HoverEffect } from "../components/card-hover-effect";

export const Dashboard = () => {
    return <div className="h-full w-full bg-dot-white/[0.2] relative bg-neutral-800 flex flex-col items-center justify-center overflow-auto">
        <AppBar/>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="my-20  w-[80%] md:w-[60%]">
            <HoverEffect items={projects} />
        </div>
    </div>
}

export const projects = [
    {
      title: "Stripe",
      content:
        "A technology company that builds economic infrastructure for the internet.",
      author: "Himanshu",
      link: "https://stripe.com",
      date: "24 Feb 2023"
    },
    {
      title: "Netflix",
      content:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      author: "Himanshu",
      link: "https://netflix.com",
      date: "24 Feb 2023"
    },
    {
      title: "Google",
      content:
        "A multinational technology company that specializes in Internet-related services and products.",
      author: "Himanshu",
      link: "https://google.com",
      date: "24 Feb 2023"
    },
    {
      title: "Meta",
      content:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      author: "Himanshu",
      link: "https://meta.com",
      date: "24 Feb 2023"
    },
    {
      title: "Amazon",
      content:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      author: "Himanshu",
      link: "https://amazon.com",
      date: "24 Feb 2023"
    },
    {
      title: "Microsoft",
      content:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      author: "Himanshu",
      link: "https://microsoft.com",
      date: "24 Feb 2023"
    },
  ];