<script>
    import ConcertItem from "../components/ConcertItem.svelte";
    import {io} from "socket.io-client";
    import {onMount} from "svelte";
    import {socket} from "../../api/socketIo.js";


    onMount(() => {
        socket.emit("concerts-req");
    });

    let concerts = [];

    socket.on("concerts-res", (data) => {
        concerts = data;
    })
</script>
<div class="page-content">
    <h1>PERKUPA LIVE SHOWS</h1>
    <div class="concerts-grid" style="--concerts-length: {concerts.length}">
        {#each concerts as concert}
            <ConcertItem concert={concert} isButton={true}/>
        {/each}
    </div>
</div>


<style>

    .concerts-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(var(--concerts-length), 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
</style>