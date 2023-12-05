const storeData = [
    {
        category: "budget-stack",
        supplements: [
            {
                id: 1,
                image: "../assets/supplements/product-1.webp",
                name: "biozyme performance whey",
                price: 4299,
            },
            {
                id: 2,
                image: "../assets/supplements/product-2.webp",
                name: "super gainer xxl",
                price: 2599,
            },
            {
                id: 3,
                image: "../assets/supplements/product-3.webp",
                name: "multi-vitamin, ashwagandha, fish oil",
                price: 999,
            },
            {
                id: 4,
                image: "../assets/supplements/product-4.webp",
                name: "intense workout stack",
                price: 3448,
            },
            {
                id: 5,
                image: "../assets/supplements/product-5.webp",
                name: "super gainer black",
                price: 2699,
            },
            {
                id: 6,
                image: "../assets/supplements/product-6.webp",
                name: "bioztme performance whey pr",
                price: 4699,
            },
            {
                id: 7,
                image: "../assets/supplements/product-7.webp",
                name: "fuel one whey protein",
                price: 3699,
            },
            {
                id: 8,
                image: "../assets/supplements/product-8.webp",
                name: "mb gold whey",
                price: 11000,
            },
            {
                id: 9,
                image: "../assets/supplements/product-9.webp",
                name: "mb essential supplements",
                price: 1699,
            },
            {
                id: 10,
                image: "../assets/supplements/product-10.webp",
                name: "mb bcca pro + electrolytes",
                price: 1145,
            },
        ]
    },
    {
        category: "popular-stack",
        supplements: [
            {
                id: 11,
                image: "../assets/supplements/product-11.webp",
                name: "mb eaa 6000",
                price: 999,
            },
            {
                id: 12,
                image: "../assets/supplements/product-12.webp",
                name: "wrathx pre workout",
                price: 1499,
            },
            {
                id: 13,
                image: "../assets/supplements/product-13.webp",
                name: "bm performance whey",
                price: 1399,
            },
            {
                id: 14,
                image: "../assets/supplements/product-14.webp",
                name: "bm mamoth gainer",
                price: 725,
            },
            {
                id: 15,
                image: "../assets/supplements/product-15.webp",
                name: "bm zero ripped protein",
                price: 6970,
            },
            {
                id: 16,
                image: "../assets/supplements/product-16.webp",
                name: "nitric hydro gold",
                price: 6119,
            },
            {
                id: 17,
                image: "../assets/supplements/product-17.webp",
                name: " bm real mass gainer",
                price: 699,
            },
            {
                id: 18,
                image: "../assets/supplements/product-18.webp",
                name: "bm citrulline ",
                price: 449,
            },
            {
                id: 19,
                image: "../assets/supplements/product-19.webp",
                name: "bm glutamine",
                price: 549,
            },
            {
                id: 20,
                image: "../assets/supplements/product-20.webp",
                name: "bm real bcca",
                price: 699,
            },
        ]
    },

]

let b_slides = document.getElementById("b-carousel")
let p_slides = document.getElementById("p-carousel")
storeData.map((data) => {
    if (data.category === 'budget-stack') {
        const budgetSupplement = data.supplements.map((product) => (
            `
                <div class="slides">
                    <div class="slide-content">
                        <div class="product-img">
                        <img src=${product.image} alt="gyming stack">
                        </div>
                        <p>${product.name}</p>
                        <h4>&#x20B9; ${product.price}</h4>
                        <button class="cart-btn"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                    </div>
                </div>

           `
        ))
        b_slides.innerHTML = budgetSupplement
    }
    if (data.category === 'popular-stack') {
        const popularSupplement = data.supplements.map((product) => (

            `
                 <div class="slides">
                     <div class="slide-content">
                         <div class="product-img">
                         <img src=${product.image} alt="gyming stack">
                         </div>
                         <p>${product.name}</p>
                         <h4>&#x20B9; ${product.price}</h4>
                         <button class="cart-btn"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                     </div>
                 </div>
 
            `
        ))

        p_slides.innerHTML = popularSupplement

    }
})

