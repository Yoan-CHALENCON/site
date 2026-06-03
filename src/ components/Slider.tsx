import { ChevronLeft, ChevronRight, CircleArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  title: string;
  viewAllHref?: string;
  id?: string;
};

export default function Slider(props: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
    );
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 340;
    const newScroll =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 50);
  };

  const buttonClass =
    "hover:bg-primary/40 rounded-full p-2 transition-all hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-20";

  return (
    <section id={props.id} className="flex w-full flex-col items-start gap-5">
      <div className="flex w-full justify-between">
        {props.viewAllHref ? (
          <Link
            to={props.viewAllHref}
            className="hover:text-primary hover:underline!"
          >
            <h2 className="flex items-center gap-2 text-4xl font-semibold">
              {props.title}
              <CircleArrowRight size={32} />
            </h2>
          </Link>
        ) : (
          <h2 className="text-4xl font-semibold">{props.title}</h2>
        )}

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={buttonClass}
            aria-label="Précédent"
            title="Précédent"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={buttonClass}
            aria-label="Suivant"
            title="Suivant"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          onLoad={checkScroll}
          className="flex w-full gap-6 overflow-x-hidden scroll-smooth"
        >
          {props.children}
        </div>
      </div>
    </section>
  );
}
