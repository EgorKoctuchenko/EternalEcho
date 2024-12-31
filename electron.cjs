const { app, BrowserWindow, screen, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  let width = 1920;
  let height = 1080;

  // Получаем размер экрана пользователя
  const { width: screenWidth, height: screenHeight } =
    screen.getPrimaryDisplay().workAreaSize;

  // Отримуємо розмір екрана користувача
  if (screenWidth > width || screenHeight > height) {
    width = screenWidth;
    height = screenHeight;
  }
  mainWindow = new BrowserWindow({
    width,
    height,
    icon: path.join(__dirname, "public", "logo.png"),
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });
  mainWindow.setMenuBarVisibility(false);

  //dev
  mainWindow.loadURL("http://localhost:5173");
  //publ
  //const appPath = path.join(__dirname, "dist", "index.html");
  //mainWindow.loadFile(appPath);

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.maximize();
}

app.on("ready", createWindow);

ipcMain.handle("get-media-file", (event, fileName) => {
  const filePath = path.join(__dirname, "static", "media", fileName);
  return fs.promises.readFile(filePath);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// Обробник IPC для закриття програми
ipcMain.on("close-app", () => {
  if (mainWindow) {
    mainWindow.close();
  }
});
