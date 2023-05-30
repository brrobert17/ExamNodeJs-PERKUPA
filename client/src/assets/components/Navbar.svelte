<script>
    import {getToken, getUser, invalidateUser, logIn, logOut} from "../stores/globalStore.js";
    import {Toaster} from "svelte-french-toast";
    import {onMount} from "svelte";
    import {api} from "../../api/axios.js";

    export let activeTab;
    export let profile;
    let aTagColor = '#3D58F2';
    if (profile) {
        aTagColor = '#c8b533'
    }

    const clickProfile = () => {
        if (profile) {
            profile = false;
            aTagColor = '#3D58F2';
            activeTab = '';
        } else {
            profile = true;
            aTagColor = '#c8b533';
            activeTab = 'MyPerkupa';
        }
    };
    let sessionUser;
    onMount(async () => {
        const user = getUser();
        if(user) {
            console.log("navbarlog", user);
        }
        console.log("tokenNavAuth",getToken())
        await api.get("/auth", {
            headers: {
                Authorization: getToken()
            }
        }).then((response)=> {
            console.log(response.data);
                logIn(response.data.user, response.data.token);
                sessionUser = getUser();
        }).catch(error => {
            console.log(error);
            invalidateUser();
        });
    });

</script>
<div class="navbar" style="--a-tag-color: {aTagColor}">
    <ul>
        {#if !profile}
            <li class={activeTab === 'home' ? 'active' : ''}>
                <a href="/">Home</a>
            </li>
            <li class={activeTab === 'live' ? 'active' : ''}>
                <a href="/live">Live</a>
            </li>
            <li class={activeTab === 'merch' ? 'active' : ''}>
                <a href="/merch">Merch</a>
            </li>
            <li class={activeTab === 'records' ? 'active' : ''}>
                <a href="/records">Records</a>
            </li>
        {:else }
            <li class={activeTab === 'user' ? 'active' : ''}>
                {#if sessionUser}
                    <a href="/user">User</a>
                {:else}
                    <p></p>
                {/if}
            </li>
            <li>
                {#if sessionUser}
                    <a href="#" on:click={logOut}>Logout</a>
                {:else}
                    <p></p>
                {/if}
            </li>
            {#if sessionUser && sessionUser.admin}
                <li class={activeTab === 'admin' ? 'active' : ''}>
                    <a href="/admin">ADMIN</a>
                </li>
            {/if}
            <li class={activeTab === 'register' ? 'active' : ''}>
                {#if !sessionUser}
                    <a href="/register">Register</a>
                {:else}
                    <p></p>
                {/if}
            </li>
            <li class={activeTab === 'login' ? 'active' : ''}>
                {#if !sessionUser}
                    <a href="/login">Login</a>
                {:else}
                    <p></p>
                {/if}
            </li>
        {/if}
        <li class={activeTab === 'MyPerkupa' ? 'active' : ''}>
            <a href="#" id="drop"
               on:click={clickProfile}
            >MyPERKUPA</a>
        </li>
    </ul>
</div>
<Toaster/>

<style>
    a {
        color: var(--a-tag-color);
    }

    .navbar {
        min-width: 600px;
        width: 100vw;
        box-sizing: border-box;
        background-color: #2f2f2f
    }

    .navbar ul {
        height: 7vh;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
    }

    .navbar li {
        width: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar li a {
        cursor: pointer;
        font-size: 2.5vh;
        font-weight: 900;
        letter-spacing: 0.3vw;
    }

    .navbar li.active {
        background-color: #242424;
    }

    .navbar li.active a {
        color: #F27405;
    }

    .navbar li a:hover {
        color: #61D94E;
    }
</style>


