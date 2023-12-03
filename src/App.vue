<template>
    <header class="navbar navbar-expand navbar-dark flex-column bd-navbar">
        <a class="navbar-brand mr-0 mr-md-2" href="/" aria-label="Safe">
            <img src="@/assets/icons/safe.svg" alt="safe">
        </a>
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-row">
                <li class="nav-item">
                    <a class="nav-link" :class="{'active': isActive('/eth')}" href="/eth">ETH</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{'active': isActive('/erc20')}" href="/erc20">ERC20</a>
                </li>
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link " :class="{'active': isActive('/btc')}" href="/btc">BTC</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link " :class="{'active': isActive('/ltc')}" href="/ltc">LTC</a>-->
<!--                </li>-->
            </ul>
        </div>
    </header>


    <main class="main"><RouterView /></main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (href) => {
    return href === route.path;
}
</script>
