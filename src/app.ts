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
class UseStatic {
  private static count = 0;
  constructor() {
    UseStatic.count += 1;
  }
  public static isStaticMethod() {
    console.log('I am static');
  }
  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

UseStatic.isStaticMethod();

// для чого можна використовувати статік:
// можна зробити функції
function count() {}
function substringCustom() {}
// і потім їх експортувати

// або
class myFunctionsLib {
  public static count() {}
  public static substringCustom() {}
}
// і потім використовувати їх як звичайні функціїЖ
myFunctionsLib.count();
myFunctionsLib.substringCustom();

// * 4.8. Abstract classes
abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Maize extends Plane {
  public startEngine() {
    return 'ta-ta-ta';
  }
}

class Boeing extends Plane {
  public startEngine() {
    return 'Buuuuuuu';
  }
}

const maize = new Maize;
const boeing = new Boeing;

maize.sitInPlane();
boeing.sitInPlane();

console.log(maize.startEngine());
console.log(boeing.startEngine());