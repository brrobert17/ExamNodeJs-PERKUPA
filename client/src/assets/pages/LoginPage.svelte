<script>
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";
    import {api} from "../../api/axios.js";
    import {authStore, logIn} from "../stores/globalStore.js";
    import Navbar from "../components/Navbar.svelte";

    let user = {
        username: "",
        password: ""
    }

    async function handleLogin() {
        const result = await api.post('/login', {"user": user});
        if (result.data.user) {
            console.log("user logIn: ", result.data);
            logIn(result.data.user, result.data.token);
            toast.success("login confirmed");
            setTimeout(() => navigate(localStorage.getItem('ticket') ? "/ticket" : "/user"), 1000);
        } else {
            toast.error("unsuccessful login")
        }
    }
</script>
<div class="page-content">
    <div class="c-div">
        <div class="login-div">
            <h1 class="login-title">Login</h1>
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
                    <button class="login-button" on:click={handleLogin}>
                        LogIn
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Toaster/>
</div>