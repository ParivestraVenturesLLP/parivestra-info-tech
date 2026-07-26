import puppeteer from "puppeteer";
const OUT = "C:/Users/DELL/AppData/Local/Temp/claude/c--Users-DELL-parivestra-info-tech/adac9c8f-43fe-4ba7-a8c0-3b3239704b86/scratchpad/shots";
const browser = await puppeteer.launch();
const page = await browser.newPage();

for (const [name, path] of [
  ["new-comparison", "/blog/perplexity-vs-chatgpt-ai-search-2026"],
  ["new-research", "/research"],
]) {
  await page.setViewport({ width: 1200, height: 1000 });
  await page.goto("http://localhost:4173" + path, { waitUntil: "domcontentloaded", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 3000));
  await page.screenshot({ path: `${OUT}/${name}.png`, clip: { x: 0, y: 0, width: 1200, height: 1000 } });
}
await browser.close();
console.log("done");
