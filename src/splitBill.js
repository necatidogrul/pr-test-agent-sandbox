/**
 * Split a bill into equal shares.
 *
 * Amounts are in minor units (kurus), so every share must be a whole number.
 */
function splitBill(totalKurus, people) {
  if (!Number.isInteger(people) || people < 1) {
    throw new RangeError(`people must be a positive integer, got ${people}`);
  }
  if (!Number.isInteger(totalKurus)) {
    throw new TypeError('totalKurus must be a whole number of minor units');
  }

  const share = Math.floor(totalKurus / people);

  // Flooring every share used to silently drop up to (people - 1) kurus off the
  // bill. Hand the remainder out one kurus at a time so the shares always add
  // back up to the original total.
  const remainder = totalKurus - share * people;
  return Array.from({ length: people }, (_, i) =>
    i < remainder ? share + 1 : share,
  );
}

module.exports = { splitBill };
