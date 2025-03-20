<script lang="ts" setup>
import { inject } from 'vue'

const reason = inject<string>('reason')
</script>

<template>
  <div class="no-account-container">
    <div class="no-account-header">
      <div class="__logo">
        <svg viewBox="0 0 48 42" class="drawerAnimation" xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg">
          <g style="display: inline">
            <rect style="fill: #d50b1e" width="48" height="42" x="0" y="0" />
            <path fill="#FFF" d="M21.464 23.96v-2h7.675v-3.99h7.67v-6.99H11.23v19.964h25.58V23.96" />
          </g>
        </svg>
      </div>
      <div class="__title">
        <h1>Segofy</h1>
        <h2>Unable to start application</h2>
      </div>
    </div>
    <div class="no-account-body">
      <div class="container">
        <p>Try to refresh the page</p>
        <p>If this error is still present please contact admin</p>
        <br /><br />
        <pre>{{ reason }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.no-account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .no-account-header {
    min-height: 400px;
    width: 100vw;
    background-color: var(--grey60);

    .__logo {
      width: 200px;
      margin: 2rem auto;
    }

    .__title {
      text-align: center;
      color: var(--primary-light);
      font-weight: bold;

      h2 {
        margin-top: 1.5rem;
        padding-top: 1rem;
        display: inline-block;
        border-top: 1px solid var(--primary-light);
      }
    }
  }

  .no-account-body {
    font-family: 'Open Sans', sans-serif;
    padding: 2rem 0;
    text-align: center;

    .logout-button {
      margin: 0 auto;
    }
  }
}
</style>
