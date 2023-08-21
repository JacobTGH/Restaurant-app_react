import React from "react";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";

function MenuApp() {
  return (
    <div>
      {Menu.map((item) => (
        <MenuCard
          key={item.id}
          image={item.image}
          name={item.name}
          category={item.category}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default MenuApp;
