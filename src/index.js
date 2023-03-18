class BatteryManager {
    constructor({ onChargingChange, onLevelChange }) {
        navigator.getBattery().then((battery) => {
            battery.addEventListener("chargingchange", () => {
                onChargingChange(battery.charging);
            });

            battery.addEventListener("levelchange", () => {
                onLevelChange(battery.level);
            });

            onChargingChange(battery.charging);
            onLevelChange(battery.level);
        });
    }
}

export default BatteryManager;