<template>
  <div
    class="slide-verify"
    id="slideVerify"
    onselectstart="return false;"
    :style="{ width: `${width}px` }"
  >
    <canvas :width="width" :height="height" ref="canvas"></canvas>
    <div @click="refresh" class="slide-verify-refresh-icon"></div>
    <canvas
      :width="width"
      :height="height"
      ref="block"
      class="slide-verify-block"
    ></canvas>
    <!-- container -->
    <div
      class="slide-verify-slider"
      :class="{
        'container-active': containerActive,
        'container-success': containerSuccess,
        'container-fail': containerFail
      }"
      :style="{ width: `${width}px` }"
    >
      <div class="slide-verify-slider-mask" :style="{ width: sliderMaskWidth }">
        <!-- slider -->
        <div
          @mousedown="sliderDown"
          @touchstart="touchStartEvent"
          @touchmove="touchMoveEvent"
          @touchend="touchEndEvent"
          class="slide-verify-slider-mask-item"
          :style="{ left: sliderLeft }"
        >
          <div class="slide-verify-slider-mask-item-icon"></div>
        </div>
      </div>
      <span class="slide-verify-slider-text">{{ sliderText }}</span>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

const PI = Math.PI;

function sum(x: number, y: number) {
  return x + y;
}

function square(x: number) {
  return x * x;
}
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class SlideVerify extends Vue {
  @Prop({ type: Number, default: 42 })
  private length!: number;

  @Prop({ type: Number, default: 10 })
  private radius!: number;

  @Prop({ type: Number, default: 310 })
  private width!: number;

  @Prop({ type: Number, default: 155 })
  private height!: number;

  @Prop({ type: String, default: "Slide filled right" })
  private sliderText!: string;

  @Prop({
    type: Array,
    default: () => {
      return [];
    }
  })
  private imgs!: Array<string>;

  public containerActive = false;

  public containerSuccess = false;

  public containerFail = false;

  public isMouseDown = false;

  public canvasCtx: any = null;

  public blockCtx: any = null;

  public block: any = null;

  public blockOffsetx: any = undefined;

  public blockOffsety: any = undefined;

  public img: any = undefined;

  public originX: any = undefined;

  public originY: any = undefined;

  public trail: Array<any> = [];

  public sliderLeft: number | string = 0;

  public sliderMaskWidth: number | string = 0;

  get L() {
    return this.length + this.radius * 2 + 3;
  }

  mounted() {
    this.init();
  }

  init() {
    this.initDom();
    this.initImg();
    this.bindEvents();
  }

  initDom() {
    this.block = this.$refs.block;
    this.canvasCtx = (this.$refs.canvas as any).getContext("2d");
    this.blockCtx = this.block.getContext("2d");
  }

  initImg() {
    const img = this.createImg(() => {
      this.drawBlock();
      this.canvasCtx.drawImage(img, 0, 0, this.width, this.height);
      this.blockCtx.drawImage(img, 0, 0, this.width, this.height);
      const { blockOffsetx: x, blockOffsety: y, radius: r, L } = this;
      const _y = y - r * 2 - 1;
      const ImageData = this.blockCtx.getImageData(x, _y, L, L);
      this.block.width = L;
      this.blockCtx.putImageData(ImageData, 0, _y);
    });
    this.img = img;
  }

  drawBlock() {
    this.blockOffsetx = this.getRandomNumberByRange(
      this.L + 10,
      this.width - (this.L + 10)
    );
    this.blockOffsety = this.getRandomNumberByRange(
      10 + this.radius * 2,
      this.height - (this.L + 10)
    );
    this.draw(this.canvasCtx, this.blockOffsetx, this.blockOffsety, "fill");
    this.draw(this.blockCtx, this.blockOffsetx, this.blockOffsety, "clip");
  }

  draw(ctx: any, x: number, y: number, operation: any) {
    const { length: l, radius: r } = this;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
    ctx.lineTo(x + l, y);
    ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
    ctx.stroke();
    ctx[operation]();
    ctx.globalCompositeOperation = "overlay";
  }

  createImg(onload: any) {
    const img = document.createElement("img");
    img.crossOrigin = "Anonymous";
    img.onload = onload;
    img.onerror = () => {
      img.src = this.getRandomImg();
    };
    img.src = this.getRandomImg();
    return img;
  }

  getRandomImg() {
    // return require('../assets/img.jpg')
    const len = this.imgs.length;
    return len > 0
      ? this.imgs[this.getRandomNumberByRange(0, len)]
      : "https://source.unsplash.com/300x300?image=" +
          this.getRandomNumberByRange(0, 1084);
  }

  getRandomNumberByRange(start: number, end: number) {
    return Math.round(Math.random() * (end - start) + start);
  }

  refresh() {
    this.reset();
    this.$emit("refresh");
  }

  sliderDown(event: any) {
    this.originX = event.clientX;
    this.originY = event.clientY;
    this.isMouseDown = true;
  }

  touchStartEvent(e: any) {
    this.originX = e.changedTouches[0].pageX;
    this.originY = e.changedTouches[0].pageY;
    this.isMouseDown = true;
  }
  bindEvents() {
    document.addEventListener("mousemove", e => {
      if (!this.isMouseDown) return false;
      const moveX = e.clientX - this.originX;
      const moveY = e.clientY - this.originY;
      if (moveX < 0 || moveX + 38 >= this.width) return false;
      this.sliderLeft = moveX + "px";
      const blockLeft = ((this.width - 40 - 20) / (this.width - 40)) * moveX;
      this.block.style.left = blockLeft + "px";

      this.containerActive = true; // add active
      this.sliderMaskWidth = moveX + "px";
      this.trail.push(moveY);
    });
    document.addEventListener("mouseup", e => {
      if (!this.isMouseDown) return false;
      this.isMouseDown = false;
      if (e.clientX === this.originX) return false;
      this.containerActive = false; // remove active

      const { spliced, TuringTest } = this.verify();
      if (spliced) {
        if (TuringTest) {
          // succ
          this.containerSuccess = true;
          this.$emit("success");
        } else {
          this.containerFail = true;
          this.sliderText = "try again";
          this.reset();
        }
      } else {
        this.containerFail = true;
        this.$emit("fail");
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
    });
  }

  touchMoveEvent(e: any) {
    if (!this.isMouseDown) return false;
    const moveX = e.changedTouches[0].pageX - this.originX;
    const moveY = e.changedTouches[0].pageY - this.originY;
    if (moveX < 0 || moveX + 38 >= this.width) return false;
    this.sliderLeft = moveX + "px";
    const blockLeft = ((this.width - 40 - 20) / (this.width - 40)) * moveX;
    this.block.style.left = blockLeft + "px";

    this.containerActive = true;
    this.sliderMaskWidth = moveX + "px";
    this.trail.push(moveY);
  }

  touchEndEvent(e: any) {
    if (!this.isMouseDown) return false;
    this.isMouseDown = false;
    if (e.changedTouches[0].pageX === this.originX) return false;
    this.containerActive = false;

    const { spliced, TuringTest } = this.verify();
    if (spliced) {
      if (TuringTest) {
        // succ
        this.containerSuccess = true;
        this.$emit("success");
      } else {
        this.containerFail = true;
        this.sliderText = "try again";
        this.reset();
      }
    } else {
      this.containerFail = true;
      this.$emit("fail");
      setTimeout(() => {
        this.reset();
      }, 1000);
    }
  }
  verify() {
    const arr = this.trail; // drag y move distance
    const average = arr.reduce(sum) / arr.length; // average
    const deviations = arr.map(x => x - average); // deviation array
    const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length); // standard deviation
    const left = parseInt(this.block.style.left);
    return {
      spliced: Math.abs(left - this.blockOffsetx) < 10,
      TuringTest: average !== stddev // equal => not person operate
    };
  }

  reset() {
    this.containerActive = false;
    this.containerSuccess = false;
    this.containerFail = false;
    this.sliderLeft = 0;
    this.block.style.left = 0;
    this.sliderMaskWidth = 0;
    // canvas
    const w = this.width;
    const h = this.height;
    this.canvasCtx.clearRect(0, 0, w, h);
    this.blockCtx.clearRect(0, 0, w, h);
    this.block.width = w;

    // generate img
    this.img.src = this.getRandomImg();
  }
}
</script>
<style lang="less" scoped>
.slide-verify {
  position: relative;
}

.slide-verify-block {
  position: absolute;
  left: 0;
  top: 0;
}

.slide-verify-refresh-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 34px;
  height: 34px;
  cursor: pointer;
  background: url("~@/assets/icon_light.png") 0 -437px;
  background-size: 34px 471px;
}

.slide-verify-slider {
  position: relative;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: -15px;
  background: #f7f9fa;
  color: #45494c;
  border: 1px solid #e4e7eb;
}

.slide-verify-slider-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  border: 0 solid #1991fa;
  background: #d1e9fe;
}

.slide-verify-slider-mask-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background 0.2s linear;
}

.slide-verify-slider-mask-item:hover {
  background: #1991fa;
}

.slide-verify-slider-mask-item:hover .slide-verify-slider-mask-item-icon {
  background-position: 0 -13px;
}

.slide-verify-slider-mask-item-icon {
  position: absolute;
  top: 15px;
  left: 13px;
  width: 14px;
  height: 12px;
  background: url("~@/assets/icon_light.png") 0 -26px;
  background-size: 34px 471px;
}
.container-active .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid #1991fa;
}

.container-active .slide-verify-slider-mask {
  height: 38px;
  border-width: 1px;
}

.container-success .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid #52ccba;
  background-color: #52ccba !important;
}

.container-success .slide-verify-slider-mask {
  height: 38px;
  border: 1px solid #52ccba;
  background-color: #d2f4ef;
}

.container-success .slide-verify-slider-mask-item-icon {
  background-position: 0 0 !important;
}

.container-fail .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid #f57a7a;
  background-color: #f57a7a !important;
}

.container-fail .slide-verify-slider-mask {
  height: 38px;
  border: 1px solid #f57a7a;
  background-color: #fce1e1;
}

.container-fail .slide-verify-slider-mask-item-icon {
  top: 14px;
  background-position: 0 -82px !important;
}

.container-active .slide-verify-slider-text,
.container-success .slide-verify-slider-text,
.container-fail .slide-verify-slider-text {
  display: none;
}
</style>
