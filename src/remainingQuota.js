/**
 * Megabytes left in the subscriber's monthly data package.
 */
function remainingQuota(totalMb, usedMb) {
  // Over-usage used to surface as a negative balance in the app.
  if (usedMb > totalMb) {
    return 0;
  }
  return totalMb - usedMb;
}

module.exports = { remainingQuota };
