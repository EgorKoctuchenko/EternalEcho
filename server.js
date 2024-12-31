import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Подключение к базе данных
const dbPath = path.resolve(__dirname, "./GameInfos.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных:", err.message);
  } else {
    console.log("Подключение к SQLite успешно установлено");
  }
});

// Настройка CORS
app.use(cors());

// Маршрут для получения всех данных
app.get("/api/persons", (req, res) => {
  const query = "SELECT * FROM InterfacePerson";
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Ошибка выполнения запроса:", err.message);
      res.status(500).json({ error: "Ошибка выполнения запроса" });
    } else {
      res.json(rows);
    }
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
