<template>
  <div class="homepage">
    <div class="homepage__container">
      <h2 class="homepage__title">
        Tages Talks
      </h2>
      <div class="homepage__content">
        <ul class="homepage__content-list">
          <li class="homepage__content-item" v-for="(card) in cardsAxios" :key="card.id">
            <UserCard
              :firstName="card.first_name"
              :lastName="card.last_name"
              :email="card.email"
              :avatar="card.avatar"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./homepage.ts"></script>
<style src="./homepage.css"></style>
