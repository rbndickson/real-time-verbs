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
      "in"
    ]
  }
};
