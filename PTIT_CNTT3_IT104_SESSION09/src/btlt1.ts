

let curenIdOrder :number =1;
let curentIdProduct : number =0;
class Customer { // khach hang 
    
    id: number;
    name: string;
    email: string;
    shippingAdress: string;
    constructor(id: number, name: string, email: string, shippingAdress: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAdress = shippingAdress;
    }
    getDetails(): void {
        console.log(`ID : ${this.id},Ten khach hang : ${this.name} \n Email khach hang : ${this.email}, Dia chi giao hang : ${this.shippingAdress} \n`);
    }

}

abstract class Product {
    
    id: number;
    name: string | null;
    price: number;
    stock: number;
    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(): void {
        this.stock--;
    }
    restock(): void {
        this.stock++;
    }
    abstract getProductInfor(): string
    abstract getshipCost(): number
    abstract getCategory(): string
}
class ElectronicsProduct extends Product {
    warrantyPeriod: number;
   
    shipCost: number = 25000;
     category: string = "electronics product";
    constructor(id: number, name: string, price: number, stock: number, warrantyPeriod: number) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
       
    }
    getProductInfor(): string {
        return `ID san pham:${this.id}|| danh muc san pham ${this.category} \n Ten san pham: ${this.name} || Gia san pham ${this.price} \n So san pham con lai ${this.stock} || Thoi gian bao hanh ${this.warrantyPeriod} Thang \n`;
    }
    getshipCost(): number {
        return this.shipCost;
    }
    getCategory(): string {
        return `San pham ${this.name} O danh muc ${this.category}`;
    }
}


class clothingProduct extends Product {
    size: string;
    color: string;
    
    shipCost: number = 50000;
    category: string = 'clothing product';
    constructor(id:number, name: string, price: number, stock: number, size: string, color: string) {
        super(id,name, price, stock);
        this.size = size;
        this.color = color
        
    }
    getProductInfor(): string {
        return `ID san pham:${this.id}|| danh muc san pham ${this.category} \n Ten san pham: ${this.name} || Gia san pham ${this.price} \n So san pham con lai ${this.stock} || size: ${this.size} color:${this.color} \n`;
    }
    getshipCost(): number {
        return this.shipCost;
    }
    getCategory(): string {
        return `San pham ${this.name} O danh muc ${this.category}`;
    }
}
interface ProductOrder {
    product: Product;
    quantity: number;
}

class Order {
    
    id: number;
    customer: Customer;
    products: ProductOrder[] = [];

    constructor(customer: Customer, productList: ProductOrder[]) {
        this.id =curenIdOrder++;
        this.customer = customer;
        this.products = productList;
    }

    addProduct(productOrder: ProductOrder): void {
        this.products.push(productOrder);
    }

    getTotal(): number {
        return this.products.reduce((total, p) => total + (p.product.price * p.quantity), 0);
    }

    showOrder(): void {
        console.log(`Đơn hàng #${this.id} - Khách: ${this.customer.name}`);
        this.products.forEach((p, i) => {
            console.log(`${i + 1}. ${p.product.name} - SL: ${p.quantity} - Giá: ${p.product.price} - Thành tiền: ${p.product.price * p.quantity}`);
        });
        console.log(`Tổng cộng: ${this.getTotal()} VND`);
    }
}


class Store {
    product: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];
    addProducts(): void {
        while (true) {
            let choiceStr = prompt('moi ban nhap lua chon danh muc\n 1:ElectronicsProduct || 2:clothingProduct');
            if (choiceStr != null) {
                let choice = Number(choiceStr);
                if (choice ===1) {
                    let name :string |null= prompt('moi ban nhap ten san pham \n');
                    let priceStr :string | null = prompt("moi ban nhap gia san pham \n");
                    let price = Number(priceStr);
                    let stockStr : string |null= prompt('moi ban nhap so luong hang \n');
                    let stock = Number(stockStr)
                    let wStr :string | null = prompt('moi ban nhap thoi gian bao hanh cua san pham');
                    let w = Number(wStr);
                    let sp: ElectronicsProduct = new ElectronicsProduct(curentIdProduct++,name,price,stock,w);
                }

            }
        }
    }
    addCustomer(kh: Customer): void {
        this.customers.push(kh);
    }
    createOrder(dh: Customer): void {

    }
}

