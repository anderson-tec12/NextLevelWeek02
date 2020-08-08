import React from "react";
import api from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

interface TeacherItemProps {
  teacher: {
    id: number;
    subject: string;
    cost: number;
    user_id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = (id: number) => {
    api.post("connections", {
      user_id: id,
    });
  };
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={() => createNewConnection(teacher.id)}
          target="_blank"
          href={` https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp icone" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
