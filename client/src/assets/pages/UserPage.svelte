<script>
    import {api} from "../../api/axios.js";
    import ConcertItem from "../components/ConcertItem.svelte";
    import {getUser} from "../stores/globalStore.js";
    import {onMount} from "svelte";

    const user = getUser();
    let tickets = user.tickets;
    let concerts = [];

    onMount(async () => {
        if (tickets && Array.isArray(tickets) && tickets.length > 0) {
            for (const ticket of tickets) {
                const res = await api.get(`/concerts/${ticket.concertId}`).catch(err => console.log(err));
                concerts = [...concerts, res.data];
            }
        }
    });
</script>
<div class="page-content">
    {#if user}
        <h1>{user.username}'s tickets:</h1>
        <div class="concerts-grid" style="--concerts-length: {concerts.length}">
            {#each concerts as concert}
                <br id={concert._id}>
                <ConcertItem concert={concert} isButton={false}
                             owned={user.tickets.find(ticket => ticket.concertId === concert._id).pcs}/>
            {/each}
        </div>
    {:else}
        <h1>Log in to view this page</h1>
    {/if}
</div>