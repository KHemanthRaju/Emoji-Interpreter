import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Smiling",
  "😥": "Sad",
  "❤️": "love",
  "🦊": "Fox",
  "🐱": "cat",
  "🦅": "eagle",
  "😔": "sad",
  "🥡": "takeout box",
  "🤖": "Robot",
  "💚": "Green Heart",
  "🕵️": "Detective"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here");

  function emojiInputHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={emojiInputHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
