import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import GroupButton from './button-group.vue'
import Input from './Input'
import Row from './row.vue'
import Col from './col.vue';

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GroupButton)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        message: '123'
    },
})
// 测试用例
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect;

try {
    {
        const Constructor = Vue.extend(Button)
        let button = new Constructor({
            propsData: {
                icon: 'setings'
            }
        })
        button.$mount('#test')
        let useElement = button.$el.querySelector('use')
        // 期待 useElement的属性xlink:href的参数是#i-setings
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-setings')
        button.$el.remove()
        button.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        let button = new Constructor({
            propsData: {
                icon: 'loading',
                loading: true
            }
        })
        button.$mount()
        let useElement = button.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        button.$el.remove()
        button.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        let button = new Constructor({
            propsData: {
                icon: 'loading'
            }
        })
        button.$mount(div)
        let svg = button.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        button.$el.remove()
        button.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                icon: 'setings'
            }
        })
        vm.$mount()
        // 使用函数监听
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy)
        let button = vm.$el
        button.click()
        //期待触发click事件的时候 spy已经被调用了
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}