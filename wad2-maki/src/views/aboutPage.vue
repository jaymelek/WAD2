<template>
    <div class="marginTop"></div>

    <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <div class="col-auto">
                <h1><span class="highlighted">About Us</span></h1>
                <h4>Meet the team behind this site!</h4>
            </div>
        </div>

        <div class="row justify-content-center text-center py-2">
            <div class="col-auto">
                <img src="../assets/beat.jpg" class="profileImg">
                <h4>Beatrice Gan</h4>
            </div>
            <div class="col-auto">
                <img src="../assets/jayme.jpg" class="profileImg">
                <h4>Jayme Lek</h4>
            </div>
        </div>

        <div class="row justify-content-center text-center py-2">
            <div class="col-auto">
                <img src="../assets/yuanfeng.jpg" class="profileImg">
                <h4>Yuan Feng</h4>
            </div>
            <div class="col-auto">
                <img src="../assets/daniel.jpeg" class="profileImg">
                <h4>Daniel Choi</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "aboutPage",
};
</script>

<style>
    .marginTop {
        height: 80px;
    }

    .highlighted {  
        background: linear-gradient(transparent 40%, #070F5F 40%);
    }

    .profileImg {
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
    }
</style>