import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { maxGuesses } from "./util";

export const appName = document.title;

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{appName}</i> is a IPA-based remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>.<br/><br/>

        This implementation is largely based on <a href="https://github.com/lynn">@chordbug</a>'s <a href="https://github.com/lynn/hello-wordl">hello-wordl</a>.<br/><br/>

        Instead of guessing words based on their English spelling, in <i>{appName}</i> you guess words based on their pronunciation in North American English.
        Pronunciations have been taken from the <a href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict">CMU Pronouncing Dictionary</a> and may not match your exact dialect.
        Certain phonological features like aspiration are not represented here to make it easier; whatever phonemes are available on the keyboard are the ones that this game accepts.
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
