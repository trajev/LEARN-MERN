let bookButton = document.querySelector("#book-btn")
bookButton.addEventListener("click", (e) => {
    e.preventDefault();

    let mail = document.querySelector("#mail").value;
    let phone = document.querySelector("#phone").value;
    let fullname = document.querySelector("#fullname").value;
    let btnError = document.querySelector(".btn-error");
    if (mail === "" || phone === "" || fullname === "") {
        btnError.style.display = "block";
        console.log(mail + " " + phone + " " + fullname);
    } else {
        btnError.style.display = "none";
    }
})



const laundryServices = [
    {
        sNo: 1,
        name: "Wash & Fold",
        price: 1000,
        imageUrl: "https://imgs.search.brave.com/dw-wrls7xv2PmVVmx2L8owVNRNeoTT2zK-Rn4c-Ojvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb215/bGF1bmRyeS5jYS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/MS9hYm91dC1jb21w/YW55LndlYnA"
    },
    {
        sNo: 2,
        name: "Dry Cleaning",
        price: 1500,
        imageUrl: "https://www.gentlemansgazette.com/wp-content/uploads/2017/07/Dry-cleaning-machine-1030x773.jpg"
    },
    {
        sNo: 3,
        name: "Ironing",
        price: 500,
        imageUrl: "https://plus.unsplash.com/premium_photo-1682129257696-dfe914806043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        sNo: 4,
        name: "Stain Removal",
        price: 800,
        imageUrl: "https://imgs.search.brave.com/2YErjNmrWzDDataSzGIsPLZUOHOoHBD1zTbReMRorjo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAzLzIw/MjEwMzIxLXVudGl0/bGVkLTAwNTEtMy5q/cGc_Zml0PTY5Niw0/NjQ"
    },
    {
        sNo: 5,
        name: "Hand Washing",
        price: 2000,
        imageUrl: "https://plus.unsplash.com/premium_photo-1682129249054-b0aeef5ae1fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];





let serviceIndex = 0;

showServices();

let addItemsArr = [];

// showNoItems();

// function showNoItems() {

//     let noItemDiv = document.querySelector("#noitemdiv");
//     if (addItemsArr.length >= 1) {
//         noItemDiv.style.display = "none";
//         let table = document.querySelector("table");
//         table.style.height = "65%";
//     } else {
//         noItemDiv.style.display = "flex";
//     }

// }

// showAddedItems();

let count = 0;
function showAddedItems() {
    let noItemDiv = document.querySelector("#noitemdiv");
    noItemDiv.innerHTML = "";
    noItemDiv.style.height="52%";
    noItemDiv.style.color = "black";
    noItemDiv.style.width = "100%";
    noItemDiv.style.display= "block";
    noItemDiv.style.overflowY = "scroll";

    let totalSum = 0;
    addItemsArr.map((obj) => {
        totalSum += obj.price;
        
        let tr = document.createElement("tr");
        tr.style.backgroundColor = "yellow"
        let td1 = document.createElement("td");
        td1.classList.add("data-sno");
        count = count + 1;
        td1.innerText = count;
        let td2 = document.createElement("td");
        td2.classList.add("data-name");
        td2.innerText = obj.name;
        let td3 = document.createElement("td");
        td3.classList.add("data-price");
        td3.innerHTML = "&#x20B9; " + obj.price + ".00";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        noItemDiv.appendChild(tr);

    })

    changeTotalPrice( totalSum );

    showNoItems();
}

function changeTotalPrice( price ){
    let totalAmount = document.querySelector("#total-amount");
    if( price!==0 ){
        totalAmount.innerText = price+".00";
    }
}

function showServices() {

    showService(laundryServices[serviceIndex]);

    let addItemBtn = document.querySelector(".add-btn");
    addItemBtn.addEventListener("click", () => {
        if (serviceIndex < laundryServices.length) {
            addItemsArr.push(laundryServices[serviceIndex]);
            serviceIndex++;
            console.log(addItemsArr);
            showService(laundryServices[serviceIndex]);
        } else {
            serviceIndex = 0;
            showService(laundryServices[serviceIndex])
        }
        count = 0;
        showAddedItems();

    })

    let skipItemBtn = document.querySelector(".skip-btn");
    skipItemBtn.addEventListener("click", () => {
        if (serviceIndex < laundryServices.length) {
            serviceIndex++;
            showService(laundryServices[serviceIndex]);
        } else {
            serviceIndex = 0;
            showService(laundryServices[serviceIndex])
        }
        count = 0;
        showAddedItems();
    })

}


function showService(service) {

    let imgTag = document.createElement("img");
    imgTag.classList.add("inner-right-img");


    let img = document.querySelector(".inner-right-img");
    img.src = service.imageUrl;


    let sName = document.querySelector("#service-name");
    sName.innerText = service.name;
    let sPrice = document.querySelector("#service-price");
    sPrice.innerText = service.price;

}



