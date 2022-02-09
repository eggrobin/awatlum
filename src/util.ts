import oldbab_dictionary from "./oldbab_dictionary.json";
import neoass_dictionary from "./neoass_dictionary.json";

import oldbab_targetList from "./oldbab_targets.json";
import neoass_targetList from "./neoass_targets.json";

import oldbab_rawKeyboard from "./oldbab_keyboard.json";
import neoass_rawKeyboard from "./neoass_keyboard.json";

export enum Difficulty {
  Normal,
  Hard,
  UltraHard,
}

export const maxGuesses = 12;

export const dialect = (urlParam("dialect") ?? "oldbab").toLowerCase()
export const dictionary = dialect == "neoass"
  ? neoass_dictionary
  : oldbab_dictionary;
export const targets = dialect == "neoass"
  ? neoass_targetList.slice(0, neoass_targetList.indexOf("𒆠𒁉𒈠") + 1) // Words no rarer than this one
  : oldbab_targetList.slice(0, oldbab_targetList.indexOf("𒌑𒁕𒀊𒁀𒀊") + 1);
export const rawKeyboard = dialect == "neoass"
  ? neoass_rawKeyboard
  : oldbab_rawKeyboard;


export const dictionarySet: Set<string> = new Set(dictionary);

function mulberry32(a: number) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function urlParam(name: string): string | null {
  return new URLSearchParams(window.location.search).get(name);
}

export const seed = Number(urlParam("seed"));
const makeRandom = () => (seed ? mulberry32(seed) : () => Math.random());
let random = makeRandom();

export function resetRng(): void {
  random = makeRandom();
}

export function pick<T>(array: Array<T>): T {
  return array[Math.floor(array.length * random())];
}

// https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/
export function speak(
  text: string,
  priority: "polite" | "assertive" = "assertive"
) {
  var el = document.createElement("div");
  var id = "speak-" + Date.now();
  el.setAttribute("id", id);
  el.setAttribute("aria-live", priority || "polite");
  el.classList.add("sr-only");
  document.body.appendChild(el);

  window.setTimeout(function () {
    document.getElementById(id)!.innerHTML = text;
  }, 100);

  window.setTimeout(function () {
    document.body.removeChild(document.getElementById(id)!);
  }, 1000);
}

export function ordinal(n: number): string {
  return n + ([, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th");
}

export const englishNumbers =
  "zero one two three four five six seven eight nine ten eleven".split(" ");
