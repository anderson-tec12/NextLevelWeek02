import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";
const TeachList = () => {
  return (
    <div id="page-teacher-list" className="Container">
      <PageHeader title="Estes são os proffys disponiveis">
        <form id="search-teacher">
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
          />

          <Select
            name="week_day"
            label="Dia da semana"
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

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeachList;
