<script>
    import {createEventDispatcher} from "svelte";
    import toast from "svelte-french-toast";
    import {navigate} from "svelte-navigator";

    export let shopItem;
    export let isCheckOut = false;
    let amount = 1;
    if (isCheckOut) {
        amount = shopItem.pcs;
    }
    const dispatch = createEventDispatcher();

    const addToCart = () => {
        if (amount > 0) {
            dispatch('itemAdded', {...shopItem, pcs: amount});
            amount = 1;
            toast.success(`Item added to cart: ${shopItem.name}`);
        } else {
            toast.error("cant add item with 0 amount")
        }
    }
    const removeFromCart = ()=> {
        console.log(shopItem);
        dispatch('itemRemoved', shopItem);
        toast.success(`Item removed from cart: ${shopItem.name}`);
    }

</script>
<div class="item-cont">
    <img class="item-img" src={shopItem.img} alt="shop-item-img"/>
    <p class="clamp item-name" style="font-weight: 700">{shopItem.name}</p>
    <p>{shopItem.price} DKK</p>
    <p class="clamp">{shopItem.description}</p>
    <div>
        {#if isCheckOut}
            <label>pcs:
                <input type="number" style="width: 4ch" bind:value={amount} disabled>
            </label>
            <button class="login-button" style="background-color: rgba(252,11,11,0.84); " on:click={removeFromCart}>
                Remove</button>
        {:else }
            <input type="number" id="amount" style="width: 4ch" bind:value={amount}>
            <button class="login-button" style="padding: 6px 8px 1px 6px; background-color: #bc5702" on:click={addToCart}>
                <img src="/src/public/cart.svg" alt="cart-svg"/>
            </button>
            <button class="login-button" on:click={()=> navigate('checkout')}>View cart</button>
        {/if}
    </div>

</div>
<style>
    .clamp {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .item-name {
        font-size: 1em;
        line-height: 1.2em;
        height: 2.4em;
    }

    .item-cont {
        background-color: #191919;
        padding: 1.5em;
    }

    .item-img {
        width: 100%;
    }
</style>