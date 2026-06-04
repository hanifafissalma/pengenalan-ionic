<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kamera Preview</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div id="cameraPreview" class="preview-box"></div>

      <ion-button expand="block" @click="startCamera">
        Start Camera
      </ion-button>

      <ion-button expand="block" color="danger" @click="stopCamera">
        Stop Camera
      </ion-button>

      <ion-button expand="block" color="success" @click="takePicture">
        Ambil Foto
      </ion-button>

      <div v-if="photo">
        <h3>Hasil Foto:</h3>
        <img :src="photo" class="result-image" />
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { CameraPreview } from '@capacitor-community/camera-preview';

const photo = ref(null);

const startCamera = async () => {
  await CameraPreview.start({
    position: 'rear',
    parent: 'cameraPreview',
    className: 'camera-feed',
    width: 250,
    height: 350,
  });
};

const stopCamera = async () => {
  await CameraPreview.stop();
};

const takePicture = async () => {
  const result = await CameraPreview.capture({
    quality: 85,
    rotateWhenSave: false,
  });

  photo.value = `data:image/jpeg;base64,${result.value}`;
};
</script>

<style scoped>
  .preview-box {
    width: 250px;
    height: 350px;
    /* border: 2px solid #333; */
    margin: 0 auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  #cameraPreview {
    position: relative;
    width: 250px;
    height: 350px;
    margin: 0 auto;
    overflow: hidden;
  }

  .camera-feed {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }

  .result-image {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
  }
</style>
