import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { NeoCard } from "@/components/common/NeoCard";
import { NeoButton } from "@/components/common/NeoButton";
import { GarlandDivider } from "@/components/folk-art/GarlandDivider";
import { LotusIcon } from "@/components/folk-art/LotusIcon";
import { Sparkles, Calendar, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Rituals & Festivals — Floro",
  description:
    "Explore the cultural and spiritual significance of daily puja flowers, weekly deity offering cadences, and festival flower customs.",
};

export default function RitualsAndFestivalsPage() {
  const weeklyCadence = [
    {
      day: "Monday (Somvar)",
      deity: "Lord Shiva (Mahadev)",
      flower: "Fresh Belpatra (Bilva leaves) & White blooms",
      desc: "Trifoliate Bilva leaves cool Lord Shiva's spiritual tapasya and bring mental peace. Included every Monday in Basic and Premium plans.",
      image: "/images/madhubani/shiva_somvar.jpg",
    },
    {
      day: "Tuesday (Mangalvar)",
      deity: "Lord Hanuman & Maa Durga",
      flower: "Vibrant Red Hibiscus (Gudhal)",
      desc: "Red flowers embody intense devotion, protection, and the fiery divine strength of Shakti.",
      image: "/images/madhubani/hanuman_mangalvar.jpg",
    },
    {
      day: "Wednesday (Budhvar)",
      deity: "Lord Ganesha (Vighnaharta)",
      flower: "Doobh (Durva) Grass stems & Yellow Genda",
      desc: "21 blades of tender Durva grass pacify all obstacles and invoke auspicious wisdom.",
      image: "/images/madhubani/ganesha_budhvar.jpg",
    },
    {
      day: "Thursday (Guruvar)",
      deity: "Lord Vishnu & Brihaspati",
      flower: "Bright Yellow Marigold & Tulsi Patra",
      desc: "Golden yellow flowers signify divine light, dharma, and righteous auspiciousness.",
      image: "/images/madhubani/vishnu_guruvar.jpg",
    },
    {
      day: "Friday (Shukravar)",
      deity: "Goddess Lakshmi & Devi",
      flower: "Fragrant Jasmine, Lotus & Pink blossoms",
      desc: "Sweet aromatic flowers invite abundance, beauty, peace, and domestic contentment.",
      image: "/images/madhubani/lakshmi_shukravar.jpg",
    },
    {
      day: "Saturday (Shanivar)",
      deity: "Lord Hanuman & Shani Dev",
      flower: "Aparajita (Butterfly Pea) & Blue blooms",
      desc: "Deep indigo Aparajita petals symbolize meditative discipline, fearlessness, and devotion.",
      image: "/images/madhubani/shani_shanivar.jpg",
    },
    {
      day: "Sunday (Ravivar)",
      deity: "Lord Surya (The Sun)",
      flower: "Fresh Red & Orange Marigold offerings",
      desc: "Offerings made at sunrise with arghya invoke vitality, health, and solar blessings.",
      image: "/images/madhubani/surya_ravivar.jpg",
    },
  ];

  const festivalTraditions = [
    {
      title: "Maha Shivratri",
      deity: "Lord Shiva (Mahadev)",
      date: "Phalguna Krishna Chaturdashi",
      flower: "Trifoliate Bilva Patra & White Blooms",
      desc: "All-night vigil with continuous abhishekam. Bilva leaves cool Lord Shiva's divine ascetic energy.",
      image: "/images/madhubani/shiva_somvar.jpg",
    },
    {
      title: "Sharad Navratri",
      deity: "Maa Durga & Nine Forms",
      date: "Ashvin Shukla Pratipada to Navami",
      flower: "Vibrant Crimson Hibiscus & Mogra",
      desc: "Nine sacred nights of worship. Red blossoms symbolize the triumph of Shakti and righteousness.",
      image: "/images/madhubani/durga_navratri.jpg",
    },
    {
      title: "Diwali & Lakshmi Puja",
      deity: "Maa Mahalakshmi",
      date: "Kartik Amavasya",
      flower: "Golden Marigolds & Sacred Pink Lotus",
      desc: "Illuminating every doorstep with clay deepams, marigold garlands, and pristine lotuses.",
      image: "/images/madhubani/lakshmi_shukravar.jpg",
    },
    {
      title: "Ganesh Chaturthi",
      deity: "Lord Ganesha",
      date: "Bhadrapada Shukla Chaturthi",
      flower: "21 blades of Durva grass & Hibiscus",
      desc: "Welcoming Ganpati Bappa with fresh morning Durva grass bundles, modaks, and vibrant hibiscus.",
      image: "/images/madhubani/ganesha_budhvar.jpg",
    },
  ];

  return (
    <main className="w-full flex flex-col bg-transparent pb-20">
      {/* Header */}
      <section className="w-full py-12 md:py-16 border-b-2 border-floro-border bg-transparent text-center">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            Devotional Traditions
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-floro-primary">
            Rituals & Festival Offering Guide
          </h1>
          <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
            Every day of the week holds sacred rhythm in Indian households. Discover the purpose behind each petal.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-largeCard border-2 border-floro-border bg-[#FFF9F1] shadow-neo-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-floro-accent-soft border border-floro-border text-xs font-mono font-bold text-floro-accent">
              <LotusIcon size={20} />
              The Meaning of Pushpa Samarpanam
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
              Why We Offer Fresh Flowers Every Morning
            </h2>
            <p className="text-sm text-floro-secondary leading-relaxed">
              In Vedic ritual, offering flowers (Pushpam) represents offering the blossoming of the human heart to the Divine. Fresh flowers carry life-force (prana), delicate natural scent, and color. By placing them on your altar each morning before daily work begins, you transform an ordinary home into a temple sanctum.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-6 rounded-card border-2 border-floro-border bg-floro-surface shadow-neo text-center space-y-2">
              <Sparkles className="w-8 h-8 text-floro-marigold mx-auto" />
              <p className="text-base font-bold text-floro-primary">365 Days Connected</p>
              <p className="text-xs text-floro-muted">Never let a morning pass without fresh flowers on your altar.</p>
            </div>
          </div>
        </div>

        <GarlandDivider className="my-12" />

        {/* Weekly Day-by-Day Cadence */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
              The Weekly Offering Cadence
            </h2>
            <p className="text-xs sm:text-sm text-floro-secondary">
              How traditional Indian worship aligns flowers with each day of the week, depicted in authentic Mithila Madhubani folk art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 neo-card-group group/cards">
            {weeklyCadence.map((cad, idx) => (
              <NeoCard
                key={idx}
                variant="white"
                hasShadow={true}
                padding="none"
                className="flex flex-col justify-between overflow-hidden"
              >
                {/* Madhubani Folk Art Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b-2 border-floro-border bg-floro-surface-soft">
                  <img
                    src={cad.image}
                    alt={`${cad.deity} - Madhubani folk art`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-floro-surface/95 border border-floro-border text-xs font-mono font-bold text-floro-accent uppercase shadow-[1px_1px_0_#241D20]">
                    {cad.day}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-white text-xs font-mono">
                    Mithila Art
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-floro-border/20 pb-2">
                      <h3 className="text-lg font-bold font-display text-floro-primary">
                        {cad.deity}
                      </h3>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-floro-accent">
                        🌸 {cad.flower}
                      </h4>
                      <p className="text-sm text-floro-secondary mt-1.5 leading-relaxed">
                        {cad.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>

        <GarlandDivider className="my-16" />

        {/* Major Festivals Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
              Sacred Occasions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
              Major Festival Ritual Traditions
            </h2>
            <p className="text-sm sm:text-base text-floro-secondary">
              Elevated floral offerings and sacred deity customs across India&apos;s grandest celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 neo-card-group group/cards">
            {festivalTraditions.map((fest, idx) => (
              <NeoCard
                key={idx}
                variant="white"
                hasShadow={true}
                padding="none"
                className="flex flex-col justify-between overflow-hidden"
              >
                <div className="relative h-44 w-full overflow-hidden border-b-2 border-floro-border bg-floro-surface-soft">
                  <img
                    src={fest.image}
                    alt={`${fest.title} - Madhubani folk art`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-floro-surface/95 border border-floro-border text-xs font-mono font-bold text-floro-primary shadow-[1px_1px_0_#241D20]">
                    {fest.date}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-white text-xs font-mono">
                    Mithila Art
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold font-display text-floro-primary">
                      {fest.title}
                    </h3>
                    <p className="text-sm font-bold text-floro-accent">
                      🌺 {fest.flower}
                    </p>
                    <p className="text-sm text-floro-secondary leading-relaxed">
                      {fest.desc}
                    </p>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/subscriptions">
            <NeoButton variant="primary" size="lg">
              Subscribe to Daily Puja Flowers
            </NeoButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
