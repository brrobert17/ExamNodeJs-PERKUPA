<script>
    import {onMount} from "svelte";
    import ShopItem from "../components/ShopItem.svelte";
    import './styles/shop.css'
    import {getUser} from "../stores/globalStore.js";
    import {navigate} from "svelte-navigator";
    import toast, {Toaster} from "svelte-french-toast";
    import {api} from "../../api/axios.js";

    let cart = [];
    onMount(() => {
        cart = JSON.parse(localStorage.getItem('cart'));
    })
    let user;
    user = getUser();

    const handleItemRemoved = (data) => {
        cart = cart.filter(item => item !== data.detail);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const handleBuy = async () => {
        let result;
        await toast.promise(api.post('/orders', {
            user: user,
            cart: cart
        }).then(res => {
            result = res.data;
            localStorage.removeItem('cart');
            setTimeout(()=> {
                window.open(result.emailUrl);
                navigate("/");
                window.scrollTo(0,0);
            }, 1000);
        }), {
            loading: 'Placing order...',
            success: `Order successfully sent.`,
            error: 'Something went wrong :('
        })
    }

</script>
<div class="page-content">
    {#if cart}
        <div class="shop-items">
            {#each cart as item}
                <ShopItem shopItem={item} isCheckOut={true} on:itemRemoved={handleItemRemoved} />
            {/each}
        </div>
        <h3>Total: {cart.reduce((sum, item) => sum + item.pcs * item.price, 0)} DKK</h3>
        {#if user}
            <button class="login-button" on:click={handleBuy}> Confirm and Buy</button>
        {:else }
            <h3>You need to log in to continue!</h3>
            <button class="login-button" on:click={()=>navigate("/login")}>Login</button>
        {/if}
    {:else }
        <h1>Your cart is empty!</h1>
    {/if}
</div>
<Toaster/>
