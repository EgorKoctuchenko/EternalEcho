import React, { useState, useEffect } from "react";
import "../Style/App.css";
import attackIcon from "../assets/Icons/Attack.png";
import runIcon from "../assets/Icons/Run.png";
import invIcon from "../assets/Icons/Inventory.png";
import prepareIcon from "../assets/Icons/prepare.png";
import charAttack from "../assets/Icons/CharAtack.png";
import charDef from "../assets/Icons/CharDefense.png";
import charAbil from "../assets/Icons/CharAgil.png";
import charKrit from "../assets/Icons/CharKrit.png";
import HeroPerson from "./Classes";

interface PlayerInterfaceProps {
  persons: HeroPerson[];
  setChoseMove: React.Dispatch<React.SetStateAction<string>>;
  setPersons: React.Dispatch<React.SetStateAction<HeroPerson[]>>;
}

const PlayerInterface: React.FC<PlayerInterfaceProps> = ({
  persons,
  setChoseMove,
  setPersons,
}) => {
  const [greenHP, setGreenHP] = useState<number>(200);
  const [redHP, setRedHP] = useState<number>(0);
  //
  //HP Color
  //
  useEffect(() => {
    const hpRatio = persons[0].getHpPerson() / persons[0].getFullHpPerson();
    setGreenHP(hpRatio * 200);
    setRedHP((1 - hpRatio) * 200);
  }, [persons[0].getHpPerson(), persons[0].getFullHpPerson()]);
  return (
    <div className="interfaceOuter">
      <div className="interfaceUpSide">
        <div className="interfaceUpSide__First">
          <img
            className="interfaceUpSide__First__Avatar"
            src={`/assets/Avatars/${persons[0].getIconPerson()}.png`}
          />
          <div className="interfaceUpSide__First__Info">
            <div className="interfaceUpSide__First__Info__Names">
              <h3>{persons[0].getNamePerson()}</h3>
              <img
                className="interfaceUpSide__First__Info__Names__Type"
                src={`/assets/Types/type${persons[0].getTypePerson()}.png`}
              />
            </div>
            <div className="interfaceUpSide__First__Info__Stats">
              <div className="interfaceUpSide__First__Info__Stats__Current">
                <img
                  className="interfaceUpSide__First__Info__Stats__Current__Img"
                  src={charAttack}
                />
                <h3 className="interfaceUpSide__First__Info__Stats__Current__Stat">
                  {persons[0].getAttackPerson()}
                </h3>
              </div>
              <div className="interfaceUpSide__First__Info__Stats__Current">
                <img
                  className="interfaceUpSide__First__Info__Stats__Current__Img"
                  src={charDef}
                />
                <h3 className="interfaceUpSide__First__Info__Stats__Current__Stat">
                  {persons[0].getDefPerson()}
                </h3>
              </div>
              <div className="interfaceUpSide__First__Info__Stats__Current">
                <img
                  className="interfaceUpSide__First__Info__Stats__Current__Img"
                  src={charAbil}
                />
                <h3 className="interfaceUpSide__First__Info__Stats__Current__Stat">
                  {persons[0].getMoveOutPerson()}%
                </h3>
              </div>
              <div className="interfaceUpSide__First__Info__Stats__Current">
                <img
                  className="interfaceUpSide__First__Info__Stats__Current__Img"
                  src={charKrit}
                />
                <h3 className="interfaceUpSide__First__Info__Stats__Current__Stat">
                  {persons[0].getCritPerson()}%
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="interfaceUpSide__Bars">
          <div className="interfaceUpSide__Bars__Hp">
            <h3 className="interfaceUpSide__Bars__Hp__Current">
              {persons[0].getHpPerson()} / {persons[0].getFullHpPerson()}
            </h3>
            <div className="interfaceUpSide__Bars__Hp__Bar">
              <div
                style={{
                  backgroundColor: `rgb(${redHP}, ${greenHP}, 0)`,
                  width:
                    (persons[0].getHpPerson() / persons[0].getFullHpPerson()) *
                      100 +
                    "%",
                }}
                className="interfaceUpSide__Bars__Hp__Bar__Inner"
              ></div>
            </div>
          </div>
          <div className="interfaceUpSide__Bars__Mana">
            <h2 className="interfaceUpSide__Bars__Mana__Current">
              {persons[0].getManaPerson()} / 100
            </h2>
            <div className="interfaceUpSide__Bars__Mana__Bar">
              <div
                style={{ width: persons[0].getManaPerson() + "%" }}
                className="interfaceUpSide__Bars__Mana__Bar__Inner"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="interfaceDownSide">
        <button
          onClick={() => setChoseMove("Attack")}
          className="interfaceDownSide__Attack"
        >
          <img className="interfaceDownSide__Icon" src={attackIcon} />
          <h3 className="interfaceDownSide__Name">Атакувати</h3>
        </button>
        <button
          onClick={() => setChoseMove("Inventory")}
          className="interfaceDownSide__Inv"
        >
          <img className="interfaceDownSide__Icon" src={invIcon} />
          <h3 className="interfaceDownSide__Name">Інвентар</h3>
        </button>
        <button className="interfaceDownSide__Prepare">
          <img className="interfaceDownSide__Icon" src={prepareIcon} />
          <h3 className="interfaceDownSide__Name">Підготовка</h3>
        </button>
        <button
          onClick={() => {
            const updatedPersons = [...persons];
            updatedPersons[0].setHpPerson(1200);
            setPersons(updatedPersons);
          }}
          className="interfaceDownSide__Run"
        >
          <img className="interfaceDownSide__Icon" src={runIcon} />
          <h3 className="interfaceDownSide__Name">Втекти</h3>
        </button>
      </div>
    </div>
  );
};

export default PlayerInterface;
