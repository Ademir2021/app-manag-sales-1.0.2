export function PersonsValFields(person: any) {
    const info = "Digite o: "
    let msg = ''
    if (person.name_pers === "") { msg += info + "Nome completo\n" };
    if (person.cpf_pers === "") { msg += info + "CPF\n" };
    if (person.phone_pers === "") { msg += info + "Telefone\n" };
    if (person.address_pers === "") { msg += info + "Endereço\n" };
    if (person.num_address === "") { msg += info + "Número do Endereço\n" };
    if (person.fk_name_filial === 0) { msg += info + "Informe o num loja\n" };
    if (msg !== '') {
        alert(msg)
        return false;
    };
    return true;
  };