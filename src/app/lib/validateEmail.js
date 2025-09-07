async function validateEmail(email, options = {}) {
  console.log("Validating Email: " + email);

  // Default options
  const config = {
    minLength: 5,
    maxLength: 254,
    disposableDomains: ["tempmail.com", "10minutemail.com", "mailinator.com"],
    rateLimit: { limit: 5, windowMs: 60_000 },
    requestLog: new Map(),
    ...options,
  };

  let cleanEmail = email.trim();

  // 1. Validasi panjang email
  if (
    cleanEmail.length < config.minLength ||
    cleanEmail.length > config.maxLength
  ) {
    return { valid: false, message: "Email length invalid" };
  }

  // 2. Regex format dasar
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { valid: false, message: "Email format invalid" };
  }

  if (cleanEmail.endsWith(".")) {
    return { valid: false, message: "Email cannot end with a period" };
  }

  // 3. Pisahkan username & domain
  const [username, domain] = cleanEmail.split("@");

  // 4. Tolak Internationalized Domain Name (IDN)
  if (/[^a-zA-Z0-9.-]/.test(domain)) {
    return { valid: false, message: "Internationalized domains not supported" };
  }

  // 5. Cek disposable email
  if (config.disposableDomains.includes(domain.toLowerCase())) {
    return { valid: false, message: "Disposable email not allowed" };
  }

  // 6. Cegah email header injection
  if (/[\r\n]/.test(cleanEmail)) {
    return { valid: false, message: "Suspicious characters detected" };
  }

  // 7. Normalisasi lowercase
  cleanEmail = cleanEmail.toLowerCase();

  // 8. Rate limiting
  if (options.ip) {
    const now = Date.now();
    const windowStart = now - config.rateLimit.windowMs;

    if (!config.requestLog.has(options.ip)) {
      config.requestLog.set(options.ip, []);
    }

    const requests = config.requestLog
      .get(options.ip)
      .filter((t) => t > windowStart);

    if (requests.length >= config.rateLimit.limit) {
      return { valid: false, message: "Rate limit exceeded" };
    }

    requests.push(now);
    config.requestLog.set(options.ip, requests);
  }

  // 9. Cek domain valid (MX record)
  if (typeof require !== "undefined") {
    const dns = require("dns").promises;
    try {
      const mxRecords = await dns.resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        return { valid: false, message: "Domain has no MX records" };
      }
    } catch (err) {
      return { valid: false, message: "Invalid domain" };
    }
  }

  return { valid: true, email: cleanEmail };
}

module.exports = validateEmail;
