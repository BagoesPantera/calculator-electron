const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 512,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(
    isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
  );
  win.setMenuBarVisibility(false);
  win.setResizable(false);
  
  if (isDev) {
   win.webContents.openDevTools({ mode: "detach" });
  }
}

app.whenReady().then(createWindow);

// quit application when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // recreate the window if it is not already created
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
