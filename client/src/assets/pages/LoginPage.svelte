<script>
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";
    import {api} from "../../api/axios.js";
    import {getUser, logIn} from "../stores/globalStore.js";
    import './styles/loginRegister.css'

    let user = {
        username: "",
        password: ""
    }

    async function handleLogin() {
        await api.post('/login', {"user": user}).then(response => {
            logIn(response.data.user, response.data.token);
            toast.success(`Welcome ${response.data.user.username}!`);
            setTimeout(() => {
                if(localStorage.getItem('ticket')) {
                    navigate('/ticket');
                } else if(localStorage.getItem('cart')) {
                    navigate('/checkout');
                } else if (getUser().admin) {
                    navigate('/admin')
                }
                else {
                    navigate('/user')
                }
            }, 1000);
        }).catch((err) => {
            toast.error(err.response.data.error);
        });
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
                    <label for="pw">password</label>
                    <input id="pw" bind:value={user.password} type="password">
                </div>
            </form>
            <div>
                <button class="login-button" on:click={handleLogin}>
                    LOGIN
                </button>
            </div>
        </div>
    </div>
</div>
<Toaster/>
