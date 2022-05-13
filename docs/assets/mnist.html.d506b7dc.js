import{_ as t,r as i,o as n,c as s,a as e,d as r,F as l,e as o,b as c}from"./app.9c1f7418.js";var d="/images/mnist/001.png",p="/images/mnist/005.png",m="/images/mnist/002.png",h="/images/mnist/003.png",_="/images/mnist/004.png";const u={},g=o('<h1 id="mnist-\u6570\u636E\u96C6" tabindex="-1"><a class="header-anchor" href="#mnist-\u6570\u636E\u96C6" aria-hidden="true">#</a> MNIST \u6570\u636E\u96C6</h1><p>\u5F53\u5B66\u4E60\u4EFB\u610F\u4E00\u95E8\u8BA1\u7B97\u673A\u8BED\u8A00\u8FDB\u884C\u7F16\u7A0B\u65F6\uFF0C\u9996\u5148\u63A5\u89E6\u7684\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5C31\u662F\u6253\u5370\u201CHello World\u201D\uFF0C\u5728\u4EBA\u5DE5\u667A\u80FD\u673A\u5668\u5B66\u4E60\u9886\u57DF\u4E5F\u4E0D\u4F8B\u5916\u3002\u5B66\u4E60\u4EBA\u5DE5\u667A\u80FD\u7684\u521D\u5B66\u8005\uFF0C\u901A\u8FC7\u4F7F\u7528<code>MNIST\uFF08Mixed National Institute of Standards and Technology database\uFF09</code>\u624B\u5199\u6570\u5B57\u8BC6\u522B\u4EFB\u52A1\u7684\u7EC3\u4E60\uFF0C\u6765\u5BF9\u4EBA\u5DE5\u667A\u80FDTensorFlow\u8FDB\u884C\u6700\u521D\u6B65\u7684\u5E94\u7528\u3002</p><h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48\uFF1F</h2><p>\u200BMNIST \u6570\u636E\u96C6\u6765\u81EA\u4E8E\u7F8E\u56FD\u56FD\u5BB6\u6807\u51C6\u4E0E\u6280\u672F\u7814\u7A76\u6240\uFF08NIST\uFF09\uFF0C\u5B83\u662F\u4E00\u4E2A\u5E9E\u5927\u7684\u624B\u5199\u6570\u5B57\u6570\u636E\u5E93\uFF0C\u4E5F\u662F\u7F51\u4E0A\u8457\u540D\u7684\u516C\u5F00\u6570\u636E\u96C6\u4E4B\u4E00\u3002</p><p>MNIST \u6570\u636E\u96C6\u5305\u542B\u4E8660,000\u5F20\u56FE\u7247\u7684\u8BAD\u7EC3\u6570\u636E\u96C6\uFF08mnist.train\uFF09\u4EE5\u53CA10,000\u5F20\u56FE\u7247\u7684\u6D4B\u8BD5\u6570\u636E\u96C6\uFF08mnist.test\uFF09\uFF0C\u6570\u636E\u96C6\u7684\u56FE\u7247\u5206\u522B\u4EE3\u8868\u4E86\u963F\u62C9\u4F2F\u6570\u5B570\uFF5E9\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u6570\u5B57\uFF0C\u56FE\u7247\u53EA\u5305\u542B\u7070\u5EA6\u503C\u4FE1\u606F\uFF0C\u89C4\u683C\u5C3A\u5BF8\u4E3A28\xD728\uFF0C\u6570\u5B57\u4F4D\u4E8E\u6574\u5F20\u56FE\u7247\u7684\u6700\u4E2D\u592E\u4F4D\u7F6E\u3002</p><p><img src="'+d+'" alt=""></p><p>MNIST \u4E0D\u4EC5\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u7B97\u673A\u89C6\u89C9\u6570\u636E\u96C6\uFF0C\u5B83\u8FD8\u5305\u62EC\u6BCF\u4E2A\u56FE\u50CF\u7684\u6807\u7B7E\uFF0C\u4EE5\u4FBF\u6E05\u695A\u5730\u544A\u8BC9\u6211\u4EEC\u51FA\u73B0\u7684\u662F\u4EC0\u4E48\u6570\u5B57\u3002\u4F8B\u5982\uFF0C\u4E0A\u8FF0\u56FE\u50CF\u7684\u6807\u7B7E\u5206\u522B\u662F5\u30012\u30015\u30013\uFF0C\u6240\u4EE5\uFF0CMNIST \u6570\u636E\u96C6\u4E2D\u7684\u6BCF\u5F20\u6570\u636E\u56FE\u7247\u90FD\u88AB\u4E8B\u5148\u6807\u6CE8\u4E86\u76F8\u5E94\u7684\u963F\u62C9\u4F2F\u6570\u5B57\u3002</p><h2 id="\u6709\u4EC0\u4E48\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6709\u4EC0\u4E48\u529F\u80FD" aria-hidden="true">#</a> \u6709\u4EC0\u4E48\u529F\u80FD\uFF1F</h2><ol><li>\u63D0\u4F9B\u4E86\u5927\u91CF\u7684\u6570\u636E\u4F5C\u4E3A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\uFF0C\u4E3A\u4E00\u4E9B\u5174\u8DA3\u7231\u597D\u8005\u548C\u5B66\u4E60\u8005\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u8D44\u6E90\u4FE1\u606F\u3002</li><li>\u5F62\u6210\u4E00\u4E2A\u4E1A\u754C\u9886\u57DF\u5177\u6709\u4E00\u5B9A\u5BF9\u6BD4\u7A0B\u5EA6\u7684\u9879\u76EE\uFF0C\u4E0D\u540C\u7684\u7814\u7A76\u8005\u4F7F\u7528\u4E86\u76F8\u540C\u7684\u6570\u636E\u96C6\uFF0C\u4ECE\u800C\u53EF\u4EE5\u66F4\u52A0\u65B9\u4FBF\u5730\u5C06\u7ED3\u679C\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u4ECE\u800C\u9A8C\u8BC1\u51FA\u54EA\u79CD\u8BBE\u8BA1\u7684\u7A0B\u5E8F\u8BC6\u522B\u7387\u66F4\u9AD8\u3002</li></ol><h2 id="\u4ECE\u54EA\u91CC\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u54EA\u91CC\u83B7\u53D6" aria-hidden="true">#</a> \u4ECE\u54EA\u91CC\u83B7\u53D6\uFF1F</h2><ol><li>\u901A\u8FC7\u5B98\u7F51\u4E0B\u8F7D</li></ol><p><img src="'+p+'" alt=""></p><ul><li>Train-images-idx3-ubyte.gz: \u8BAD\u7EC3\u96C6\u56FE\u7247\uFF0860,000 \u5F20\uFF09</li><li>Train-labels-idx1-ubyte.gz: \u8BAD\u7EC3\u96C6\u56FE\u7247\u5BF9\u5E94\u7684\u6570\u5B57\u6807\u7B7E\u3002</li><li>t10k-images-idx3-ubyte.gz: \u6D4B\u8BD5\u96C6\u56FE\u7247\uFF0810,000 \u5F20\uFF09</li><li>t10k-labels-idx1-ubyte.gz: \u6D4B\u8BD5\u96C6\u56FE\u7247\u5BF9\u5E94\u7684\u6570\u5B57\u6807\u7B7E\u3002</li></ul><h2 id="\u6570\u636E\u96C6\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u96C6\u7EC4\u6210" aria-hidden="true">#</a> \u6570\u636E\u96C6\u7EC4\u6210</h2><p>MNIST\u6570\u636E\u5355\u5143\u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF1A</p><ul><li>\u200B\u4E00\u5F20\u5305\u542B\u624B\u5199\u6570\u5B57\u7684\u56FE\u7247</li><li>\u4E00\u4E2A\u5BF9\u5E94\u7684\u6807\u7B7E</li></ul><p>\u6BCF\u4E00\u5F20\u56FE\u7247\u5305\u542B 28\xD728 \u4E2A\u50CF\u7D20\u70B9\uFF0C\u53EF\u4EE5\u7528\u4E00\u4E2A\u6570\u5B57\u6570\u7EC4\u6765\u8868\u793A\u8FD9\u5F20\u56FE\u7247\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002\u5C06\u8FD9\u4E2A\u6570\u5B57\u6570\u7EC4\u5C55\u5F00\u6210\u4E00\u4E2A\u5411\u91CF\uFF0C\u957F\u5EA6\u662F 28\xD728 = 784\u3002\u6570\u5B57\u95F4\u7684\u987A\u5E8F\u4E0D\u91CD\u8981\uFF0C\u53EA\u8981\u4FDD\u6301\u5404\u4E2A\u56FE\u7247\u91C7\u7528\u76F8\u540C\u7684\u65B9\u5F0F\u5C55\u5F00\u3002</p><p><img src="'+m+'" alt=""></p><p>MNIST\u6570\u636E\u96C6\u7684\u56FE\u7247\u5C31\u662F\u5728784\u7EF4\u5411\u91CF\u7A7A\u95F4\u91CC\u9762\u7684\u70B9\uFF0C\u5E76\u4E14\u62E5\u6709\u6BD4\u8F83\u590D\u6742\u7684\u7ED3\u6784\u3002\u5728MNIST\u8BAD\u7EC3\u6570\u636E\u96C6\u4E2D\uFF0Cmnist.train.images\u662F\u4E00\u4E2A\u5F62\u72B6\u4E3A[60000, 784]\u7684\u5F20\u91CF\uFF0C\u7B2C\u4E00\u4E2A\u7EF4\u5EA6\u6570\u5B57\u7528\u6765\u7D22\u5F15\u56FE\u7247\uFF0C\u7B2C\u4E8C\u4E2A\u7EF4\u5EA6\u6570\u5B57\u7528\u6765\u7D22\u5F15\u6BCF\u5F20\u56FE\u7247\u4E2D\u7684\u50CF\u7D20\u70B9\u3002\u5728\u6B64\u5F20\u91CF\u91CC\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\uFF0C\u90FD\u8868\u793A\u67D0\u5F20\u56FE\u7247\u91CC\u7684\u67D0\u4E2A\u50CF\u7D20\u7684\u5F3A\u5EA6\u503C\uFF0C\u503C\u4ECB\u4E8E0\u548C1\u4E4B\u95F4\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="'+h+'" alt=""></p><p>MNIST\u6570\u636E\u96C6\u7684\u6807\u7B7Emnist.train.labels\u662F\u4ECB\u4E8E0\u52309\u7684\u6570\u5B57\uFF0C\u7528\u6765\u63CF\u8FF0\u7ED9\u5B9A\u7684\u8BAD\u7EC3\u56FE\u7247\u91CC\u6240\u8868\u793A\u7684\u6570\u5B57\u3002\u6807\u7B7E\u6570\u636E\u7528\u201Cone-hot vectors\u201D\u7684\u5F62\u5F0F\u6765\u8868\u793A\uFF0C\u6240\u8C13\u7684&quot;one-hot&quot;\u662F\u6307\u4E00\u4F4D\u6709\u6548\u7F16\u7801\uFF0C\u5373\uFF0C\u6211\u4EEC\u4F7F\u7528n\u7EF4\u5EA6\u7684\u5411\u91CF\u6765\u8868\u793An\u4E2A\u7C7B\u522B\uFF0C\u8FD9\u5176\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u7C7B\u522B\u90FD\u4F1A\u5360\u636E\u76F8\u5BF9\u72EC\u7ACB\u7684\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u56E0\u6B64\uFF0C\u4E00\u4E2Aone-hot\u5411\u91CF\u5373\u4E3A\u9664\u4E86\u67D0\u4E00\u7279\u5B9A\u4F4D\u7F6E\u7684\u6570\u5B57\u662F1\u4EE5\u5916\uFF0C\u5176\u4F59\u5404\u7EF4\u5EA6\u6570\u5B57\u90FD\u662F0\u3002\u6570\u5B57n\u5C06\u8868\u793A\u6210\u4E00\u4E2A\u53EA\u6709\u5728\u7B2Cn\u7EF4\u5EA6\uFF08\u4ECE0\u5F00\u59CB\uFF09\u6570\u5B57\u4E3A1\u768410\u7EF4\u5411\u91CF\u3002</p><p>\u56E0\u6B64\uFF0Cmnist.train.labels\u662F\u4E00\u4E2A[60000, 10]\u768410\u7EF4\u5EA6\u6570\u5B57\u77E9\u9635\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="'+_+'" alt=""></p>',23),b={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"\u53C2\u8003",-1),N={href:"http://yann.lecun.com/exdb/mnist/",target:"_blank",rel:"noopener noreferrer"},T=c("MINST \u6570\u636E\u96C6");function f(I,S){const a=i("ExternalLinkIcon");return n(),s(l,null,[g,e("div",b,[x,e("ul",null,[e("li",null,[e("a",N,[T,r(a)])])])])],64)}var v=t(u,[["render",f],["__file","mnist.html.vue"]]);export{v as default};
