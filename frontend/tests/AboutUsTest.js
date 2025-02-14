import { Builder, By, until } from "selenium-webdriver";

// I prompted ChatGPT to ask ""How do I initialize Selenium WebDriver in JavaScript?"

(async function testAboutUsDropdown() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:5173"); 

    // I prompted ChatGPT to ask ""How do I write a Selenium test in JavaScript to click a dropdown and navigate to another page?

    let dropdownButton = await driver.wait(
      until.elementLocated(By.className("dropbtn")), // find drop down by class name
      5000
    );
    await dropdownButton.click();

    let aboutUsLink = await driver.wait(
      until.elementLocated(By.className("about-us")), // class name inside drop down menu
      5000
    );
    await aboutUsLink.click();

    await driver.wait(
      until.elementLocated(By.className("about-us-container")),
      5000
    );

    let aboutUsTitle = await driver.findElement(By.className("about-us-title")); // check that it matches class name
    let titleText = await aboutUsTitle.getText();
    console.assert(titleText === "About ECGScan", "Title does not match"); // title does not match

    console.log("Dropdown navigation test passed successfully!");

  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
