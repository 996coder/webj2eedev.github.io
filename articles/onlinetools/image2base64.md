# 图片转Base64

<div id="drop_area" class="wrapper" @click="selectFile">
    <img src="/images/image2base64/cloud-upload.png">
    <h4>单击此处，选择图片</h4>
    <input ref="fileinputRef" type="file" id="imagefile" @change="handleFileChange" accept=".jpg,.jpeg,.ico,.bmp,.png">
</div>

<div class="resultarea" v-show="base64Content">
    <div class="codebox">
        <textarea :value="base64Content" readonly rows="10"></textarea> 
    </div>
    <div class="previewwrapper">
        <img ref="previewImgRef" class="preview" alt="preview"/>
    </div>
</div>


<script setup>
import { h, ref, onMounted } from 'vue'

const fileinputRef = ref(null);
const previewImgRef = ref(null);

const base64Content = ref(null);


function selectFile(){
    fileinputRef.value.click();
}

function handleFileChange(e){
    e.preventDefault();
    setUpload(e.target.files);
};

function setUpload(fileList){
    var myfile = fileList[0];
    var reader = new FileReader();
    reader.readAsDataURL(myfile);
    reader.onload = function(e) {
      base64Content.value = e.target.result;
      previewImgRef.value.src = e.target.result;
    }
};

</script>

<style>
.red-div {
  color: red;
}

.wrapper{
    border: 2px dashed #333;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    cursor: pointer;
}

.wrapper > img {
    width: 100px;
}

.wrapper > h4 {
    margin-top: 0;
}

.wrapper > input {
    position: absolute;
    left: -9999px;
    top: -9999px;
    z-index: -9999;
}

.resultarea{
    display: flex;
    margin-top: 16px;
}

.resultarea > .previewwrapper {
    flex: 1 1 0px;
    position: relative;
    padding: 45px 15px 15px;
    border:1px solid #ddd;

    display: flex;
    justify-content: center;
}
.resultarea > .previewwrapper:after {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 12px;
    font-weight: bold;
    color: #959595;
    text-transform: uppercase;
    letter-spacing: 1px;
    content: "PREVIEW";
}
.resultarea > .previewwrapper > img {
    
}


.resultarea > .codebox{
    flex: 1 1 0px;

    position: relative;
    padding: 45px 15px 15px;
    margin-right: 16px;

    border:1px solid #ddd;
    border-radius: 4px 4px 0 0;

}

.resultarea > .codebox > textarea {
    width: 100%;
    height: 100%;
    border: none;
    resize:none;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}

.resultarea > .codebox:after {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 12px;
    font-weight: bold;
    color: #959595;
    text-transform: uppercase;
    letter-spacing: 1px;
    content: "Code";
}
</style>