import fs from "fs";

const FILE_PATH = "./server-data.json";
let data;
try {
  data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
} catch {
  data = { menus: [] };
}

export function getServerData() {
  return data;
}
export function setServerData(_data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(_data), console.log);
}
