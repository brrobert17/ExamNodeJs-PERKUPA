<script>
    export let cartItem;
</script>
<div>
    <p>{cartItem.name}</p>
    <p>{cartItem.pcs} pcs</p>
    <p>price: {cartItem.price} DKK</p>
    <p>subtotal: {cartItem.price * cartItem.pcs} DKK</p>
</div>