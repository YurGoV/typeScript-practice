var CarModel = /** @class */ (function () {
    function CarModel() {
        this.needRepair = false;
        this.maxEngineLoad = 3;
    }
    /**
     * @needRepair {boolean}//??
     * Заводить двигун машини, якщо це можливо
     */
    CarModel.prototype.checkEngine = function () {
        // Перевіряємо, чи не зламаний двигун
        if (this.needRepair) {
            throw new Error("Engine not work");
        }
        // Пробуємо його завести
        var engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
        if (this.maxEngineLoad === engineLoad) {
            this.needRepair = true;
            throw new Error("Engine broken again");
        }
    };
    /**
     * Завести двигун
     */
    CarModel.prototype.startEngine = function () {
        this.checkEngine();
        console.log("Ta-ta-ta-ta");
    };
    /**
     * Ремонт двигуна
     */
    CarModel.prototype.repairEngine = function () {
        this.needRepair = false;
        console.log("Engine rebuilt");
    };
    return CarModel;
}());
var auto = new CarModel();
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
/**
 * * encapsulation in vanilla JS:
 */
/*
function protectedMethod () {
    return 'Something';
  }
  
  class myClass {
    myPublicMethod() {
      return protectedMethod();
    }
  }
   */
/**
 * *The same in TS:
 */
/*
  class myClass {
    private protectedMethod () {
      return 'Something';
    }
  
    public myPublicMethod() {
      return this.protectedMethod();
    }
  }
   */
// TODO: take from conspect about other OOP features
// https://textbook.edu.goit.global/typescript-v7ex6g/v1/uk/docs/module4/docs/doc1#%D0%BD%D0%B0%D1%81%D0%BB%D1%96%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F
