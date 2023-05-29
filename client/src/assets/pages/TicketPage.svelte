<script>

import ConcertItem from "../components/ConcertItem.svelte";
const concert = JSON.parse(localStorage.getItem('ticket'));
let user = localStorage.getItem('user');
user = user ?  JSON.parse(user) : null
</script>

<div class="page-content" >
    {#if user}
        <ConcertItem concert={concert} isButton={false}/>
        <h4>Customer Info:</h4>
    <h2>{user.username}</h2>
        {:else}
        <h2>Please log in to continue</h2>
        {/if}
</div>