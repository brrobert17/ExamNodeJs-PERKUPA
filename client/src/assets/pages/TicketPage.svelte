<script>

    import ConcertItem from "../components/ConcertItem.svelte";
    import {api} from "../../api/axios.js";
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";

    const concert = JSON.parse(localStorage.getItem('ticket'));
    let user = localStorage.getItem('user');
    user = user ? JSON.parse(user) : null
    let ticketNumber = 0;

    const buyTicket = async () => {
        if (confirm(`Are you sure you want to buy ${ticketNumber} ticket(s) to the ${concert.title.toUpperCase()}
        for ${ticketNumber * concert.price} DKK ?`)) {
            console.log(concert);
            console.log(user);
            await api.patch(`/concerts/ticket/${concert._id}`, {
                concert: concert,
                user: user,
                pcs: ticketNumber
            }).then(response => {
                console.log(response.data.message);
                if (response.data.message) {
                    toast.success("Congratulations for your tickets! Enjoy the show!");
                    localStorage.removeItem('ticket');
                    setTimeout(()=> {
                        navigate("/");
                        window.open(response.data.emailUrl);
                    }, 1000);
                }
            }).catch(err => {
                console.log(err);
                toast.error("unsuccessful transaction, try again!")
            });

        }
    }
</script>

<div class="page-content">
    {#if user}
        <ConcertItem concert={concert} isButton={false}/>
        <div class="form-content">
            <div class="item-div">
                <label>
                    NUMBER OF TICKETS
                    <input type="number" bind:value={ticketNumber} style="width: 30px; border-radius: 3vh"/>
                </label>
                <p>PRICE: {ticketNumber * concert.price}</p>
                <p style="font-size: large">CUSTOMER INFORMATION:</p>
                <p>USERNAME: {user.username}</p>
                <p>EMAIL: {user.email}</p>
                <button class="login-button" style="width: 20vw"
                on:click={buyTicket}>Buy</button>
            </div>

        </div>
    {:else}
        <div class="c-div">
            <div class="item-div">
                <h2>Please log in to continue</h2>
                <button class="login-button"  on:click={()=> navigate("/login")}>
                    LOGIN</button>
            </div>

        </div>
    {/if}
</div>
<Toaster/>

<style>
 .form-content {
     margin-left: 10vw;
     margin-top: 10vh;
 }
 .item-div {
     display: flex;
     flex-direction: column;
     font-weight: 700;
 }


</style>