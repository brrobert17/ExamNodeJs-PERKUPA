<script>
    import {onMount} from "svelte";
    import toast, {Toaster} from "svelte-french-toast";
    import {api} from "../../api/axios.js";
    import {getToken, getUser, logOut} from "../stores/globalStore.js";
    import './styles/form.css'
    import './styles/contact.css'

    const user = getUser();

    let email = {
        subject: "",
        text: "",
        from: ""
    }

    if (user) {
        email.from = user.email;
    }

    async function handleContact() {
        await toast.promise(api.post("/contact", email).then(res => {
            setTimeout(() => {
                email.subject = "";
                email.from = "";
                email.text = "";
                window.open(res.data.emailUrl);
            }, 1500)
        }), {
            loading: 'Sending email...',
            success: 'Email sent successfully!',
            error: 'Failed to send email.'
        })
    }
</script>
<div class="page-content">
    <div class="contact-div">
        <div class="input-cont">
            <label for="un">email</label>
            <input class="" id="un" bind:value={email.from} type="email" placeholder="your email address">
        </div>
        <div class="input-cont">
            <label for="pw">subject</label>
            <input class="" id="pw" bind:value={email.subject} type="text" placeholder="subject">
        </div>
        <div class="input-cont">
            <label for="tx">message</label>
            <textarea id="tx" cols="45" rows="10" bind:value={email.text}
                      placeholder="write your email here"></textarea>
        </div>

        <div  class="login-button-cont">
            <button class="login-button" style="width: 100%" on:click={handleContact}>
                Send
            </button>
        </div>
    </div>
</div>
<Toaster/>
