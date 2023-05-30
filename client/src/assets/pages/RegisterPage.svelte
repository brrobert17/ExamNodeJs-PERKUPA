<script>
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";
    import './styles/loginRegister.css'
    import {api} from "../../api/axios.js";

    let user = {
        username: "",
        email: "",
        password: ""
    }

    async function handleRegister() {
        const response = await api.post("/register", user).catch(err => {
            toast.error("registration failed");
            console.log(err);
        });
        const result = response.data;
        if(result.error) {
            toast.error(result.error);
            setTimeout(() => location.reload(), 1500);
        }
        else {
            console.log(result);
            toast.success("registration confirmed");
            setTimeout(() => navigate("/login"), 1500);
        }
    }
</script>
<div class="page-content">
    <div class="c-div">
        <div class="form-div">
            <form>
                <div>
                    <label for="un">username</label>
                    <input id="un" bind:value={user.username} type="text">
                </div>
                <div>
                    <label for="em">email</label>
                    <input id="em" bind:value={user.email} type="text">
                </div>
                <div>
                    <label for="pw">password</label>
                    <input id="pw" bind:value={user.password} type="password">
                </div>
            </form>
            <div>
                <button class="login-button" on:click={handleRegister}>
                    REGISTER
                </button>
            </div>
        </div>
    </div>
    <Toaster/>
</div>

