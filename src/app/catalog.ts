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
import humanoidTestRig from "../../public/concepts/humanoid-test-rig.webp";
import researchRackModules from "../../public/concepts/research-rack-modules.webp";
import bipedalPlatform from "../../public/concepts/bipedal-platform.webp";
import leggedTransparent from "../../public/concepts/legged-platform-transparent.webp";
import interfaceTestStation from "../../public/concepts/interface-test-station.webp";
import sensorHubPods from "../../public/concepts/sensor-hub-pods.webp";
import probeCameraBench from "../../public/concepts/probe-camera-bench.webp";
import dualMotorTestUnit from "../../public/concepts/dual-motor-test-unit.webp";
import tactileHandTiles from "../../public/concepts/tactile-hand-tiles.webp";
import pressurePadArray from "../../public/concepts/pressure-pad-array.webp";
import wearableSensorModules from "../../public/concepts/wearable-sensor-modules.webp";
import embodiedObservationBench from "../../public/concepts/embodied-observation-bench.webp";
import tactileCalibrationRig from "../../public/concepts/tactile-calibration-rig.webp";
import forearmInterfaceSystem from "../../public/concepts/forearm-interface-system.webp";
import wristTeleoperationModule from "../../public/concepts/wrist-teleoperation-module.webp";
import modularForearmRail from "../../public/concepts/modular-forearm-rail.webp";
import openFrameForearmModule from "../../public/concepts/open-frame-forearm-module.webp";
import forearmTactileWearable from "../../public/concepts/forearm-tactile-wearable.webp";
import tactileGlove from "../../public/concepts/tactile-glove.webp";

/* ─── Product catalog ─────────────────────────────────────────────────────
 * Every listing carries its real development stage. Today every item is a
 * concept rendering: not built, not tested, not for sale.
 *
 * When a product is genuinely released:
 *   1. set `stage` to "available" (or "preorder" with a confirmed ship date in
 *      the description) and `price` to the confirmed price;
 *   2. replace `image` with photographs of the real device;
 *   3. add only specifications that have been measured.
 * Seller disclosure lives at /legal (src/app/legal/page.tsx): when the first
 * product goes on sale, update its Sales status, shipping and Delivery rows.
 */

export type Stage = "concept" | "prototype" | "preorder" | "available";

export const STAGE_LABEL: Record<Stage, string> = {
  concept: "Concept",
  prototype: "Prototype",
  preorder: "Pre-order",
  available: "Available",
};

export const STAGE_NOTE: Record<Stage, string> = {
  concept: "Concept rendering. Not built, not tested, not for sale.",
  prototype: "Prototype under test. Not for sale.",
  preorder: "Open for pre-order. Ships on the date stated on this page.",
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
    slug: "research-rack-modules",
    ref: "C14",
    name: "Modular Research Rack & Sensor Modules",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "An enclosed rack with swappable sensor modules.",
    description:
      "An enclosed research rack with a test fixture, shown with interchangeable modules for tactile, force, inertial, EMG, and custom sensing. The interface, signals, and readouts on screen are rendered, not measured data.",
    image: researchRackModules,
    alt: "Concept rendering of a black enclosed rack marked FUJIE DENKO with a test fixture inside, a row of labelled sensor modules on a steel bench, and a monitor showing signal traces.",
  },
  {
    slug: "interface-test-station",
    ref: "C17",
    name: "Body-Interface Test Station",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A ring-frame cradle with a precision dispensing gantry.",
    description:
      "A test station combining a padded cradle inside a rotating ring frame, a gantry with a fine dispensing tip over a transparent chamber, and a bank of modular fixtures. It is not a medical device, and the setting shown is rendered, not an existing facility.",
    image: interfaceTestStation,
    alt: "Concept rendering of a black and steel test station marked with the FD symbol, with a padded cradle inside a ring-shaped frame, a gantry holding a fine tip over a transparent dish, and a row of modular fixtures.",
  },
  {
    slug: "humanoid-test-rig",
    ref: "C13",
    name: "Humanoid Test Rig",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "A suspended humanoid in an instrumented test frame.",
    description:
      "A humanoid body suspended by cables inside an aluminium test frame with linear actuators and a monitoring station. The facility shown is part of the rendering, not an existing laboratory.",
    image: humanoidTestRig,
    alt: "Concept rendering of a white humanoid robot suspended by cables in a large aluminium test frame with actuators, cabinets marked FUJIE DENKO, and a monitor showing a skeletal figure.",
  },
  {
    slug: "bipedal-platform",
    ref: "C15",
    name: "Bipedal Locomotion Platform",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "Legged locomotion studied on a treadmill.",
    description:
      "The lower body of a bipedal platform walking on a treadmill, with exposed actuators and cabling. The setting and on-screen gait data are rendered.",
    image: bipedalPlatform,
    alt: "Concept rendering of a white and aluminium robotic leg marked with the FD symbol stepping on a treadmill, with monitors showing a walking figure in the background.",
  },
  {
    slug: "legged-platform-transparent",
    ref: "C16",
    name: "Legged Platform — Transparent Body",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "A clear-shell quadruped with visible electronics.",
    description:
      "A quadruped concept with a transparent shell exposing its electronics, beside a display of spiking-network, touch, and motor signals. All data shown is rendered; markings, including the model designation, are provisional.",
    image: leggedTransparent,
    alt: "Concept rendering of a quadruped robot with a transparent body and black joints marked FUJIE DENKO, beside a monitor showing spike rasters and signal plots.",
  },
  {
    slug: "dual-motor-test-unit",
    ref: "C20",
    name: "Dual-Motor Test Unit",
    category: "energy",
    stage: "concept",
    price: null,
    summary: "Two motors on a shared axis, with drive electronics on show.",
    description:
      "A symmetric aluminium unit with a motor at each end of a shared linear axis and its drive and control boards visible behind clear panels.",
    image: dualMotorTestUnit,
    alt: "Concept rendering of a silver aluminium unit marked with the FD symbol, with circuit boards behind clear panels and two motors at either end of a linear shaft.",
  },
  {
    slug: "sensor-hub-pods",
    ref: "C18",
    name: "Sensor Hub & Pods",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A central hub with four cabled sensing pods.",
    description:
      "A rugged hub with four connected sensing pods, each with its own controls and status light, for distributing measurements across a space or a body.",
    image: sensorHubPods,
    alt: "Concept rendering of a black and brushed-steel hub marked with the FD symbol, cabled to four square sensing pods, each with a round top control and a blue status light.",
  },
  {
    slug: "probe-camera-bench",
    ref: "C19",
    name: "Probe & Camera Bench",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A gantry probe with multi-angle cameras on a breadboard.",
    description:
      "A linear-rail gantry carrying a probe tip and an angled camera, with further cameras and a sample pad on an optical breadboard base.",
    image: probeCameraBench,
    alt: "Concept rendering of a measurement bench marked with the FD symbol, with a gantry holding a probe tip and an angled camera, two more cameras, and a small pad on a perforated aluminium base.",
  },
  {
    slug: "pressure-pad-array",
    ref: "C22",
    name: "Pressure Pad Array",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A 4×4 grid of soft pads with underglow.",
    description:
      "A compact desktop unit with sixteen soft pressure pads in a four-by-four grid and a status light.",
    image: pressurePadArray,
    alt: "Concept rendering of a white desktop unit with sixteen soft pads in a four-by-four grid lit blue from below, marked with the FD symbol.",
  },
  {
    slug: "wearable-sensor-modules",
    ref: "C23",
    name: "Wearable Sensor Modules",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "Strap-mounted modules for body-worn sensing.",
    description:
      "Small strap-mounted modules for the chest, waist, or limbs, with USB-C charging and a status light.",
    image: wearableSensorModules,
    alt: "Concept rendering of two grey sensor modules marked with the FD symbol, mounted on black elastic straps, beside a coiled USB-C cable.",
  },
  {
    slug: "tactile-hand-tiles",
    ref: "C21",
    name: "Tactile Hand & Sensor Tiles",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "A robotic hand with a tactile palm and swappable tiles.",
    description:
      "A multi-jointed robotic hand with a tactile palm pad and fingertip arrays, shown with stacked tactile tiles and a mounting frame.",
    image: tactileHandTiles,
    alt: "Concept rendering of a silver and black robotic hand marked with the FD symbol, with a gridded tactile palm pad, beside a stack of square tactile tiles and an open mounting frame.",
  },
  {
    slug: "embodied-observation-bench",
    ref: "C24",
    name: "Embodied Observation Bench",
    category: "systems",
    stage: "concept",
    price: null,
    summary: "Body-worn sensors, force plate, compute, and projection in one bench.",
    description:
      "An integrated bench combining a harness of wearable sensors on a mannequin, a four-pad force plate, a compute stack, and a projector-camera table. All data and displays shown are rendered.",
    image: embodiedObservationBench,
    alt: "Concept rendering of a long aluminium bench marked with the FD symbol, with a mannequin wearing a sensor harness, a four-pad plate, a cabled compute stack, and a projector shining onto a table with a cube and a sphere.",
  },
  {
    slug: "forearm-tactile-wearable",
    ref: "C25",
    name: "Forearm Tactile Wearable",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A forearm brace with a 4×4 tactile array and surface electrodes.",
    description:
      "A strapped forearm frame carrying a sixteen-cell tactile array, a controller board under a clear cover, and snap leads to adhesive surface electrodes. The display in the background is rendered. It is not a medical device.",
    image: forearmTactileWearable,
    alt: "Concept rendering of a forearm brace marked with the FD symbol, with a four-by-four grid of textured tactile cells, a controller board under clear acrylic, and three adhesive electrodes on the arm wired to the brace.",
  },
  {
    slug: "open-frame-forearm-module",
    ref: "C26",
    name: "Open-Frame Forearm Module",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A skeletal forearm frame with tactile pad, controller, and battery.",
    description:
      "An open machined frame strapped along the forearm, holding a tactile pad, a controller board and an auxiliary sensor board under clear covers, a battery pack, a USB-C port, and leads to four surface electrodes. It is not a medical device.",
    image: openFrameForearmModule,
    alt: "Concept rendering of an open dark-metal frame strapped to a forearm, carrying a sixteen-cell pad and two circuit boards under clear covers, a cylindrical battery with blue indicator lights, and four electrodes on the skin.",
  },
  {
    slug: "modular-forearm-rail",
    ref: "C27",
    name: "Modular Forearm Sensor Rail",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "Swappable sensor modules on a forearm rail, with calibration targets.",
    description:
      "A row of interchangeable modules — electrode pod, controller, tactile array, empty bay, and hub — clipped along a forearm, shown on a mannequin arm on a test stand with a checkerboard and ring calibration target and a spare module.",
    image: modularForearmRail,
    alt: "Concept rendering of a mannequin forearm on an aluminium stand wearing a chain of square modules marked with the FD symbol, with a checkerboard plate, a ring target card, a spare electrode module, and a circular connector on the bench.",
  },
  {
    slug: "wrist-teleoperation-module",
    ref: "C28",
    name: "Wrist Control Module",
    category: "robotics",
    stage: "concept",
    price: null,
    summary: "A forearm-worn control unit studied for driving a legged robot.",
    description:
      "A forearm-worn unit with surface-electrode inputs, a tactile pad, controller board, and battery, studied as a control interface for a tethered legged platform. The robot, the link between them, and the on-screen data are rendered, not demonstrated. It is not a medical device.",
    image: wristTeleoperationModule,
    alt: "Concept rendering of a forearm-worn aluminium unit marked with the FD symbol, with a circuit board and sixteen-cell pad under clear acrylic and four electrodes on the arm, cabled to a small quadruped robot on a lab bench.",
  },
  {
    slug: "tactile-calibration-rig",
    ref: "C29",
    name: "Tactile Calibration Rig",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A probe stand pressing a 4×4 tile array, with a wrist unit alongside.",
    description:
      "A vertical probe stand pressing individual cells of a sixteen-tile array, cabled to a multi-channel display and a force readout, with a wrist-worn unit on an arm rest. Model markings, channel traces, and force values in the image are rendered, not measurements.",
    image: tactileCalibrationRig,
    alt: "Concept rendering of a probe on a vertical stand pressing a four-by-four tile array in a base marked with the FD symbol, cabled to a wrist unit on a person's forearm, with a sixteen-channel display, a force meter, and calipers on the bench.",
  },
  {
    slug: "forearm-interface-system",
    ref: "C30",
    name: "Forearm Interface Development System",
    category: "systems",
    stage: "concept",
    price: null,
    summary: "Wearable, tile array, linear stage, and compute as one bench set.",
    description:
      "A development set combining a forearm wearable on a mannequin arm, a sixteen-tile array with its controller, a motorised linear stage with controls, and a compact compute box with a laptop. The signal displays are rendered.",
    image: forearmInterfaceSystem,
    alt: "Concept rendering of a mannequin arm on an acrylic stand wearing a tactile brace, a sixteen-tile base unit, a linear motor stage with a control panel, and a compute box with a laptop, each base marked with the FD symbol and joined by blue cables.",
  },
  {
    slug: "tactile-glove",
    ref: "C31",
    name: "Tactile Sensing Glove",
    category: "sensing",
    stage: "concept",
    price: null,
    summary: "A glove with fingertip tactile arrays and swappable sensor tips.",
    description:
      "A glove with a tactile array on each fingertip, cable runs along the fingers to a wrist housing, and four interchangeable fingertip sensor modules. It is not a medical device.",
    image: tactileGlove,
    alt: "Concept rendering of a black and white glove marked with the FD symbol, with gridded tactile pads on each fingertip and cables running to a white wrist housing, above four small fingertip sensor modules with gold pins.",
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

/* ─── Stripe Payment Links ────────────────────────────────────────────────
 * Same pattern as platodesignlab.com Return Audit: one Stripe Payment Link
 * per product, read from an env var at build time.
 *
 *   NEXT_PUBLIC_STRIPE_URL_<SLUG>   e.g. NEXT_PUBLIC_STRIPE_URL_OBSERVATION_RACK
 *
 * The Buy button appears only when the product is `stage: "available"`, has a
 * confirmed `price`, AND its env var is set. Otherwise the page falls back to
 * email (Order inquiry / Notify me). Concept items can never be paid for.
 *
 * Stripe Payment Link confirmation redirect must be set manually in Stripe to:
 *   https://fujiedenko.platodesignlab.com/order/thanks
 * This code only creates the destination page.
 */
export function stripeEnvName(slug: string) {
  return `NEXT_PUBLIC_STRIPE_URL_${slug.toUpperCase().replace(/-/g, "_")}`;
}

export function isPurchasable(p: Product) {
  return (p.stage === "available" || p.stage === "preorder") && !!p.price;
}

export function stripeUrl(p: Product): string | null {
  if (!isPurchasable(p)) return null;
  const url = process.env[stripeEnvName(p.slug)];
  return url && url.startsWith("https://") ? url : null;
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsIn(category: CategoryId) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function categoryName(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id)!.name;
}
