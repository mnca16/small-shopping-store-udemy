//This class put data together
class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClass, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClass) {
            rootElement.className = cssClass;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => {
            return prevValue + curItem.price;
        }, 0);
        return sum;
    }

    constructor (renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section','cart');
        cartEl.innerHTML = `
          <h2>Total: \$${0}</h2>
          <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}

//This class holds the logic of how a product looks like in the shop
class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
           <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}">
              <div class="product-item__content">
                 <h2>${this.product.title}</h2>
                 <h3>\$${this.product.price}</h3>
                 <p>${this.product.description}</p>
                 <button>Add to Cart</button>
              </div>
           </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}


class ProducList {
    products = [
        new Product(
            'Pillow',
            'https://ctl.s6img.com/society6/img/0GugJ9_kCZJpxR9UZXeb29s_mkc/w_1500/pillows/~artwork,fw_3502,fh_3502,fx_-219,fy_-612,iw_3942,ih_5256/s6-original-art-uploads/society6/uploads/misc/60d6525f83c740b983345b90187d3db1/~~/arch-balance-green-pillows.jpg',
            'Decorative pillow',
            19.99
        ),
        new Product(
            'Carpet',
            'https://iranguidance.com/wp-content/uploads/2020/01/BottehJogheh-iranguidance-248x300.jpg',
            'A carpet which you might like - or not.',
            89.99
        )
    ];

    constructor() {}

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
            
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProducList();
        const prodListEl = productList.render();

        renderHook.append(prodListEl);
    }

}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
        
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();

