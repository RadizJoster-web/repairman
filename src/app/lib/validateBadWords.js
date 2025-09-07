import Filter from "bad-words";
const filter = new Filter();

function validateBadWords(text) {
  //   Clean from bad words
  if (filter.isProfine(input)) {
    return {
      valid: false,
      cleaned: filter.clean(input),
    };
  }

  return {
    valid: true,
    cleaned: text,
  };
}

module.exports = validateBadWords;
