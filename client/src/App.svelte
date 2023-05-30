<script>
    import {Router, Route} from "svelte-navigator";
    import LoginPage from "./assets/pages/LoginPage.svelte";
    import RegisterPage from "./assets/pages/RegisterPage.svelte";
    import UserPage from "./assets/pages/UserPage.svelte";
    import HomePage from "./assets/pages/HomePage.svelte";
    import Navbar from "./assets/components/Navbar.svelte";
    import LivePage from "./assets/pages/LivePage.svelte";
    import MerchPage from "./assets/pages/MerchPage.svelte";
    import RecordsPage from "./assets/pages/RecordsPage.svelte";
    import TicketPage from "./assets/pages/TicketPage.svelte";
    import AdminPage from "./assets/pages/AdminPage.svelte";
</script>
<Router>
    <Route path="/" primary={false}>
        <Navbar activeTab="home" profile={false}/>
        <HomePage/>
    </Route>
    <Route path="register" primary={false}>
        <Navbar activeTab="register" profile={true}/>
        <RegisterPage/>
    </Route>
    <Route path="admin" primary={false}>
        <Navbar activeTab="admin" profile={true}/>
        <AdminPage/>
    </Route>
    <Route path="login" primary={false}>
        <Navbar activeTab="login" profile={true}/>
        <LoginPage/>
    </Route>
    <Route path="user" primary={false}>
        <Navbar activeTab="user" profile={true}/>
        <UserPage/>
    </Route>
    <Route path="live" primary={false}>
        <Navbar activeTab="live" profile={false}/>
        <LivePage/>
    </Route>
    <Route path="merch" primary={false}>
        <Navbar activeTab="merch" profile={false}/>
        <MerchPage/>
    </Route>
    <Route path="records" primary={false}>
        <Navbar activeTab="records" profile={false}/>
        <RecordsPage/>
    </Route>
    <Route path="ticket" primary={false}>
        <Navbar activeTab="" profile={false}/>
        <TicketPage/>
    </Route>
</Router>
