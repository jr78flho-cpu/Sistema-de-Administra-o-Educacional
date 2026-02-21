export class RuleEngine {
  static validate(field, value, context) {
    const rules = context.rules[field] || [];
    const errors = [];

    for (const rule of rules) {
      switch (rule.type) {
        case "required":
          if (!value || value.trim() === "") {
            errors.push({ type: "required" });
          }
          break;

        case "email":
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!pattern.test(value)) {
            errors.push({ type: "invalid_format" });
          }
          break;

        case "min_length":
          if (value.length < rule.value) {
            errors.push({ type: "min_length", expected: rule.value });
          }
          break;
      }
    }

    return errors;
  }
}
