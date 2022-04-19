# MD5 加密

MD5英文名叫MD5 Message-Digest Algorithm，一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。

<div>
<div class="sectionwrapper">
    <span>原始文本:</span>
    <textarea v-model="rawText" rows="10" class="htmlcontent">
    </textarea>
</div>

<div class="btngroup">
    <span @click="encoded = md5(rawText)">
    <img title="text->md5" class="convertbtn" src="/images/htmlentityconverter/down-arrow.png"/>
    </span>
</div>

<div class="sectionwrapper">
<span>MD5文本:</span>
<textarea v-model="encoded" rows="10" class="entitycontent" disabled>
</textarea>
</div>

</div>

<script setup>
import { h, ref, onMounted } from 'vue'
import md5 from 'md5'

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