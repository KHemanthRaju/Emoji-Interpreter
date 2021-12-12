import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Smiling",
  "😥": "Sad",
  "❤️": "love",
  "🦊": "Fox",
  "🐱": "cat",
  "🦅": "eagle"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emoji = event.target.value;
    meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "We don't have that in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <p style={{ fontSize: "2rem" }}>{meaning}</p>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
