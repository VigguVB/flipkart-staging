function loadAddedItemsTocart(){
    fetch("https://flipkart-api.herokuapp.com/Cart")
    .then(res=>res.json())
    .then((data)=>{
            const item = data[data.length-1]
            console.log(data[data.length-1].name)
            
         
            let maindiv = document.createElement('div');

                maindiv.style.width = '750px';
                maindiv.style.height = '500px';
                maindiv.style.boxShadow = '2px 2px 10px blue';
                maindiv.style.float = 'left';
                maindiv.style.margin = '1%';
                maindiv.style.backgroundColor = "white"
                let imagediv = document.createElement('div')

                imagediv.style.marginTop = "1.5%";
                imagediv.style.marginLeft = "5%";
                imagediv.style.width = "97%";
                imagediv.style.height = "300px";
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
                productName.style.fontSize = "35px";
                productName.style.textAlign = 'center';
                productName.style.fontWeight = '600';
                productName.style.fontFamily = 'Times-New-Roman';
                productName.style.marginLeft = '10%';

                productName.style.color = 'black';
                productName.style.position = 'absolute';
                productName.style.marginTop = '1%';


                let productTextname = document.createTextNode(item.name);


                productName.appendChild(productTextname);
                maindiv.appendChild(productName)


                let newPrice = document.createElement("div")
                newPrice.style.textAlign = "center";
                newPrice.style.height = "32px";
                newPrice.style.fontSize = "32px";
                newPrice.style.marginLeft = '20.5%';
                newPrice.style.backgroundColor = 'yellow';
                newPrice.style.fontWeight = '600';
                newPrice.style.fontFamily = 'Times-New-Roman';
                newPrice.style.color = 'black';
                newPrice.style.position = 'absolute';
                newPrice.style.marginTop = '6%';


                let newpricetext = document.createTextNode(`Rs.${item.new}`);
                newPrice.appendChild(newpricetext)
                maindiv.appendChild(newPrice)


                let oldPrice = document.createElement("div")

                oldPrice.style.height = "27px";
                oldPrice.style.fontSize = "28px";
                oldPrice.style.marginLeft = '18%';
                oldPrice.style.fontWeight = '600';
                oldPrice.style.fontFamily = 'Times-New-Roman';
                oldPrice.style.color = 'rgba(128, 128, 128, 0.74)';
                oldPrice.style.position = 'absolute';
                oldPrice.style.marginTop = '9%';
                oldPrice.style.float = 'left';


                let oldpricetag = document.createElement('strike')
                let oldPriceText = document.createTextNode(`Rs.${item.old}`);
                oldpricetag.appendChild(oldPriceText)
                oldPrice.appendChild(oldpricetag)
                maindiv.appendChild(oldPrice)

                let offer = document.createElement("div")
                offer.style.height = "32px";
                offer.style.fontSize = "26px";
                offer.style.marginLeft = '28%';
                offer.style.fontWeight = '600';
                offer.style.fontFamily = 'Times-New-Roman';
                offer.style.color = '#06c106';
                offer.style.position = 'absolute';
                offer.style.marginTop = '9%';
                offer.style.float = 'left';


                let offertext = document.createTextNode(item.offer);
                offer.appendChild(offertext)
                maindiv.appendChild(offer)


                

               
                document.getElementsByClassName('cartModal')[0].appendChild(maindiv);
        })
    
}