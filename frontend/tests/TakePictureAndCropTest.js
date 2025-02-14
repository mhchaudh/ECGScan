import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
(async function testTakePictureAndCropField() {

    let driver = await new Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().addArguments("--use-fake-ui-for-media-stream")).build();
    try {
        console.log("Opening the web app...");
        await driver.get("http://localhost:5173");
        await sleep(1000);
        console.log("Looking for the Take Picture button...");
        let picturebutton = await driver.wait(until.elementLocated(By.className("picture-button")), 5000);
        console.log("Picture button found. Clicking...");
        await picturebutton.click();
        await sleep(1000);
        await driver.wait(until.elementLocated(By.css("video.camera-view")), 5000);
        console.log("Camera opened successfully.");
        await sleep(1000);

        // Click the Capture button
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

        // Simulating cropping
        console.log("Looking for crop box...");
        let cropBox = await driver.wait(until.elementLocated(By.className("ReactCrop__crop-selection")), 5000);
        let cropRect = await cropBox.getRect();
        console.log("Crop Box Position and Size:", cropRect);

        let image = await driver.findElement(By.tagName('img')); // Assuming the image tag is the <img> element
        let imageRect = await image.getRect();
        console.log("Image Position and Size:", imageRect);

        
        await sleep(1000);

        // Prompted chatgpt: How can i press and release my mouse in selenium to move the crop box
        console.log("Simulating crop adjustment...");
       
        let actions = driver.actions({ async: true });

        // Get crop box location(we take the left edge and crop from there)
        let rect = await cropBox.getRect();
        
        // Calculate start position (left edge and vertical center)
        let startX = Math.round(rect.x);
        let startY = Math.round(rect.y + rect.height / 2);
        
        
        await actions
            .move({ x: startX, y: startY }) 
            .press() 
            .pause(500)
            .move({ x: 100, y: 100, origin: 'pointer' }) 
            .pause(500)
            .move({ x: 100, y: 100, origin: 'pointer' }) 
            .pause(500)
            .release() 
            .perform();
        

        // checking whether the cropped image is displayed or not 
        console.log("Checking if cropped image preview is generated...");
        await sleep(1000);
        let croppedPreview = await driver.wait(until.elementLocated(By.className("cropped-image")), 5000);
        let croppedDisplayed = await croppedPreview.isDisplayed();
        console.log("Cropped image is visible:", croppedDisplayed);
        await sleep(1000);

        // finding and clicking the confirm button
        console.log("Clicking Confirm button...");
        let confirmButton = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(), 'Confirm')]")), 
            10000
        );
        await sleep(1000);
        await confirmButton.click();

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