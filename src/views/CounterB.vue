<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-title>📚 Counter B</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div>
                <h2>Counter B</h2>
                <p>Angka sekarang: {{ counter.totalAngka }}</p>

                <button @click="counter.tambahPelan">Tambah Pelan (ada delay)</button>
                <br/><br/>
                <button @click="pindahLokasi">Pindah ke Counter A</button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { useCounterStore } from '@/stores/counterStore';
    import { useRouter } from 'vue-router';

    const counter = useCounterStore()
    const router = useRouter()

    const pindahLokasi = () => {
        router.push("/counter-a")
    }
</script>