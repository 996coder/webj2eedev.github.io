# HTML 实体字符转换

一些字符在 HTML 中拥有特殊的含义，比如小于号 (`<`) 用于定义 HTML 标签的开始。如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。

例如：要在 HTML 文档中显示小于号，我们需要这样写：`&lt;` 或者 `&#60;`

字符实体有三部分：一个和号 (`&`)，一个实体名称，或者 `#` 和一个实体编号，以及一个分号 (`;`)。

<div>
<div class="sectionwrapper">
    <span>HTML文本:</span>
    <textarea v-model="html" rows="10" class="htmlcontent">
    </textarea>
</div>

<div class="btngroup">
    <span @click="entity = htmlEncode(html)">
    <img title="html->entity" class="convertbtn" src="/images/htmlentityconverter/down-arrow.png"/>
    </span>
    <span @click="html = htmlDecode(entity)">
    <img title="entity->html" class="convertbtn" src="/images/htmlentityconverter/up-arrow.png" />
    </span>
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

.btngroup > span {
    margin: 0 16px;
    cursor: pointer;
}
.convertbtn {
    width: 36px;
    pointer-events: none
}
</style>