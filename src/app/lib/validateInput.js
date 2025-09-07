function validateInput(input) {
  console.log("Cleaning Input...");

  if (typeof input !== "string") return "";

  // 1. Hilangkan script tags
  let sanitized = input.replace(/<script.*?>.*?<\/script>/gi, "");

  // 2. Encode karakter spesial <, >, &, ", '
  sanitized = sanitized
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");

  // 3. Hilangkan event handler (onerror, onclick, dll.)
  sanitized = sanitized.replace(/\son\w+=".*?"/gi, "");

  // 4. Hilangkan javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, "");

  // 5. Hilangkan data URI yang berbahaya (contoh: data:text/html;base64,...)
  sanitized = sanitized.replace(/data:text\/html.*?base64.*?,/gi, "");

  return sanitized;
}

module.exports = validateInput;
