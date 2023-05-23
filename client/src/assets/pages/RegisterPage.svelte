<script>
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";

    let user = {
        username: "",
        password: ""
    }

    async function handleRegister() {
        // let response = await fetch($BASE_URL +'/register', {
        //     credentials: 'include',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(user)
        // });

        // <!--let result = await response.json();-->
        // <!--if(result.username === user.username) {-->
        // <!--    console.log(result);-->
        // //     toast.success("registration confirmed");
        // //     setTimeout(()=>navigate("/login"), 1500);
        // // }
    }
</script>

<a href="/">Home</a>
<div class="c-div">
    <div class="login-div">
        <h1 class="login-title">Register</h1>
        <div class="form-div">
            <form>
                <div>
                    <label for="un">username</label>
                    <input id="un" bind:value={user.username} type="text">
                </div>
                <div>
                    <label for="pw">password</label>
                    <input id="pw" bind:value={user.password} type="password">
                </div>
            </form>
            <div>
                <button class="login-button" on:click={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    </div>
</div>
<Toaster/>