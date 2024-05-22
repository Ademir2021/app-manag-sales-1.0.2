import bcrypt from "bcryptjs-react";

export function crypt(user: any) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user, salt);
  return hash
}

export function UsersValFields(user:any) {
  let msg = ""
  if (user.name === "") { msg += "Digite o seu nome completo !\n" };
  if (user.username === "") { msg += "Digite um email válido !\n" };
  if (user.password === "") { msg += "Digite sua senha !\n" };
  if (user.psw_repeat !== user.password) { msg += "Senha digitada está errada !\n" };
  if (msg !== "") {
    alert(msg)
    return false;
  };
  return true;
};

export function PersonsValFields(person: any) {
  let msg = ''
  if (person.name_pers === "") { msg += "Digite seu nome completo !\n" };
  if (person.cpf_pers === "") { msg += "Digite seu CPF !\n" };
  if (person.phone_pers === "") { msg += "Digite um  telefone !\n" };
  if (person.address_pers === "") { msg += "Digite seu endereço !\n" };
  if (person.fk_name_filial === 0) { msg += "Informe o num loja !\n" };
  if (msg !== '') {
      alert(msg)
      return false;
  };
  return true;
};
