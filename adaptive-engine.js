export class AdaptiveEngine {
  static updateErrorStats(field, errorType) {
    const key = `error_${field}_${errorType}`;
    const count = parseInt(localStorage.getItem(key) || "0");
    localStorage.setItem(key, count + 1);
  }

  static shouldPreWarn(field, errorType) {
    const key = `error_${field}_${errorType}`;
    const count = parseInt(localStorage.getItem(key) || "0");
    return count > 10; // limiar configurável
  }
}
