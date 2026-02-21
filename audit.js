export class Audit {
  static log(eventType, entityId) {
    const log = {
      eventType,
      entityId,
      timestamp: new Date().toISOString()
    };

    const logs = JSON.parse(localStorage.getItem("audit_log") || "[]");
    logs.push(log);
    localStorage.setItem("audit_log", JSON.stringify(logs));
  }
}
