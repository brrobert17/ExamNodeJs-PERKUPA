<script>
    export let title;
</script>
<div class="title-box">
    <div class="title-box-overlay"></div>
    <p class="perkupa-title" style={title === "CONTACT PERKUPA" || "TICKET TO PERKUPA" ? "letter-spacing: 4vw" : ""}>{title}</p>
</div>
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
        z-index: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.5) 56.25%);
        pointer-events: none;
    }
</style>