<script>
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import '@splidejs/svelte-splide/css';
    import './styles/slider.css'
    import PageTitle from "../components/PageTitle.svelte";

    let images = [];
    for (let i = 1; i < 16; i++) {
        images.push(`/src/public/sliderImages/img-per${i}.png`)
    }

</script>
<div class="page-content">
    <div style="position: relative; margin-top: 10vh">
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
</div>
<PageTitle title="LISTEN HERE"/>
<div class="page-content">
    <div style="margin-top: 5vh" class="sc-container">
        <div class="sc-overlay"></div>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1511176231&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
    </div>
</div>


