export const exercises = {
  past: {
    instruction: "Make a simple past tense sentence.　(過去形)",
    examples: [
      { question: ["He", "play", "O"], solution: "He played soccer." },
      { question: ["I", "play", "X"], solution: "I didn't play tennis." },
      { question: ["They", "play", "?"], solution: "Did they play baseball?" }
    ],
    omitPronouns: ["it"],
    omitVerbs: [
      "will",
      "would",
      "could",
      "may",
      "should",
      "must",
      "might",
      "going",
      "let_'s",
      "in",
      "ought"
    ]
  },
  presentSimple: {
    instruction: "Make a present simple tense sentence.",
    example: [
      { question: ["I", "play", "O"], solution: "I play soccer" },
      { question: ["He/She/It", "play", "O"], solution: "He plays tennis" },
      {
        question: ["We/They/You", "play", "O"],
        solution: "We/They/You play basketball"
      },
      { question: ["I", "play", "X"], solution: "I don't play ~" },
      {
        question: ["He/She/It", "play", "X"],
        solution: "He/She/It doesn't play ~"
      },
      {
        question: ["He/She/It", "play", "X"],
        solution: "He/She/It doesn't play ~"
      },
      { question: ["You", "play", "?"], solution: "Do you play ~ ?" },
      {
        question: ["He/She/It", "play", "?"],
        solution: "Does he/she/it play ~ ?"
      },
      {
        question: ["They/You", "play", "?"],
        solution: "Do they/you play ~ ?"
      }
    ],
    omitPronouns: [],
    omitVerbs: [
      "will",
      "would",
      "could",
      "may",
      "should",
      "must",
      "might",
      "going",
      "let_'s",
      "in",
      "ought"
    ]
  }
};
