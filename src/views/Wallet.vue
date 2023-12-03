<template>

    <div class="d-flex justify-content-center">
        <div class="col-7 crypto-form p-5">

            <div class="d-flex justify-content-between">
                <span class="grey network">Selected Currency</span>
                <h3 class="grey">{{ currencyType }}</h3>
            </div>

            <div class="your-address">
                <p class="text-center receive">Your Address</p>
                <h4 class="text-center mt-2">Balance: {{0}} {{ currencyType }}</h4>
                <div class="d-flex justify-content-center">
                    <vue-qrcode
                        value="0x9dd7CA2A77704836667CD69F805052656eF3aBB3"
                        width="200"
                        margin="0"
                    />
                </div>

                <div class="receive d-flex justify-content-center align-items-center mt-2">
                    <input type="text" class="form-control text-center" value="0x9dd7CA2A77704836667CD69F805052656eF3aBB3" readonly>
                    <img src="@/assets/icons/copy.svg" class="copy-icon" alt="copy" >
                </div>
            </div>

            <form class="mt-3">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Receiver" />
                </div>
                <div class="form-group mt-1">
                    <input type="text" class="form-control" placeholder="Amount" />
                </div>
                <button type="submit" class="btn btn-primary mt-2">SEND</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import VueQrcode from 'vue-qrcode'

defineProps({
    currencyType: String
});
</script>