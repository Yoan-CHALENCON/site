export type ColorName =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "taupe"
  | "mauve"
  | "mist"
  | "olive";

export type Intensity =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export const colorMap: Record<
  ColorName,
  Record<Intensity, Record<"bg" | "text" | "border", string>>
> = {
  red: {
    50: { bg: "bg-red-50", text: "text-red-50", border: "border-red-50" },
    100: { bg: "bg-red-100", text: "text-red-100", border: "border-red-100" },
    200: { bg: "bg-red-200", text: "text-red-200", border: "border-red-200" },
    300: { bg: "bg-red-300", text: "text-red-300", border: "border-red-300" },
    400: { bg: "bg-red-400", text: "text-red-400", border: "border-red-400" },
    500: { bg: "bg-red-500", text: "text-red-500", border: "border-red-500" },
    600: { bg: "bg-red-600", text: "text-red-600", border: "border-red-600" },
    700: { bg: "bg-red-700", text: "text-red-700", border: "border-red-700" },
    800: { bg: "bg-red-800", text: "text-red-800", border: "border-red-800" },
    900: { bg: "bg-red-900", text: "text-red-900", border: "border-red-900" },
    950: { bg: "bg-red-950", text: "text-red-950", border: "border-red-950" },
  },
  orange: {
    50: {
      bg: "bg-orange-50",
      text: "text-orange-50",
      border: "border-orange-50",
    },
    100: {
      bg: "bg-orange-100",
      text: "text-orange-100",
      border: "border-orange-100",
    },
    200: {
      bg: "bg-orange-200",
      text: "text-orange-200",
      border: "border-orange-200",
    },
    300: {
      bg: "bg-orange-300",
      text: "text-orange-300",
      border: "border-orange-300",
    },
    400: {
      bg: "bg-orange-400",
      text: "text-orange-400",
      border: "border-orange-400",
    },
    500: {
      bg: "bg-orange-500",
      text: "text-orange-500",
      border: "border-orange-500",
    },
    600: {
      bg: "bg-orange-600",
      text: "text-orange-600",
      border: "border-orange-600",
    },
    700: {
      bg: "bg-orange-700",
      text: "text-orange-700",
      border: "border-orange-700",
    },
    800: {
      bg: "bg-orange-800",
      text: "text-orange-800",
      border: "border-orange-800",
    },
    900: {
      bg: "bg-orange-900",
      text: "text-orange-900",
      border: "border-orange-900",
    },
    950: {
      bg: "bg-orange-950",
      text: "text-orange-950",
      border: "border-orange-950",
    },
  },
  amber: {
    50: { bg: "bg-amber-50", text: "text-amber-50", border: "border-amber-50" },
    100: {
      bg: "bg-amber-100",
      text: "text-amber-100",
      border: "border-amber-100",
    },
    200: {
      bg: "bg-amber-200",
      text: "text-amber-200",
      border: "border-amber-200",
    },
    300: {
      bg: "bg-amber-300",
      text: "text-amber-300",
      border: "border-amber-300",
    },
    400: {
      bg: "bg-amber-400",
      text: "text-amber-400",
      border: "border-amber-400",
    },
    500: {
      bg: "bg-amber-500",
      text: "text-amber-500",
      border: "border-amber-500",
    },
    600: {
      bg: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-600",
    },
    700: {
      bg: "bg-amber-700",
      text: "text-amber-700",
      border: "border-amber-700",
    },
    800: {
      bg: "bg-amber-800",
      text: "text-amber-800",
      border: "border-amber-800",
    },
    900: {
      bg: "bg-amber-900",
      text: "text-amber-900",
      border: "border-amber-900",
    },
    950: {
      bg: "bg-amber-950",
      text: "text-amber-950",
      border: "border-amber-950",
    },
  },
  yellow: {
    50: {
      bg: "bg-yellow-50",
      text: "text-yellow-50",
      border: "border-yellow-50",
    },
    100: {
      bg: "bg-yellow-100",
      text: "text-yellow-100",
      border: "border-yellow-100",
    },
    200: {
      bg: "bg-yellow-200",
      text: "text-yellow-200",
      border: "border-yellow-200",
    },
    300: {
      bg: "bg-yellow-300",
      text: "text-yellow-300",
      border: "border-yellow-300",
    },
    400: {
      bg: "bg-yellow-400",
      text: "text-yellow-400",
      border: "border-yellow-400",
    },
    500: {
      bg: "bg-yellow-500",
      text: "text-yellow-500",
      border: "border-yellow-500",
    },
    600: {
      bg: "bg-yellow-600",
      text: "text-yellow-600",
      border: "border-yellow-600",
    },
    700: {
      bg: "bg-yellow-700",
      text: "text-yellow-700",
      border: "border-yellow-700",
    },
    800: {
      bg: "bg-yellow-800",
      text: "text-yellow-800",
      border: "border-yellow-800",
    },
    900: {
      bg: "bg-yellow-900",
      text: "text-yellow-900",
      border: "border-yellow-900",
    },
    950: {
      bg: "bg-yellow-950",
      text: "text-yellow-950",
      border: "border-yellow-950",
    },
  },
  lime: {
    50: { bg: "bg-lime-50", text: "text-lime-50", border: "border-lime-50" },
    100: {
      bg: "bg-lime-100",
      text: "text-lime-100",
      border: "border-lime-100",
    },
    200: {
      bg: "bg-lime-200",
      text: "text-lime-200",
      border: "border-lime-200",
    },
    300: {
      bg: "bg-lime-300",
      text: "text-lime-300",
      border: "border-lime-300",
    },
    400: {
      bg: "bg-lime-400",
      text: "text-lime-400",
      border: "border-lime-400",
    },
    500: {
      bg: "bg-lime-500",
      text: "text-lime-500",
      border: "border-lime-500",
    },
    600: {
      bg: "bg-lime-600",
      text: "text-lime-600",
      border: "border-lime-600",
    },
    700: {
      bg: "bg-lime-700",
      text: "text-lime-700",
      border: "border-lime-700",
    },
    800: {
      bg: "bg-lime-800",
      text: "text-lime-800",
      border: "border-lime-800",
    },
    900: {
      bg: "bg-lime-900",
      text: "text-lime-900",
      border: "border-lime-900",
    },
    950: {
      bg: "bg-lime-950",
      text: "text-lime-950",
      border: "border-lime-950",
    },
  },
  green: {
    50: { bg: "bg-green-50", text: "text-green-50", border: "border-green-50" },
    100: {
      bg: "bg-green-100",
      text: "text-green-100",
      border: "border-green-100",
    },
    200: {
      bg: "bg-green-200",
      text: "text-green-200",
      border: "border-green-200",
    },
    300: {
      bg: "bg-green-300",
      text: "text-green-300",
      border: "border-green-300",
    },
    400: {
      bg: "bg-green-400",
      text: "text-green-400",
      border: "border-green-400",
    },
    500: {
      bg: "bg-green-500",
      text: "text-green-500",
      border: "border-green-500",
    },
    600: {
      bg: "bg-green-600",
      text: "text-green-600",
      border: "border-green-600",
    },
    700: {
      bg: "bg-green-700",
      text: "text-green-700",
      border: "border-green-700",
    },
    800: {
      bg: "bg-green-800",
      text: "text-green-800",
      border: "border-green-800",
    },
    900: {
      bg: "bg-green-900",
      text: "text-green-900",
      border: "border-green-900",
    },
    950: {
      bg: "bg-green-950",
      text: "text-green-950",
      border: "border-green-950",
    },
  },
  emerald: {
    50: {
      bg: "bg-emerald-50",
      text: "text-emerald-50",
      border: "border-emerald-50",
    },
    100: {
      bg: "bg-emerald-100",
      text: "text-emerald-100",
      border: "border-emerald-100",
    },
    200: {
      bg: "bg-emerald-200",
      text: "text-emerald-200",
      border: "border-emerald-200",
    },
    300: {
      bg: "bg-emerald-300",
      text: "text-emerald-300",
      border: "border-emerald-300",
    },
    400: {
      bg: "bg-emerald-400",
      text: "text-emerald-400",
      border: "border-emerald-400",
    },
    500: {
      bg: "bg-emerald-500",
      text: "text-emerald-500",
      border: "border-emerald-500",
    },
    600: {
      bg: "bg-emerald-600",
      text: "text-emerald-600",
      border: "border-emerald-600",
    },
    700: {
      bg: "bg-emerald-700",
      text: "text-emerald-700",
      border: "border-emerald-700",
    },
    800: {
      bg: "bg-emerald-800",
      text: "text-emerald-800",
      border: "border-emerald-800",
    },
    900: {
      bg: "bg-emerald-900",
      text: "text-emerald-900",
      border: "border-emerald-900",
    },
    950: {
      bg: "bg-emerald-950",
      text: "text-emerald-950",
      border: "border-emerald-950",
    },
  },
  teal: {
    50: { bg: "bg-teal-50", text: "text-teal-50", border: "border-teal-50" },
    100: {
      bg: "bg-teal-100",
      text: "text-teal-100",
      border: "border-teal-100",
    },
    200: {
      bg: "bg-teal-200",
      text: "text-teal-200",
      border: "border-teal-200",
    },
    300: {
      bg: "bg-teal-300",
      text: "text-teal-300",
      border: "border-teal-300",
    },
    400: {
      bg: "bg-teal-400",
      text: "text-teal-400",
      border: "border-teal-400",
    },
    500: {
      bg: "bg-teal-500",
      text: "text-teal-500",
      border: "border-teal-500",
    },
    600: {
      bg: "bg-teal-600",
      text: "text-teal-600",
      border: "border-teal-600",
    },
    700: {
      bg: "bg-teal-700",
      text: "text-teal-700",
      border: "border-teal-700",
    },
    800: {
      bg: "bg-teal-800",
      text: "text-teal-800",
      border: "border-teal-800",
    },
    900: {
      bg: "bg-teal-900",
      text: "text-teal-900",
      border: "border-teal-900",
    },
    950: {
      bg: "bg-teal-950",
      text: "text-teal-950",
      border: "border-teal-950",
    },
  },
  cyan: {
    50: { bg: "bg-cyan-50", text: "text-cyan-50", border: "border-cyan-50" },
    100: {
      bg: "bg-cyan-100",
      text: "text-cyan-100",
      border: "border-cyan-100",
    },
    200: {
      bg: "bg-cyan-200",
      text: "text-cyan-200",
      border: "border-cyan-200",
    },
    300: {
      bg: "bg-cyan-300",
      text: "text-cyan-300",
      border: "border-cyan-300",
    },
    400: {
      bg: "bg-cyan-400",
      text: "text-cyan-400",
      border: "border-cyan-400",
    },
    500: {
      bg: "bg-cyan-500",
      text: "text-cyan-500",
      border: "border-cyan-500",
    },
    600: {
      bg: "bg-cyan-600",
      text: "text-cyan-600",
      border: "border-cyan-600",
    },
    700: {
      bg: "bg-cyan-700",
      text: "text-cyan-700",
      border: "border-cyan-700",
    },
    800: {
      bg: "bg-cyan-800",
      text: "text-cyan-800",
      border: "border-cyan-800",
    },
    900: {
      bg: "bg-cyan-900",
      text: "text-cyan-900",
      border: "border-cyan-900",
    },
    950: {
      bg: "bg-cyan-950",
      text: "text-cyan-950",
      border: "border-cyan-950",
    },
  },
  sky: {
    50: { bg: "bg-sky-50", text: "text-sky-50", border: "border-sky-50" },
    100: { bg: "bg-sky-100", text: "text-sky-100", border: "border-sky-100" },
    200: { bg: "bg-sky-200", text: "text-sky-200", border: "border-sky-200" },
    300: { bg: "bg-sky-300", text: "text-sky-300", border: "border-sky-300" },
    400: { bg: "bg-sky-400", text: "text-sky-400", border: "border-sky-400" },
    500: { bg: "bg-sky-500", text: "text-sky-500", border: "border-sky-500" },
    600: { bg: "bg-sky-600", text: "text-sky-600", border: "border-sky-600" },
    700: { bg: "bg-sky-700", text: "text-sky-700", border: "border-sky-700" },
    800: { bg: "bg-sky-800", text: "text-sky-800", border: "border-sky-800" },
    900: { bg: "bg-sky-900", text: "text-sky-900", border: "border-sky-900" },
    950: { bg: "bg-sky-950", text: "text-sky-950", border: "border-sky-950" },
  },
  blue: {
    50: { bg: "bg-blue-50", text: "text-blue-50", border: "border-blue-50" },
    100: {
      bg: "bg-blue-100",
      text: "text-blue-100",
      border: "border-blue-100",
    },
    200: {
      bg: "bg-blue-200",
      text: "text-blue-200",
      border: "border-blue-200",
    },
    300: {
      bg: "bg-blue-300",
      text: "text-blue-300",
      border: "border-blue-300",
    },
    400: {
      bg: "bg-blue-400",
      text: "text-blue-400",
      border: "border-blue-400",
    },
    500: {
      bg: "bg-blue-500",
      text: "text-blue-500",
      border: "border-blue-500",
    },
    600: {
      bg: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-600",
    },
    700: {
      bg: "bg-blue-700",
      text: "text-blue-700",
      border: "border-blue-700",
    },
    800: {
      bg: "bg-blue-800",
      text: "text-blue-800",
      border: "border-blue-800",
    },
    900: {
      bg: "bg-blue-900",
      text: "text-blue-900",
      border: "border-blue-900",
    },
    950: {
      bg: "bg-blue-950",
      text: "text-blue-950",
      border: "border-blue-950",
    },
  },
  indigo: {
    50: {
      bg: "bg-indigo-50",
      text: "text-indigo-50",
      border: "border-indigo-50",
    },
    100: {
      bg: "bg-indigo-100",
      text: "text-indigo-100",
      border: "border-indigo-100",
    },
    200: {
      bg: "bg-indigo-200",
      text: "text-indigo-200",
      border: "border-indigo-200",
    },
    300: {
      bg: "bg-indigo-300",
      text: "text-indigo-300",
      border: "border-indigo-300",
    },
    400: {
      bg: "bg-indigo-400",
      text: "text-indigo-400",
      border: "border-indigo-400",
    },
    500: {
      bg: "bg-indigo-500",
      text: "text-indigo-500",
      border: "border-indigo-500",
    },
    600: {
      bg: "bg-indigo-600",
      text: "text-indigo-600",
      border: "border-indigo-600",
    },
    700: {
      bg: "bg-indigo-700",
      text: "text-indigo-700",
      border: "border-indigo-700",
    },
    800: {
      bg: "bg-indigo-800",
      text: "text-indigo-800",
      border: "border-indigo-800",
    },
    900: {
      bg: "bg-indigo-900",
      text: "text-indigo-900",
      border: "border-indigo-900",
    },
    950: {
      bg: "bg-indigo-950",
      text: "text-indigo-950",
      border: "border-indigo-950",
    },
  },
  violet: {
    50: {
      bg: "bg-violet-50",
      text: "text-violet-50",
      border: "border-violet-50",
    },
    100: {
      bg: "bg-violet-100",
      text: "text-violet-100",
      border: "border-violet-100",
    },
    200: {
      bg: "bg-violet-200",
      text: "text-violet-200",
      border: "border-violet-200",
    },
    300: {
      bg: "bg-violet-300",
      text: "text-violet-300",
      border: "border-violet-300",
    },
    400: {
      bg: "bg-violet-400",
      text: "text-violet-400",
      border: "border-violet-400",
    },
    500: {
      bg: "bg-violet-500",
      text: "text-violet-500",
      border: "border-violet-500",
    },
    600: {
      bg: "bg-violet-600",
      text: "text-violet-600",
      border: "border-violet-600",
    },
    700: {
      bg: "bg-violet-700",
      text: "text-violet-700",
      border: "border-violet-700",
    },
    800: {
      bg: "bg-violet-800",
      text: "text-violet-800",
      border: "border-violet-800",
    },
    900: {
      bg: "bg-violet-900",
      text: "text-violet-900",
      border: "border-violet-900",
    },
    950: {
      bg: "bg-violet-950",
      text: "text-violet-950",
      border: "border-violet-950",
    },
  },
  purple: {
    50: {
      bg: "bg-purple-50",
      text: "text-purple-50",
      border: "border-purple-50",
    },
    100: {
      bg: "bg-purple-100",
      text: "text-purple-100",
      border: "border-purple-100",
    },
    200: {
      bg: "bg-purple-200",
      text: "text-purple-200",
      border: "border-purple-200",
    },
    300: {
      bg: "bg-purple-300",
      text: "text-purple-300",
      border: "border-purple-300",
    },
    400: {
      bg: "bg-purple-400",
      text: "text-purple-400",
      border: "border-purple-400",
    },
    500: {
      bg: "bg-purple-500",
      text: "text-purple-500",
      border: "border-purple-500",
    },
    600: {
      bg: "bg-purple-600",
      text: "text-purple-600",
      border: "border-purple-600",
    },
    700: {
      bg: "bg-purple-700",
      text: "text-purple-700",
      border: "border-purple-700",
    },
    800: {
      bg: "bg-purple-800",
      text: "text-purple-800",
      border: "border-purple-800",
    },
    900: {
      bg: "bg-purple-900",
      text: "text-purple-900",
      border: "border-purple-900",
    },
    950: {
      bg: "bg-purple-950",
      text: "text-purple-950",
      border: "border-purple-950",
    },
  },
  fuchsia: {
    50: {
      bg: "bg-fuchsia-50",
      text: "text-fuchsia-50",
      border: "border-fuchsia-50",
    },
    100: {
      bg: "bg-fuchsia-100",
      text: "text-fuchsia-100",
      border: "border-fuchsia-100",
    },
    200: {
      bg: "bg-fuchsia-200",
      text: "text-fuchsia-200",
      border: "border-fuchsia-200",
    },
    300: {
      bg: "bg-fuchsia-300",
      text: "text-fuchsia-300",
      border: "border-fuchsia-300",
    },
    400: {
      bg: "bg-fuchsia-400",
      text: "text-fuchsia-400",
      border: "border-fuchsia-400",
    },
    500: {
      bg: "bg-fuchsia-500",
      text: "text-fuchsia-500",
      border: "border-fuchsia-500",
    },
    600: {
      bg: "bg-fuchsia-600",
      text: "text-fuchsia-600",
      border: "border-fuchsia-600",
    },
    700: {
      bg: "bg-fuchsia-700",
      text: "text-fuchsia-700",
      border: "border-fuchsia-700",
    },
    800: {
      bg: "bg-fuchsia-800",
      text: "text-fuchsia-800",
      border: "border-fuchsia-800",
    },
    900: {
      bg: "bg-fuchsia-900",
      text: "text-fuchsia-900",
      border: "border-fuchsia-900",
    },
    950: {
      bg: "bg-fuchsia-950",
      text: "text-fuchsia-950",
      border: "border-fuchsia-950",
    },
  },
  pink: {
    50: { bg: "bg-pink-50", text: "text-pink-50", border: "border-pink-50" },
    100: {
      bg: "bg-pink-100",
      text: "text-pink-100",
      border: "border-pink-100",
    },
    200: {
      bg: "bg-pink-200",
      text: "text-pink-200",
      border: "border-pink-200",
    },
    300: {
      bg: "bg-pink-300",
      text: "text-pink-300",
      border: "border-pink-300",
    },
    400: {
      bg: "bg-pink-400",
      text: "text-pink-400",
      border: "border-pink-400",
    },
    500: {
      bg: "bg-pink-500",
      text: "text-pink-500",
      border: "border-pink-500",
    },
    600: {
      bg: "bg-pink-600",
      text: "text-pink-600",
      border: "border-pink-600",
    },
    700: {
      bg: "bg-pink-700",
      text: "text-pink-700",
      border: "border-pink-700",
    },
    800: {
      bg: "bg-pink-800",
      text: "text-pink-800",
      border: "border-pink-800",
    },
    900: {
      bg: "bg-pink-900",
      text: "text-pink-900",
      border: "border-pink-900",
    },
    950: {
      bg: "bg-pink-950",
      text: "text-pink-950",
      border: "border-pink-950",
    },
  },
  rose: {
    50: { bg: "bg-rose-50", text: "text-rose-50", border: "border-rose-50" },
    100: {
      bg: "bg-rose-100",
      text: "text-rose-100",
      border: "border-rose-100",
    },
    200: {
      bg: "bg-rose-200",
      text: "text-rose-200",
      border: "border-rose-200",
    },
    300: {
      bg: "bg-rose-300",
      text: "text-rose-300",
      border: "border-rose-300",
    },
    400: {
      bg: "bg-rose-400",
      text: "text-rose-400",
      border: "border-rose-400",
    },
    500: {
      bg: "bg-rose-500",
      text: "text-rose-500",
      border: "border-rose-500",
    },
    600: {
      bg: "bg-rose-600",
      text: "text-rose-600",
      border: "border-rose-600",
    },
    700: {
      bg: "bg-rose-700",
      text: "text-rose-700",
      border: "border-rose-700",
    },
    800: {
      bg: "bg-rose-800",
      text: "text-rose-800",
      border: "border-rose-800",
    },
    900: {
      bg: "bg-rose-900",
      text: "text-rose-900",
      border: "border-rose-900",
    },
    950: {
      bg: "bg-rose-950",
      text: "text-rose-950",
      border: "border-rose-950",
    },
  },
  slate: {
    50: { bg: "bg-slate-50", text: "text-slate-50", border: "border-slate-50" },
    100: {
      bg: "bg-slate-100",
      text: "text-slate-100",
      border: "border-slate-100",
    },
    200: {
      bg: "bg-slate-200",
      text: "text-slate-200",
      border: "border-slate-200",
    },
    300: {
      bg: "bg-slate-300",
      text: "text-slate-300",
      border: "border-slate-300",
    },
    400: {
      bg: "bg-slate-400",
      text: "text-slate-400",
      border: "border-slate-400",
    },
    500: {
      bg: "bg-slate-500",
      text: "text-slate-500",
      border: "border-slate-500",
    },
    600: {
      bg: "bg-slate-600",
      text: "text-slate-600",
      border: "border-slate-600",
    },
    700: {
      bg: "bg-slate-700",
      text: "text-slate-700",
      border: "border-slate-700",
    },
    800: {
      bg: "bg-slate-800",
      text: "text-slate-800",
      border: "border-slate-800",
    },
    900: {
      bg: "bg-slate-900",
      text: "text-slate-900",
      border: "border-slate-900",
    },
    950: {
      bg: "bg-slate-950",
      text: "text-slate-950",
      border: "border-slate-950",
    },
  },
  gray: {
    50: { bg: "bg-gray-50", text: "text-gray-50", border: "border-gray-50" },
    100: {
      bg: "bg-gray-100",
      text: "text-gray-100",
      border: "border-gray-100",
    },
    200: {
      bg: "bg-gray-200",
      text: "text-gray-200",
      border: "border-gray-200",
    },
    300: {
      bg: "bg-gray-300",
      text: "text-gray-300",
      border: "border-gray-300",
    },
    400: {
      bg: "bg-gray-400",
      text: "text-gray-400",
      border: "border-gray-400",
    },
    500: {
      bg: "bg-gray-500",
      text: "text-gray-500",
      border: "border-gray-500",
    },
    600: {
      bg: "bg-gray-600",
      text: "text-gray-600",
      border: "border-gray-600",
    },
    700: {
      bg: "bg-gray-700",
      text: "text-gray-700",
      border: "border-gray-700",
    },
    800: {
      bg: "bg-gray-800",
      text: "text-gray-800",
      border: "border-gray-800",
    },
    900: {
      bg: "bg-gray-900",
      text: "text-gray-900",
      border: "border-gray-900",
    },
    950: {
      bg: "bg-gray-950",
      text: "text-gray-950",
      border: "border-gray-950",
    },
  },
  zinc: {
    50: { bg: "bg-zinc-50", text: "text-zinc-50", border: "border-zinc-50" },
    100: {
      bg: "bg-zinc-100",
      text: "text-zinc-100",
      border: "border-zinc-100",
    },
    200: {
      bg: "bg-zinc-200",
      text: "text-zinc-200",
      border: "border-zinc-200",
    },
    300: {
      bg: "bg-zinc-300",
      text: "text-zinc-300",
      border: "border-zinc-300",
    },
    400: {
      bg: "bg-zinc-400",
      text: "text-zinc-400",
      border: "border-zinc-400",
    },
    500: {
      bg: "bg-zinc-500",
      text: "text-zinc-500",
      border: "border-zinc-500",
    },
    600: {
      bg: "bg-zinc-600",
      text: "text-zinc-600",
      border: "border-zinc-600",
    },
    700: {
      bg: "bg-zinc-700",
      text: "text-zinc-700",
      border: "border-zinc-700",
    },
    800: {
      bg: "bg-zinc-800",
      text: "text-zinc-800",
      border: "border-zinc-800",
    },
    900: {
      bg: "bg-zinc-900",
      text: "text-zinc-900",
      border: "border-zinc-900",
    },
    950: {
      bg: "bg-zinc-950",
      text: "text-zinc-950",
      border: "border-zinc-950",
    },
  },
  neutral: {
    50: {
      bg: "bg-neutral-50",
      text: "text-neutral-50",
      border: "border-neutral-50",
    },
    100: {
      bg: "bg-neutral-100",
      text: "text-neutral-100",
      border: "border-neutral-100",
    },
    200: {
      bg: "bg-neutral-200",
      text: "text-neutral-200",
      border: "border-neutral-200",
    },
    300: {
      bg: "bg-neutral-300",
      text: "text-neutral-300",
      border: "border-neutral-300",
    },
    400: {
      bg: "bg-neutral-400",
      text: "text-neutral-400",
      border: "border-neutral-400",
    },
    500: {
      bg: "bg-neutral-500",
      text: "text-neutral-500",
      border: "border-neutral-500",
    },
    600: {
      bg: "bg-neutral-600",
      text: "text-neutral-600",
      border: "border-neutral-600",
    },
    700: {
      bg: "bg-neutral-700",
      text: "text-neutral-700",
      border: "border-neutral-700",
    },
    800: {
      bg: "bg-neutral-800",
      text: "text-neutral-800",
      border: "border-neutral-800",
    },
    900: {
      bg: "bg-neutral-900",
      text: "text-neutral-900",
      border: "border-neutral-900",
    },
    950: {
      bg: "bg-neutral-950",
      text: "text-neutral-950",
      border: "border-neutral-950",
    },
  },
  stone: {
    50: { bg: "bg-stone-50", text: "text-stone-50", border: "border-stone-50" },
    100: {
      bg: "bg-stone-100",
      text: "text-stone-100",
      border: "border-stone-100",
    },
    200: {
      bg: "bg-stone-200",
      text: "text-stone-200",
      border: "border-stone-200",
    },
    300: {
      bg: "bg-stone-300",
      text: "text-stone-300",
      border: "border-stone-300",
    },
    400: {
      bg: "bg-stone-400",
      text: "text-stone-400",
      border: "border-stone-400",
    },
    500: {
      bg: "bg-stone-500",
      text: "text-stone-500",
      border: "border-stone-500",
    },
    600: {
      bg: "bg-stone-600",
      text: "text-stone-600",
      border: "border-stone-600",
    },
    700: {
      bg: "bg-stone-700",
      text: "text-stone-700",
      border: "border-stone-700",
    },
    800: {
      bg: "bg-stone-800",
      text: "text-stone-800",
      border: "border-stone-800",
    },
    900: {
      bg: "bg-stone-900",
      text: "text-stone-900",
      border: "border-stone-900",
    },
    950: {
      bg: "bg-stone-950",
      text: "text-stone-950",
      border: "border-stone-950",
    },
  },
  taupe: {
    50: { bg: "bg-taupe-50", text: "text-taupe-50", border: "border-taupe-50" },
    100: {
      bg: "bg-taupe-100",
      text: "text-taupe-100",
      border: "border-taupe-100",
    },
    200: {
      bg: "bg-taupe-200",
      text: "text-taupe-200",
      border: "border-taupe-200",
    },
    300: {
      bg: "bg-taupe-300",
      text: "text-taupe-300",
      border: "border-taupe-300",
    },
    400: {
      bg: "bg-taupe-400",
      text: "text-taupe-400",
      border: "border-taupe-400",
    },
    500: {
      bg: "bg-taupe-500",
      text: "text-taupe-500",
      border: "border-taupe-500",
    },
    600: {
      bg: "bg-taupe-600",
      text: "text-taupe-600",
      border: "border-taupe-600",
    },
    700: {
      bg: "bg-taupe-700",
      text: "text-taupe-700",
      border: "border-taupe-700",
    },
    800: {
      bg: "bg-taupe-800",
      text: "text-taupe-800",
      border: "border-taupe-800",
    },
    900: {
      bg: "bg-taupe-900",
      text: "text-taupe-900",
      border: "border-taupe-900",
    },
    950: {
      bg: "bg-taupe-950",
      text: "text-taupe-950",
      border: "border-taupe-950",
    },
  },
  mauve: {
    50: { bg: "bg-mauve-50", text: "text-mauve-50", border: "border-mauve-50" },
    100: {
      bg: "bg-mauve-100",
      text: "text-mauve-100",
      border: "border-mauve-100",
    },
    200: {
      bg: "bg-mauve-200",
      text: "text-mauve-200",
      border: "border-mauve-200",
    },
    300: {
      bg: "bg-mauve-300",
      text: "text-mauve-300",
      border: "border-mauve-300",
    },
    400: {
      bg: "bg-mauve-400",
      text: "text-mauve-400",
      border: "border-mauve-400",
    },
    500: {
      bg: "bg-mauve-500",
      text: "text-mauve-500",
      border: "border-mauve-500",
    },
    600: {
      bg: "bg-mauve-600",
      text: "text-mauve-600",
      border: "border-mauve-600",
    },
    700: {
      bg: "bg-mauve-700",
      text: "text-mauve-700",
      border: "border-mauve-700",
    },
    800: {
      bg: "bg-mauve-800",
      text: "text-mauve-800",
      border: "border-mauve-800",
    },
    900: {
      bg: "bg-mauve-900",
      text: "text-mauve-900",
      border: "border-mauve-900",
    },
    950: {
      bg: "bg-mauve-950",
      text: "text-mauve-950",
      border: "border-mauve-950",
    },
  },
  mist: {
    50: { bg: "bg-mist-50", text: "text-mist-50", border: "border-mist-50" },
    100: {
      bg: "bg-mist-100",
      text: "text-mist-100",
      border: "border-mist-100",
    },
    200: {
      bg: "bg-mist-200",
      text: "text-mist-200",
      border: "border-mist-200",
    },
    300: {
      bg: "bg-mist-300",
      text: "text-mist-300",
      border: "border-mist-300",
    },
    400: {
      bg: "bg-mist-400",
      text: "text-mist-400",
      border: "border-mist-400",
    },
    500: {
      bg: "bg-mist-500",
      text: "text-mist-500",
      border: "border-mist-500",
    },
    600: {
      bg: "bg-mist-600",
      text: "text-mist-600",
      border: "border-mist-600",
    },
    700: {
      bg: "bg-mist-700",
      text: "text-mist-700",
      border: "border-mist-700",
    },
    800: {
      bg: "bg-mist-800",
      text: "text-mist-800",
      border: "border-mist-800",
    },
    900: {
      bg: "bg-mist-900",
      text: "text-mist-900",
      border: "border-mist-900",
    },
    950: {
      bg: "bg-mist-950",
      text: "text-mist-950",
      border: "border-mist-950",
    },
  },
  olive: {
    50: { bg: "bg-olive-50", text: "text-olive-50", border: "border-olive-50" },
    100: {
      bg: "bg-olive-100",
      text: "text-olive-100",
      border: "border-olive-100",
    },
    200: {
      bg: "bg-olive-200",
      text: "text-olive-200",
      border: "border-olive-200",
    },
    300: {
      bg: "bg-olive-300",
      text: "text-olive-300",
      border: "border-olive-300",
    },
    400: {
      bg: "bg-olive-400",
      text: "text-olive-400",
      border: "border-olive-400",
    },
    500: {
      bg: "bg-olive-500",
      text: "text-olive-500",
      border: "border-olive-500",
    },
    600: {
      bg: "bg-olive-600",
      text: "text-olive-600",
      border: "border-olive-600",
    },
    700: {
      bg: "bg-olive-700",
      text: "text-olive-700",
      border: "border-olive-700",
    },
    800: {
      bg: "bg-olive-800",
      text: "text-olive-800",
      border: "border-olive-800",
    },
    900: {
      bg: "bg-olive-900",
      text: "text-olive-900",
      border: "border-olive-900",
    },
    950: {
      bg: "bg-olive-950",
      text: "text-olive-950",
      border: "border-olive-950",
    },
  },
};
