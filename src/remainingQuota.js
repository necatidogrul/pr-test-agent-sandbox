/**
 * Megabytes left in the subscriber's monthly data package.
 */
function remainingQuota(totalMb, usedMb) {
  const left = totalMb - usedMb;
  if (left < 0) return 0;
  return left > totalMb ? totalMb : left;
}

module.exports = { remainingQuota };
