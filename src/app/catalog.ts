import type { StaticImageData } from "next/image";
import systemFamily from "../../public/concepts/system-family.webp";
import generator from "../../public/concepts/generator.webp";
import tactileArray from "../../public/concepts/tactile-array.webp";
import quadrupedA from "../../public/concepts/quadruped-a.webp";
import quadrupedB from "../../public/concepts/quadruped-b.webp";
import generatorLarge from "../../public/concepts/generator-large.webp";
import quadrupedC from "../../public/concepts/quadruped-c.webp";
import tactileModule from "../../public/concepts/tactile-module.webp";
import roboticHand from "../../public/concepts/robotic-hand.webp";
import humanoidLab from "../../public/concepts/humanoid-lab.webp";
import observationRack from "../../public/concepts/observation-rack.webp";
import louverFacade from "../../public/concepts/louver-facade.webp";

/* ─── Product catalog ─────────────────────────────────────────────────────
 * Every listing carries its real development stage. Today every item is a
 * concept rendering: not built, not tested, not for sale.
 *
 * When a product is genuinely released:
 *   1. set `stage` to "available" and `price` to the confirmed price;
 *   2. replace `image` with photographs of the real device;
 *   3. add only specifications that have been measured.
 * Before taking any order, publish the 特定商取引法に基づく表記 page
 * (seller legal name, address, contact, returns) — it needs the confirmed
 * OPERATING_ENTITY_LEGAL_NAME.
 */

export type Stage = "concept" | "prototype" | "available";

export const STAGE_LABEL: Record<Stage, string> = {
  concept: "Concept",
  prototype: "Prototype",
  available: "Available",
};

export const STAGE_NOTE: Record<Stage, string> = {
  concept: "Concept rendering. Not built, not tested, not for sale.",
  prototype: "Prototype under test. Not for sale.",
  available: "Available to order.",
};

export type CategoryId = "energy" | "sensing" | "robotics" | "systems";

export const CATEGORIES: { id: CategoryId; name: string; blurb: string }[] = [
  { id: "energy", name: "Energy", blurb: "Generation and harvesting hardware." },
  { id: "sensing", name: "Sensing", blurb: "Tactile and multi-channel observation." },
  { id: "robotics", name: "Robotics", blurb: "Embodied platforms for SNN research." },
  { id: "systems", name: "Systems", blurb: "Building-scale and integrated systems." },
];

export type Product = {
  slug: string;
  ref: string;
  name: string;
  category: CategoryId;
  stage: Stage;
  /** Confirmed price including tax, or null while not set. */
  price: string | null;
  summary: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "hand-crank-generator",
    ref: "C02",
    name: "Hand-Crank Generator",
    category: "energy",
    stage: "concept",
    price: null,
    summary: "Human-powered generation in a desktop form.",
    description:
      "Mechanical-to-electrical conversion through a geared generator, with on-board storage and control electronics.",
    image: generator,
    alt: "Concept rendering of a hand-crank generator unit with transparent covers showing gears, a generator, circuit boards, and storage cells.",
  },
  {
    slug: "generation-module-large",
    ref: "C06",
    name: "Large-Format Generation Module",
    category: "energy",
    stage: "concept",
    price: null,
    summary: "Flywheel-and-linkage drive with enclosed electronics.",
    description:
      "A flywheel-and-linkage drive coupled to a generator, with power and control electronics in a transparent enclosure.",
    image: generatorLarge,
    alt: "Concept rendering of a large white generator unit with an open flywheel frame, a linkage arm, a generator in a transparent housing, and a control board.",
  },
  {
    slug: "tactile-sensor-array",
    ref: "C03",
    name: "Tactile Sensor Array",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A curved grid of discrete contact sensors.",
    description:
      "A curved sensing surface with a grid of discrete sensor elements routed to an on-board processing board.",
    image: tactileArray,
    alt: "Concept rendering of a curved tactile sensor module with a grid of sensor elements under a transparent cover and an exposed circuit board.",
  },
  {
    slug: "tactile-sensing-module",
    ref: "C08",
    name: "Tactile Sensing Module",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "Segmented tactile surface over on-board processing.",
    description:
      "A compact module with a segmented tactile surface over processing electronics and a sealed connector.",
    image: tactileModule,
    alt: "Concept rendering of a compact sensor module with a segmented transparent tactile surface, visible circuit boards, and a round connector.",
  },
  {
    slug: "observation-rack",
    ref: "C11",
    name: "Modular Observation Rack",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "Swappable sensing channels and an operator console.",
    description:
      "A portable rack of swappable sensing-channel modules, a reconfigurable observation path, and an operator console. Interface and readouts shown are rendered.",
    image: observationRack,
    alt: "Concept rendering of a black portable equipment rack marked FUJIE DENKO, with a row of labelled sensor-channel modules, a slide-out transparent test bay, a signal hub, and an adjoining console with a monitor and keyboard.",
  },
  {
    slug: "legged-platform",
    ref: "C04",
    name: "Legged Embodied Platform",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "A quadruped body for embodied computation.",
    description:
      "A quadruped platform concept for embodied sensing and control experiments, with exposed compute and wiring.",
    image: quadrupedA,
    alt: "Concept rendering of a white quadruped robot with a transparent top housing showing circuit boards and blue wiring.",
  },
  {
    slug: "legged-platform-sensor-dense",
    ref: "C05",
    name: "Legged Platform — Sensor-Dense",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "Quadruped variant with expanded sensing.",
    description:
      "A variant concept with additional perception sensors and a side-mounted energy module.",
    image: quadrupedB,
    alt: "Concept rendering of a quadruped robot variant with additional cameras, a top-mounted sensor, and a side-mounted module.",
  },
  {
    slug: "legged-platform-articulated",
    ref: "C07",
    name: "Legged Platform — Articulated",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "Articulated quadruped with exposed compute.",
    description:
      "A quadruped body concept with exposed compute, for research on embodied spiking-network sensing and control.",
    image: quadrupedC,
    alt: "Concept rendering of a white articulated quadruped robot with a transparent compute bay and blue accent lighting.",
  },
  {
    slug: "tactile-robotic-hand",
    ref: "C09",
    name: "Tactile Robotic Hand",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "A multi-joint hand with fingertip sensing.",
    description:
      "A multi-joint hand touching a sensing surface, with contact data visualised on a monitor. Hand, data, and setting are all rendered.",
    image: roboticHand,
    alt: "Concept rendering of a white multi-jointed robotic hand marked with the FD symbol, fingertips resting on a transparent sensing surface, with a monitor showing a hand-shaped heat map behind it.",
  },
  {
    slug: "humanoid-platform",
    ref: "C10",
    name: "Humanoid Embodied Platform",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "An upper-body humanoid research platform.",
    description:
      "An upper-body humanoid concept at a workbench. The laboratory shown is part of the rendering, not an existing facility.",
    image: humanoidLab,
    alt: "Concept rendering of a white humanoid robot with exposed cabling reaching toward electronics on a workbench, in a laboratory with an FD symbol on the wall.",
  },
  {
    slug: "instrumented-louver-facade",
    ref: "C12",
    name: "Instrumented Louver Facade",
    category: "systems",
    stage: "concept",
    price: null,
    summary: "Controlled louvers with environmental sensing.",
    description:
      "Movable louvers with a controller and environmental sensing, studied as a building-scale physical system. The space and data shown are rendered, not an existing installation.",
    image: louverFacade,
    alt: "Concept rendering of a tall aluminium louver wall with a wall-mounted control box marked with the FD symbol, a sensor on a tripod, an equipment rack, and a monitor showing a colour field map.",
  },
  {
    slug: "system-family",
    ref: "C01",
    name: "FD System Family",
    category: "systems",
    stage: "concept",
    price: null,
    summary: "The lineup considered as one integrated family.",
    description:
      "Legged platform, tactile sensing pad, and generator module shown together as one integrated system concept.",
    image: systemFamily,
    alt: "Concept rendering of a white quadruped robot with a transparent top housing, a tactile sensing pad, and a cylindrical generator module, each marked with the FD symbol.",
  },
];

export const HERO_IMAGE = systemFamily;

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsIn(category: CategoryId) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function categoryName(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id)!.name;
}
