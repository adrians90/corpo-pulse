import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = 150 - text.length;
  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="feedback-textarea"
        placeholder="bla"
        spellCheck={false}
        maxLength={150}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
