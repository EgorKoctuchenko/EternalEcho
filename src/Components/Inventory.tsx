import React, { useState } from "react";
import "../Style/App.css";

interface PlayerInventoryProps {
  setChoseMove: React.Dispatch<React.SetStateAction<string>>;
  setInterac: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ItemsList {
  id: number;
  name: string;
  valueEffect: number;
  valueEffect2?: number;
  valueEffect3?: number;
  descEffect: string;
  type: string;
}

const listItems: ItemsList[] = [
  {
    id: 1,
    name: "Зілля здоров'я",
    valueEffect: 15,
    descEffect: "Ваш герой поповнює своє здоров'я на 15",
    type: "Heal",
  },
  {
    id: 2,
    name: "Ніж",
    valueEffect: 15,
    descEffect: "Ваш герой підвищує свою атаку на 15",
    type: "Attack",
  },
  {
    id: 3,
    name: "Зілля гніву",
    valueEffect: 50,
    descEffect:
      "Ваш герой підвищує свою атаку на 50, але його захист знижується на 20",
    valueEffect2: 20,
    type: "Attack",
  },
  {
    id: 4,
    name: "Зілля захисту",
    valueEffect: 15,
    descEffect: "Ваш герой підвищує свій захист на 15",
    type: "Shield",
  },
  {
    id: 5,
    name: "Зняття ефекту",
    valueEffect: 0,
    descEffect: "Ваш герой знімає усі негативні ефекти",
    type: "Immunity",
  },
];

const Inventory: React.FC<PlayerInventoryProps> = ({
  setChoseMove,
  setInterac,
}) => {
  //InventoryItems
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  //MouseLogic
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    text: string;
  }>({
    visible: false,
    text: "",
  });

  const handleMouseMove = (text: string) => {
    setTooltip({
      visible: true,
      text,
    });
  };
  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: "" });
  };
  ///

  return (
    <div className="interfaceOuter">
      <button onClick={() => setChoseMove("Back")} className="BackButton">
        <h3>{"<"}</h3>
        <h3>Повернутись</h3>
      </button>
      <div className="Tooltip">{tooltip.visible && tooltip.text}</div>
      <div className="InventoryList">
        <button
          style={{
            opacity: currentPage > 0 ? 1 : 0,
          }}
          className="InventoryList__Button"
          onClick={() => {
            setCurrentPage(currentPage - 1), setInterac(true);
          }}
        >
          {"<"}
        </button>
        <div className="InventoryList__Items">
          {listItems
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((item) => (
              <div key={item.id} className="InventoryList__Items__Item">
                <p
                  onMouseMove={(e) => handleMouseMove(item.descEffect)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                </p>
              </div>
            ))}
        </div>
        <button
          style={{
            opacity:
              (currentPage + 1) * itemsPerPage < listItems.length ? 1 : 0,
          }}
          className="InventoryList__Button"
          onClick={() => {
            setCurrentPage(currentPage + 1), setInterac(true);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Inventory;
