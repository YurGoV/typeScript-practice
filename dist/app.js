"use strict";
class CarModel {
    constructor() {
        this.needRepair = false;
        this.maxEngineLoad = 3;
    }
    checkEngine() {
        if (this.needRepair) {
            throw new Error("Engine not work");
        }
        const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
        if (this.maxEngineLoad === engineLoad) {
            this.needRepair = true;
            throw new Error("Engine broken again");
        }
    }
    startEngine() {
        this.checkEngine();
        console.log("Ta-ta-ta-ta");
    }
    repairEngine() {
        this.needRepair = false;
        console.log("Engine rebuilt");
    }
}
const auto = new CarModel();
try {
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
}
catch (e) {
    console.log(e);
    auto.repairEngine();
    auto.startEngine();
}
//# sourceMappingURL=app.js.map