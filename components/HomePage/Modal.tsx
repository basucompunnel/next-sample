'use client';

import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  featureId: string;
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="sticky right-1 top-1 z-10 ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      <IoClose className="text-2xl" />
    </button>
  );
}

function ModalImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="-mb-24">
      <Image src={src} alt={alt} width={1200} height={600} className="h-auto w-full rounded-2xl" />
    </div>
  );
}

function ModalTitle({ title }: { title: string }) {
  return <h2 className="mb-8 text-5xl font-semibold text-white px-24">{title}</h2>;
}

function DesignedFastContent() {
  return (
    <>
      <div className="-mb-6 space-y-6 text-base text-gray-400 px-24">
        <p>
          Linear is built in pursuit of high-performance. With its keyboard-first design, realtime
          sync, and zero-friction workflows, it delivers a focused experience ideal for fast-paced
          development environments.
        </p>
        <p>
          Linear's obsessive focus on speed not only results in improved developer productivity,
          but also enables teams to move faster.
        </p>
        <p>
          Companies that switch to Linear report a significant uplift in newly filed tickets,
          vastly reduced issue closing times, and products that ship faster.
        </p>
        <p>For us, speed is not just an afterthought. It's our most important feature.</p>
      </div>

      <div className="-mb-6 rounded-2xl bg-black/50 p-32">
        <p className="mb-6 text-center text-xl text-gray-300">
          "Even as we continue to grow, we're moving faster because Linear keeps our workflows
          simple."
        </p>
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <span className="text-2xl font-semibold">remote</span>
        </div>

        <p className="mb-6 text-center text-base text-gray-400">
          Teams that switch to Linear create more issues and close them faster
        </p>

        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">2x</div>
            <div className="text-gray-400">Increase in filed issues</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">1.6x</div>
            <div className="text-gray-400">Faster issue resolution</div>
          </div>
        </div>
      </div>
    </>
  );
}

function CraftedPerfectionContent() {
  return (
    <>
      <div className="-mb-6 space-y-6 text-base text-gray-400 px-24">
        <p>
          We believe that there is a lost art of building software. A craftsmanship that yields
          products of an exceptional, almost magical, quality.
        </p>
        <p>
          It's difficult to describe this quality with words and impossible to measure it in
          numbers, but you can feel it when it's there. You know it when you experience it.
        </p>
        <p>
          Achieving this product quality is a function of both the talent of its creators and the
          tools at their disposal. Linear was built in pursuit of giving the best product teams a
          tool that matches their skill and ambition.
        </p>
        <p>
          A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A
          tool that abstracts away any impurity that stands in the way between the creator and
          their craft. A tool that finally lets product teams focus on what matters most:
        </p>
        <p>Bringing back product experiences of the highest level of quality.</p>
      </div>

      <div className="-mb-6 rounded-2xl bg-black/50 p-32">
        <p className="mb-6 text-center text-xl text-gray-300">
          "In a world of clunky, slow, and bloated tools, Linear reverses the script on all three
          and adds an unrivaled level of delight and polish."
        </p>
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <span className="text-2xl font-semibold">Watershed</span>
        </div>
      </div>
    </>
  );
}

function PurposeBuiltContent() {
  return (
    <>
      <div className="-mb-6 space-y-6 text-base text-gray-400 px-24">
        <p>
          Linear was developed with a specific purpose: to empower product teams to do their best
          work. Every aspect is intentionally designed to help teams focus on what they do best:
          Planning, building, and shipping great products.
        </p>
        <p>
          Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more
          powerful as you scale. It&apos;s principled where it needs to be, but provides enough
          flexibility to adapt to your team&apos;s unique way of working.
        </p>
        <p>
          We believe that this approach creates a better way to build products. And more than
          20,000 product teams around the globe – from early-stage startups to public companies –
          agree.
        </p>
      </div>

      <div className="-mb-6 rounded-2xl bg-black/50 p-32">
        <p className="mb-6 text-center text-xl text-gray-300">
          "We'd tried many tools before Linear but none of them felt like they were made for the
          way we work. Linear was a breath of fresh air - speedy, snappy, and a pleasure to use."
        </p>
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <span className="text-2xl">▲</span>
          <span className="text-2xl font-semibold">Vercel</span>
        </div>

        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">20k</div>
            <div className="text-gray-400">Paying customers</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">500k+</div>
            <div className="text-gray-400">Active users</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">45%</div>
            <div className="text-gray-400">of YC companies build with Linear</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-semibold text-white">66%</div>
            <div className="text-gray-400">of the top AI startups use Linear</div>
          </div>
        </div>
      </div>
    </>
  );
}

function ModalContent({ featureId }: { featureId: string }) {
  if (featureId === 'designed-fast') return <DesignedFastContent />;
  if (featureId === 'crafted-perfection') return <CraftedPerfectionContent />;
  return <PurposeBuiltContent />;
}

export default function Modal({ isOpen, onClose, title, imageSrc, featureId }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Calculate scrollbar width before hiding it
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      setShouldRender(true);
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 50);
      
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 800);
      
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black p-4 transition-opacity duration-800 will-change-[opacity] ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-black px-12 py-4 transition-all duration-800 will-change-[transform,opacity] ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ transform: 'translateZ(0)' }}
      >
        <CloseButton onClick={onClose} />
        <ModalImage src={imageSrc} alt={title} />
        <ModalTitle title={title} />
        <ModalContent featureId={featureId} />
      </div>
    </div>
  );
}
