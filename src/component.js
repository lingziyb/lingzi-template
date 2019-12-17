import Vue from 'vue/dist/vue.esm';

const zll = {
    template: `
        <div>{{name}}</div>
    `,
    data() {
        return {
            name: 'lingzi is so builtiful'
        }
    }
}

new Vue({
    el: '#app',
    data: {},
    template: `
        <div>  
            <zll></zll>
        </div>
    `,
    components: {
        zll
    }
})