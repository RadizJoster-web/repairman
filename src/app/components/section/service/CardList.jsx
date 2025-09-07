"use client";

import CardService from "./Card";
import { useState, useEffect } from "react";

export default function CardListService({ searchParams }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/getItemsService");

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch service items");
        }

        setData(data.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="hideScroll h-95 md:h-auto overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-all-scroll md:cursor-default">
      {loading && (
        <div className="flex flex-col items-center gap-3 w-screen h-95">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Processing get Data...</p>
        </div>
      )}

      {data.map((item, index) => (
        <CardService
          key={index}
          type={item.type}
          price={item.price}
          items={item.items}
        />
      ))}
    </ul>
  );
}
