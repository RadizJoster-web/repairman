"use client";

import React, { useRef } from "react";
import Arrow from "./Arrow";
import Card from "./Card";

const comments = [
  {
    name: "Michael Anderson",
    date: "July 15, 2025",
    comment:
      "The repair service was excellent. My washing machine works like brand new now. Quick response and very professional!",
  },
  {
    name: "Samantha Rodriguez",
    date: "August 2, 2025",
    comment:
      "I had my laptop fixed here after it kept shutting down unexpectedly. The technician explained everything clearly and solved it in just a day.",
  },
  {
    name: "Jonathan Lee",
    date: "August 18, 2025",
    comment:
      "Great service! They repaired my microwave at a reasonable price. Highly recommended for anyone needing reliable repairs.",
  },
  {
    name: "Emily Carter",
    date: "September 5, 2025",
    comment:
      "My refrigerator stopped cooling and I thought I had to buy a new one. Thankfully, this repair service fixed it perfectly. Saved me a lot of money.",
  },
  {
    name: "David Thompson",
    date: "September 22, 2025",
    comment:
      "I appreciate the honesty and skill of the team. They replaced the parts in my vacuum cleaner and it works smoothly again.",
  },
  {
    name: "Olivia Martinez",
    date: "October 3, 2025",
    comment:
      "Excellent service! My smartphone screen was replaced in less than an hour and it looks flawless.",
  },
  {
    name: "Christopher Johnson",
    date: "October 14, 2025",
    comment:
      "I had my TV repaired here after it stopped turning on. The issue was solved quickly and the cost was very fair.",
  },
  {
    name: "Isabella White",
    date: "November 6, 2025",
    comment:
      "The staff is very friendly and knowledgeable. They fixed my coffee machine, and now it works better than ever.",
  },
  {
    name: "William Scott",
    date: "November 20, 2025",
    comment:
      "My air conditioner was leaking water, but after their service it’s working perfectly again. Highly recommended!",
  },
  {
    name: "Sophia Harris",
    date: "December 8, 2025",
    comment:
      "Quick, reliable, and affordable. They repaired my dishwasher and I am completely satisfied with the result.",
  },
];

export default function CardList() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;

    const { scrollLeft, clientWidth } = containerRef.current;
    const scrollAmount = clientWidth * 1;

    if (direction === "left") {
      containerRef.current.scrollTo({
        left: scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else {
      containerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-col gap-5">
      <Arrow scroll={scroll} />

      <ul
        ref={containerRef}
        className="relative w-full md:w-200 h-full flex gap-5 md:overflow-x-hidden overflow-y-hidden"
      >
        {comments.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </ul>
    </div>
  );
}
