"use client"
import Link from "next/link";
import { items } from "../category";
interface props {
  handler: () => void;
}
export const MegaMenu = ({ handler }: props) => (
  <div className="absolute left-0 md:top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {items.map((item, index) => (
      <Link
        key={index}
        href={`/product-list#${item.title}`}
        className="block p-2 hover:bg-gray-100 rounded-lg"
        onClick={handler}
      >
        <div className="w-full h-auto mb-2 rounded-lg">{item.icon}</div>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </Link>
    ))}
  </div>
);
