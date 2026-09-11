/**
 * Parse a user-supplied amount string into a number of minor units (kurus).
 *
 * Accepts "12,50" and "12.50" alike, since the UI is used with both locales.
 */
function parseAmount(value) {
  const normalized = String(value).trim().replace(',', '.');
  const parsed = Number.parseFloat(normalized);
  if (!Number.isFinite(parsed)) {
    return null;
  }
  return Math.round(parsed * 100);
}

module.exports = { parseAmount };
