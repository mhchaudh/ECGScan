import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function testTakePictureAndCropField() {
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().addArguments("--use-fake-ui-for-media-stream")).build();
    try {
        console.log("Opening the web app...");
        await driver.get("http://localhost:5173");
        await sleep(1000);

        // Handle disclaimer popup
        console.log("Handling disclaimer popup...");
        let disclaimerPopup = await driver.wait(until.elementLocated(By.css(".MuiDialog-root")), 10000);
        let disclaimerCheckbox = await driver.findElement(By.css('input[type="checkbox"]'));
        await disclaimerCheckbox.click();
        let proceedButton = await driver.findElement(By.xpath("//button[contains(text(), 'Proceed')]"));
        await proceedButton.click();
        await sleep(1000);

        console.log("Looking for the Open Camera button...");
        let openCameraButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Open Camera')]")), 5000).catch((error) => {
            console.error("Failed to find the Open Camera button:", error);
            throw new Error("Open Camera button not found");
        });
        console.log("Open Camera button found. Clicking...");
        await openCameraButton.click();
        await sleep(1000);

        await driver.wait(until.elementLocated(By.css("video.camera-view")), 5000).catch((error) => {
            console.error("Camera view not found:", error);
            throw new Error("Camera not opened successfully");
        });
        console.log("Camera opened successfully.");
        await sleep(1000);

        console.log("Looking for Capture button...");
        let captureButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(@class, 'MuiIconButton-root') and .//*[local-name()='svg' and @data-testid='PhotoCameraIcon']]")), 5000).catch((error) => {
            console.error("Failed to find capture button:", error);
            throw new Error("Capture button not found");
        });
        console.log("Capture button found. Clicking...");
        await captureButton.click();
        await sleep(1000);

        console.log("Waiting for navigation to confirmation page...");
        await driver.wait(until.urlContains("/confirm"), 10000).catch((error) => {
            console.error("Navigation to confirmation page failed:", error);
            throw new Error("Navigation to confirmation page failed");
        });
        console.log("Picture captured and navigated to confirmation page.");
        await sleep(1000);

        console.log("Filling out identifier field...");
        let identifierInput = await driver.wait(until.elementLocated(By.xpath("//input[@id=//label[contains(text(), 'Unique Patient Identifier')]/@for]")), 5000).catch((error) => {
            console.error("Failed to find identifier input field:", error);
            throw new Error("Identifier input field not found");
        });
        await identifierInput.sendKeys("TestIdentifier123");
        await sleep(500);

        console.log("Filling out age field...");
        let ageInput = await driver.wait(until.elementLocated(By.xpath("//input[@id=//label[contains(text(), 'Age')]/@for]")), 5000).catch((error) => {
            console.error("Failed to find age input field:", error);
            throw new Error("Age input field not found");
        });
        await ageInput.sendKeys("25");
        await sleep(500);

        console.log("Selecting patient status...");
        let patientStatusDropdown = await driver.findElement(By.xpath("//label[contains(text(), 'Patient Status')]/following-sibling::div"));
        await patientStatusDropdown.click();
        let firstPatientStatusOption = await driver.findElement(By.xpath("//li[contains(text(), 'Pre-treatment')]"));
        await firstPatientStatusOption.click();
        await sleep(500);

        console.log("Selecting location type...");
        let locationTypeInput = await driver.findElement(By.xpath("//label[contains(text(), 'Location')]/following-sibling::div//input"));
        await locationTypeInput.sendKeys("Canada");
        await sleep(3000); // Wait for 3 seconds

        console.log("Waiting for location suggestions...");
        let locationSuggestions = await driver.wait(
            until.elementsLocated(By.xpath("//ul[contains(@class, 'MuiList-root')]/li")),
            10000
        );
        console.log(`Found ${locationSuggestions.length} location suggestions.`);
        if (locationSuggestions.length > 0) {
            await locationSuggestions[0].click();
            console.log("Clicked the first location suggestion.");
        } else {
            console.error("No location suggestions found.");
        }
        await sleep(500);

        console.log("Selecting gender...");
        let maleButton = await driver.wait(until.elementLocated(By.xpath("//button[@value='male' and @aria-pressed='false']")), 5000).catch((error) => {
            console.error("Failed to find gender button:", error);
            throw new Error("Gender selection button not found");
        });
        await maleButton.click();
        await sleep(500);

        console.log("Clicking Confirm button...");
        let confirmButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Confirm')]")), 10000).catch((error) => {
            console.error("Failed to find Confirm button:", error);
            throw new Error("Confirm button not found");
        });
        await sleep(1000);
        await confirmButton.click();

        console.log("Handling confirmation popup...");
        let yesButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Yes')]")), 5000).catch((error) => {
            console.error("Failed to find Yes button in popup:", error);
            throw new Error("Yes button not found in confirmation popup");
        });
        await sleep(1000);
        await yesButton.click();

        console.log("Waiting for 15 seconds after confirming...");
        await sleep(15000);

        console.log("Test passed successfully!");

    } catch (error) {
        console.error("Test failed:", error);
        let debugUrl = await driver.getCurrentUrl();
        console.log("Current URL at error:", debugUrl);
    } finally {
        await driver.quit();
    }
})();