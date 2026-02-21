export class Assistant {
  static knowledgeBase = {
    mother_name: {
      required: "O nome da mãe é obrigatório para validação jurídica e desambiguação.",
      min_length: "Informe o nome completo, sem abreviações."
    },
    email: {
      invalid_format: "Formato correto: nome@dominio.com."
    }
  };

  static respond(field, errors) {
    if (!errors.length) return "Campo válido.";

    return errors.map(error => {
      const message = this.knowledgeBase[field]?.[error.type];
      return message || "Verifique o preenchimento.";
    }).join("\n");
  }
}
