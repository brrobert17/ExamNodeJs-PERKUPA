<script>

    import ConcertItem from "../components/ConcertItem.svelte";
    import {api} from "../../api/axios.js";
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";

    const concert = JSON.parse(localStorage.getItem('ticket'));
    let user = localStorage.getItem('user');
    user = user ? JSON.parse(user) : null
    let ticketNumber = 1;

    const buyTicket = async () => {
        if (confirm(`Are you sure you want to buy ${ticketNumber} ticket(s) to the ${concert.title.toUpperCase()}
        for ${ticketNumber * concert.price} DKK ?`)) {
            await api.patch(`/concerts/ticket/${concert._id}`, {
                concert: concert,
                user: user,
                pcs: ticketNumber
            }).then(response => {
                if (response.data.message) {
                    toast.success("Enjoy the show!");
                    localStorage.removeItem('ticket');
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    setTimeout(()=> {
                        window.open(response.data.emailUrl);
                        navigate(`/user/#${concert._id}`);
                    }, 1500);
                }
            }).catch(err => {
                toast.error("unsuccessful, try again!")
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
        <div class="c-div" >
            <div class="item-div" style="text-align: center">
                <h2>Please log in to continue</h2>
                <button class="login-button"  on:click={()=> navigate("/login")}>
                    LOGIN</button>
                <br>
                <h2>Not a user yet?</h2>
                <button class="login-button"  on:click={()=> navigate("/register")}>
                    REGISTER</button>
            </div>


        </div>
    {/if}
</div>
<Toaster/>

<style>
 .form-content {
     margin-left: 15vw;
     margin-top: 5vh;
 }
 .item-div {
     display: flex;
     flex-direction: column;
     font-weight: 700;
 }


</style>