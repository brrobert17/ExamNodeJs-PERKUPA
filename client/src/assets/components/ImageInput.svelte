<script>
    import imgPlaceholder from '/src/public/placeholder-image.png';
    import {createEventDispatcher} from "svelte";

    let avatar, fileInput, base64Image;
    const dispatch = createEventDispatcher();

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            avatar = e.target.result;
            base64Image = e.target.result.split(',')[1];
            dispatch('imageSelected', base64Image);
        };
    };


</script>
<div id="app">
    {#if avatar}
        <img class="avatar" src="{avatar}" alt="d"/>
    {:else}
        <img
                class="avatar"
                src={imgPlaceholder}
                style="background-color: #4f4f4f; width: 25vw; height: 25vh; margin-bottom: 3vh"
                alt="placeholder"
        />
    {/if}
    <button class="login-button" on:click={() => { fileInput.click(); }}>Choose Image</button>
    <input
            style="display:none"
            type="file"
            accept=".jpg, .jpeg, .png"
            on:change={(e) => onFileSelected(e)}
            bind:this={fileInput}
    />
</div>
<style>
    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }
    .avatar {
        display: flex;
        height: 200px;
        width: 200px;
    }
</style>
