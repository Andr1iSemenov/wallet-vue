import {createRouter, createWebHistory} from 'vue-router'
import CryptoForm from "@/views/Wallet.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/eth', component: CryptoForm, props: {currencyType: 'ETH'} },
        { path: '/erc20', component: CryptoForm, props: {currencyType: 'ERC20'} },
        { path: '/btc', component: CryptoForm, props: {currencyType: 'BTC'} },
        { path: '/ltc', component: CryptoForm, props: {currencyType: 'LTC'} },
    ]
})

export default router
