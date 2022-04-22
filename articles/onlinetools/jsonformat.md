# JSON 格式化

<div class="jsonformatter">
    <div class="originjson">
        <p>JSON字符串:</p>
        <textarea v-model="state.val" rows="30"/>
    </div>
    <div class="result">
        <p>格式化结果:</p>
        <vue-json-pretty :data="state.data"/>
    </div>
</div>


<script setup>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

import {reactive, watch } from 'vue';


const defaultData = {
  status: 200,
  error: '',
  data: [
    {
      news_id: 51184,
      title: 'iPhone X Review: Innovative future with real black technology',
      source: 'Netease phone',
    },
    {
      news_id: 51183,
      title: 'Traffic paradise: How to design streets for people and unmanned vehicles in the future?',
      source: 'Netease smart',
      link: 'http://netease.smart/traffic-paradise/1235',
      author: {
        names: ['Daniel', 'Mike', 'John'],
      },
    },
    {
      news_id: 51182,
      title: "Teslamask's American Business Relations: The government does not pay billions to build factories",
      source: 'AI Finance',
      members: ['Daniel', 'Mike', 'John'],
    },
  ],
};

const state = reactive({
    val: JSON.stringify(defaultData),
    data: defaultData,
});

watch(
    () => state.val,
    newVal => {
    try {
        state.data = JSON.parse(newVal);
    } catch (err) {
        // console.log('JSON ERROR');
    }
    },
);
</script>

<style>
.jsonformatter{
    display: flex;
    flex-direction: row;
}

.jsonformatter > .originjson {
    width: 200px;
    margin-right: 32px;
}

.jsonformatter > .originjson > textarea {
    width: 100%;
}

</style>