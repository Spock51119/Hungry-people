import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '',
  lang: 'en_US',
  coordorder: 'latlong',
  version: '2.1'
} // настройки плагина

Vue.use(YmapPlugin, settings)
