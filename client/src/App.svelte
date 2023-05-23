<script>
    import {Router, Route} from "svelte-navigator";
    import LoginPage from "./assets/pages/LoginPage.svelte";
    import RegisterPage from "./assets/pages/RegisterPage.svelte";
    import UserPage from "./assets/pages/UserPage.svelte";
    import HomePage from "./assets/pages/HomePage.svelte";
</script>
<Router>
    <Route path="/" primary={false}><HomePage/></Route>
    <Route path="register" primary={false}><RegisterPage/></Route>
    <Route path="login" primary={false}><LoginPage/></Route>
    <Route path="user" primary={false}><UserPage/></Route>
</Router>
