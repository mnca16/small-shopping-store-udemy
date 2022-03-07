const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl:
               'https://ctl.s6img.com/society6/img/0GugJ9_kCZJpxR9UZXeb29s_mkc/w_1500/pillows/~artwork,fw_3502,fh_3502,fx_-219,fy_-612,iw_3942,ih_5256/s6-original-art-uploads/society6/uploads/misc/60d6525f83c740b983345b90187d3db1/~~/arch-balance-green-pillows.jpg',
            price: 19.99,
            description: 'decorative pillow'
        
        },
        {
            tittle: 'A Carpet',
            imageUrl:
               'https://iranguidance.com/wp-content/uploads/2020/01/BottehJogheh-iranguidance-248x300.jpg',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
               <div>
                  <img src="${prod.imageUrl}" alt="${prod.title}">
                  <div class="product-item__content">
                     <h2>${prod.title}</h2>
                     <h3>$/${prod.price}</h3>
                     <p>${prod.description}</p>
                     <button>Add to Cart</button>
                  </div>
               </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();