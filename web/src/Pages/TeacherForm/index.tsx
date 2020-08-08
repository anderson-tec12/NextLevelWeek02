import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
const TeachForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [biografia, setBiografia] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "8:00 AM", to: "4:00 PM" },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 1,
        from: "10:00 AM",
        to: "6:00 PM",
      },
    ]);
  };

  const handleCreateClass = () => {
    console.log({
      name,
      avatar,
      whatsapp,
      biografia,
      subject,
      cost,
      schedule: scheduleItems,
    });

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio: biografia,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then((resp) => {
        alert("Cadastro realizado com sucesso");
        history.push("/");
      })
      .catch((e) => {
        alert("Ops algo não está certo");
      });
  };

  const setScheduleItemValue = (
    index: number,
    field: string,
    value: string
  ) => {
    const newArray = scheduleItems.map((schedule, i) => {
      if (i === index) {
        return { ...schedule, [field]: value };
      }

      return schedule;
    });

    setScheduleItems(newArray);
  };

  return (
    <div id="page-teacher-form" className="Container">
      <PageHeader
        title="Que incrível que você quer da aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input
            name="name"
            label="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="avatar"
            label="Avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <Input
            name="whatsapp"
            label="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <Textarea
            name="bio"
            label="Biografia"
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciencias", label: "Ciencias" },
              { value: "Educação fisica", label: "Educação fisica" },
              { value: "Fisica", label: "Fisica" },
              { value: "Geografia", label: "Geografia" },
              { value: "Historia", label: "Historia" },
              { value: "Matematica", label: "Matematica" },
              { value: "Portugues", label: "Portugues" },
              { value: "Quimica", label: "Quimica" },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Input
            name="cost"
            label="Custo da sua hora por aula"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>
            Horairos disponiveis
            <button type="button" onClick={addNewScheduleItem}>
              + novo horario
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => {
            return (
              <div className="schedule-item" key={index}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  onChange={(e) =>
                    setScheduleItemValue(index, "week_day", e.target.value)
                  }
                  value={scheduleItem.week_day}
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-feira" },
                    { value: "2", label: "Terça-feira" },
                    { value: "3", label: "Quarta-feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5", label: "Sexta-feira" },
                    { value: "6", label: "Sabado" },
                  ]}
                />

                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, "from", e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, "to", e.target.value)
                  }
                />
              </div>
            );
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button" onClick={handleCreateClass}>
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeachForm;
