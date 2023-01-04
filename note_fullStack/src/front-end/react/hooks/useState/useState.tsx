import { useState, useEffect } from "react";

export const State = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Usando useState e validando dados</h1>
      <p>algo que: {value}</p>
      <label for="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="seu email"
        maxLength={21}
        minLength={2}
        onChange={(event) => setValue(event.target.value)}
      />
      <label for="nome">Nome</label>
      <input id="nome" type={"name"} placeholder="seu nome" />
      <input type="submit" value="enviar" />
    </div>
  );
};
