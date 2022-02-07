import { Clue, clueClass } from "./clue";

import rawKeyboard from "./keyboard.json";

interface KeyboardProps {
  letterInfo: Map<string, Clue>;
  onKey: (key: string) => void;
}

const KEYBOARD = rawKeyboard.map((k) => k.split(" "));
export const ALL_LETTERS = KEYBOARD.flat();

KEYBOARD[KEYBOARD.length - 1].splice(0, 0, "Backspace");
KEYBOARD[KEYBOARD.length - 1].push("Enter");


export function Keyboard(props: KeyboardProps) {


  return (
    <div className="Game-keyboard" aria-hidden="true">
      {KEYBOARD.map((row, i) => (
        <div key={i} className="Game-keyboard-row">
          {row.map((label, j) => {
            let className = "Game-keyboard-button";
            const clue = props.letterInfo.get(label);
            if (clue !== undefined) {
              className += " " + clueClass(clue);
            }
            if (label === "X") {
              className += " Game-keyboard-button-placeholder";
            }
            if (Array.from(label).length > 1) {
              className += " Game-keyboard-button-wide";
            }
            return (
              <div
                tabIndex={-1}
                key={j}
                role="button"
                className={className}
                onClick={() => {
                  props.onKey(label);
                }}
              >
                {label.replace("Backspace", "⌫")}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
