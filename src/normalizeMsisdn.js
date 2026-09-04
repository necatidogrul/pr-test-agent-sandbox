/**
 * Normalise a Turkish mobile number typed by a subscriber into a bare MSISDN.
 *
 * Numbers reach us from the web form, the IVR and the dealer portal in whatever
 * shape the person typed them.
 */
function normalizeMsisdn(input) {
  return String(input).replace(/\D/g, '');
}

module.exports = { normalizeMsisdn };
