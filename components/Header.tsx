"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    "New",
    "Signatures",
    "Tops",
    "Dresses",
    "Bottoms",
    "Curated For You",
    "Get Inspired",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
	<div className="mx-auto">
        <header className="wr-header sticky top-0 z-40 px-5  bg-white">
          <div className="wr-header-inner mx-auto px-4 sm:px-5">
            <div className="h-12 sm:h-14 flex items-center">
              <div className="w-[30%] flex justify-start">
                <button
                className="wr-icon-btn cursor-pointer w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-60 sm:hidden"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navbar-list"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <path
                        d="M4.2 4.2L13.8 13.8"
                        stroke="var(--werent-green-1)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.8 4.2L4.2 13.8"
                        stroke="var(--werent-green-1)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M3 5.5H15"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 9H15"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 12.5H15"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </>
                  )}
                </svg>
                </button>

                <button
                className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden cursor-pointer sm:flex"
                aria-label="Search"
                onClick={() => router.push("/search")}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="4.8"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M11.6 11.6L15.2 15.2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>



                </button>
              </div>

              <div className="w-[40%] wr-brand-wrap flex items-center justify-center px-3 hover:scale-105 hover:rotate-4 transition-transform duration-200">
                <img
                  src="/logo.png"
                  alt="WeRent"
                  className="wr-brand-logo w-25 object-contain cursor-pointer"
                  onClick={() => router.push("/")}
                />
              </div>

              <div className="w-[30%] justify-end wr-header-actions flex items-center gap-2 sm:gap-3">
                <button
                  className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden cursor-pointer sm:flex"
                  aria-label="cart" onClick={() => router.push("/cart")}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--werent-green-1)" className="size-6">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg>

                </button>
                <button
                  className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden sm:flex cursor-pointer"
                  aria-label="wishlist" onClick={() => router.push("/favourite")}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--werent-green-1)" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>


                </button>
                <button className="border border-[var(--werent-green-1)] bg-[var(--werent-green-1)] hover:opacity-60 text-white h-7 px-3 rounded-full cursor-pointer text-[10px] sm:text-[11px] tracking-[0.16em] uppercase transition-colors cursor-pointer"  onClick={() => router.push("/sign-in")}>
                  Sign In
                </button>
              </div>
            </div>

            {isMobileMenuOpen && (
              <nav id="mobile-navbar-list" className="border-b border-t cursor-pointer border-[var(--werent-green-1)] sm:hidden">
                <ul className="p-2">
                  {navItems.map((item) => (
                    <li key={item}>
                      <button
                        className="p-2 w-full uppercase "
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <nav className="h-10 hidden sm:block">
              <ul className=" h-full flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {navItems.map((item) => (
                  <li key={item}>
                    <button className="wr-nav-item text-[10px] sm:text-[11px] tracking-[0.14em] cursor-pointer uppercase transition-opacity hover:opacity-60" onClick={() => router.push(`/${item}`)}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
  <hr className="h-1 bg-[var(--werent-green-1)] "/>
	</div>
  );
}