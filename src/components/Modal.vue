<template>
  <transition name="backdrop-fade" appear>
    <div class="backdrop row">
      <transition name="content-fade" appear>
        <div class="col-11 col-md-7 col-lg-6 col-xl-5 vt-modal" v-if="!loading">
          <div class="row modal-header">
            <div class="col-auto h5">{{ title }}</div>
            <div class="col-auto">
              <div @click="close" class="close-icon-wrapper">
                <img src="@/assets/icons/close.svg" alt="close">
              </div>
            </div>
          </div>
          <slot name="content"></slot>
        </div>
      </transition>

      <Loader v-if="loading" />
    </div>
  </transition>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  name: "Modal",
  components: {Loader},
  props: {
    title: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
}
</script>

<style lang="scss" scoped>
.backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  height: 100vh;
  width: 100vw;
}

.vt-modal {
  max-height: 90%;
  background: white;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
}

.close-icon-wrapper {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .15s;

  &:hover {
    background: #e7e7e7;
    border-radius: 6px;
  }

  img {
    width: 18px;
    height: 18px;
  }
}

.backdrop-fade-enter-active, .backdrop-fade-leave-active {
  transition: opacity .15s;
}

.backdrop-fade-enter, .backdrop-fade-leave-to {
  opacity: 0;
}

.content-fade-enter-active, .content-fade-leave-active {
  transition: opacity .15s;
  transition-delay: .1s;
}

.content-fade-enter, .content-fade-leave-to {
  opacity: 0;
}
</style>
