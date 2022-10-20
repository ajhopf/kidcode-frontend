import React from 'react';
import Default from '../templates/Default';

export default function Registration() {
  const [endereco, setEndereco] = React.useState('');

  function buscaCEP(cep) {
    const cepFormatado = cep // <-- cep não formatadocep.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

    fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`)
      .then(resp => resp.json())
      .then(dados => {
        console.log(dados);

        document.querySelector('#rua').value = dados.logradouro;
        document.querySelector('#numero').focus();
        document.querySelector('#bairro').value = dados.bairro;
        document.querySelector('#cidade').value = dados.localidade;
        document.querySelector('#estado').value = dados.uf;
      });
  }

  React.useEffect(() => {
    if (endereco) {
      buscaCEP(endereco);
    }
  });

  return (
    <Default>
      <main className="main-container">
        <section className="sign-up-container">
          <h2 className="title-sign-up">Faça seu cadastro!</h2>

          <form action="cadastro_de_usuarios" method="post">
            <div>
              <label htmlFor="nome">Nome Completo do Responsável:</label> <br />
              <input
                type="text"
                size="55em"
                id="nome"
                placeholder="Nome Completo"
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                size="35em"
                id="email"
                placeholder="email@exemplo.com.br"
              />
            </div>
            <br />
            <div>
              <label htmlFor="nome">Nome do filho(a):</label>
              <br />
              <input
                type="text"
                size="55em"
                id="nome"
                placeholder="Nome do filho(a)"
              />
            </div>
            <br />
            <div>
              <label htmlFor="endereco">Digite seu CEP:</label>
              <input
                type="text"
                size="10em"
                id="endereco"
                placeholder="00000-000"
                onBlur={event => {
                  setEndereco(event.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="rua">Rua:</label>
              <input type="text" size="45em" id="rua" name="rua" />
            </div>
            <br />
            <div>
              <label htmlFor="numero">Número:</label>
              <input type="text" size="6em" id="numero" name="numero" />
            </div>
            <br />
            <div>
              <label htmlFor="bairro">Bairro:</label>
              <input type="text" size="30em" id="bairro" name="bairro" />
            </div>
            <br />
            <div>
              <label htmlFor="cidade">Cidade</label>
              <input type="text" size="40em" id="cidade" name="cidade" />
            </div>
            <br />
            <div>
              <label htmlFor="estado">Estado</label>
              <input type="text" size="4em" id="estado" name="estado" />
            </div>
            <br />
            <div>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                size="25em"
                id="senha"
                placeholder="Mínimo de 8 caracteres"
              />
            </div>
            <br />
            <div>
              <label htmlFor="senha">Repita sua senha:</label>
              <input
                type="password"
                size="25em"
                id="senha"
                placeholder="Digite novamente a senha"
              />
            </div>
            <br />
          </form>
          <br />
          <button className="send">Enviar</button>
        </section>
      </main>
    </Default>
  );
}
