<script>
    import {navigate} from "svelte-navigator";

    export let concert;
    export let isButton;
    import myImage from '/src/public/perkupa1c.png';
    import {api} from "../../api/axios.js";
    import {socket} from "../../api/socketIo.js";
    const dateObject = new Date(concert.dateTime);
    let cTime = dateObject.getHours().toString().padStart(2, '0') + ":" +
        dateObject.getMinutes().toString().padStart(2, '0');
    let cDate = dateObject.toLocaleDateString();

    const buyTicket = () => {
        localStorage.setItem('ticket', JSON.stringify(concert));
        navigate("/ticket");
    }
</script>
<div class="single-concert-grid">
    <div class="img-div">
        <img src={myImage} alt="myImg" style="height: 20vh"/>
    </div>
    <div class="date-time-div">
        <p>{cTime}</p>
        <p>{cDate}</p>
        {#if isButton}
        <button class="ticket-button" on:click={buyTicket}>
            Buy tickets</button>
            {/if}
    </div>
    <div class="">
        <p class="concert-title">{concert.title.toUpperCase()}</p>
        <p>Venue: {concert.venue}</p>
        <p>Entrance: {concert.price} DKK</p>
        <p>Tickets left: {concert.tickets} pcs</p>
    </div>

</div>

<style>
    .concert-title {
        font-size: large;
        font-weight: 700;
    }
    .single-concert-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 3fr;
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 3vw;
        grid-row-gap: 3vh;
        align-items: center;
        background-color: #191919;
    }
    .img-div {
        display: flex;
        margin-left: 2vw;
    }
    .date-time-div {
        text-align: center;
        min-width: 105px;
        font-weight: 700;
        font-size: 2vh;
    }
    .details-div {
        display: flex;
        flex-direction: column;
    }
    .ticket-button {
        background-color: #3D58F2;
        font-size: 2vh;
        color: #191919;
        font-family: inherit;
        font-weight: 700;
        border: #242424 solid 0.4vh;
        border-radius: 3vh;
        padding: 0.6vh 1.3vh 0.6vh 1.3vh;
        text-align: center;
        vertical-align: middle;
    }
</style>