import { Builder, By, Key } from "selenium-webdriver";
// Prompted chatgpt: How to set up and use selenium for ui testing
(async function testAgeField() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("http://localhost:5173");

        let ageBox = await driver.findElement(By.className("age-input"));

        // Prompted chatgpt: How to write a test to see if my input value stays
        // Test 1: Enter a valid number (20) - Should remain
        await ageBox.clear();
        await ageBox.sendKeys("20", Key.RETURN);
        let ageValue = await ageBox.getAttribute("value"); 
        console.log(ageValue === "20" ? "✅ Valid age test passed" : "❌ Valid age test failed");

        // Test 2: Enter an invalid number (150) - Should clear
        await ageBox.clear();
        await ageBox.sendKeys("150", Key.RETURN);
        let clearedValue = await ageBox.getAttribute("value");
        console.log(clearedValue === "" ? "✅ Invalid age test passed" : "❌ Invalid age test failed");

        // Test 3: Enter words  - Should not be accepted
        await ageBox.clear();
        await ageBox.sendKeys("Hello World", Key.RETURN);
        let textValue = await ageBox.getAttribute("value");
        console.log(textValue == "" ? "✅ Non-numeric test passed" : "❌ Non-numeric test failed");

    } catch (error) {
        console.error("❌ Test failed:", error);
    } finally {
        await driver.quit();
    }
})();