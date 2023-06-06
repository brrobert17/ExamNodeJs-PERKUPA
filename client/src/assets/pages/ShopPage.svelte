<script>
    import ShopItem from "../components/ShopItem.svelte";
    import CartItem from "../components/CartItem.svelte";
    import {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";
    import './styles/shop.css'
    import {onMount} from "svelte";
    import {api} from "../../api/axios.js";


    let items = [];
    onMount(async ()=> {
        await api.get('/items').then(res => items=res.data )
    })
    let cart = [];
    const handleItemAdded = (data) => {
        cart = [...cart, data.detail];
        localStorage.setItem('cart', JSON.stringify(cart));
    }


</script>
<div class="page-content">
    <div class="shop-items">
        {#each items as item}
            <ShopItem shopItem={item} on:itemAdded={handleItemAdded}/>
        {/each}
    </div>
</div>
<Toaster/>