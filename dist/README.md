# Sheeps RocketChat cli 🚀

```
const services = New({
    namespace: 'xxxx',
    internal: false,
    credentials: {
        token: "xxx-xxx-xxx",
        userId: "xxx-xxxx"
    }
});

const room = await services.rooms.get({token: "999999999"});
const visitor = await services.visitors.get({phone: "9999999"});

console.log(visitor);
console.log(room);
```