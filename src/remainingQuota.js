/**
 * Megabytes left in the subscriber's monthly data package.
 */
function remainingQuota(totalMb, usedMb) {
  return totalMb - usedMb;
}

module.exports = { remainingQuota };
