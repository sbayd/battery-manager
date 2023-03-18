## How to install?

Just add ```battery-manager-dont-use``` to your project. via npm or yarn or pnpm.

```
pnpm add battery-manager-dont-use

```
Then it is ready to use example app:

```js
import BatteryManager from 'battery-manager-dont-use';


const manager = new BatteryManager({
    onChargingChange: (isCharging) => { console.log(`Your laptop is ${isCharging ? 'charging' : 'not charging'}`) },
    onLevelChange: (level) => { console.log(`Your laptop battery is ${level * 100}`) },
})
console.log('hello dude!');

```