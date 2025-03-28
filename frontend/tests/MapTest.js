import { Builder, By, until } from "selenium-webdriver";

(async function testMapButton() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:5173");

    // Wait for the disclaimer popup to appear
    let disclaimerPopup = await driver.wait(
      until.elementLocated(By.css(".MuiDialog-root")),
      10000 
    );

    // Check if the disclaimer checkbox is present and click it
    let disclaimerCheckbox = await driver.findElement(By.css('input[type="checkbox"]'));
    await disclaimerCheckbox.click();

    // Click the proceed button
    let proceedButton = await driver.findElement(By.xpath("//button[contains(text(), 'Proceed')]"));
    await proceedButton.click();

    // Wait for the dropdown button to appear in the top right
    let dropdownButton = await driver.wait(
      until.elementLocated(By.css(".MuiIconButton-root")),
      10000 
    );
    await dropdownButton.click();

    // Wait for the Map button to appear and click it
    let mapButton = await driver.wait(
      until.elementLocated(By.xpath("//li[contains(text(), 'Map')]")),
      10000 
    );
    await mapButton.click();

    // Wait for 5 seconds
    await driver.sleep(5000);

    console.log("Map button test passed successfully!");

  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();