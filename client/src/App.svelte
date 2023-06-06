<script>
    import {Router, Route} from "svelte-navigator";
    import LoginPage from "./assets/pages/LoginPage.svelte";
    import RegisterPage from "./assets/pages/RegisterPage.svelte";
    import UserPage from "./assets/pages/UserPage.svelte";
    import HomePage from "./assets/pages/HomePage.svelte";
    import LivePage from "./assets/pages/LivePage.svelte";
    import TicketPage from "./assets/pages/TicketPage.svelte";
    import AdminPage from "./assets/pages/AdminPage.svelte";
    import Footer from "./assets/components/Footer.svelte";
    import ContactPage from "./assets/pages/ContactPage.svelte";
    import ShopPage from "./assets/pages/ShopPage.svelte";
    import CheckOutPage from "./assets/pages/CheckOutPage.svelte";
    import Navbar2 from "./assets/components/Navbar2.svelte";
    import PageTitle from "./assets/components/PageTitle.svelte";
</script>
<Router>
    <Route path="/" primary={false}>
        <PageTitle title="PERKUPA BAND"/>
        <Navbar2 activeTab="home"/>
        <HomePage/>
        <Footer/>
    </Route>
    <Route path="register" primary={false}>
        <PageTitle title="REGISTER"/>
        <Navbar2 activeTab="register"/>
        <RegisterPage/>
        <Footer/>
    </Route>
    <Route path="admin" primary={false}>
        <PageTitle title="ADMIN"/>
        <Navbar2 activeTab="admin"/>
        <AdminPage/>
        <Footer/>
    </Route>
    <Route path="login" primary={false}>
        <PageTitle title="LOGIN"/>
        <Navbar2 activeTab="login"/>
        <LoginPage/>
        <Footer/>
    </Route>
    <Route path="user" primary={false}>
        <PageTitle title="USER"/>
        <Navbar2 activeTab="user"/>
        <UserPage/>
        <Footer/>
    </Route>
    <Route path="live" primary={false}>
        <PageTitle title="PERKUPA LIVE"/>
        <Navbar2 activeTab="live"/>
        <LivePage/>
        <Footer/>
    </Route>
    <Route path="shop" primary={false}>
        <PageTitle title="PERKUPA SHOP"/>
        <Navbar2 activeTab="shop"/>
        <ShopPage/>
        <Footer/>
    </Route>
    <Route path="contact" primary={false}>
        <PageTitle title="CONTACT PERKUPA"/>
        <Navbar2 activeTab="contact"/>
        <ContactPage/>
        <Footer/>
    </Route>
    <Route path="ticket" primary={false}>
        <PageTitle title="TICKET TO PERKUPA"/>
        <Navbar2 activeTab=""/>
        <TicketPage/>
        <Footer/>
    </Route>
    <Route path="checkout" primary={false}>
        <PageTitle title="CHECKOUT"/>
        <Navbar2 activeTab=""/>
        <CheckOutPage/>
        <Footer/>
    </Route>

</Router>
