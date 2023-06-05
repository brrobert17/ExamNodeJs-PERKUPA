<script>
    import {onMount} from "svelte";
    import CartItem from "../components/CartItem.svelte";

    let cart = [];
    onMount(()=> {
        cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
    })
</script>

{#each cart as cartItem}
    <CartItem cartItem={cartItem}/>
{/each}
<p>Total: {cart.reduce((sum, item) => sum + item.pcs * item.price, 0)} DKK</p>