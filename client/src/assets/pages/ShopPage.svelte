<script>
    import ShopItem from "../components/ShopItem.svelte";
    import CartItem from "../components/CartItem.svelte";
    import {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";

    const items = [
        {
            name: "PERKUPA T-shirt PANK",
            price: 100,
            description: '100% cotton, fair-trade, packaging from renewable sources, unisex. ' +
                'Sizes available: S-XL: leave the required sizes in the comment.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A43?alt=media&token=525831c4-5408-48b6-9160-9f7560ba9ae1'
        },
        {
            name: "PERKUPA T-shirt 'fáj az élet'",
            price: 100,
            description: '100% cotton, fair-trade, packaging from renewable sources, unisex. ' +
                'Sizes available: S-XL: leave the required sizes in the comment.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A43?alt=media&token=525831c4-5408-48b6-9160-9f7560ba9ae1'
        },
        {
            name: "PERKUPA B-SIDES & RARITIES VINYL",
            price: 200,
            description: 'Debut album in vinyl format. Leave the owners name in the comment to get it dedicated by the band.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A59%3A22?alt=media&token=939793b1-955f-4e86-b442-f739c9a94dc8'
        },
        {
            name: "PERKUPA B-SIDES & RARITIES CD",
            price: 175,
            description: 'Debut album in compact disc format. Leave the owners name in the comment to get it dedicated by the band.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-10%3A03%3A38?alt=media&token=46278e20-2167-4be1-b45c-706c6b492836'
        },
        {
            name: "PERKUPA BEST OF COLLECTION VINYL",
            price: 200,
            description: 'BEST OF album in vinyl format. Leave the owners name in the comment to get it dedicated by the band.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A59%3A22?alt=media&token=939793b1-955f-4e86-b442-f739c9a94dc8'
        },
        {
            name: "PERKUPA BEST OF COLLECTION CD",
            price: 175,
            description: 'BEST OF album in compact disc format. Leave the owners name in the comment to get it dedicated by the band.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-10%3A03%3A38?alt=media&token=46278e20-2167-4be1-b45c-706c6b492836'
        },
        {
            name: "PERKUPA 'délivonat' MUG",
            price: 75,
            description: '400ml, A fantastic addition to your kitchen.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A17?alt=media&token=9ceb5956-d4cf-4018-9331-27df582db74f'
        },
        {
            name: "PERKUPA 'bandmembers' MUG",
            price: 75,
            description: '400ml, A fantastic addition to your kitchen.',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A17?alt=media&token=9ceb5956-d4cf-4018-9331-27df582db74f'
        },
        {
            name: "PERKUPA 'HORSEFLY' stickers",
            price: 50,
            description: '10pcs of the extremely tasteful horsefly stickers',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-02-12%3A20%3A54?alt=media&token=fbcef5ec-34a3-4381-80ac-5b17edd97285'
        },
        {
            name: "PERKUPA 'ATTIC DONKEYS' stickers",
            price: 50,
            description: '10pcs of the extremely tasteful attic monkeys stickers',
            img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A46%3A36?alt=media&token=e2db9cdc-c0b3-423d-9273-0459ee55ebab'
        }
    ]
    let cart = [];
    let viewCart = false;

    const handleItemAdded = (data) => {
        cart = [...cart, data.detail];
        console.log('cart: ', cart);
    }

    const handleCheckOut = () => {
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/checkout');
    }

</script>
<div class="page-content">
    {#if viewCart}
        <button on:click={()=> viewCart=!viewCart}>Hide cart</button>
        {#if cart.length === 0}
            <h4>Your cart is empty</h4>
        {:else}
            {#each cart as cartItem}
                <CartItem cartItem={cartItem}/>
            {/each}
            <p>Total: {cart.reduce((sum, item) => sum + item.pcs * item.price, 0)} DKK</p>
            <button on:click={handleCheckOut}>Checkout</button>
        {/if}


    {:else}
        <button on:click={()=> viewCart= !viewCart}>View cart</button>
    {/if}

    <div class="shop-items">
        {#each items as item}
            <ShopItem shopItem={item} on:itemAdded={handleItemAdded}/>
        {/each}
    </div>


</div>
<Toaster/>

<style>
    .shop-items {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
        row-gap: 2em;
    }
</style>