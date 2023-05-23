<script>
    import {logOut} from "../stores/globalStore.js";
    import {navigate} from "svelte-navigator";

    async function handleLogOut() {
        logOut();
        navigate("/");
    }
</script>

<a href="/login">login</a>
<a href="/">home</a>
<a href="/register">register</a>


