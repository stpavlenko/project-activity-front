<script setup></script>
<template>
  <div class="panel">
    <div class="panel__container">
      <p class="panel__text panel__text--light">01</p>
      <p class="panel__text panel__text--light">-</p>
      <p class="panel__text">06</p>
    </div>
    <div class="panel__btns">
      <button class="panel__btn back">
        <svg
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26.1274"
            cy="26"
            r="25.5"
            transform="rotate(-180 26.1274 26)"
            stroke="currentColor"
            stroke-opacity="0.5"
          />
          <path
            d="M36.1279 26.4167L17.7946 26.4167M17.7946 26.4167L21.9613 31M17.7946 26.4167L21.9613 21.8333"
            stroke="currentColor"
            stroke-opacity="0.5"
            stroke-width="2"
          />
        </svg>
      </button>
      <button class="panel__btn forward">
        <svg
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="26.1274" cy="26" r="25.5" stroke="#1E1E1E" />
          <path
            d="M16.127 25.5833H34.4603M34.4603 25.5833L30.2936 21M34.4603 25.5833L30.2936 30.1667"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.forward svg {
  &:hover {
    fill: black;
    path {
      stroke: white;
      stroke-opacity: 1;
    }
  }
}

.forward svg {
  transition: 0.5s;
  fill: white;
  path {
    stroke: black;
    stroke-opacity: 1;
  }
}

.back svg {
  &:hover {
    fill: #8e8e8e;
    path {
      stroke: white;
      stroke-opacity: 1;
    }
    circle {
      stroke: white;
      stroke-opacity: 1;
    }
  }
}

.back svg {
  transition: 0.5s;
  fill: white;
  path {
    stroke: #8e8e8e;
    stroke-opacity: 1;
  }
  circle {
    stroke: #8e8e8e;
    stroke-opacity: 1;
  }
}

p {
  margin: 0;
}
.panel {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 64px;

  &__container {
    display: flex;
    gap: 8px;
  }
  &__text {
    font-size: 12px;
    font-weight: 700;
    color: #1e1e1e;
    &--light {
      opacity: 0.5;
    }
  }
  &__btns {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__btn {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
  }
}
</style>
