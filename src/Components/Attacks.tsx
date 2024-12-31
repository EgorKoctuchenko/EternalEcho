import React, { useEffect, useRef, useState } from "react";
import "../Style/App.css";

interface PlayerAttackProps {
  setChoseMove: React.Dispatch<React.SetStateAction<string>>;
  setInterac: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainComp: React.FC<PlayerAttackProps> = ({
  setChoseMove,
  setInterac,
}) => {
  //SuperBar
  const [superBar, setSuperBar] = useState(10);

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
  ///Attacks
  ///
  interface AttackInterface {
    idAt: number;
    nameAt: string;
    typeAt: string;
    descAt: string;
    valueAt: number;
    anotherValAt?: boolean;
    anotherValNumAt?: number;
  }
  const attackObj: AttackInterface[] = [
    {
      idAt: 1,
      nameAt: "Удар рукою",
      typeAt: "None",
      descAt: "Наносить шкоду ворогу у розмірі 10",
      valueAt: 10,
    },
    {
      idAt: 2,
      nameAt: "Фаєрбол",
      typeAt: "Magic",
      descAt: "Наносить магічну шкоду ворогові у розмірі 1352",
      valueAt: 634,
      anotherValAt: true,
      anotherValNumAt: 40,
    },
    {
      idAt: 3,
      nameAt: "Кігті демона",
      typeAt: "Demon",
      descAt: "Наносить 156 шкоди ворогові",
      valueAt: 30,
      anotherValAt: true,
      anotherValNumAt: 15,
    },
    {
      idAt: 4,
      nameAt: "Приголомшення",
      typeAt: "Control",
      descAt: "Ваш супротивник не може атакувати наступний хід",
      valueAt: 50,
    },
    {
      idAt: 5,
      nameAt: "Потужний удар",
      typeAt: "Nox",
      descAt: "Ваш герой наносить 150 шкоди супротивнику тричі",
      valueAt: 50,
      anotherValAt: true,
      anotherValNumAt: 100,
    },
  ];

  //
  return (
    <div className="interfaceOuter">
      <button onClick={() => setChoseMove("Back")} className="BackButton">
        <h3>{"<"}</h3>
        <h3>Повернутись</h3>
      </button>
      <div className="Tooltip">{tooltip.visible && tooltip.text}</div>
      <div className="AttacksMenu">
        <div className="AttacksMenu__Base">
          {attackObj.slice(0, 4).map((item) => (
            <button
              onMouseMove={() => handleMouseMove(item.descAt)}
              onMouseLeave={handleMouseLeave}
              key={item.idAt}
              className="AttacksMenu__Base__at"
            >
              <h3>{`${item.nameAt}`}</h3>
              <img
                className="interfaceUpSide__First__Info__Names__Type"
                src={`/assets/Types/type${item.typeAt}.png`}
              />
              {item.anotherValAt === true && (
                <h4
                  className={`AttacksMenu__Base__at__SecVal ${
                    item.typeAt === "Magic"
                      ? "magic-style"
                      : item.typeAt === "Demon"
                      ? "demon-style"
                      : ""
                  }`}
                >
                  {`${item.anotherValNumAt}`}
                </h4>
              )}
            </button>
          ))}
        </div>
        <div className="AttacksMenu__Super">
          <div className="AttacksMenu__Super__Bar">
            <h3 className="AttacksMenu__Super__Bar__Info">{`${superBar} / 100`}</h3>
            <div className="AttacksMenu__Super__Bar__Outside">
              <div
                style={{ width: superBar + "%" }}
                className="AttacksMenu__Super__Bar__Inside"
              ></div>
            </div>
          </div>
          <button
            onMouseMove={() => handleMouseMove(attackObj[4].descAt)}
            onMouseLeave={handleMouseLeave}
            className={
              superBar < 100
                ? "AttacksMenu__Super__at"
                : "AttacksMenu__Super__at__Active"
            }
          >
            <h3>{`${attackObj[4].nameAt}`}</h3>
            <img
              className={`interfaceUpSide__First__Info__Names__Type ${
                superBar < 100 ? "icon-dark" : ""
              }`}
              src={`/assets/Types/type${attackObj[4].typeAt}.png`}
            />
            <h4 className={`AttacksMenu__Base__at__SecVal super-style`}>
              {`${attackObj[4].anotherValNumAt}`}
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
