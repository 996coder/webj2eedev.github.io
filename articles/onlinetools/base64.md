# Base64 编解码

<div>
<div class="sectionwrapper">
    <span>原始文本:</span>
    <textarea v-model="rawText" rows="10" class="htmlcontent">
    </textarea>
</div>

<div class="btngroup">
    <span @click="encoded = encode(rawText)">
    <img title="text->base64" class="convertbtn" src="/images/htmlentityconverter/down-arrow.png"/>
    </span>
    <span @click="rawText = decode(encoded)">
    <img title="base64->text" class="convertbtn" src="/images/htmlentityconverter/up-arrow.png" />
    </span>
</div>

<div class="sectionwrapper">
<span>编码文本:</span>
<textarea v-model="encoded" rows="10" class="entitycontent">
</textarea>
</div>

</div>

<script setup>
import { h, ref, onMounted } from 'vue'
import { encode, decode } from 'js-base64';

const rawText = ref("");
const encoded = ref("");

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