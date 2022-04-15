# HTML 实体字符转换

<div>
<div class="sectionwrapper">
    <span>HTML文本:</span>
    <textarea v-model="html" rows="10" class="htmlcontent">
    </textarea>
</div>

<div class="btngroup">
    <img title="html->entity" class="convertbtn" src="/images/htmlentityconverter/down-arrow.png" @click="entity = htmlEncode(html)"/>
    <img title="entity->html" class="convertbtn" src="/images/htmlentityconverter/up-arrow.png" @click="html = htmlDecode(entity)"/>
</div>

<div class="sectionwrapper">
<span>实体文本:</span>
<textarea v-model="entity" rows="10" class="entitycontent">
</textarea>
</div>

</div>

<script setup>
import { h, ref, onMounted } from 'vue'

const html = ref("<HTML>");
const entity = ref("");

function htmlEncode(html){
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement ("div");
    //2.然后将要转换的字符串设置为这个元素的innerText或者textContent
    (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
    //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
    var output = temp.innerHTML;
    temp = null;
    return output;
}

function htmlDecode(text){
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText或者textContent，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}
</script>

<style>
.sectionwrapper {
    margin-bottom: 16px;
}

.htmlcontent,
.entitycontent {
    display: block;
    width: 100%;
}

.btngroup {
    display:flex;
    justify-content: center;
}
.convertbtn {
    width: 36px;
    margin: 0 16px;
    cursor: pointer;
}
</style>