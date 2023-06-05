<script>
    import {Router, Route} from "svelte-navigator";
    import LoginPage from "./assets/pages/LoginPage.svelte";
    import RegisterPage from "./assets/pages/RegisterPage.svelte";
    import UserPage from "./assets/pages/UserPage.svelte";
    import HomePage from "./assets/pages/HomePage.svelte";
    import Navbar from "./assets/components/Navbar.svelte";
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
        <Navbar2 activeTab="home" profile={false}/>
        <HomePage/>
        <Footer/>
    </Route>
    <Route path="register" primary={false}>
        <PageTitle title="REGISTER"/>
        <Navbar2 activeTab="register" profile={true}/>
        <RegisterPage/>
        <Footer/>
    </Route>
    <Route path="admin" primary={false}>
        <PageTitle title="ADMIN"/>
        <Navbar2 activeTab="admin" profile={true}/>
        <AdminPage/>
        <Footer/>
    </Route>
    <Route path="login" primary={false}>
        <PageTitle title="LOGIN"/>
        <Navbar2 activeTab="login" profile={true}/>
        <LoginPage/>
        <Footer/>
    </Route>
    <Route path="user" primary={false}>
        <PageTitle title="USER"/>
        <Navbar2 activeTab="user" profile={true}/>
        <UserPage/>
        <Footer/>
    </Route>
    <Route path="live" primary={false}>
        <PageTitle title="PERKUPA LIVE"/>
        <Navbar2 activeTab="live" profile={false}/>
        <LivePage/>
        <Footer/>
    </Route>
    <Route path="shop" primary={false}>
        <PageTitle title="PERKUPA SHOP"/>
        <Navbar2 activeTab="shop" profile={false}/>
        <ShopPage/>
        <Footer/>
    </Route>
    <Route path="contact" primary={false}>
        <PageTitle title="CONTACT PERKUPA"/>
        <Navbar2 activeTab="contact" profile={false}/>
        <ContactPage/>
        <Footer/>
    </Route>
    <Route path="ticket" primary={false}>
        <Navbar2 activeTab="" profile={false}/>
        <TicketPage/>
        <Footer/>
    </Route>
    <Route path="checkout" primary={false}>
        <Navbar2 activeTab="" profile={false}/>
        <CheckOutPage/>
        <Footer/>
    </Route>

</Router>
