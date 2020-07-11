<template>
  <div class="" :class="$style.Title">
    <samp :class="$style.box" v-html="text"></samp>
  </div>
</template>

<script>

export default {
	data() {
		return {
      text: '',
      buffer: [],
      strings: [
        'Сложный <l>экзамен</l> в вузе?',
        'Или хочешь <l>сменить</l> профессию?',
        '<l>Интересен</l> код, но не знаешь с чего <l>начать?</l>',
        '<l>Все</l> очень <l>просто...</l>',
        '<l>Напиши</l> нам в Telegram / WhatsApp или <l>оставь</l> свой телефон)'
      ]
		};
	},

	mounted() {
    // this.text = this.strings[0];
    // let i = 0;
    // setInterval(() => {
    //   i ++;
    //   this.text = this.strings[i % this.strings.length];
    // }, 3000);
    this.generateStrings();
    this.animateStrings();
	},

	methods: {
    generateStrings() {
      function gen(str, max_len) {
        let symbols = 'AaBbCcDdEeFf0123456789@#$%&XxYyZz';
        let without = '<>/l /'
		    let out = [];
		    let lens = [];
		    
		    for (let i = 0; i < str.length; i ++)
		      lens.push(Math.random() * max_len | 0);
		    
		    for (let i = 0; i < max_len; i ++) {
          let cur_str = '';
          
          for (let s = 0; s < str.length; s ++) {
            if (i < lens[s] && without.indexOf(str[s]) == -1) {
              cur_str += symbols[symbols.length * Math.random() | 0];
            } else {
              cur_str += str[s];
            }
          }
		        
          out.push(cur_str);
		    }
		    
		    return out;
      }
          
          
      for (let i = 0; i < this.strings.length; i ++) {
        this.buffer.push(gen(this.strings[i], 10));
      }
    },

    animateStrings() {
      let j = 0;
			let animBuffer = () => {
        let i = 0 ;
        let interval = setInterval(() => {
          if (i < this.buffer[j % this.buffer.length].length) {
            // title.innerHTML = '';
            this.text = this.buffer[j % this.buffer.length][i];
            this.$forceUpdate();
            i ++;
          } else {
            j ++;
            clearInterval(interval);
            setTimeout(animBuffer, 2500);
          }
        }, 80);
			}

			animBuffer();
    }
	},
}
</script>

<style lang="scss" module>
.Title {
	margin: 0 4rem 0 0;
	width: 40%;
	min-height: 26rem;
	display: flex;
	justify-content: center;
  align-items: center;
  padding: 1rem;
	text-align: left;
  font-size: 4.5rem;
  hyphens: auto;
  color: #666666;
  // text-shadow:
  //   -1rem -1rem 0 #ffffff,
  //   1rem -1rem 0 #ffffff,
  //   -1rem 1rem 0 #ffffff,
  //   1rem 1rem 0 #ffffff;
  line-height: 1.1;
  user-select: none;
  // word-break: break-all;

	@media (orientation: portrait) {
		margin: 5rem 0 5rem 0;
		font-size: 3rem;
    min-width: 100%;
    // text-align: center;
	}
}

.box {
  font-family: 'Rubik Mono One', sans-serif;
}

</style>
