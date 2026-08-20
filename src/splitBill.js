/**
 * Split a bill into equal shares.
 *
 * Amounts are in minor units (kurus), so every share must be a whole number.
 */
function splitBill(totalKurus, people) {
  const share = Math.floor(totalKurus / people);
  return Array(people).fill(share);
}

module.exports = { splitBill };
