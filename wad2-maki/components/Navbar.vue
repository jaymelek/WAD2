<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link :to="{ name: 'testPage' }">
                    <a class="navbar-brand" href="#">
                        <img src="../src/assets/logo.png" style="width: 100px; height: auto;">
                    </a>
                </router-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="router-link" :to="{ name: 'borrowPage' }">
                                <a class="nav-link active" aria-current="page" href="#">Borrow</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="router-link" :to="{ name: 'demoPage' }">
                                <a class="nav-link active" aria-current="page" href="#">Demo</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="router-link" :to="{ name: 'feedbackPage' }">
                                <a class="nav-link active" aria-current="page" href="#">Feedback</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="router-link" :to="{ name: 'payPage' }">
                                <a class="nav-link active" aria-current="page" href="#">Pay</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="router-link" :to="{ name: 'reviewPage' }">
                                <a class="nav-link active" aria-current="page" href="#">Reviews</a>
                            </router-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "nav-bar"
}
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>