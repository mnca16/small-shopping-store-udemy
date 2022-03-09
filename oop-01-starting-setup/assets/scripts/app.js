//This class put data together
class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

//This class holds the logic of how a product looks like in the shop
class ProductItem {
    constructor(product) {
        this.product = product;
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
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
            
        }
        renderHook.append(prodList);
    }
}

const productList = new ProducList();
productList.render();

