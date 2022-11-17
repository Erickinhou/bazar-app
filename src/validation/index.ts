export const validateEmail = (value: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.trim())) {
    return { result: value };
  }
  return {
    error: "email inválido",
    result: value,
  };
};

export const validatePhoneNumber = (value: string) => {
  if (/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(value.trim())) {
    return { result: value };
  }
  return {
    error: "Telefone inválido, formato aceito: (xx) xxxxx-xxxx",
    result: value,
  };
};
export const validateCpf = (value: string) => {
  if (/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/.test(value.trim())) {
    return { result: value };
  }
  return {
    error: "CPF inválido, formato aceito: xxx.xxx.xxx-xx",
    result: value,
  };
};
