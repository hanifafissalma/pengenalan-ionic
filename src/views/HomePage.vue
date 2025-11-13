<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-title>📚 Pembelajaran Online</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row v-if="courses && courses.length">
                    <ion-col size="12" size-md="6" v-for="course in courses" :key="course?.id">
                        <CourseCard :course="course"/>
                    </ion-col>
                </ion-row>
                <ion-text v-else>
                    <p class="ion-text-center">Memuat data...</p>
                </ion-text>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue'
    import CourseCard from '@/components/CourseCard.vue'
    import { getCourses } from '@/services/courseService'

    interface Course {
        id: string
        title: string
        body: string
    }

    const courses = ref<Course[]>([])

    onMounted(async () => {
        courses.value = await getCourses()
    })
</script>
