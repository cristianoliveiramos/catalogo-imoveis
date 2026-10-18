import { useState, useEffect } from "react";
import "./FormDescriptionBuild.css";

import FieldsForm from "../FieldsForm";
import SelectBuilds from "../SelectBuilds";
import Button from "../Button";
import { FieldCep } from "../FieldCep/FieldCep";
import InputAdornment from "@mui/material/InputAdornment";

export const FormDescriptionBuild = () => {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [home, setHome] = useState([]);
  const [comercial, setComercial] = useState("");
  const [lightFee, setLightFee] = useState();
  const [waterFee, setWaterFee] = useState();
  const [valueMonthFee, setValueMonthFee] = useState(0);
  const [iptuFee, setIptuFee] = useState(0);
  const [fireFee, setFireFee] = useState(0);
  const [funebonFee, setFunesbonFee] = useState("");
  const [totalYearFee, setTotalYearFee] = useState("");
  const [contract, setContract] = useState("");
  const [observations, setObservations] = useState("");

  // const {register, handleSubmit} = useForm()

  useEffect(() => {
    const sumFeeMonthly = parseInt(lightFee) + parseInt(waterFee);    
    setValueMonthFee(sumFeeMonthly);
  }, [lightFee, waterFee]);

  const checkedCep = () => {
    const cep = zipCode.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.logradouro);
        setCity(data.localidade);
        setState(data.estado);
        setDistrict(data.bairro);
        setState(data.uf);
      })
      .catch((erro) => console.error(erro));
  };

  return (
    <section className="form-fields">
      <form action="">
        <h2>Formulário informativo de imóvel</h2>

        <div className="selects">
          <SelectBuilds name="Tipo do imóvel">
            <option value="">Casa</option>
            <option value="">Apartamento</option>
            <option value="">Sala Comercial</option>
            <option value="">Box</option>
          </SelectBuilds>
          <SelectBuilds name="Visitação">
            <option value="">Agendado</option>
            <option value="">Com o proprietário</option>
            <option value="">Retirado</option>
          </SelectBuilds>
        </div>

        <h3>Endereço: </h3>
        <FieldsForm
          name="Logradouro"
          placeholder="Digite o endereço do imóvel..."
          value={address}
          required
          whenType={(value) => setAddress(value)}
          type="text"
        />
        <FieldsForm
          name="Número"
          placeholder="Digite o número do imóvel..."
          value={number}
          whenType={(value) => setNumber(value)}
          type="text"
        />
        <FieldsForm
          name="Complemento"
          placeholder="Digite o complemento do imóvel..."
          value={complement}
          whenType={(value) => setComplement(value)}
          type="text"
        />
        <FieldCep
          name="CEP"
          placeholder="12345-678"
          value={zipCode}
          required
          whenType={(value) => setZipCode(value)}
          type="text"
          onblur={() => checkedCep(zipCode)}
        />
        <FieldsForm
          name="Bairro"
          placeholder="Digite o bairro do imóvel..."
          value={district}
          required
          whenType={(value) => setDistrict(value)}
          type="text"
        />
        <FieldsForm
          name="Cidade"
          placeholder="Digite a cidade do imóvel..."
          value={city}
          required
          whenType={(value) => setCity(value)}
        />
        <FieldsForm
          name="Estado"
          placeholder="Digite o estado do imóvel..."
          value={state}
          required
          whenType={(value) => setState(value)}
          type="text"
        />

        <h3>Valores:</h3>
        {/* <FieldsForm
          name="Valor do aluguel"
          placeholder="Digite o valor do aluguel..."
          value={rentValue}
          required
          whenType={(value) => setRentValue(value)}
          type="text"                  
          htmlFor="input-with-icon-adornment"
        /> */}
        <FieldsForm
          name="Taxa de luz"
          placeholder="Digite o valor das taxas..."
          value={lightFee}
          required
          whenType={(value) => setLightFee(value)}
          type="number"
          label="R$"
        />
        <FieldsForm
          name="Taxa de agua"
          placeholder="Digite o valor das taxas..."
          value={waterFee}
          required
          whenType={(value) => setWaterFee(value)}
          type="number"
        />
        <label htmlFor="">Total mensal</label>
        {console.log(typeof parseInt(valueMonthFee))}
        <FieldsForm
          name="Valor Total das Taxas mensais"
          id="outlined-read-only-input"
          InputProps={{
            readOnly: true,
          }}
          value={valueMonthFee}
          type="number"
          placeholder="R$00.00"          
        />

        {/* <CurrencyInput decimalSeparator=',' groupSeparator='.' intlConfig={{locale: 'pt-BR', currency: 'BRL'}} name="Valor Total das Taxas mensais" disabled/> */}
        <FieldsForm
          name="Taxa do IPTU"
          placeholder="Digite o valor das taxas..."
          value={iptuFee}
          required
          whenType={(value) => setIptuFee(value)}
          type="text"
        />
        {/* <FieldsForm name="Valor das taxas" placeholder="Digite o valor das taxas..." value={rentFee} required whenType={value => setRentFee(value)} type="text"/> */}

        <FieldsForm
          placeholder="Digite o valor da taxa..."
          value={fireFee}
          required
          whenType={(value) => setFireFee(value)}
          type="text"
          sx={{ m: 1, width: "25ch" }}
          // startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
          label="Seguro anual contra incendio do imovel"
        />
        <FieldsForm
          name="FUNESBON"
          placeholder="Digite o valor das taxas..."
          value={funebonFee}
          required
          whenType={(value) => setFunesbonFee(value)}
          type="text"
        />
        <FieldsForm
          name="Valor das total taxas anuais"
          value={totalYearFee}
          required
          whenType={(value) => setTotalYearFee(value)}
          type="text"
          disabled
          style={{ cursor: "no-drop" }}
        />

        <h3>Duração do contrato:</h3>
        <FieldsForm
          name="Tempo de contrato"
          value={contract}
          whenType={(value) => setContract(value)}
          type="text"
        />

        <h3>Garantia do contrato</h3>
        <FieldsForm
          name="Modalidade"
          value={contract}
          whenType={(value) => setContract(value)}
          type="text"
        />

        <h3>Observações:</h3>
        <FieldsForm
          name="Observação"
          value={observations}
          whenType={(value) => setObservations(value)}
          type="text"
        />

        <Button>Salvar</Button>
      </form>
    </section>
  );
};
