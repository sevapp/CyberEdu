<template>
    <div :class="$style.container">
        <div>
            <logo/>
            <h1 :class="$style.title">
                <p>CyberEdu</p>
            </h1>
            <h2 :class="$style.subtitle">
                <p>My astonishing Nuxt.js project</p>
            </h2>
            <div :class="$style.links">
                <a class="button--grey" @click="this.sendData" target="_blank">
                    <p>Send</p>
                </a>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },

    data() {
        return {
            name:   "Vsevolod",
            phone:  "9999722858",
            msg:    "Хочу+изучить+язык+Java!",
            token:  null,
        };
    },

    mounted() {
        // console.log(process.env.CAPCHA_PUB);
        // console.log(process.env.BOT_URL);
    },

    methods: {
        async sendData() {

            await this.$recaptcha.init();

            try {
                this.token = await this.$recaptcha.execute('login');
                console.log('ReCaptcha token:', this.token);

                let xhr = new XMLHttpRequest();
                // xhr.addEventListener("load", () => {});
                let link = `${process.env.BOT_URL}?name=${encodeURI(this.name)}&phone=${encodeURI(this.phone)}&msg=${encodeURI(this.msg)}&token=${this.token}`;
                console.log(link);
                xhr.open("POST", link);
                xhr.send();

            } catch (error) {
                console.log('Login error:', error);
            }
        }
    },
}
</script>

<style lang="scss" module>
.container {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
