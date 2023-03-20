## How to install?

Just add ```battery-manager``` to your project via npm or yarn or pnpm. It helps you to check the client battery level using Web Battery API.

```
pnpm add battery-manager

```
Then it is ready to use example app:

```js
import BatteryManager from 'battery-manager';


const manager = new BatteryManager({
    onChargingChange: (isCharging) => { console.log(`Your laptop is ${isCharging ? 'charging' : 'not charging'}`) },
    onLevelChange: (level) => { console.log(`Your laptop battery is ${level * 100}`) },
})
console.log('hello dude!');

```
