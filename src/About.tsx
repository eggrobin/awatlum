import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { maxGuesses } from "./util";

export const appName = document.title;

export function About() {
  return (
    <div className="App-about">
      <p>
        {appName}* is an (Old Babylonian) Akkadian remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>.<br/><br/>

        This implementation is largely based on <a href="https://github.com/manishearth">@manishearth</a>'s <a href="https://github.com/manishearth/ipadle">/wɚdəl/</a>,
        in turn largely based on <a href="https://github.com/lynn">@chordbug</a>'s <a href="https://github.com/lynn/hello-wordl">hello-wordl</a>.<br /><br />

        We thank <a href="https://twitter.com/Zaikarion">𒁹𒍣𒊬</a> and <a href="https://twitter.com/ManishEarth">𒎙𒎙</a> for their advice.
        <hr/>
        * A random spelling is chosen when the page is reloaded; this is inspired by
        <a href="https://github.com/Manishearth/ipadle/commit/5a66e111b7fa3ff4912bac5c7e329f9021c1f8c9">a similar feature in /wɚdəl/, alias [wɚdl̩]</a>.
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
          { clue: Clue.Correct, letter: "𒀀" },
          { clue: Clue.Elsewhere, letter: "𒉡" },
          { clue: Clue.Absent, letter: "𒌝" },
          { clue: Clue.Absent, letter: "𒈠" },
        ]}
      />
      <p>
        <b>𒌝</b> and <b>𒈠</b> aren't in the target word at all.
      </p>
      <p>
        <b className="green-bg">𒀀</b> is correct! The first sign is{" "}
        <b className="green-bg">𒀀</b>
        .<br />
        <strong>(There may still be a second 𒀀 in the word.)</strong>
      </p>
      <p>
        <b className="yellow-bg">𒉡</b> occurs <em>elsewhere</em> in the target
        word.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b>𒉡</b> in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "𒀀" },
          { clue: Clue.Absent, letter: "𒄷" },
          { clue: Clue.Correct, letter: "𒋗" },
          { clue: Clue.Correct, letter: "𒉡" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "𒀀" },
          { clue: Clue.Correct, letter: "𒁉" },
          { clue: Clue.Correct, letter: "𒋗" },
          { clue: Clue.Correct, letter: "𒉡" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        Report issues{" "}
        <a href="https://github.com/eggrobin/awatlum/issues">here</a>, or tweet{" "}
        <a href="https://twitter.com/eggleroy">@eggleroy</a>.
      </p>
      <p>
        This game will be free and ad-free forever,
        <br />
        but you can <a href="https://ko-fi.com/chordbug">buy Lynn a coffee</a> if you'd like.
      </p>
    </div>
  );
}
