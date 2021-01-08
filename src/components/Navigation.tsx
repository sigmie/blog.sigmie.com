import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import Logo from './Logo';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="hidden lg:block h-8 w-auto">
                <Logo></Logo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}
