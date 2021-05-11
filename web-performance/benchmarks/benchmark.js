const { performance, PerformanceObserver } = require("perf_hooks");

// SETUP 🏁

let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP
const test = () => {
    const add = (point) => point.x + point.y;

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    const point = new Point(10, 20);
    add(point);
};

performance.mark("start");

// EXERCISE 💪

while (iterations--) {
    test();
}

performance.mark("end");

const obs = new PerformanceObserver((list, observer) => {
    console.log(list.getEntries()[0]);
    performance.clearMarks();
    observer.disconnect();
});
obs.observe({ entryTypes: ["measure"] });
performance.measure("My Special Benchmark", "start", "end");
