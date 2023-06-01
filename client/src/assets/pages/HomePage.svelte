<script>
    import {onMount} from "svelte";
    import {api} from "../../api/axios.js";
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import '@splidejs/svelte-splide/css';
    import './styles/slider.css'
    import toast, {Toaster} from "svelte-french-toast";

    let images = [];
    for (let i = 1; i < 14; i++) {
        images.push(`/src/public/sliderImages/img-per${i}.png`)
    }

</script>
<div class="title-box">
    <div class="title-box-overlay"></div>
    <p class="perkupa-title">PERKUPA BAND</p>
</div>
<div class="page-content">
    <div style="position: relative; margin-top: 5vh">
        <Splide class={"hero-slider"}
                options={{
                    type: 'loop',
                    autoplay: true,
                    perMove: 1,
                    perPage: 3,
                    speed: 2500,
                    interval: 8000,
                    easing: 'ease',
                    rewind: true,
                    gap: '1em',
                    arrowPath: "m39.01139,21.97856c0.94656,-1.05077 0.94656,-2.75445 0,-3.80522l-15.42753,-17.12277c-0.94673,-1.05073 -2.48156,-1.05073 -3.42829,0c-0.94673,1.05075 -0.94673,2.75434 0,3.80508l13.71331,15.2203l-13.71331,15.22034c-0.94673,1.05077 -0.94673,2.75427 0,3.80504c0.94673,1.05077 2.48156,1.05077 3.42829,0l15.42753,-17.12277zm-38.8851,0.78799l37.17088,0l0,-5.38119l-37.17088,0l0,5.38119z"
                }}
        >
            {#each images as img}
                <SplideSlide>
                    <div class="img-gradient">
                        <img src={img} alt="photo1" class="mySplideImage"/>
                    </div>
                </SplideSlide>
            {/each}

        </Splide>
    </div>
    <div style="margin-top: 5vh" class="sc-container">
        <div class="sc-overlay"></div>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1511176231&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
    </div>



</div>
<Toaster/>
<style>
    .perkupa-title {
        font-size: 4vh;
        font-weight: 1000;
        letter-spacing: 5vw;
        line-height: 4vh;
    }

    .title-box {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #191919;
        padding: 2vh 3vw 2vh 3vw;
    }
    .title-box-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1; /* Place the overlay above the iframe */
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.5) 56.25%);
        pointer-events: none; /* Make sure the overlay doesn't intercept the click events */
    }
</style>

