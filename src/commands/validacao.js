export function senhaLogin() {
    const json = {
      login: [
        {
          usuario: "us",
          senha: "0",
          id_colaborador: 1,
          autorizacao:[
            {Login:"true"},
            {Dashboard:"true"},
          ]
        },
        {
          usuario: "hel",
          senha: "0",
          id_colaborador: 1,
          autorizacao:[
            {Login:"true"},
            {Dashboard:"true"},
          ]
        }
      ]
    };
    return json;
  }