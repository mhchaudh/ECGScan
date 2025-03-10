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

        console.log("Looking for the Open Camera button...");
        let openCameraButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Open Camera')]")), 5000);
        console.log("Open Camera button found. Clicking...");
        await openCameraButton.click();
        await sleep(1000);

        await driver.wait(until.elementLocated(By.css("video.camera-view")), 5000);
        console.log("Camera opened successfully.");
        await sleep(1000);

        console.log("Looking for Capture button...");
        let captureButton = await driver.wait(until.elementLocated(By.className("capture-button")), 5000);
        console.log("Capture button found. Clicking...");
        await captureButton.click();
        await sleep(1000);

        console.log("Waiting for navigation to confirmation page...");
        await driver.wait(until.urlContains("/confirm"), 10000);
        console.log("Picture captured and navigated to confirmation page.");
        await sleep(1000);

        console.log("Checking if captured image is displayed in crop area...");
        let imageElement = await driver.wait(until.elementLocated(By.className("confirm-image")), 5000);
        let isDisplayed = await imageElement.isDisplayed();
        console.log("Captured image is visible:", isDisplayed);
        await sleep(1000);

        console.log("Clicking Confirm button...");
        let confirmButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Confirm')]")), 10000);
        await sleep(1000);
        await confirmButton.click();

        console.log("Handling confirmation popup...");
        let yesButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Yes')]")), 5000);
        await sleep(1000);
        await yesButton.click();

        console.log("Waiting for navigation to /home...");
        await sleep(1000);
        await driver.wait(until.urlContains("/home"), 10000);
        console.log("Successfully navigated to /home after confirming.");

    } catch (error) {
        console.error("Test failed:", error);
        let debugUrl = await driver.getCurrentUrl();
        console.log("Current URL at error:", debugUrl);
    } finally {
        await driver.quit();
    }
})();