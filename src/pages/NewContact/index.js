import PageHeader from "../../components/PageHeader";

import Input from "../../components/Input";
import Select from "../../components/Select";

export default function NewContact() {
  return (
    <>
      <PageHeader title="Cria novo contato" />

      <Input type="text"  placeholder="Nome"/>

      <Select>
        <option value='123'>Instagram</option>
        <option value='123'>Twitter</option>
        <option value='123'>Face</option>

      </Select>
    </>
  );
}
