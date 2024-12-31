import React, { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import "../Style/App.css";
import "./PlayerInterface.tsx";
import PlayerInterface from "./PlayerInterface.tsx";
import SoundClick from "../assets/Sound/ClickAct.mp3";
import InventoryOp from "./Inventory.tsx";
import AttackPl from "./Attacks.tsx";
import HeroPerson from "./Classes";

interface TrackInterface {
  id: string;
  name: string;
}

const trackList: TrackInterface[] = [
  {
    id: "1",
    name: "AnotherFight",
  },
  {
    id: "2",
    name: "MaiFight",
  },
  {
    id: "3",
    name: "NoxFight",
  },
  {
    id: "4",
    name: "LastDance",
  },
  {
    id: "5",
    name: "LOVEYOU",
  },
];

const MainComp: React.FC = () => {
  //GetDataFromBD
  const [persons, setPersons] = useState<HeroPerson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  //Interfaces
  const [choseMove, setChoseMove] = useState<string>("Interface");
  const [interac, setInterac] = useState<boolean>(false);
  //Track
  const [currentTrack, setCurrentTrack] = useState<number>(4);
  const soundRef = useRef<Howl | null>(null);
  const soundRefClick = useRef<Howl | null>(null);
  //Fetch data from DB
  useEffect(() => {
    fetch("http://localhost:5000/api/persons")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при запросе данных с сервера");
        }
        return response.json();
      })
      .then((data) => {
        const initializedPersons = data.map(
          (person: any) =>
            new HeroPerson(
              person.namePerson || "",
              person.atPerson || 0,
              person.defPerson || 0,
              person.moveOutPerson || 0,
              person.critPerson || 0,
              person.iconPerson || "",
              person.fullHpPerson || 0,
              person.hpPerson || 0,
              person.typePerson || "",
              0
            )
        );
        setPersons(initializedPersons);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  //Music setup
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.stop();
    }

    const sound = new Howl({
      src: ["/assets/Music/" + trackList[currentTrack].name + ".mp3"],
      loop: true,
      volume: 0.5,
    });

    sound.play();
    soundRef.current = sound;

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, [currentTrack]);
  //ClickSound setup
  useEffect(() => {
    if (choseMove !== "Interface" || interac === true) {
      if (soundRefClick.current) {
        soundRefClick.current.stop();
      }

      const soundClick = new Howl({
        src: [SoundClick],
        loop: false,
        volume: 0.5,
      });

      soundClick.play();
      soundRefClick.current = soundClick;
      setInterac(false);
      if (choseMove === "Back") {
        setTimeout(() => setChoseMove("Interface"), 0);
      }
    }
  }, [choseMove, interac]);

  if (loading) {
    return <div className="loading">Загрузка...</div>; // Показываем, пока данные загружаются
  }

  return (
    <div className="WrapBack">
      <div className="BackPhoto">
        {choseMove === "Interface" && (
          <PlayerInterface
            setChoseMove={setChoseMove}
            persons={persons}
            setPersons={setPersons}
          />
        )}
        {choseMove === "Inventory" && (
          <InventoryOp setChoseMove={setChoseMove} setInterac={setInterac} />
        )}
        {choseMove === "Attack" && (
          <AttackPl setChoseMove={setChoseMove} setInterac={setInterac} />
        )}
      </div>
    </div>
  );
};

export default MainComp;
