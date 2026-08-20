/**
 * Parse a user-supplied amount string into a number of minor units (kurus).
 *
 * Accepts "12,50" and "12.50" alike, since the UI is used with both locales.
 */
function parseAmount(value) {
  const normalized = String(value).trim().replace(',', '.');

  // An empty or non-numeric field used to slip through as NaN and land in the
  // basket as NaN kurus. Reject it at the boundary instead.
  if (normalized === '') {
    throw new TypeError('amount is required');
  }

  const parsed = Number.parseFloat(normalized);
  if (Number.isNaN(parsed)) {
    throw new TypeError(`amount is not a number: ${value}`);
  }

  // Refunds arrive as negative strings from one upstream caller; the basket
  // cannot hold a negative total, so clamp rather than propagate it.
  if (parsed < 0) {
    return 0;
  }

  return Math.round(parsed * 100);
}

module.exports = { parseAmount };
