let element = document.getElementById("displayimg")
// All Items:

setTimeout(function loaditems() {



    console.log("all item loaded")
    fetch("https://flipkart-api.herokuapp.com/items")
        .then(res => res.json())
        .then((data) => {
            data.map((item) => {
                let maindiv = document.createElement('div');

                maindiv.style.width = '364px';
                maindiv.style.height = '530px';
                maindiv.style.boxShadow = '2px 2px 10px blue';
                maindiv.style.float = 'left';
                maindiv.style.margin = '1%';

                let imagediv = document.createElement('div')

                imagediv.style.marginTop = "1.5%";
                imagediv.style.marginLeft = "5%";
                imagediv.style.width = "97%";
                imagediv.style.height = "250px";
                // imagediv.style.border = "2px solid blue";
                maindiv.appendChild(imagediv);
                maindiv.className = "mainclass"

                imagediv.innerHTML = `<img src="${item.image}" width="90%" height="280px" object-fit="scale-down" />`
                // let loadedImages = item.image;

                //     loadedImages.style.width = "350px"
                //     loadedImages.style.height = "400px"
                let productName = document.createElement("div")
                productName.style.width = "365px";
                productName.style.height = "25px";
                productName.style.fontSize = "21px";
                productName.style.textAlign = 'center';
                productName.style.fontWeight = '600';
                productName.style.fontFamily = 'Times-New-Roman';

                productName.style.color = 'black';
                productName.style.position = 'absolute';
                productName.style.marginTop = '3%';


                let productTextname = document.createTextNode(item.name);


                productName.appendChild(productTextname);
                maindiv.appendChild(productName)


                let newPrice = document.createElement("div")
                newPrice.style.textAlign = "center";
                newPrice.style.height = "32px";
                newPrice.style.fontSize = "24px";
                newPrice.style.marginLeft = '9.5%';
                newPrice.style.backgroundColor = 'yellow';
                newPrice.style.fontWeight = '600';
                newPrice.style.fontFamily = 'Times-New-Roman';
                newPrice.style.color = 'black';
                newPrice.style.position = 'absolute';
                newPrice.style.marginTop = '6%';


                let newpricetext = document.createTextNode(`Rs.${item.new_price}`);
                newPrice.appendChild(newpricetext)
                maindiv.appendChild(newPrice)


                let oldPrice = document.createElement("div")

                oldPrice.style.height = "27px";
                oldPrice.style.fontSize = "22px";
                oldPrice.style.marginLeft = '5%';
                oldPrice.style.fontWeight = '600';
                oldPrice.style.fontFamily = 'Times-New-Roman';
                oldPrice.style.color = 'rgba(128, 128, 128, 0.74)';
                oldPrice.style.position = 'absolute';
                oldPrice.style.marginTop = '9%';
                oldPrice.style.float = 'left';


                let oldpricetag = document.createElement('strike')
                let oldPriceText = document.createTextNode(`Rs.${item.old_price}`);
                oldpricetag.appendChild(oldPriceText)
                oldPrice.appendChild(oldpricetag)
                maindiv.appendChild(oldPrice)

                let offer = document.createElement("div")
                offer.style.height = "32px";
                offer.style.fontSize = "21px";
                offer.style.marginLeft = '12%';
                offer.style.fontWeight = '600';
                offer.style.fontFamily = 'Times-New-Roman';
                offer.style.color = '#06c106';
                offer.style.position = 'absolute';
                offer.style.marginTop = '9%';
                offer.style.float = 'left';


                let offertext = document.createTextNode(item.offer);
                offer.appendChild(offertext)
                maindiv.appendChild(offer)


                let freedel = document.createElement('div');
                freedel.style.width = "360px";
                freedel.style.height = "50px";
                freedel.style.marginTop = "11.2%";
                freedel.style.position = "absolute";
                freedel.innerHTML = `<img src="https://i.ibb.co/W3xL14w/freedeliver-removebg-preview.png" width="40%" height="auto" object-fit="cover" />`

                maindiv.appendChild(freedel)

                let addTocartBtn = document.createElement('button');
                addTocartBtn.style.width = "365px";
                addTocartBtn.style.height = "40px";
                addTocartBtn.style.marginTop = "15.5%";
                addTocartBtn.style.position = "absolute";
                addTocartBtn.style.border = "none";
                addTocartBtn.style.backgroundColor = "orangered";
                addTocartBtn.style.color = "white"
                addTocartBtn.style.fontSize = "17px";
                addTocartBtn.style.fontWeight = "600";

                let buttonText = document.createTextNode("ADD TO CART");
                addTocartBtn.appendChild(buttonText)
                addTocartBtn.addEventListener('click', function myFunction() {
                    var selectedItem = {
                        id: item.id,
                        name: item.name,
                        old: item.old_price,
                        new: item.new_price,
                        offer: item.offer,
                        image: item.image
                    }
                    fetch("https://flipkart-api.herokuapp.com/addItemToCart", {
                        method: "POST", body: JSON.stringify({
                            id: selectedItem.id,
                            name: selectedItem.name,
                            old: selectedItem.old,
                            new: selectedItem.new,
                            offer: selectedItem.offer,
                            image: selectedItem.image
                        }),
                        headers: {
                            "content-type": "application/json; charset=UTF-8"
                        }
                    })
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {
                            console.log(data)
                        })
                    console.log(selectedItem)
                })
                maindiv.appendChild(addTocartBtn)
                document.getElementById('rightpage').appendChild(maindiv);

            })
            //     console.log(data[2].image)
            //     let imagefinder = data[1]
            //     document.getElementById("displayimg").innerHTML = `<img src="${imagefinder.image}" />`
        })

}
    , 1000)




// Groceries:

setTimeout(function loadGroceries() {

    console.log("grocery loaded")
    fetch("https://flipkart-api.herokuapp.com/groceries")
        .then(res => res.json())
        .then((data) => {
            data.map((grocery) => {
                let maindiv = document.createElement('div');

                maindiv.style.width = '364px';
                maindiv.style.height = '530px';
                maindiv.style.boxShadow = '2px 2px 10px blue';
                maindiv.style.float = 'left';
                maindiv.style.margin = '1%';

                let imagediv = document.createElement('div')

                imagediv.style.marginTop = "1.5%";
                imagediv.style.marginLeft = "5%";
                imagediv.style.width = "97%";
                imagediv.style.height = "250px";
                // imagediv.style.border = "2px solid blue";
                maindiv.appendChild(imagediv);
                maindiv.className = "mainclass"

                imagediv.innerHTML = `<img src="${grocery.image}" width="90%" height="280px" object-fit="scale-down" />`
                // let loadedImages = item.image;

                //     loadedImages.style.width = "350px"
                //     loadedImages.style.height = "400px"
                let productName = document.createElement("div")
                productName.style.width = "365px";
                productName.style.height = "25px";
                productName.style.fontSize = "21px";
                productName.style.textAlign = 'center';
                productName.style.fontWeight = '600';
                productName.style.fontFamily = 'Times-New-Roman';

                productName.style.color = 'black';
                productName.style.position = 'absolute';
                productName.style.marginTop = '3%';


                let productTextname = document.createTextNode(grocery.name);


                productName.appendChild(productTextname);
                maindiv.appendChild(productName)


                let newPrice = document.createElement("div")
                newPrice.style.textAlign = "center";
                newPrice.style.height = "32px";
                newPrice.style.fontSize = "24px";
                newPrice.style.marginLeft = '9.5%';
                newPrice.style.backgroundColor = 'yellow';
                newPrice.style.fontWeight = '600';
                newPrice.style.fontFamily = 'Times-New-Roman';
                newPrice.style.color = 'black';
                newPrice.style.position = 'absolute';
                newPrice.style.marginTop = '6%';


                let newpricetext = document.createTextNode(`Rs.${grocery.new_price}`);
                newPrice.appendChild(newpricetext)
                maindiv.appendChild(newPrice)


                let oldPrice = document.createElement("div")

                oldPrice.style.height = "27px";
                oldPrice.style.fontSize = "22px";
                oldPrice.style.marginLeft = '5%';
                oldPrice.style.fontWeight = '600';
                oldPrice.style.fontFamily = 'Times-New-Roman';
                oldPrice.style.color = 'rgba(128, 128, 128, 0.74)';
                oldPrice.style.position = 'absolute';
                oldPrice.style.marginTop = '9%';
                oldPrice.style.float = 'left';


                let oldpricetag = document.createElement('strike')
                let oldPriceText = document.createTextNode(`Rs.${grocery.old_price}`);
                oldpricetag.appendChild(oldPriceText)
                oldPrice.appendChild(oldpricetag)
                maindiv.appendChild(oldPrice)

                let offer = document.createElement("div")
                offer.style.height = "32px";
                offer.style.fontSize = "21px";
                offer.style.marginLeft = '12%';
                offer.style.fontWeight = '600';
                offer.style.fontFamily = 'Times-New-Roman';
                offer.style.color = '#06c106';
                offer.style.position = 'absolute';
                offer.style.marginTop = '9%';
                offer.style.float = 'left';


                let offertext = document.createTextNode(grocery.offer);
                offer.appendChild(offertext)
                maindiv.appendChild(offer)


                let freedel = document.createElement('div');
                freedel.style.width = "360px";
                freedel.style.height = "50px";
                freedel.style.marginTop = "11.2%";
                freedel.style.position = "absolute";
                freedel.innerHTML = `<img src="https://i.ibb.co/W3xL14w/freedeliver-removebg-preview.png" width="40%" height="auto" object-fit="cover" />`

                maindiv.appendChild(freedel)

                let addTocartBtn = document.createElement('button');
                addTocartBtn.style.width = "365px";
                addTocartBtn.style.height = "40px";
                addTocartBtn.style.marginTop = "15.5%";
                addTocartBtn.style.position = "absolute";
                addTocartBtn.style.border = "none";
                addTocartBtn.style.backgroundColor = "orangered";
                addTocartBtn.style.color = "white"
                addTocartBtn.style.fontSize = "17px";
                addTocartBtn.style.fontWeight = "600";

                let buttonText = document.createTextNode("ADD TO CART");
                addTocartBtn.appendChild(buttonText)
                maindiv.appendChild(addTocartBtn)
                document.getElementById('rightpage').appendChild(maindiv);

            })

            //     console.log(data[2].image)
            //     let imagefinder = data[1]
            //     document.getElementById("displayimg").innerHTML = `<img src="${imagefinder.image}" />`
        })

}
    , 1000)




