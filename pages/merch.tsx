'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site-config';
import type { MerchItem } from '@/types';

interface CartLine {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function MerchPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const items = siteConfig.merch || [];
  const cartSize = cart.reduce((sum, line) => sum + line.quantity, 0);
  const cartTotal = useMemo(
    () => cart.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [cart],
  );

  const addToCart = (item: MerchItem) => {
    setCart((prev) => {
      const existing = prev.find((line) => line.id === item.id);
      if (existing) {
        return prev.map((line) =>
          line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const checkout = async () => {
    if (!cart.length) return;
    setIsCheckingOut(true);
    setError(null);
    try {
      const res = await fetch('/api/merch-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart.map((line) => ({ id: line.id, quantity: line.quantity }))),
      });
      const data = await res.json();
      if (typeof data?.checkout_url === 'string' && /^https:\/\/(checkout\.stripe\.com|buy\.stripe\.com)\//.test(data.checkout_url)) {
        window.location.assign(data.checkout_url);
      } else {
        setError('Checkout could not be started. Please try again.');
      }
    } catch {
      setError('Checkout could not be started. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Community Store</p>
          <h1 className="mt-2 font-serif text-4xl font-bold">Merchandise</h1>
          <p className="mt-3 max-w-2xl text-gray-400">
            Every purchase supports case research, advocacy, and family support. Items ship from our
            community fulfillment house — a portion of every sale funds the mission.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <p className="col-span-full rounded-xl border border-gray-800 bg-black/30 p-8 text-center text-gray-400">The store is being restocked. Please check back soon.</p>
          )}
          {items.map((item) => (
            <article
              key={item.id}
              className="brand-panel flex flex-col rounded-2xl p-4"
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded bg-gray-900">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-500">{item.collection}</p>
              <h2 className="mt-1 font-serif text-lg font-bold">{item.name}</h2>
              <p className="mt-1 flex-1 text-sm text-gray-400">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-white">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="rounded bg-deep-red px-4 py-2 text-sm font-semibold uppercase tracking-wider transition hover:bg-red-800"
                >
                  Add to Cart
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-500">{item.size}</p>
            </article>
          ))}
        </div>

        {cartSize > 0 && (
          <aside
            className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-xl rounded-xl border border-gray-700 bg-black/95 p-4 shadow-2xl"
            aria-label="Cart"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold">
                Cart <span className="text-gray-400">({cartSize} item{cartSize === 1 ? '' : 's'})</span>
              </h2>
              <button
                onClick={() => setCart([])}
                className="text-xs uppercase tracking-wider text-gray-400 hover:text-white"
              >
                Clear
              </button>
            </div>
            <ul className="mt-2 max-h-40 space-y-1 overflow-auto text-sm">
              {cart.map((line) => (
                <li key={line.id} className="flex justify-between text-gray-300">
                  <span>
                    {line.name} × {line.quantity}
                  </span>
                  <span>${(line.price * line.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between border-t border-gray-800 pt-3">
              <span className="font-semibold">Total</span>
              <span className="font-serif text-xl font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            <button
              onClick={checkout}
              disabled={isCheckingOut}
              className="mt-3 w-full rounded bg-deep-red px-6 py-3 font-semibold uppercase tracking-wider transition hover:bg-red-800 disabled:opacity-60"
            >
              {isCheckingOut ? 'Redirecting…' : 'Checkout Securely'}
            </button>
          </aside>
        )}
      </main>
      <Footer />
    </div>
  );
}

