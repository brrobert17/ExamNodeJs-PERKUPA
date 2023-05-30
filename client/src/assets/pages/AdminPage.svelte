<script>
    import {api} from "../../api/axios.js";
    import ImageInput from "../components/ImageInput.svelte";
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.min.css';
    import {onMount} from "svelte";
    import toast, {Toaster} from "svelte-french-toast";

    let selectedDate;
    let base64Image;
    let concert = {
        title: "",
        venue: "",
        tickets: 0,
        price: 0,
        dateTime: new Date().toISOString()
    };
    const options = {
        time_24hr: true,
        dateFormat: "Y-m-d @ H:i",
        enableTime: true,
    };

    onMount(() => {
        const flatpickrInstance = flatpickr('#datepicker', options);
        flatpickrInstance.config.onChange.push((selectedDates) => {
            concert.dateTime = selectedDates[0].toISOString();
        });
    });

    const handleImageSelect = (data) => {
        console.log(data);
        base64Image = data.detail;
    }

    async function handleUpload() {
        //upload img to firebaseStorage and get downloadUrl
        const formData = new FormData();
        formData.append('file', base64Image);
        const imgRes = await toast.promise(api.post('/test/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).catch(console.error), {
            loading: 'Uploading image...',
            success: 'Image uploaded successfully!',
            error: 'Failed to upload image.'
        });
        const imgUrl = imgRes.data.url;
        console.log("img: ",imgUrl);
        //create concert in the database
        const docRes = await api.post('/concerts', {...concert, img: imgUrl}).catch(console.error);
        console.log("doc: ",docRes.data);
    }

</script>
<div class="page-content">
    <h1>Admin Options:</h1>
    <h3>New Concert +</h3>
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
                    <input class="form-input" type="text" id="datepicker" placeholder="Select a date" bind:value={concert.dateTime}/>
                </div>
            </form>
                <button class="login-button" style="width: 98%; margin-left: 3vw; border-radius: 2vh" on:click={handleUpload}>CREATE!</button>
        </div>
        <ImageInput on:imageSelected={handleImageSelect}/>
    </div>
</div>
<Toaster/>
<style>
    .new-concert-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 3vw;
        grid-row-gap: 3vh;
        align-items: center;
        background-color: #191919;
    }
    .form-group {
        margin-bottom: 2vh;
        margin-left: 3vw;
    }

    .form-input {
        width: 100%;
        padding: 1vh;
    }
</style>
