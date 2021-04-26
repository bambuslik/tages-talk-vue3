<template>
  <div class="user-card">
    <div class="user-card__wrapper">
      <img class="user-card__img" :src="avatar">
    </div>
    <h3 class="user-card__name">
      {{ firstName }} {{ lastName }}
    </h3>
    <h4 class="user-card__email">
      {{ email }}
    </h4>
  </div>
</template>

<script lang="ts" src="./user-card.ts"></script>
<style src="./user-card.css"></style>
