<script>
    import ConcertItem from "../components/ConcertItem.svelte";
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
    <div class="concerts-grid" style="margin-top: 3vh; --concerts-length: {concerts.length}">
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