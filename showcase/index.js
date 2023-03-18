import BatteryManager from "../src";

const manager = new BatteryManager({
    onChargingChange: (isCharcing) => { console.log('isBatteryCharcing', isCharcing) },
    onLevelChange: (currentLevel) => { console.log('onLevelChange', currentLevel) }
});

// console.log('I can develop it', manager.sayHello());