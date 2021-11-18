let main = document.createElement("div");
let filtered = document.createElement("div2");

async function user() {
    try {
       //all images
         let cat = await fetch("https://cataas.com/api/cats");
         let list = await cat.json();
        console.log(list);


         list.forEach(element => {
             let box = document.createElement("div1");
             box.setAttribute("Id",'grid');
            let image = document.createElement('img');
            image.src = `https://cataas.com/cat/${element.id}`;

            box.appendChild(image);
            main.appendChild(box);
         });

        document.body.appendChild(main);
    } catch (error) {
        console.error(error);
    }
}
user()

function find() {
     document.body.removeChild(main);
    
     
    let x = document.getElementById("txt").value;
    console.log(x);
      
    async function filterData() {
        try {
                    
            let filter = await fetch(`https://cataas.com/api/cats?tags=${x}`);
            let filtList = await filter.json();
            console.log(filtList);
            filtList.forEach(element => {
                let filtBox = document.createElement("div3");
                filtBox.setAttribute("Id", "grid1");
                let image1 = document.createElement("img");
                image1.src = `https://cataas.com/cat/${
                    element.id
                }`;
                filtBox.appendChild(image1);
                filtered.appendChild(filtBox);
                
                document.body.appendChild(filtered);
            })
        } catch (error) {
            console.error(error);
        }

    }
    filterData()
    
}


