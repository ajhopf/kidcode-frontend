import React from "react";
import Default from "../templates/Default";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { FormLabel } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import "../../styles/cadastro.css";

export default function Registration() {
  const [endereco, setEndereco] = React.useState("");

  function buscaCEP(cep) {
    const cepFormGroupatado = cep // <-- cep não FormGroupatadocep.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");

    fetch(`https://viacep.com.br/ws/${cepFormGroupatado}/json/`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);

        document.querySelector(".rua").value = dados.logradouro;
        document.querySelector(".numero").focus();
        document.querySelector(".bairro").value = dados.bairro;
        document.querySelector(".cidade").value = dados.localidade;
        document.querySelector(".estado").value = dados.uf;
      });
  }

  React.useEffect(() => {
    if (endereco) {
      buscaCEP(endereco);
    }
  }, [endereco]);

  return (
    <Default>
      <div className="container">
        <main>
          <div className="text-center">
            <h2>Cadastro</h2>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Seu Carrinho:</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Curso</h6>
                    <small className="text-muted">Descrição breve</small>
                  </div>
                  <span className="text-muted">R$1.200,00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Segundo Curso</h6>
                    <small className="text-muted">Descrição breve</small>
                  </div>
                  <span className="text-muted">R$800,00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Terceiro Curso</h6>
                    <small className="text-muted">Descrição breve</small>
                  </div>
                  <span className="text-muted">R$500,00</span>
                </li>

                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Código Promocional</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">−R$50,00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (BRL)</span>
                  <strong>R$2.450,00</strong>
                </li>
              </ul>

              <FormGroup className="carding p-2">
                <div className="input-grouping">
                  <input
                    type="text"
                    className="FormGroup-controling"
                    placeholder="Código Promocional"
                  />
                  <Button type="submit" className="btn btn-secondary">
                    Resgatar
                  </Button>
                </div>
              </FormGroup>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Endereço de Cobrança</h4>
              <FormGroup
                className="needs-validation was-validated"
                novalidate=""
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <FormLabel htmlFor="firstName" className="FormGroup-label">
                      Nome
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="firstName"
                      placeholder=""
                      value=""
                      required="A"
                    />
                    <div className="invalid-feedback">
                      Nome válido é Requerido.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <FormLabel htmlFor="lastName" className="FormGroup-label">
                      Sobrenome
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="lastName"
                      placeholder=""
                      value=""
                      required="A"
                    />
                    <div className="invalid-feedback">
                      Sobrenome válido é Requerido.
                    </div>
                  </div>

                  <div className="col-12">
                    <FormLabel htmlFor="username" className="FormGroup-label">
                      Usuário
                    </FormLabel>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        className="FormGroup-controling fix-table"
                        controlId="username"
                        placeholder="Usuário"
                        required="A"
                      />
                      <div className="invalid-feedback">
                        Seu nome de usuário é obrigatório.
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <FormLabel htmlFor="email" className="FormGroup-label">
                      E-mail:<span className="text-muted"></span>
                    </FormLabel>
                    <br />
                    <input
                      type="email"
                      className="FormGroup-controling"
                      controlId="email"
                      placeholder="you@example.com"
                      required="A"
                    />
                    <div className="invalid-feedback">
                      Insira um endereço de e-mail válido para atualizações de
                      envio.
                    </div>
                  </div>

                  <div className="col-12">
                    <FormLabel htmlFor="address" className="FormGroup-label">
                      Endereço:
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling rua "
                      controlId="address"
                      placeholder="Ex: Av. Brigadeiro Faria Lima"
                      required="A"
                    />
                    <div className="invalid-feedback">
                      Por favor insira seu endereço.
                    </div>
                  </div>

                  <div className="col-12">
                    <FormLabel htmlFor="address" className="FormGroup-label">
                      Número:
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling numero"
                      controlId="address"
                      placeholder="Ex: nº1008"
                      required="0"
                    />
                    <div className="invalid-feedback">
                      Por favor insira seu endereço.
                    </div>
                  </div>

                  <div className="col-12">
                    <FormLabel htmlFor="address" className="FormGroup-label">
                      Bairro:
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling bairro"
                      controlIdid="address"
                      placeholder="Jardim Paulistano"
                      required="A"
                    />
                    <div className="invalid-feedback">
                      Por favor insira seu endereço.
                    </div>
                  </div>

                  <div className="col-12">
                    <FormLabel htmlFor="address2" className="FormGroup-label">
                      Cidade:<span className="text-muted"></span>
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling cidade"
                      controlId="address2"
                      placeholder="São Paulo"
                    />
                  </div>

                  <div className="col-md-5">
                    <FormLabel htmlFor="country" className="FormGroup-label">
                      País:
                    </FormLabel>
                    <br />
                    <select
                      className="FormGroup-select"
                      controlId="country"
                      required=""
                    >
                      <option value="">Escolha...</option>
                      <option>Brasil</option>
                    </select>
                    <div className="invalid-feedback">
                      Forneça um País válido, por favor.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <FormLabel htmlFor="state" className="FormGroup-label">
                      Estado:<span className="text-muted"></span>
                    </FormLabel>
                    <br />
                    <input
                      className="FormGroup-controling estado"
                      controlId="state"
                      required="A"
                    ></input>
                    <div className="invalid-feedback">
                      Forneça um Estado válido, por favor.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <FormLabel htmlFor="zip" className="FormGroup-label">
                      CEP:
                    </FormLabel>
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="zip"
                      placeholder="01451-913"
                      required=""
                      onBlur={(event) => {
                        setEndereco(event.target.value);
                      }}
                    />
                    <div className="invalid-feedback">
                      Código Postal Requerido.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="FormGroup-check">
                  <input
                    type="checkbox"
                    className="FormGroup-check-input"
                    controlId="same-address"
                  />
                  <FormLabel
                    className="FormGroup-check-label"
                    htmlFor="same-address"
                  >
                    O endereço de entrega é o mesmo que meu endereço de cobrança
                  </FormLabel>
                </div>

                <div className="FormGroup-check">
                  <input
                    type="checkbox"
                    className="FormGroup-check-input"
                    controlId="save-info"
                  />
                  <FormLabel
                    className="FormGroup-check-label"
                    htmlFor="save-info"
                  >
                    Salvar essas InFormGroupações para a próxima vez
                  </FormLabel>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Pagamento</h4>

                <div className="my-3">
                  <div className="FormGroup-check">
                    <input
                      controlId="credit"
                      name="paymentMethod"
                      type="radio"
                      className="FormGroup-check-input"
                      required="0"
                    />
                    <FormLabel
                      className="FormGroup-check-label"
                      htmlFor="credit"
                    >
                      Cartão de Crédito
                    </FormLabel>
                  </div>
                  <div className="FormGroup-check">
                    <input
                      controlId="debit"
                      name="paymentMethod"
                      type="radio"
                      className="FormGroup-check-input"
                      required=""
                    />
                    <FormLabel
                      className="FormGroup-check-label"
                      htmlFor="debit"
                    >
                      Cartão de Débito
                    </FormLabel>
                  </div>
                  <div className="FormGroup-check">
                    <input
                      controlId="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="FormGroup-check-input"
                      required=""
                    />
                    <FormLabel
                      className="FormGroup-check-label"
                      htmlFor="paypal"
                    >
                      PayPal
                    </FormLabel>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <FormLabel htmlFor="cc-name" className="FormGroup-label">
                      Nome no Cartão:
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="cc-name"
                      placeholder="Ex: Bill Gates"
                      required="A"
                    />
                    <br />
                    <small className="text-muted">
                      Nome Completo como aparece no Cartão
                    </small>
                    <div className="invalid-feedback">
                      Nome no Cartão é Requerido
                    </div>
                  </div>

                  <div className="col-md-6">
                    <FormLabel htmlFor="cc-number" className="FormGroup-label">
                      Número do Cartão de Crédito:
                    </FormLabel>
                    <br />
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="cc-number"
                      placeholder="0000 0000 0000 0000"
                      required="0"
                    />
                    <div className="invalid-feedback">
                      Número do Cartão de Crédtio Requerido
                    </div>
                  </div>

                  <div className="col-md-3">
                    <FormLabel
                      htmlFor="cc-expiration"
                      className="FormGroup-label"
                    >
                      Expiração:
                    </FormLabel>
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="cc-expiration"
                      placeholder="Ex:MM/AA"
                      required="0"
                    />
                    <div className="invalid-feedback">
                      Data de Expiriração Requerido
                    </div>
                  </div>

                  <div className="col-md-3">
                    <FormLabel htmlFor="cc-cvv" className="FormGroup-label">
                      CVV:
                    </FormLabel>
                    <input
                      type="text"
                      className="FormGroup-controling"
                      controlId="cc-cvv"
                      placeholder="Ex: 001"
                      required="0"
                    />
                    <div className="invalid-feedback">
                      Código de Segurança Requerido
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <Button
                  className="w-100 btn btn-primary btn-lg btn-checkout"
                  type="submit"
                >
                  Continue para checkout
                </Button>
              </FormGroup>
            </div>
          </div>
        </main>
      </div>
      <br />
    </Default>
  );
}
