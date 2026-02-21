export class TrustEngine {
  static calculate(metrics) {
    return (
      metrics.structural * 0.30 +
      metrics.contextual * 0.25 +
      metrics.behavior * 0.20 +
      metrics.completeness * 0.15 +
      metrics.historical * 0.10
    ).toFixed(2);
  }
}
