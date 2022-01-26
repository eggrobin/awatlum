import { Clue, clueClass } from "./clue";

interface KeyboardProps {
  letterInfo: Map<string, Clue>;
  onKey: (key: string) => void;
}
const KEYBOARD = [
  "q w e r t y ŋ u i o p".split(" "),
  "a s d f g h j k l".split(" "),
  "Backspace z x c v b n m Enter".split(" "),
];

export const ALL_LETTERS = KEYBOARD.flat().filter(letter => letter != "Backspace" && letter != "Enter");

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
            if (label.length > 1) {
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
