import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionAPI, { defineComponent } from '@vue/composition-api'
import createRouter from './router'
import createStore from './store'

const localVue = createLocalVue()

const router = createRouter(localVue)
const store = createStore(localVue)

localVue.use(VueCompositionAPI)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export default function renderHook<V, Props = unknown, Data = unknown>(
  setup: () => V
) {
  const App = defineComponent({
    template: `
      <div ref="app" id="app" :style="{ width: '1280px', height: '800px' }">
      <router-view />
      </div>
    `,

    setup
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return shallowMount<Vue & V>(App, {
    localVue,
    router,
    store,
    stubs: ['router-view']
  })
}
