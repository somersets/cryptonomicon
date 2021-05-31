<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700"
          >Тикер</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
            v-model="ticker"
            @keydown.enter="!isCorrectTicker ? add() : ''"
            type="text"
            name="wallet"
            id="wallet"
            class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            placeholder="Например DOGE"
          />
        </div>
        <div
          v-if="ticker"
          class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap"
        >
          <span
            v-for="(c, index) of validationCoins"
            :key="index"
            @click="ticker = c"
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
          >
            {{ c }}
          </span>
        </div>
        <div v-if="isExistTicker" class="text-sm text-red-600">
          Такой тикер уже добавлен
        </div>
        <div v-if="isCorrectTicker" class="text-sm text-red-600">
          Такого тикера не существует
        </div>
        <div v-if="!ticker" class="text-sm text-red-600">
          Введите название тикера
        </div>
      </div>
    </div>
    <add-button
      @clickAddTicker="add"
      :is-correct-ticker="isCorrectTicker"
      :is-exist-ticker="isExistTicker"
      :has-ticker="ticker"
    ></add-button>
  </section>
</template>

<script>
import AddButton from './AddButton';
export default {
  name: 'AddTicker',
  components: {
    AddButton
  },
  props: {
    tickers: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    coinList: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  emits: {
    'add-ticker': (value) => {
      return typeof value === 'string';
    }
  },
  computed: {
    isCorrectTicker() {
      let isCorrectTicker = true;
      Object.keys(this.coinList).some((el) => {
        if (el === this.tickerToUpperCase && !this.isExistTicker) {
          isCorrectTicker = false;
        } else if (!this.tickerToUpperCase || this.isExistTicker) {
          isCorrectTicker = false;
        }
      });
      return isCorrectTicker;
    },
    isExistTicker() {
      return this.tickers.some((el) => {
        return el.name === this.tickerToUpperCase;
      });
    },
    validationCoins() {
      let arr = [];
      Object.keys(this.coinList).filter((el) => {
        if (el.includes(this.tickerToUpperCase)) {
          if (arr.length < 4) {
            arr.push(el);
          }
        }
      });
      return arr;
    },
    tickerToUpperCase() {
      return this.ticker.toUpperCase();
    }
  },
  data() {
    return {
      ticker: ''
    };
  },
  methods: {
    add() {
      this.$emit('add-ticker', this.ticker.toUpperCase());
      this.ticker = '';
    }
  }
};
</script>

<style scoped></style>
