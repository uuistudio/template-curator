import fs from "node:fs/promises";
import path from "path";
import yaml from "yaml";

async function getMenu(path) {
  const url = new URL(path, import.meta.url);
  let dir = await fs.readdir(url, { withFileTypes: true });
  dir = dir
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  return dir;
}

async function SiteData(datapath) {
  let filepath = path.join(datapath, "site.json");
  let url = new URL(filepath, import.meta.url);
  let data = await fs.readFile(url, "utf-8");
  site = JSON.parse(data);

  filepath = path.join(datapath, "pages/home.yml");
  url = new URL(filepath, import.meta.url);
  data = await fs.readFile(url, "utf-8");
  site.home = yaml.parse(data)

  return site
}

export default SiteData;