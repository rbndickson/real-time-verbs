export const sample = array => array[Math.floor(Math.random() * array.length)];

export const generateToken = tokenLength => {
  var token = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < tokenLength; i++)
    token += chars.charAt(Math.floor(Math.random() * chars.length));

  return token;
};

export const typeToEmoji = type => {
  return { O: "⭕", X: "❌", "?": "❓" }[type];
};
