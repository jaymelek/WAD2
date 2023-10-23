<template>

    <div class="container">
        <!-- <h1>This is the profile page!</h1> -->
        <div class="row mt-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-1 d-flex align-items-center">
                <img src="../assets/profile.png" class="img-fluid mx-auto">
            </div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-2 d-flex align-items-center">
                <p class="name">John Doe</p>
            </div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 mt-3 order-4">
                <div class="info-border">
                    <p><strong>History of past games: </strong>
                    <ul>
                        <li>Bang Card</li>
                        <li>Betrayal</li>
                    </ul>
                    </p>
                    <p><strong>Favourite Games: </strong>
                    <ul>
                        <li>Skull</li>
                        <li>Splendor</li>
                    </ul>
                    </p>
                </div>
            </div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-3 mt-3 ">
                <div class="info-border">
                    <p><strong>Email:</strong> johndoe@smu.edu.sg</p>
                    <p><strong>Telegram:</strong> </p>
                    <p><strong>Membership Status:</strong> You are a member!</p>
                </div>
            </div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-5 mt-3">
                <div class="info-border">
                    <p><strong>Current borrowing: </strong></p>
                    <ul>
                        <li>Example 1</li>
                        <li>Example 2</li>
                        <li>Example 3</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.name {
    font-size: 30px;
    margin: auto;
}

@media screen and (min-width: 768px){
    .info-border{
        width: 50%;
    }
}

.info-border {
    border: 1px;
    border-radius: 25px;
    background-color: lavender;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: left;
    overflow: hidden;
    /* width: 50%; */
    /* max-width: 50%; */
    margin: auto;
}
</style>