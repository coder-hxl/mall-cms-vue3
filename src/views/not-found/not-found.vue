<template>
  <div class="not-found">
    <img src="@/assets/img/not-found.svg" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
@media (max-width: 768px) {
  .not-found {
    img {
      width: 300px;
    }
  }
}

@media (min-width: 768px) {
  .not-found {
    img {
      width: 600px;
    }
  }
}

@media (min-width: 1200px) {
  .not-found {
    img {
      width: 900px;
    }
  }
}

.not-found {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
