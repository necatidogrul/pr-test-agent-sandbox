/**
 * Normalise a Turkish mobile number typed by a subscriber into a bare MSISDN.
 *
 * Numbers reach us from the web form, the IVR and the dealer portal in whatever
 * shape the person typed them. The canonical form is ten digits beginning with
 * 5 — no country code, no leading zero.
 */
const MOBILE = /^5\d{9}$/;

function normalizeMsisdn(input) {
  if (input === null || input === undefined) {
    throw new TypeError('msisdn is required');
  }

  let digits = String(input).replace(/\D/g, '');

  // Stripping non-digits alone left "+90..." and "0..." as 12- and 11-digit
  // strings, so the same subscriber matched three different keys depending on
  // which channel they used.
  if (digits.startsWith('90') && digits.length === 12) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0') && digits.length === 11) {
    digits = digits.slice(1);
  }

  // Landlines and truncated entries used to flow straight through to billing.
  if (!MOBILE.test(digits)) {
    throw new RangeError(`not a Turkish mobile number: ${input}`);
  }

  return digits;
}

module.exports = { normalizeMsisdn };
