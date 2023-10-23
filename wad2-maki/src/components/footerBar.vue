<template>
    <div class="footer">
        <div class="nav mb-3 justify-content-center">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
        </div>
        <div class="logos mb-3">
            <img src="../assets/instagram_logo.png" class="logo img-fluid mx-3" alt="">
            <img src="../assets/telegram_logo.png" class="logo img-fluid-mx-3" alt="">
        </div>
        <div class="bottom d-inline text-center">
            <p> &copy; Strategica . 2023</p>
        </div>
    </div>
</template>


<style>
.footer {
    width: 100%;
    padding: 70px 30px 20px;
    background-color: white;
    color: black;
    margin-top: 100px;
}

.logos {
    display: flex;
    justify-content: center;
}

.nav {
    margin: 30px;
    font-size: 20px;

}

.nav a {
    margin: 40px;
    text-decoration: none;
    color: black;
}

.nav a:hover {
    color: blue;
}

.logo {
    width: 50px;
    height: auto;
}
</style>