/*class House {
    street: string;

    constructor(n: string) {
        this.street = n;
    }

    showAddress() {
        console.log('Address is: ' + this.street)
    }
}

const house = new House('street1');
const house2 = new House('street2');

house2.showAddress();

const copyHouse2 = {showAddress: house2.showAddress};
copyHouse2.showAddress();// undefined
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class House {
    street: string;

    constructor(n: string) {
        this.street = n;
    }

    showAddress(this: House, add: string): void {
        console.log('Address is: ' + this.street + ' ' + add)
    }
}

const house = new House('street1');



const copyHouse2 = {showAddress: house.showAddress, street: 'new addr'};
copyHouse2.showAddress('string');// undefined

*/
// МОДИФІКАТОРИ ДОСТУПУ
/*class House {
    public street: string;
    public tenants: string[] = [];

    constructor(n: string) {
        this.street = n;
    }

    public showAddress(this: House,): void {
        console.log('Address is: ' + this.street)
    }

    public addTenant(name: string) {
        this.tenants.push(name);
    }public showTenant() {
        console.log(this.tenants);
    }
}

const house = new House('street1');

house.addTenant('Max');
house.addTenant('Mike');

house.tenants.push('Jim'); // прямий доступ - не гарно

house.showTenant()*/
/*class House {
    private street: string;
    private tenants: string[] = [];

    constructor(n: string) {
        this.street = n;
    }

    public showAddress(this: House,): void {
        console.log('Address is: ' + this.street)
    }

    public addTenant(name: string) {
        this.tenants.push(name);
    }public showTenant() {
        console.log(this.tenants);
    }
}

const house = new House('street1');

house.addTenant('Max');
house.addTenant('Mike');

// house.tenants.push('Jim'); // прямий доступ - зараз тут помилка

house.showTenant()*/
// PAUSE ON 4.4 video
/*
class House {
    // private type: string;
    // private street: string;// скорочений запис
    private tenants: string[] = [];

    // constructor(t: string, n: string) {
    constructor(private type: string, private street: string) {// скорочений запис
        // this.type = t;
        // this.street = n;
    }

    public showAddress(this: House,): void {
        console.log('Address is: ' + this.street)
    }public showType(this: House,): void {
        console.log('Type is: ' + this.type)
    }

    public addTenant(name: string) {
        this.tenants.push(name);
    }public showTenant() {
        console.log(this.tenants);
    }
}

const house = new House('wood', 'street1');

house.addTenant('Max');
house.addTenant('Mike');

house.showTenant()
*/
// 4.5
/*
class House {

    private tenants: string[] = [];

    constructor(public readonly type: string, private street: string) {

    }

    public showAddress(this: House,): void {
        console.log('Address is: ' + this.street)
    }public showType(this: House,): void {
        // this.type = 'stone';// readonly there too
        console.log('Type is: ' + this.type)
    }

    public addTenant(name: string) {
        this.tenants.push(name);
    }public showTenant() {
        console.log(this.tenants);
    }
}

const house = new House('wood', 'street1');

house.addTenant('Max');
house.addTenant('Mike');

house.showTenant();

// house.type = 'stone';
console.log(house.type);
*/
// 4.6
/*
class House {

    private tenants: string[] = [];

    constructor(public readonly type: string, protected street: string) {// protected -

    }

    public showAddress(this: House,): void {
        console.log('Address is: ' + this.street)
    }

    public showType(this: House,): void {
        // this.type = 'stone';// readonly there too
        console.log('Type is: ' + this.type)
    }

    public addTenant(name: string) {
        this.tenants.push(name);
    }

    public showTenants() {
        console.log(this.tenants);
    }
}

class StoneHouse extends House {
    private chargeOfTheHouse: string;
    constructor(street: string, general: string) {
        super('stone', street);

        this.chargeOfTheHouse = general
    }
    public showAddress(): void {
        console.log('Address is: ' + this.street)
    }
    public showTenants() {
        console.log('General: ' + this.chargeOfTheHouse);
        super.showTenants();
    }
}

const stoneHouse = new StoneHouse('Stone street', 'Max');

stoneHouse. addTenant('Anton');
stoneHouse. addTenant('Nikita');

stoneHouse.showTenants();
*/
// 4.7
var UseStatic = /** @class */ (function () {
    function UseStatic() {
        UseStatic.count += 1;
    }
    UseStatic.isStaticMethod = function () {
        console.log('I am static');
    };
    UseStatic.prototype.showCount = function () {
        console.log(UseStatic.count);
    };
    UseStatic.count = 0;
    return UseStatic;
}());
var obj1 = new UseStatic();
var obj2 = new UseStatic();
var obj3 = new UseStatic();
// obj1.showCount();
// obj2.showCount();
// obj3.showCount();
UseStatic.isStaticMethod();
// для чого можна використовувати статік:
// можна зробити функції
function count() { }
function substringCustom() { }
// і потім їх експортувати
// або
var myFunctionsLib = /** @class */ (function () {
    function myFunctionsLib() {
    }
    myFunctionsLib.count = function () { };
    myFunctionsLib.substringCustom = function () { };
    return myFunctionsLib;
}());
// і потім використовувати їх як звичайні функціїЖ
myFunctionsLib.count();
myFunctionsLib.substringCustom();
// * 4.8. Abstract classes
var Plane = /** @class */ (function () {
    function Plane() {
        this.pilotInCabin = false;
    }
    Plane.prototype.sitInPlane = function () {
        this.pilotInCabin = true;
    };
    return Plane;
}());
var Maize = /** @class */ (function (_super) {
    __extends(Maize, _super);
    function Maize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maize.prototype.startEngine = function () {
        return 'ta-ta-ta';
    };
    return Maize;
}(Plane));
var Boeing = /** @class */ (function (_super) {
    __extends(Boeing, _super);
    function Boeing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boeing.prototype.startEngine = function () {
        return 'Buuuuuuu';
    };
    return Boeing;
}(Plane));
var maize = new Maize;
var boeing = new Boeing;
maize.sitInPlane();
boeing.sitInPlane();
console.log(maize.startEngine());
console.log(boeing.startEngine());
