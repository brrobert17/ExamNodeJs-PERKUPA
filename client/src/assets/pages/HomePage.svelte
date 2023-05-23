<script>
    import {onMount} from "svelte";
    import {api} from "../../api/axios.js";

    import Navbar from "../components/Navbar.svelte";


    let test = "";

    onMount(async () => {
        const response = await api.get('/test');
        test = response.data.data;
    });

</script>
<Navbar/>
<h1>Home</h1>
<h5>{test}</h5>