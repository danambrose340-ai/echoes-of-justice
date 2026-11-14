import Link from 'next/link';
import Image from 'next/image';
import { Story } from '@/types';

export default function StoriesGrid({ stories }: { stories: Story[] }) {
  if (!stories || stories.length === 0) {
    return (
      <div className="rounded-lg border border-gray-800 bg-justice-charcoal p-6 sm:p-8">
        <h3 className="font-serif text-xl font-bold text-white">This space is for families.</h3>
        <p className="mt-3 max-w-2xl leading-7 text-gray-300">
          No remembrances have been published yet. If you lost someone, or your family was separated,
          and you want their story told here in your own words, contact us. We publish only with the
          family&rsquo;s written permission, and you can ask us to change or remove it at any time.
        </p>
        <Link href="/share-story" className="mt-5 inline-block rounded bg-deep-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
          Share your family&rsquo;s story
        </Link>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stories.map((story) => (
        <article
          key={story.id}
          className="group relative overflow-hidden rounded-lg border border-gray-800 bg-justice-charcoal p-6 transition hover:border-deep-red"
        >
          <Link href={`/stories/${story.id}`} className="flex h-full flex-col">
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gray-700">
                <Image
                  src={story.photo}
                  alt={`Photo of ${story.name}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white">{story.name}</h3>
                <p className="text-xs text-gray-500">{story.sub}</p>
              </div>
            </div>
            <blockquote className="flex-1 border-l-4 border-deep-red pl-4 text-sm italic leading-relaxed text-gray-300">
              {story.quote}
            </blockquote>
            <p className="mt-4 text-[11px] uppercase tracking-widest text-gray-500">{story.foot}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}

