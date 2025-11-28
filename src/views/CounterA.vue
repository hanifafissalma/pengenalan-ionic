<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-title>📚 Counter A</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div>
                <h2>Counter A</h2>
                <p>Angka sekarang: {{ counter.totalAngka }}</p>

                <button @click="counter.tambah">Tambah Cepat</button>
                <br/><br/>
                <button @click="pindahLokasi">Pindah ke Counter B</button>
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
        router.push("/counter-b")
    }
</script>