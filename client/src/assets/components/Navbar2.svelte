<script>
    import {navigate} from "svelte-navigator";
    import {logOut} from "../stores/globalStore.js";

    export let activeTab;
</script>
<div>
    <ul class="navbar">
        <li class={activeTab === 'home' ? 'active li' : 'li'}
        on:click={()=> navigate('/')}>home</li>
        <li class={activeTab === 'live' ? 'active li' : 'li'}
            on:click={()=> navigate('/live')}>live</li>
        <li class={activeTab === 'shop' ? 'active li' : 'li'}
            on:click={()=> navigate('/shop')}>shop</li>
        <li class={activeTab === 'contact' ? 'active li' : 'li'}
            on:click={()=> navigate('/contact')}>contact</li>
        <div class="li" id="drop-down">
            <li>myPerkupa</li>
            <ul class="drop-down-menu">
                <li on:click={()=> navigate('/login')}>login</li>
                <li on:click={logOut}>logout</li>
                <li on:click={()=> navigate('/register')}>register</li>
                <li on:click={()=> navigate('/admin')}>admin</li>
            </ul>
        </div>
    </ul>

</div>
<style>
    .navbar {
        background-color: #2f2f2f;
        list-style: none;
        display: flex;
        padding: 0;
        cursor: pointer;

    }
    ul {
        margin: 0;
    }

    .li {
        color: #bc5702;
        font-weight: 800;
        letter-spacing: .4em;
        font-size: 1.3em;
        font-family: inherit;
        padding: 1.5em 0;
        width: 20%;
        text-align: center;

    }

    .li:hover {
        background-color: #444444;
    }

    .active {
        background-color: #242424;
    }

    #drop-down {
        position: relative;
    }

    .drop-down-menu {
        font-size: 1em;
        width: 100%;
        list-style: none;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        background-color: rgb(30, 30, 30);
        position: absolute;
        padding: 0;
        display: none;
        height: 0;
        flex-direction: column;
        justify-content: space-around;
        transition: all 0.5s ease;
    }

    .drop-down-menu > li {
        padding: 1em 0;
    }

    .drop-down-menu > li:hover {
        background-color: rgb(60, 59, 59)
    }

    #drop-down:hover > .drop-down-menu {
        display: flex;
        height: auto;
        z-index: 999;
    }
</style>