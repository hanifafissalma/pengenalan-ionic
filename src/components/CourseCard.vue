<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>{{ course?.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <p>{{ course?.body }}</p>
            <ion-button expand="block" color="primary" @click="goLive">
                Mulai Praktikum
            </ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
    import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/vue'

    defineProps({ course: Object })

    const goLive = () => {
        window.open('https://ionic.io/ionicons', '_blank')
    }
</script>

<style scoped>
    ion-card {
        margin: 10px
    }
</style>