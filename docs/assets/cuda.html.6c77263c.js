import{_ as n,r as o,o as c,c as s,a as e,e as r,F as i,d,b as t}from"./app.9b22d7df.js";var p="/images/cuda/003.png",h="/images/cuda/002.png",l="/images/cuda/004.png";const U={},_=d('<h1 id="cuda-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#cuda-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> CUDA \u662F\u4EC0\u4E48\uFF1F</h1><p>2006 \u5E74 11 \u6708\uFF0CNVIDIA\xAE \u63A8\u51FA\u4E86 CUDA\xAE\uFF0C\u8FD9\u662F\u4E00\u79CD\u901A\u7528\u5E76\u884C\u8BA1\u7B97\u5E73\u53F0\u548C\u7F16\u7A0B\u6A21\u578B\uFF0C\u5B83\u5229\u7528 NVIDIA GPU\uFF08\u56FE\u5F62\u5904\u7406\u5668\uFF09 \u4E2D\u7684\u5E76\u884C\u8BA1\u7B97\u5F15\u64CE\u4EE5\u6BD4 CPU \u66F4\u6709\u6548\u7684\u65B9\u5F0F\u89E3\u51B3\u8BB8\u591A\u590D\u6742\u7684\u8BA1\u7B97\u95EE\u9898\uFF0C\u53EF\u5927\u5E45\u63D0\u5347\u8BA1\u7B97\u6027\u80FD\u3002</p><p>CUDA \u9644\u5E26\u4E00\u4E2A\u8F6F\u4EF6\u73AF\u5883\uFF0C\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528 C++ \u4F5C\u4E3A\u9AD8\u7EA7\u7F16\u7A0B\u8BED\u8A00\u3002 \u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u652F\u6301\u5176\u4ED6\u8BED\u8A00\u3001\u5E94\u7528\u7A0B\u5E8F\u7F16\u7A0B\u63A5\u53E3\u6216\u57FA\u4E8E\u6307\u4EE4\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 FORTRAN\u3001DirectCompute\u3001OpenACC\u3002</p><p><img src="'+p+'" alt=""></p><h2 id="cuda-\u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u5417" tabindex="-1"><a class="header-anchor" href="#cuda-\u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u5417" aria-hidden="true">#</a> CUDA \u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u5417\uFF1F</h2><p>CUDA \u662F\u7528\u4E8E GPU \u8BA1\u7B97\u7684\u67B6\u6784\uFF0C\u80FD\u5728 GPU \u4E0A\u8FD0\u884C\u6807\u51C6 C \u8BED\u8A00\u3002\u4E3A\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0CNVIDIA \u5B9A\u4E49\u4E86\u4E00\u5957\u901A\u7528\u8BA1\u7B97\u6307\u4EE4\u96C6 (PTX) \u548C\u4E00\u5C0F\u90E8\u5206C\u8BED\u8A00\u6269\u5C55\u96C6\uFF0C\u4ECE\u800C\u8BA9\u5F00\u53D1\u8005\u5145\u5206\u5229\u7528\u6211\u4EEC GPU \u4E2D\u5F3A\u5927\u7684\u5E76\u884C\u8BA1\u7B97\u80FD\u529B\u3002Portland Group \u4E3A NVIDIA CUDA \u67B6\u6784\u4E0A\u7684 Fortran \u63D0\u4F9B\u652F\u6301\uFF0C\u800C\u5176\u5B83\u4E00\u4E9B\u516C\u53F8\u5219\u4E3A Java\u3001Python\u3001.NET \u7B49\u5176\u5B83\u8BED\u8A00\u63D0\u4F9B\u652F\u6301\u3002</p><p>\u6211\u4EEC\u7528\u672F\u8BED \u201CCUDA C\u201D \u6765\u63CF\u8FF0\u5F00\u53D1\u8005\u6307\u5B9A GPU \u4E0A\u8981\u6267\u884C\u7684\u529F\u80FD\u3001GPU \u5185\u5B58\u5982\u4F55\u4F7F\u7528\u3001\u5E94\u7528\u7A0B\u5E8F\u5982\u4F55\u4F7F\u7528 GPU \u7684\u5E76\u884C\u5904\u7406\u529F\u80FD\u6240\u4F7F\u7528\u7684\u8BED\u8A00\u548C\u4E00\u5C0F\u90E8\u5206\u6269\u5C55\u96C6\u3002</p><p>NVIDIA \u7684 C \u8BED\u8A00\u7F16\u8BD1\u5668\u662F\u4F7F\u7528 Edison Design Group C \u8BED\u8A00\u5206\u6790\u5668\u53CA Open64 \u7F16\u8BD1\u5668\u6784\u5EFA\u7684\uFF0C\u5E76\u4E14\u5B83\u8FDB\u884C\u4E86\u6269\u5C55\u4EE5\u652F\u6301 CUDA C \u6269\u5C55\u3002\u5F88\u591ACPU\u516C\u53F8\u5728\u4ED6\u4EEC\u7684\u7F16\u8BD1\u5668\u4E2D\u90FD\u5E7F\u6CDB\u4F7F\u7528 EDG \u5206\u6790\u5668\u548C Open64 \u7F16\u8BD1\u5668\u3002</p><h2 id="cuda-\u5DE5\u5177\u5305" tabindex="-1"><a class="header-anchor" href="#cuda-\u5DE5\u5177\u5305" aria-hidden="true">#</a> CUDA \u5DE5\u5177\u5305</h2><p>NVIDIA\xAE CUDA\xAE \u5DE5\u5177\u5305\u63D0\u4F9B\u4E86\u5F00\u53D1\u73AF\u5883\uFF0C\u53EF\u4F9B\u521B\u5EFA\u7ECF GPU \u52A0\u901F\u7684\u9AD8\u6027\u80FD\u5E94\u7528\u3002\u501F\u52A9 CUDA \u5DE5\u5177\u5305\uFF0C\u60A8\u53EF\u4EE5\u5728\u7ECF GPU \u52A0\u901F\u7684\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u3001\u53F0\u5F0F\u5DE5\u4F5C\u7AD9\u3001\u4F01\u4E1A\u6570\u636E\u4E2D\u5FC3\u3001\u57FA\u4E8E\u4E91\u7684\u5E73\u53F0\u548C HPC \u8D85\u7EA7\u8BA1\u7B97\u673A\u4E2D\u5F00\u53D1\u3001\u4F18\u5316\u548C\u90E8\u7F72\u5E94\u7528\u3002\u6B64\u5DE5\u5177\u5305\u4E2D\u5305\u542B\u591A\u4E2A GPU \u52A0\u901F\u5E93\u3001\u591A\u79CD\u8C03\u8BD5\u548C\u4F18\u5316\u5DE5\u5177\u3001\u4E00\u4E2A C/C++ \u7F16\u8BD1\u5668\u4EE5\u53CA\u4E00\u4E2A\u7528\u4E8E\u5728\u4E3B\u8981\u67B6\u6784\uFF08\u5305\u62EC x86\u3001Arm \u548C POWER\uFF09\u4E0A\u6784\u5EFA\u548C\u90E8\u7F72\u5E94\u7528\u7684\u8FD0\u884C\u65F6\u5E93\u3002</p><p><img src="'+h+'" alt=""></p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u662F\u7528-gpu" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u662F\u7528-gpu" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u662F\u7528 GPU</h2><p>GPU\uFF08Graphics Processing Unit\uFF09\u5728\u76F8\u540C\u7684\u4EF7\u683C\u548C\u529F\u7387\u8303\u56F4\u5185\uFF0C\u6BD4CPU\u63D0\u4F9B\u66F4\u9AD8\u7684\u6307\u4EE4\u541E\u5410\u91CF\u548C\u5185\u5B58\u5E26\u5BBD\u3002\u8BB8\u591A\u5E94\u7528\u7A0B\u5E8F\u5229\u7528\u8FD9\u4E9B\u66F4\u9AD8\u7684\u80FD\u529B\uFF0C\u5728GPU\u4E0A\u6BD4\u5728CPU\u4E0A\u8FD0\u884C\u5F97\u66F4\u5FEB(\u53C2\u89C1GPU\u5E94\u7528\u7A0B\u5E8F)\u3002\u5176\u4ED6\u8BA1\u7B97\u8BBE\u5907\uFF0C\u5982FPGA\uFF0C\u4E5F\u975E\u5E38\u8282\u80FD\uFF0C\u4F46\u63D0\u4F9B\u7684\u7F16\u7A0B\u7075\u6D3B\u6027\u8981\u6BD4GPU\u5C11\u5F97\u591A\u3002</p><p>GPU\u548CCPU\u5728\u529F\u80FD\u4E0A\u7684\u5DEE\u5F02\u662F\u56E0\u4E3A\u5B83\u4EEC\u7684\u8BBE\u8BA1\u76EE\u6807\u4E0D\u540C\u3002\u867D\u7136 CPU \u65E8\u5728\u4EE5\u5C3D\u53EF\u80FD\u5FEB\u7684\u901F\u5EA6\u6267\u884C\u4E00\u7CFB\u5217\u79F0\u4E3A\u7EBF\u7A0B\u7684\u64CD\u4F5C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5E76\u884C\u6267\u884C\u6570\u5341\u4E2A\u8FD9\u6837\u7684\u7EBF\u7A0B\u3002\u4F46GPU\u5374\u80FD\u5E76\u884C\u6267\u884C\u6210\u5343\u4E0A\u4E07\u4E2A(\u644A\u9500\u8F83\u6162\u7684\u5355\u7EBF\u7A0B\u6027\u80FD\u4EE5\u5B9E\u73B0\u66F4\u5927\u7684\u541E\u5410\u91CF)\u3002</p><p>GPU \u4E13\u95E8\u7528\u4E8E\u9AD8\u5EA6\u5E76\u884C\u8BA1\u7B97\uFF0C\u56E0\u6B64\u8BBE\u8BA1\u65F6\u66F4\u591A\u7684\u6676\u4F53\u7BA1\u7528\u4E8E\u6570\u636E\u5904\u7406\uFF0C\u800C\u4E0D\u662F\u6570\u636E\u7F13\u5B58\u548C\u6D41\u91CF\u63A7\u5236\u3002</p><p>\u4E0B\u56FE\u663E\u793A\u4E86 CPU \u4E0E GPU \u7684\u82AF\u7247\u8D44\u6E90\u5206\u5E03\u793A\u4F8B\u3002</p><p><img src="'+l+'" alt=""></p><p>\u5C06\u66F4\u591A\u6676\u4F53\u7BA1\u7528\u4E8E\u6570\u636E\u5904\u7406\uFF0C\u4F8B\u5982\u6D6E\u70B9\u8BA1\u7B97\uFF0C\u6709\u5229\u4E8E\u9AD8\u5EA6\u5E76\u884C\u8BA1\u7B97\u3002GPU\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u9690\u85CF\u5185\u5B58\u8BBF\u95EE\u5EF6\u8FDF\uFF0C\u800C\u4E0D\u662F\u4F9D\u9760\u5927\u6570\u636E\u7F13\u5B58\u548C\u590D\u6742\u7684\u6D41\u63A7\u5236\u6765\u907F\u514D\u957F\u65F6\u95F4\u7684\u5185\u5B58\u8BBF\u95EE\u5EF6\u8FDF\uFF0C\u8FD9\u4E24\u8005\u5728\u6676\u4F53\u7BA1\u65B9\u9762\u90FD\u662F\u6602\u8D35\u7684\u3002</p>',18),u={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"\u53C2\u8003",-1),P={href:"https://www.nvidia.cn/geforce/technologies/images/cuda/",target:"_blank",rel:"noopener noreferrer"},G=t("CUDA"),m={href:"https://developer.nvidia.cn/zh-cn/cuda-toolkit",target:"_blank",rel:"noopener noreferrer"},A=t("CUDA Toolkit"),D={href:"https://developer.nvidia.com/zh-cn/blog/cuda-intro-cn/",target:"_blank",rel:"noopener noreferrer"},g=t("CUDA \u7F16\u7A0B\u624B\u518C");function f(I,v){const a=o("ExternalLinkIcon");return c(),s(i,null,[_,e("div",u,[C,e("ul",null,[e("li",null,[e("a",P,[G,r(a)])]),e("li",null,[e("a",m,[A,r(a)])]),e("li",null,[e("a",D,[g,r(a)])])])])],64)}var x=n(U,[["render",f],["__file","cuda.html.vue"]]);export{x as default};
