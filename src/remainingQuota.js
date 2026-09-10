/**
 * Megabytes left in the subscriber's monthly data package.
 */
function remainingQuota(totalMb, usedMb) {
  const left = totalMb - usedMb;
  return left < 0 ? 0 : left;
}

module.exports = { remainingQuota };
