class Customer {

    constructor(id, name, stateCode, sales) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.sales = sales;
    }

    addSales(amount) {
        this.sales += amount;
    }

    subSales(amount) {
        this.sales -= amount;
    }

    print() {
        return `${this.id} | ${this.name} | ${this.stateCode} | ${this.sales}`;
    }
}

let cust1 = new Customer(1, "Max", "OH", 0.0);
cust1.addSales(100.00);
cust1.addSales(300.00);
cust1.addSales(50.00);
console.log(cust1.print());

let cust2 = new Customer(2, "P&G", "OH", 100.00);
cust2.addSales(1000);
cust2.addSales(3200);
cust2.addSales(500);
console.log(cust2.print());

let cust3 = new Customer(3, "Target", "MN", 2500.00);
cust3.subSales(2600);
cust3.addSales(250);
console.log(cust3.print());
