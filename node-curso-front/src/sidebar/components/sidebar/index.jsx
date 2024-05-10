import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaBook, FaSearch } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { SlPeople } from "react-icons/sl";
import SidebarItem from "../sidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  const menuItems = [
    { Icon: FaHome, Text: "Home", href: "/" },
    { Icon: FaBook, Text: "Livros", href: "/livros" },
    {
      Icon: GiBookshelf,
      Text: "Novo Livro",
      href: "/cadastroLivro",
    },
    { Icon: IoPeopleSharp, Text: "Autor", href: "/autores" },
    { Icon: SlPeople, Text: "Novo Autor", href: "/cadastroAutor" },
    { Icon: FaSearch, Text: "Busca", href: "/busca" },
  ];

  console.log(menuItems);

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        {menuItems.map((item, index) => (
          <a key={index} href={item.href}>
            {" "}
            <SidebarItem Icon={item.Icon} Text={item.Text} />
          </a>
        ))}
      </Content>
    </Container>
  );
};
export default Sidebar;
