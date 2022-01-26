import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>wɚdəl</i> is a remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>, which
        I think is based on the TV show <i>Lingo</i>.

        This implementation is largely based on <a href="https://github.com/lynn">@chordbug</a>'s <a href="https://github.com/lynn/hello-wordl">hello-wordl</a>.
      </p>
      <p>
        You get {maxGuesses} tries to guess a target word.
        <br />
        After each guess, you get Mastermind-style feedback.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "p" },
          { clue: Clue.Elsewhere, letter: "ɪ" },
          { clue: Clue.Absent, letter: "ŋ" },
          { clue: Clue.Absent, letter: "z" },
        ]}
      />
      <p>
        <b>ŋ</b> and <b>z</b> aren't in the target word at all.
      </p>
      <p>
        <b className="green-bg">p</b> is correct! The first letter is{" "}
        <b className="green-bg">p</b>
        .<br />
        <strong>(There may still be a second p in the word.)</strong>
      </p>
      <p>
        <b className="yellow-bg">ɪ</b> occurs <em>elsewhere</em> in the target
        word.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b>ɪ</b> in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "p" },
          { clue: Clue.Correct, letter: "e" },
          { clue: Clue.Correct, letter: "ɪ" },
          { clue: Clue.Absent, letter: "n" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "p" },
          { clue: Clue.Correct, letter: "e" },
          { clue: Clue.Correct, letter: "ɪ" },
          { clue: Clue.Correct, letter: "l" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        Report issues{" "}
        <a href="https://github.com/manishearth/ipadle/issues">here</a>, or tweet{" "}
        <a href="https://twitter.com/Manishearth">@Manishearth</a>.
      </p>
      <p>
        This game will be free and ad-free forever,
        <br />
        but you can <a href="https://ko-fi.com/chordbug">buy Lynn a coffee</a> if you'd like.
      </p>
    </div>
  );
}
