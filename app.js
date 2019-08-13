const express = require("express");
const app = express();

app.get("/", function(req, res) {
  const puppeteer = require("puppeteer");
  (async () => {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto("https://duckduckgo.com/", {
      waitUntil: "networkidle2"
    });
    await page.type("#search_form_input_homepage", "Puppeteer");
    await page.click("input[type=submit]");
    await page.waitForSelector(".result__a");

    // Extract the results from the page
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll(".result__a"));
      return anchors.map(anchor => anchor.textContent);
    });
    await browser.close();
    res.send(links.join("\n"));
  })();
});

app.listen(5000, function() {});
