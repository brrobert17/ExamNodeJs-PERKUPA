<script>
    import {api} from "../../api/axios.js";
    import ImageInput from "../components/ImageInput.svelte";
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.min.css';
    import './styles/form.css'
    import {onMount} from "svelte";
    import toast, {Toaster} from "svelte-french-toast";
    import {navigate} from "svelte-navigator";
    import {getUser} from "../stores/globalStore.js";

    const user = getUser();

    const defaultDate = new Date().toISOString();
    let selectedDate;
    let base64Image;
    let concert = {
        title: "",
        venue: "",
        tickets: 0,
        price: 0,
        dateTime: defaultDate
    };
    let item = {
        name: "",
        price: 0,
        description: ""
    }
    const options = {
        time_24hr: true,
        altInput: true,
        altFormat: "Y. F j - H:i ",
        dateFormat: "Y-m-dTH:i",
        enableTime: true,
    };

    onMount(() => {
        const flatpickrInstance = flatpickr('#datepicker', options);
        flatpickrInstance.config.onChange.push((selectedDates) => {
            concert.dateTime = selectedDates[0].toISOString();
        });
    });

    const handleImageSelect = (data) => {
        base64Image = data.detail;
    }

    async function validateAndUploadConcert() {
        if (!base64Image) {
            toast.error("please choose an image!");
        } else if (!concert.title || !concert.venue || concert.price === 0 || concert.tickets === 0 || concert.dateTime === defaultDate) {
            toast.error("please fill out all the fields of the form!")
        } else {
            await handleUploadConcert();
        }
    }

    async function validateAndUploadItem() {
        if (!base64Image) {
            toast.error("please choose an image!");
        } else if (!item.name || !item.description || item.price === 0) {
            toast.error("please fill out all the fields of the form!")
        } else {
            await handleUploadItem();
        }
    }

    async function handleUploadItem() {

        //upload img to firebaseStorage and get downloadUrl
        const formData = new FormData();
        formData.append('file', base64Image);
        let imgUrl;
        await toast.promise(api.post('/concerts/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => imgUrl = res.data.url), {
            loading: 'Uploading image...',
            success: 'Image uploaded successfully!',
            error: 'Failed to upload image.'
        });

        if (imgUrl) {
            await toast.promise(api.post('/items', {...item, img: imgUrl}).then(() => {
                setTimeout(() => navigate("/shop"), 1000)
            }), {
                loading: 'Creating new item...',
                success: 'Item created successfully',
                error: 'Failed to create item.'
            });
        }
    }

    async function handleUploadConcert() {

        //upload img to firebaseStorage and get downloadUrl
        const formData = new FormData();
        formData.append('file', base64Image);
        let imgUrl;
        await toast.promise(api.post('/concerts/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => imgUrl = res.data.url), {
            loading: 'Uploading image...',
            success: 'Image uploaded successfully!',
            error: 'Failed to upload image.'
        });

        //create concert in the database
        if (imgUrl) {
            await toast.promise(api.post('/concerts', {...concert, img: imgUrl}).then(() => {
                setTimeout(() => navigate("/live"), 1000)
            }), {
                loading: 'Creating new concert...',
                success: 'Concert created successfully',
                error: 'Failed to create concert.'
            });
        }
    }

</script>
<div class="page-content">
    {#if user && user.admin}
        <h1>New Concert +</h1>
        <div class="new-concert-grid">
            <div>
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-input" id="title" type="text" bind:value={concert.title}/>
                    </div>
                    <div class="form-group">
                        <label for="venue">Venue</label>
                        <input class="form-input" id="venue" type="text" bind:value={concert.venue}/>
                    </div>
                    <div class="form-group">
                        <label for="no-tickets">Amount of tickets</label>
                        <input class="form-input" id="no-tickets" type="number" bind:value={concert.tickets}/>
                    </div>
                    <div class="form-group">
                        <label for="price">Price(DKK)</label>
                        <input class="form-input" id="price" type="number" bind:value={concert.price}/>
                    </div>
                    <div class="form-group">
                        <label for="datepicker">Date and time</label>
                        <input class="form-input" type="text" id="datepicker" placeholder="Select a date"
                               bind:value={concert.dateTime}/>
                    </div>
                </form>
                <button class="login-button"
                        style="width: 96%; margin-left: 3vw; border-radius: 2vh; margin-bottom: 3vh"
                        on:click={validateAndUploadConcert}>CREATE NEW CONCERT!
                </button>
            </div>
            <ImageInput on:imageSelected={handleImageSelect}/>
        </div>
        <h1>New Item +</h1>
        <div class="new-concert-grid">
            <div>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input class="form-input" id="name" type="text" bind:value={item.name}/>
                    </div>
                    <div class="form-group">
                        <label for="itemPrice">Price(DKK)</label>
                        <input class="form-input" id="itemPrice" type="number" bind:value={item.price}/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-input" id="description" style="height: 10vh; font-family: inherit"
                                  bind:value={item.description}></textarea>
                    </div>
                </form>
                <button class="login-button"
                        style="width: 96%; margin-left: 3vw; border-radius: 2vh; margin-bottom: 3vh"
                        on:click={validateAndUploadItem}>CREATE NEW ITEM!
                </button>
            </div>
            <ImageInput on:imageSelected={handleImageSelect}/>
        </div>
    {:else}
        <h1>You need admin authority to view this page!</h1>
    {/if}
</div>
<Toaster/>
