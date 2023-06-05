<script>
    import {createEventDispatcher} from "svelte";
    import toast from "svelte-french-toast";

    export let shopItem;
    let amount = 1;
    const dispatch = createEventDispatcher();

    const addToCart = () => {
        if (amount > 0) {
            dispatch('itemAdded', {...shopItem, pcs: amount});
            amount = 0;
            toast.success(`Item added to cart: ${shopItem.name}`);
        } else {
            toast.error("cant add item with 0 amount")
        }

    }
</script>
<div class="item-cont">
    <img class="item-img" src={shopItem.img} alt="shop-item-img" />
    <p class="clamp item-name">{shopItem.name}</p>
    <p>{shopItem.price} DKK</p>
    <p class="clamp">{shopItem.description}</p>
    <div>
        <input type="number" id="amount" style="width: 4ch" bind:value={amount}>
        <button class="login-button" on:click={addToCart}>Add to cart</button>
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