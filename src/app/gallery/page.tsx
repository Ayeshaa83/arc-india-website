import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";
import { gallery } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="Moments from our events and meetings"
        subtitle="A visual record of association activities, conferences and milestones."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ContentNotice>
          Photos shown below are placeholder stock imagery — please supply the
          association&apos;s actual event photography to replace them.
        </ContentNotice>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((src, i) => (
            <div
              key={src}
              className="relative overflow-hidden rounded-xl shadow-sm"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
            >
              <Image
                src={src}
                alt={`Association of ARCs in India gallery photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
