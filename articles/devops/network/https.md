# HTTPS 那些事

[[toc]]

## HTTP 与 HTTPS

### 什么是 HTTP？

HTTP 代表超文本传输协议，它是一种用于通过网络传输数据的协议，或是一种表示信息的规范顺序和语法。通过互联网发送的大多数信息（包括网站内容和 API 调用）都使用 HTTP 协议。

在 OSI 模型中，HTTP 是第 7 层协议。

![](/images/https/04.png)

HTTP 请求示例：

~~~http
GET /hello.txt HTTP/1.1
User-Agent: curl/7.63.0 libcurl/7.63.0 OpenSSL/1.1.l zlib/1.2.11
Host: www.example.com
Accept-Language: en
~~~

HTTP 响应示例：

~~~http
HTTP/1.1 200 OK
Date: Wed, 30 Jan 2019 12:14:39 GMT
Server: Apache
Last-Modified: Mon, 28 Jan 2019 11:17:01 GMT
Accept-Ranges: bytes
Content-Length: 12
Vary: Accept-Encoding
Content-Type: text/plain

Hello World!
~~~

如果网站使用 HTTP 而非 HTTPS，用户浏览器与网站间交互的数据是**明文形式传输**的（这里不讨论网站在发送请求前自行对数据加密的情况），监视会话的任何人都可以读取所有请求和响应。所以存在特别大的安全隐患（例如：用户的提交包含敏感数据（身份证号、信用卡号、密码等））。

### 什么是 HTTPS？

HTTPS 中的 S 代表“安全”。 ***HTTPS 是支持 TLS/SSL 加密的 HTTP。*** HTTPS 使用 `TLS (SSL)` 来加密普通的 HTTP 请求和响应，使它变得更加安全。使用 HTTPS 的网站的 URL 开头带有 `https://`，而非 `http://`，例如 `https://www.baidu.com/`。

![](/images/https/02.png)

![](/images/https/01.png)

### 为什么要使用 HTTPS？

#### 原因 1：使用 HTTPS 的网站更受用户信赖。
网站使用 HTTPS 就如餐馆展示“已通过”本地食品安全检查的标识一般：潜在的顾客可以放心，他们光顾这家店不会遭受巨大的负面影响。现如今，使用 HTTP 本质上就像展示自己“未通过”食品安全检查一样：无法保证顾客不会有可怕的遭遇。

HTTPS 使用 SSL/TLS 协议对通信进行加密，使攻击者**无法窃取数据**。SSL/TLS 还可确认网站服务器是其真实身份，从而**防止假冒**。

![](/images/https/citicbank.png)

![](/images/https/FISHING.png)

::: warning
对于那些未部署SSL证书的假冒钓鱼网站，我们在访问时就会看到“不安全”的警告，无需其它操作就能轻松进行辨别。

对于部署了有效SSL证书的假冒钓鱼网站，我们不能单靠地址栏的https：//和安全锁就轻易进行判断，还应该通过点击安全锁查看证书的详细信息，仔细分辨证书的域名与你要访问的网站是否一致后再下定论。一般来说，假冒钓鱼网站的域名虽然与真实网站非常相似，但无法做到完全相同。
:::

***Chrome 和其他浏览器将所有 HTTP 网站标记为“不安全”。***

多年来，Google 逐步采取措施使网站逐渐整合 HTTPS。Google 还在返回搜索结果时将 HTTPS 用作一个质量因素；网站越安全，访问者通过点击 Google 提供的链接而犯错的可能性就越小。

从 2018 年 7 月发布的 Chrome 68 开始，所有不安全的 HTTP 流量在 URL 栏中都会标记为“不安全”。对于没有有效 SSL 证书的网站，也都会显示此通知。其他浏览器也纷纷效仿。

![](/images/https/http-not-secure.png)

#### 原因 2：HTTPS 更为安全，不论是对于用户还是网站所有者。

使用 HTTPS 时，数据在传输的两个方向上都会得到加密，不论是传到源服务器还是从中传出。协议确保通信安全，使恶意方无法观察到正在发送的数据。因此，用户在表单中输入的用户名和密码不会在传输过程中被盗取。如果网站或 Web 应用程序必须向用户发送敏感数据或个人数据（例如，银行帐户信息），则加密也可以保护这些数据。

#### 原因 3：HTTPS 可以帮助验证网站（Web服务器）的身份。

Uber 和 Lyft 等共享出行应用的用户不会仅仅是因为司机说可以来接他们，就毫不怀疑地坐进陌生的汽车。相反，应用会告诉他们司机的相关信息，如姓名和外貌、驾驶的车型和车牌号等。用户可以检查这些信息，并确定他们将会进入正确的汽车，尽管每辆共享出行汽车各不相同，而且他们从未见过司机。

同样，当用户导航到网站时，他们实际上在做的事情就是连接他们不认识的、由未见过的人维护的远程计算机。SSL 证书实现 HTTPS，与共享出行应用中的司机信息类似。它代表由可信赖的第三方进行了外部验证，证明 Web 服务器是其声称的身份。

这可以防止下面这样的攻击：攻击者假冒或伪造网站，使实际上处于虚假站点上的用户以为他们是在原本要访问的站点上。HTTPS 身份验证还可发挥更多作用来帮助公司网站拥有合法的形象，而这会影响用户对公司本身的态度。

### 时代在发展，HTTPS也在进步，有些担心多余了...

#### ~~“我的网站上不处理敏感信息，所以不需要 HTTPS”~~

网站不实施安全性的一个常见原因是，他们认为这样做是大材小用。毕竟，如果不涉及敏感数据，有谁会在乎有没有人窥探？出于某些原因，这是将 Web 安全性过于简单化的看法。**例如，某些 Internet 服务提供商实际上会将广告注入到由 HTTP 服务的网站中。** 这些广告或许与网站内容相称，或许不符，并有可能令人反感，不仅仅是网站提供商没有创造性的投入或收益分成。一旦站点设有安全保护，这些注入的广告将不再可行。

如今，现代 Web 浏览器还限制了某些功能（API接口）只能在 HTTPS 环境下使用（例如：地理位置、推送通知、摄像头等）。这很有道理，因为用户位置等数据属于敏感数据，可被用于恶意目的。

#### ~~“我不想增加页面加载时间，让网站的性能受损”~~

**先说结论：TLS 的最新版本对 web 应用程序的性能几乎没有任何影响。**

性能是用户体验以及 Google 如何返回搜索结果的重要因素。可以理解，增加延迟值得认真考虑。幸运的是，随着时间推移 HTTPS 已有改进，降低了建立加密连接所需的性能开销。

发生 HTTP 连接时，请求网页的客户端与服务器建立连接需要进行多次往返。除了与 TCP 握手相关联的普通延迟（下方以蓝色显示）之外，还必须进行其他 TLS/SSL 握手（以黄色显示）以便使用 HTTPS。

![](/images/https/03.png)

然而，目前已有技术帮助缓解 TLS 握手造成的延迟。其一是 TLS 会话恢复（TLS Session Resumption）。另一种加速 TLS 的技术是 TLS 错误启动（TLS False Start）。

* 通过使用会话恢复（TLS Session Resumption），服务器可以通过为其他请求恢复同一会话来使连接保持更长的生存期。当客户端需要未缓存的源服务器获取时，使连接保持存活可节省重新协商连接所花费的时间，从而将总 RTT 缩短 50％。

* 加密通道创建速度上的另一改进是实施一个称为 TLS 错误启动（TLS False Start）的过程，这是一个可选的协议扩展，允许您在TLS握手仅部分完成时发送数据。

这些改良帮助 TLS 成为一种非常快速的协议，不会明显影响加载时间。至于与 TLS 相关的计算成本，以今天的标准来看几乎可以忽略不计。

2018 年发布的 TLS 1.3 进一步提高了 TLS 的速度。TLS 1.3 中的 TLS 握手仅需要一次往返（即来回通信），而不是以前的两次，将握手过程所需时间缩短了几毫秒。如果用户以前已连接过网站，TLS 握手的往返次数为零，从而进一步加快了速度。


## 密码学必备小知识

### 什么是加密？

加密是扰乱数据以便只有授权方才能理解信息的一种方式。从技术上讲，它是将人类可读的明文转换为不可理解文本（也称为密文）的过程。简单地说，加密接受可读的数据并对其进行修改，以使其看起来是随机的。加密需要使用密钥：加密消息的发件人和收件人约定的一组数学值。

![](/images/https/encryption-example.svg)

尽管加密数据看起来是随机的，但加密是以一种逻辑的、可预测的方式进行的，因此接收加密数据并拥有正确密钥的一方可以解密数据，将其变回明文。真正安全的加密将使用足够复杂的密钥，使第三方不大可能通过暴力破解（或者说，通过猜测）来解密或破坏密文。

数据可在存储时“静止”加密，也可以在传输到其他地方时“传输中”加密。


### 为什么需要数据加密？

* 隐私：加密可确保除预期的收件人或正当的数据所有者以外，任何人都无法读取静止的通信或数据。这可以防止攻击者、广告网络、互联网服务提供商以及（在某些情况下）政府拦截和读取敏感数据。

* 安全性：无论是传输中的数据还是静止数据，加密都有助于防止数据泄露。如果公司设备丢失或被盗，且其硬盘驱动器已适当加密，则该设备上的数据将仍是安全的。类似地，加密通信使通信双方能够交换敏感数据而不会泄露数据。

* 数据完整性： 加密还有助于防止恶意行为，如在途攻击。当数据在互联网上传输时，加密（与其他完整性保护措施一起）可确保收件人收到的内容在途中没有被篡改过。

* 身份验证：此外，公钥加密可用于确定网站所有者拥有网站的 TLS 证书中列出的私钥。这让网站用户可以确定他们连接到了真正的网站（请参阅什么是公钥加密？了解更多信息）。

* 法规：出于所有这些原因，许多行业和政府法规要求处理用户数据的公司对这些数据进行加密。需要加密的法规与合规性标准的示例包括 HIPAA、PCI-DSS 和 GDPR。

### 密码学中的“随机”是什么意思？
在密码学中，随机并不仅仅意味着统计学上的随机；它也表示不可预测性。假设有人将一个六面骰子掷了二十四次，结果如下：

1，2，3，4，5，6，1，2，3，4，5，6，1，2，3，4，5，6，1，2，3，4，5，6

从统计学上看，这是掷骰子结果的随机分布。每个数字的投掷概率相同，因此出现这一序列在概率范围之内。

但是，这个顺序并非不可预测。如果将它用于加密，攻击者可能会找出这种模式。

### 为什么真正不可预测性对于加密很重要？
加密的数据看起来应该像完全随机的数据，因为可预测的数据是能被猜到的。如果存在某种模式，例如特定的值用于加密的频率高于其他值，或者值始终以一定的顺序出现，那么数学分析能够挑选出这种模式，从而使攻击者更容易地猜测到加密所用的密钥。基本而言，如果加密数据可以预测，那么它或许已遭到破坏。

The process of encryption itself is a predictable one: Encrypted data plus the right key equals decrypted data, and the decrypted data is the same as it was before it was encrypted. But the encryption keys used have to be unpredictable.

为了解为什么不可预测性为何如此重要，我们可以想象两位扑克玩家：鲍勃总是在有好牌时加注，牌不好时则弃牌（拒绝跟注）。爱丽丝则混合使用下注策略，因此没有明显的模式：有时在牌好时加注，有时满足于跟注，有时甚至会在牌不好时通过加大注来诈牌。如果爱丽丝和鲍勃参加同一届扑克锦标赛，爱丽丝的存活时间要比鲍勃更长，因为鲍勃太容易预测。对手很快就会知道鲍勃什么时候有好牌，并做出应对。即使看不到他的牌，他们也可以大致分辨出他手里的牌。

同样，即使攻击者看不到通过网络发送的“牌”（或加密的内容），但如果隐匿内容的方法太容易预测，他们仍然可以猜测到。

### 为什么计算机无法创造随机性？

计算机以逻辑为基础运行。计算机程序基于 if-then 语句：如果满足某些条件，则执行指定的操作。如果程序的输入相同，那么每次都会产生相同的输出。

这是设计使然。输入应导致预期的输出，而不是意外的输出。想象一下，如果打印机打印出与文档中文本不同的随机，或者智能手机呼叫的电话号码与用户输入的不同，那就混乱不堪了。计算机的用处正是源于它的（相对）可靠性和可预测性。但是，在生成安全加密密钥时，这种可预测性成为了不利因素。

有些计算机程序擅长模拟随机性，但对创建加密密钥来说仍然不够。

计算机如何使用现实世界中的随机输入来生成随机数据？
一种称为伪随机数生成器（PRNG）的软件程序能够获取不可预测的输入，并用它来生成不可预测的输出。从理论上讲，PRNG 可以从随机输入产生无限的随机输出。

这种算法之所以称为“伪随机”而非“随机”，是因为它的输出实际上并不是完全随机的。为何会如此？主要有两个原因：

1. 连续两次给定相同的种子作为起点，PRNG 会产生完全相同的结果。
2. 很难证明它生成的结果在整个时间内完全随机（如果 PRNG 无限期运行）。

由于第 2 个原因，该算法不断需要新的随机输入。随机输入称为“密码种子”。

### 密码安全伪随机数生成器是什么？
密码安全伪随机数生成器（或 CSPRNG）是满足更严格标准的 PRNG，能够更安全地用于加密。CSPRNG 满足 PRNG 不一定满足的两个要求：

必须通过某些统计随机性检验才能证明不可预测性。
攻击者即使对程序有部分访问权，也肯定无法预测 CSPRNG 的输出。
如同 PRNG 一样，CSPRNG 需要以随机数据（密码种子）为起点，从中生成更多随机数据。

### 什么是密码种子？

**密码种子是 CSPRNG 于生成随机数据的起点数据。** 尽管从理论上讲 CSPRNG 可以从单个密码种子产生无限的随机输出，但是定期更新密码种子要安全得多。攻击者最终可能会攻破初始的密码种子。另请记住，如果被提供相同的种子，CSPRNG 会再次产生完全相同的输出，因此攻击者可以复制随机输出。此外，即使是经过最严格测试的 CSPRNG，也无法保证无限期产生不可预测的结果。

通过使用熔岩灯，Cloudflare 可以不断获得新的加密种子数据。相机拍摄到的每张熔岩灯照片都是不同的，从而能产生可用作种子的不同随机数值序列。

### 什么是密码学中的密钥？
在密码学中，密钥是用于打乱数据以便使其显得随机的一条信息；它通常是一个很大的数字，或者是一串数字和字母。当使用密钥将未加密的数据（也称为明文）放入加密算法中时，明文会从另一面看似随机数据。但是，任何拥有正确密钥解密数据的人都可以将其放回纯文本格式。

![](/images/https/cryptographic-key-hello.png)

原始数据称为明文 ，密钥加密后的数据称为密文 。


For example, suppose we take a plaintext message, "hello," and encrypt it with a key*; let's say the key is "2jd8932kd8." Encrypted with this key, our simple "hello" now reads "X5xJCSycg14=", which seems like random garbage data. However, by decrypting it with that same key, we get "hello" back.

明文 + 密钥 = 密文：

`你好 + 2jd8932kd8 = X5xJCSycg14x `

密文 + 密钥 = 明文：

`X5xJCSycg14x + 2jd8932kd8 = 你好`


### 有哪些不同类型的加密？
两种主要的加密是对称加密和非对称加密。非对称加密也称为公钥加密。

* 在对称加密中，**只有一个密钥**，所有通信方都使用相同的（秘密）密钥进行加密和解密。
* 在非对称或公钥加密中，**有两个密钥**：一个用于加密，另一个用于解密。解密密钥是保密的（因此称为“**私钥**”），而加密密钥是公开的，供任何人使用（因此称为“**公钥**”）。非对称加密是 TLS（通常称为 SSL）的基础技术。


### 什么是加密算法？
加密算法是用于将数据转换为密文的数学公式。算法将使用密钥以可预测的方式更改数据，以便即使加密的数据看起来是随机的，也可以通过再次使用密钥将其变回明文。

### 常用的加密算法有哪些？
常用的对称加密算法包括：

* AES
* 3-DES
* SNOW

常用的非对称加密算法包括：

* RSA
* 椭圆曲线加密

### 什么是加密中的暴力攻击？
暴力破解攻击是指不知道解密密钥的攻击者试图通过数百万次或数十亿次的猜测来确定密钥。使用现代计算机的暴力破解攻击要快得多，这就是为什么加密必须极其强大和复杂的原因。大多数现代的加密方法，加上高质量的密码，都能抵抗暴力破解攻击，尽管随着计算机的功能越来越强大，它们在未来会变得越来越容易遭受此类攻击。弱密码仍然容易受到暴力破解攻击。

### 数字签名

现实世界中，签名是针对承诺的一种表现形式，手手段可以通过手写签字或盖扣印章；而在数字世界中，签名仍然是为了表示承诺，只是手段变成了二进制。

![](/images/https/20210127111840315.png)

### 公钥加密

Public key encryption, or public key cryptography, is a method of encrypting data with two different keys and making one of the keys, the public key, available for anyone to use. The other key is known as the private key. Data encrypted with the public key can only be decrypted with the private key, and data encrypted with the private key can only be decrypted with the public key. Public key encryption is also known as asymmetric encryption. It is widely used, especially for TLS/SSL, which makes HTTPS possible.

想象一下，鲍勃和爱丽丝这两个人用一个带锁的箱子来回运送文件。通常来说锁只有两种状态：上锁和解锁。任何有钥匙的人都可以打开上锁的箱子，反之亦然。当鲍勃锁上箱子并将其运送给爱丽丝的时候，他知道爱丽丝可以使用复制的钥匙来解开箱子。从本质上讲，这就是所谓的对称加密的工作方式：一个秘钥同时用于加密和解密，对话的双方都使用相同的密钥。

现在，想象一下，鲍勃制作了一种带有特殊锁的行李箱。此锁具有三个状态，而不是两个：

* A.锁定，钥匙一直旋转到左侧
* B.解锁，钥匙旋转到中间。
* C.锁定，钥匙一直旋转到右侧。


![](/images/https/ssl-lock-analogy.svg)

该锁带有两把钥匙，而不是一把钥匙：

* 1号钥匙只能向左转
* 2号钥匙只能向右转

这意味着如果后备箱被锁定并且钥匙转到位置A，只有2号钥匙可以通过向右转到位置B（解锁）来解锁。如果行李箱锁定在位置C，则只有1号钥匙可以通过将锁向左转动到位置B来解锁。

换言之，两把钥匙任选其一都可以锁定箱子，但是一旦锁定后，只有另一把钥匙可以解锁箱子。

现在，假设鲍勃制作了几十个只能向右旋转的2号钥匙，然后为他认识的并且想要这把钥匙的每个人都配了一把，并将其作为他的公共钥匙。而他为自己保留了1号钥匙，作为他的私钥。这有什么作用？

Alice can send Bob confidential data via the trunk and be confident that only Bob can unlock it. Once Alice has locked the trunk with the public key, which turns from left to right, only a key that can turn right to left can unlock it. That means only Bob's private key can unlock it.
Alice can be sure that the trunk is actually from Bob, and not an impersonator, if it's locked with his private key. There's only one key that can lock the trunk so that the lock is in position A, or turned all the way to the left: Bob's private key. True, anyone can unlock it with the public key by turning the key to the right, but it's guaranteed that the trunk is from Bob.

以此类推，在这个比喻中，纯文本信息就是箱子，密钥就等同于实体钥匙，这就是公共密钥加密的运作方式。只有私钥的所有者才能加密数据，让公钥对其进行解密；同时，任何人都可以使用公钥加密数据，但是只有私钥的所有者才能解密它。

Therefore, anyone can send data securely to the private key owner. Also, anyone can verify that data they receive from the owner of the private key is actually from that source, and not from an impersonator (see What is an on-path attack?).

## SSL/TLS

### 什么是 SSL？

SSL 代表安全套接字层，是指用于加密和保护互联网上发生的通信的协议。它最初由 Netscape 于 1995 年开发，旨在确保 Internet 通信中的隐私、身份验证和数据完整性。SSL 是如今使用的现代 TLS 加密的前身。

实施 SSL/TLS 的网站的 URL 中带有“HTTPS”，而不是“HTTP”。

![](/images/https/http-vs-https.svg)

### 什么是 TLS？

传输层安全性（Transport Layer Security，TLS）是一种广泛采用的安全性协议，旨在促进互联网通信的私密性和数据安全性。TLS 的主要用例是对 web 应用程序和服务器之间的通信（例如，web 浏览器加载网站）进行加密。TLS 还可以用于加密其他通信，如电子邮件、消息传递和 IP 语音（VOIP）等。

TLS 由互联网工程任务组（Internet Engineering Task Force, IETF）提出，协议的第一个版本于 1999 年发布。最新版本是 TLS 1.3，发布于 2018 年。

![](/images/https/tls_ssl_development_timeline.png)

### SSL 和 TLS 是同一回事吗？
**SSL 是另一个称为 TLS（传输层安全性）的协议的直接前身。** 在 1999 年，互联网工程任务组（IETF）提出了对 SSL 的更新。由于此更新是由 IETF 开发的，不再牵涉到 Netscape，因此名称更改为 TLS。SSL 的最终版本（3.0）与 TLS 的第一版本之间并无明显差异，应用名称更改只是表示所有权改变。

由于它们紧密地联系在一起，这两个术语经常互换使用并混为一谈。有些人仍然使用 SSL 来指代 TLS，其他人则使用术语“SSL/TLS 加密”，因为 SSL 仍然具有很大的知名度。


### SSL 仍然没有落伍吗？
SSL 自 1996 年推出 SSL 3.0 以来未曾更新过，**现已弃用**。SSL 协议中存在多个已知漏洞，安全专家建议停止使用。实际上，大多数现代 Web 浏览器已彻底不再支持 SSL。

TLS 是依然在网络上实施的最新加密协议，尽管有许多人仍将其称为“SSL 加密”。这可能会使购买安全解决方案的消费者感到困惑。事实上，如今提供“SSL”的任何供应商提供的几乎肯定都是 TLS 保护，这已成为二十多年来的行业标准。但是，由于许多人仍在搜寻“SSL 保护”，因此这个术语在许多产品页面上仍然处于醒目位置。


### SSL/TLS 有什么用？

* 数据加密：隐藏从第三方传输的数据。这意味着，任何试图截取此数据的人都只会看到几乎无法解密的乱码字符。
* 身份验证：确保交换信息的各方是他们所声称的真实身份。
* 数字签名：提供数据完整性，验证数据是否在到达目标接收者之前被篡改过。

SSL 已经过多次迭代，安全性逐代增强。**SSL 在 1999 年更新为 TLS。**


### SSL/TLS 为何重要？
最初，Web 上的数据是以明文形式传输的，任何人只要截获消息都可以读取。例如，如果消费者访问了购物网站，下了订单并在网站上输入了他们的信用卡号，那么该信用卡号将不加隐藏地在 Internet 上传播。

创建 SSL 就是为了纠正此问题并保护用户隐私。通过对用户和 Web 服务器之间传输的所有数据进行加密，SSL 可确保截获数据的人只能看到混乱的字符。消费者的信用卡号现在可以确保安全，仅在他们输入卡号的购物网站上可见。

SSL 还可以阻止某些类型的网络攻击：它对 Web 服务器进行身份验证，这非常重要，因为攻击者通常会尝试建立伪造网站来欺骗用户并窃取数据。它还可以防止攻击者篡改传输中的数据，就像药品容器上的防篡改封条一样。

### 最新的TLS版本有什么优势？

简而言之，TLS 1.3 比 TLS 1.2 更快、更安全。使 TLS 1.3 更快的一处更改是对 TLS 握手工作方式的更新：TLS 1.3 中的 TLS 握手只需要一次往返（或来回通信）而不是两次，从而将过程缩短了几毫秒。如果客户端之前连接到网站，TLS 握手的往返次数为零。这使 HTTPS 连接更快，减少延迟并改善整体用户体验。

TLS 1.2中的许多主要漏洞与仍受到支持的较旧的加密算法有关。TLS 1.3放弃了对这些易受攻击的加密算法的支持，因此，它不太容易受到网络攻击。

### 什么是 SSL 证书？
SSL 证书就像身份证或徽章一样，证明某人就是他们所说的真实身份。SSL 证书是网站的**源服务器上**安装的文件。它**只是一个数据文件**，包含公钥和网站所有者身份以及其他信息。

SSL 证书中最重要的信息之一是网站的公共密钥。公钥使加密成为可能。同时，Web 服务器还具有一个保密的私有密钥。私钥解密使用公钥加密的数据。私钥应保密并妥善保管。

![](/images/https/class41.png)

### SSL 证书包含哪些信息？

SSL 证书包含以下信息：

* 针对其颁发证书的域名
* 证书颁发给哪一个人、组织或设备
* 证书由哪一证书颁发机构颁发
* 证书颁发机构的数字签名
* 关联的子域
* 证书的颁发日期
* 证书的到期日期
* 公钥（私钥为保密状态）

### SSL 证书有哪些不同类型？

* Class 4 SSL证书：即EV SSL证书，顶级SSL证书，又称扩展验证型SSL证书。安全级别最高，验证审核最严格，网站部署EV SSL证书后，浏览器地址栏将变成绿色并显示企业名称。EV SSL证书一般应用于金融、银行、电商等安全需求较高的网站。

* Class 3 SSL证书：即OV SSL证书，专业级SSL证书，又称机构验证型SSL证书。当前广泛应用的SSL证书，需要验证企业身份信息后颁发。OV SSL证书是当前最常见的证书类型，适用于行政、企业、科研、邮箱、论坛等各类大中型网站。

* Class 2 SSL证书：即IV SSL证书，个人级SSL证书，沃通特有的SSL证书，又称个人验证型SSL证书。验证个人详细信息后颁发，主要应用于私人博客、自媒体等个人网站。

* Class 1 SSL证书：即DV SSL证书，基础级SSL证书，又称域名验证型SSL证书。DV SSL证书是签发只验证域名所有权，快速颁发的SSL证书，安全级别较低。

### 网站如何获得 SSL 证书？

证书颁发机构（CA）负责颁发SSL证书。

网站所有者需要从证书颁发机构获取 SSL 证书，然后将其安装到自己的 Web 服务器上（通常 Web 主机可以处理此过程）。证书颁发机构是一个外部方，可以确认网站所有者是他们所称的身份。他们保留所颁发证书的副本。大多数（但不是全部）CA 为颁发 SSL 证书收取费用。

### 什么是自签名 SSL 证书？

从技术上讲，任何人都可以通过生成公私钥对并包括上述所有信息来创建自己的 SSL 证书。此类证书称为自签名证书，因为使用的数字签名将是网站自己的私钥，而不是来自 CA。

但若使用自签名证书，就没有外部权威来验证源站服务器是否是它声称的身份。浏览器认为自签名证书不可信，并且尽管使用了 https:// URL，但可能仍然将站点标记为“不安全”。它们也可能会完全终止连接，从而阻止网站加载。

![](/images/https/self.png)

### SSL 证书链

有两种类型的证书机构（CA） ：根CA和中间CA。为了使SSL证书受信任，该证书必须由正在连接的设备的受信任存储区中包括的CA颁发。

如果证书不是由受信任的CA颁发的，则连接设备（例如Web浏览器）将检查以查看颁发CA的证书是否由受信任的CA颁发。它会继续检查，直到找到受信任的CA（此时将建立受信任的安全连接），或者找不到受信任的CA（此时设备通常将显示错误）。

从根证书到最终用户证书的SSL证书列表代表SSL证书链。

下面以百度为例，在浏览器上访问 “www.baidu.com” 域名，地址连左侧有一个小锁的标志，点击就能查看百度的数字证书，如下图所示

![](/images/https/baidu.png)

我们看到这样一个层次关系：

GlobalSign Root CA -> GlobalSign Organization Validation CA -> baidu.com

这个层次可以抽象为三个级别：

* end-user：即 baidu.com，该证书包含百度的公钥，访问者就是使用该公钥将数据加密后再传输给百度，即在 HTTPS 中使用的证书
* intermediates：即上文提到的 签发人 Issuer，用来认证公钥持有者身份的证书，负责确认 HTTPS 使用的 end-user 证书确实是来源于百度。这类 intermediates 证书可以有很多级，也就是说 签发人 Issuer 可能会有有很多级
* root：可以理解为 最高级别的签发人 Issuer，负责认证 intermediates 身份的合法性

这其实代表了一个信任链条，最终的目的就是为了保证 end-user 证书是可信的，该证书的公钥也就是可信的。

![](/images/https/20210127112042306.png)

结合实际的使用场景对证书链进行一个归纳：

1. 为了获取 end-user 的公钥，需要获取 end-user 的证书，因为公钥就保存在该证书中
2. 为了证明获取到的 end-user 证书是可信的，就要看该证书是否被 intermediate 权威机构认证，等价于是否有权威机构的数字签名
3. 有了权威机构的数字签名，而权威机构就是可信的吗？需要继续往上验证，即查看是否存在上一级权威认证机构的数字签名
4. 信任链条的最终是Root CA，他采用自签名，对他的签名只能无条件的信任

![](/images/https/20210127112056683.png)



### SSL/TLS 如何工作？

#### 总体工作过程

以下是理解 SSL/TLS 工作原理应掌握的基本概念：

* 安全通信从 TLS 握手开始，在这过程中两个通信方打开安全连接并交换公钥
* 在 TLS 握手期间，双方会生成会话密钥，会话密钥用于加密和解密 TLS 握手之后的所有通信
* 每一个新会话中使用不同的会话密钥来加密通信
* TLS 确保服务器方或用户与之交互的网站确实是它们声称的身份
* TLS 还确保数据没有被篡改，因为传输中包含消息身份验证码（MAC）

使用 TLS 时，用户发送到网站（单击、填写表格等）的 HTTP 数据和网站发送给用户的 HTTP 数据都被加密。接收者必须使用密钥来解密加密的数据。


TLS 连接是通过一个称为 TLS 握手的流程启动的。当用户导航到一个使用 TLS 的网站时，用户设备（也称为客户端设备）和 web 服务器之间开始 TLS 握手。

在 TLS 过程中，用户设备和 web 服务器：

* 指定将要使用的 TLS 版本（TLS 1.0、1.2、1.3 等）
* 决定将要使用哪些密码套件（见下文）
* 使用服务器的 TLS 证书验证服务器的身份
* 握手完成后，生成会话密钥用于加密两者之间的消息

TLS 握手为每个通信会话建立一个密码套件。密码套件是一组算法，其中指定了一些细节，例如哪些共享加密密钥（即会话密钥）将用于该特定会话。TLS 也能在一个未加密的通道上设置匹配的会话密钥，这要归功于一种称为公钥加密的技术。

握手还处理身份验证，其中通常包括服务器向客户端证明其身份。这是通过使用公钥来完成的。公钥是使用单向加密的加密密钥，即任何拥有公钥的人都可以解读使用服务器私钥加密的数据，以确保其真实性，但只有源发送方才可以使用私钥加密数据。服务器的公钥是其 TLS 证书的一部分。

数据完成加密和验明身份后，使用消息身份验证码（MAC）进行签名。接收方然后可以验证 MAC 来确保数据的完整性。这有点像阿司匹林药瓶上的防篡改铝箔；消费者知道没人篡改过他们的药品，因为购买时铝箔完好无损。

![](/images/https/03.png)

#### TLS / SSL如何使用公共密钥加密？
Public key encryption is extremely useful for establishing secure communications over the Internet (via HTTPS). A website's SSL/TLS certificate, which is shared publicly, contains the public key, and the private key is installed on the origin server – it's "owned" by the website.

TLS handshakes use public key cryptography to authenticate the identity of the origin server, and to exchange data that is used for generating the session keys. A key exchange algorithm, such as RSA or Diffie-Hellman, uses the public-private key pair to agree upon session keys, which are used for symmetric encryption once the handshake is complete. Clients and servers are able to agree upon new session keys for each communication session, so that bad actors are unable to decrypt communications even if they identify or steal one of the session keys.



#### 何时进行 TLS 握手？

用户导航到一个使用 HTTPS 的网站，浏览器首先开始查询网站的原始服务器，这时就会发生 TLS 握手。在任何其他通信使用 HTTPS 时（包括 API 调用和 DNS over HTTPS 查询），也会发生 TLS 握手。

通过 TCP 握手打开 TCP 连接后，将发生 TLS 握手。

#### 什么是密码套件？
密码套件是一组用于建立安全通信连接的加密算法。（加密算法是对数据执行的一组数学运算，以使数据显得随机。）广泛使用的密码套件有多种，而且 TLS 握手的一个重要组成部分就是对这个握手使用哪一密码套件达成一致意见。

#### TLS 握手

TLS 通信会话从 TLS 握手开始。TLS 握手采用一种称为***非对称加密***的方法，也就是在对话的两端使用两个不同的密钥。这是通过一种称为公钥密码术的技术实现的。

公钥密码术中使用两个密钥：公钥（服务器将其公开提供）和私钥（保密且仅在服务器端使用）。使用公共密钥加密的数据只能使用私钥解密，反之亦然。

在 TLS 握手期间，客户端和服务器使用公钥和私钥交换随机生成的数据，并且使用此随机数据创建新的加密密钥，即会话密钥。

TLS 握手后，双方使用***对称加密***的方法，即使用相同的会话密钥进行加密。一旦使用了会话密钥，就不再使用公钥和私钥。会话密钥是临时密钥，会话终止后便不再使用。下一会话需要创建一组新的随机会话密钥。

![](/images/https/asymmetric-encryption.svg)

#### TLS 握手有哪些步骤？

TLS 握手是由客户端和服务器交换的一系列数据报或消息。TLS 握手涉及多个步骤，因为客户端和服务器要交换完成握手和进行进一步对话所需的信息。

TLS 握手的确切步骤将根据所使用的密钥交换算法的类型以及双方支持的密码套件而有所不同。RSA 密钥交换算法最为常用。具体如下：

1. “客户端问候（client hello）” 消息： 客户端通过向服务器发送“问候”消息来开始握手。该消息将包含客户端支持的 TLS 版本，支持的密码套件，以及称为一串称为“客户端随机数（client random）”的随机字节。
2. “服务器问候（server hello）”消息： 作为对 client hello 消息的回复，服务器发送一条消息，内含服务器的 SSL 证书、服务器选择的密码套件，以及“服务器随机数（server random）”，即由服务器生成的另一串随机字节。
3. 身份验证： 客户端使用颁发该证书的证书颁发机构验证服务器的 SSL 证书。此举确认服务器是其声称的身份，且客户端正在与该域的实际所有者进行交互。
4. 预主密钥： 客户端再发送一串随机字节，即“预主密钥（premaster secret）”。预主密钥是使用公钥加密的，只能使用服务器的私钥解密。（客户端从服务器的 SSL 证书中获得公钥。）
5. 私钥被使用：服务器对预主密钥进行解密。
6. 生成会话密钥：客户端和服务器均使用客户端随机数、服务器随机数和预主密钥生成会话密钥。双方应得到相同的结果。
7. 客户端就绪：客户端发送一条“已完成”消息，该消息用会话密钥加密。
8. 服务器就绪：服务器发送一条“已完成”消息，该消息用会话密钥加密。
9. 实现安全对称加密：已完成握手，并使用会话密钥继续进行通信。

所有 TLS 握手均使用非对称加密（公钥和私钥），但并非全都会在生成会话密钥的过程中使用私钥。例如，短暂的 Diffie-Hellman 握手过程如下：

1. 客户端问候：客户端发送客户端问候消息，内含协议版本、客户端随机数和密码套件列表。
2. 服务器问候：服务器以其 SSL 证书、其选定的密码套件和服务器随机数回复。与上述 RSA 握手相比，服务器在此消息中还包括以下内容（步骤 3）：
3. 服务器的数字签名：服务器使用其私钥对客户端随机数、服务器随机数及其 DH 参数* 进行加密。加密后的数据用作服务器的数字签名，从而确定服务器具有与 SSL 证书中的公钥相匹配的私钥。
4. 确认数字签名：客户端使用公钥解密服务器的数字签名，验证服务器控制私钥并且是其声称的身份。客户端 DH 参数：客户端将其 DH 参数发送到服务器。
5. 客户端和服务器计算预主密钥：客户端和服务器使用交换的 DH 参数分别计算匹配的预主密钥，而不像 RSA 握手那样由客户端生成预主密钥并将其发送到服务器。
6. 创建会话密钥：与 RSA 握手中一样，客户端和服务器现在从预主密钥、客户端随机数和服务器随机数计算会话密钥。
7. 客户端就绪：与 RSA 握手相同。
8. 服务器就绪
9. 实现安全对称加密

*DH 参数：DH 代表 Diffie-Hellman。Diffie-Hellman 算法使用指数计算得出相同的预主机密。服务器和客户端各自提供用于计算的参数，并且组合后在每一端产生不同的计算，但得出相等的结果。

#### 什么是会话？

会话本质上是一个对话。会话通过网络进行，并且当两个设备相互确认并打开虚拟连接时开始，并随着两个设备在彼此获得了所需信息并发送"完成"消息时而结束，就像两个人正在互相发短信一样，他们会通过说"之后再聊”来结束对话。连接也可能由于不活动而超时结束，就像如果两个人正在发短信但停止了互相回复。

![](/images/https/what_is_a_session_key.png)

A session can either be a set period of time, or it can last for as long as the two parties are communicating. If the former, the session will expire after a certain amount of time; in the context of TLS encryption, the two devices would then have to exchange information and generate new session keys to reopen the connection.

#### 什么是会话密钥？

A session key is any encryption key used to symmetrically encrypt one communication session only. In other words, it's a temporary key that is only used once, during one stretch of time, for encrypting and decrypting data; future conversations between the two parties would be encrypted with different session keys. A session key is like a password that someone resets every time they log in.

In SSL/TLS, the two communicating parties (the client and the server) generate 4 session keys at the start of any communication session, during the TLS handshake. The official RFC for TLS does not actually call these keys "session keys", but functionally that's exactly what they are.

#### TLS握手如何运作？
During a TLS handshake, both client and server send each other random data, which they use to make calculations separately and then derive the same session keys. Three kinds of randomly generated data are sent from one side to the other:

"客户端随机数" ：这是客户端发送到服务器的随机字符串。
"服务器随机数" ：与客户端服务器随机数相似，不同之处在于它是由服务器将其发送给客户端。
" Premaster机密" ：这是另一串数据。在某些版本的TLS握手中，客户端会生成此机密，使用公钥加密并将其发送到服务器；在其他版本中，客户端和服务器使用商定的算法参数自行生成Premaster机密，以达到相同的结果。
TLS握手使用非对称加密，以使服务器通过随机性向攻击者隐藏（通过使用私钥加密），或者允许服务器对其中一个消息进行数字"签名" ，以便客户端知道服务器的真实来源（就像签名有助于在现实生活中验证某人的身份一样）。服务器使用私钥对某些数据进行加密，而客户端使用公钥对其进行解密，从而证明服务器具有正确的密钥并且是合法的。

![](/images/https/20200609195345466.jpg)

![](/images/https/2641864607-5e11d65c74244_fix732.png)



#### TLS握手中的“master机密”是什么？
Master机密是通过算法将客户端随机数、服务器随机数和Premaster密码组合在一起的最终结果。客户端和服务器分别有这三个信息，因此他们应该能够得出相同的Master机密结果。

客户端和服务器然后使用master机密计算得出仅在该会话中使用的几个会话密钥，确切地说是4个会话密钥。

在TLS握手中，从master机密生成哪4个会话密钥？
在每个TLS握手中创建的4个会话密钥是：

* "客户端写入密钥（client write key）”
* "服务器写入密钥（server write key）“
* "客户端写入MAC密钥（client write MAC key）"
* "服务器写入MAC密钥（client write MAC key）"

客户端写入密钥是客户端用来加密其消息的密钥。客户端写入密钥是对称密钥，客户端和服务器都有。这使服务器可以使用相同的密钥解密来自客户端的消息。

服务器写入密钥与客户端写入密钥相同，只是它处在服务器端。概括来讲：从客户端到服务器的消息使用客户端写入密钥加密，服务器使用客户端写入密钥解密它们。服务器到客户端的消息使用服务器写入密钥加密，客户端使用服务器写入密钥来解密它们。（整个过程由客户端设备或浏览器处理；用户本身不必执行任何加密或解密操作。）

MAC（消息身份验证代码）密钥用于对消息进行数字签名。服务器使用服务器写入MAC密钥对消息进行签名，并且当客户端收到消息时，它可以对照自己的服务器MAC密钥记录检查使用的MAC密钥，以确保其合法性。客户端则使用客户端写入MAC密钥签署消息。

每个新的通信会话和新的TLS握手都会创建一组4个全新的会话密钥。会有一个不同的客户端写入密钥、服务器写入密钥等等，但是每次都会创建这4种类型的密钥。

## HTTPS 中间人攻击及其防范

::: tip 中间人攻击
在密码学和计算机安全领域中，中间人攻击（Man-in-the-middle attack，缩写：MITM）是指攻击者与通讯的两端分别建立独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方直接对话，但事实上整个会话都被攻击者完全控制。在中间人攻击中，攻击者可以拦截通讯双方的通话并插入新的内容。在许多情况下这是很简单的（例如，在一个未加密的Wi-Fi 无线接入点的接受范围内的中间人攻击者，可以将自己作为一个中间人插入这个网络）。
:::

### 攻击方法

黑客用自己的证书+自己的域名
方法描述: 黑客精心做一个类似于qq.com的网站: oq.com, 并且给自己的网站申请https证书。粗心的用户打开这个长得很像qq.com的网站时，看到浏览器中亮起了绿色的小锁，误以为是安全的qq网站。

这方法相当于做一个钓鱼网站，这里所有https证书都是黑客自己的，并没有入侵一说。仅仅是钓鱼而已。对待这种攻击，我们平常要非常小心的去看下地址栏里的网址，不要打开陌生人给的链接。

证书劫持+用自己的域名
这样做是毫无意义的，因为既然黑客要用自己的域名钓鱼了，直接用自己的证书就行了，干嘛要去窃取目标网站的证书。。。

不过从技术上来看的话，由于服务器证书是可以公开的，访问网站服务器自动就会把证书发送给浏览器。 所以我们确实可以劫持目标网站传来的证书，把证书拿来作为自己钓鱼网站的证书来使用。
但这样浏览器会报错的，别忘了https原理中我们讲到的证书校验的三步骤；浏览器校验时除了验证证书本身是否是CA机构颁发的，而且要验证证书内容和当前访问的网站是否一致，如果不一致也会爆出证书错误的提示的。

如果用户看到浏览器警告证书错误后，依然点击 继续访问 那这样花样作死的行为谁也挡不住。

域名劫持+用自己的证书
例如黑客将域名劫持，指向自己的服务器，自己服务器上放置自己生成的私有证书（黑客只能这样做，因为他没有域名控制权是无法向CA机构申请该域名的证书的）。 这种情况浏览器会报错吗？

答案是肯定的，你自己造一个hack.com域名的合法CA证书，在浏览器端对证书进行签名校验时会发现这个证书不属于全球公认的合法CA机构颁发的, 会报出证书错误

DNS域名劫持+证书劫持
上面方法还是有缺陷的，会因为证书和网站信息不匹配而被浏览器警告，毕竟现在浏览器的警告做的越来越鲜艳，我们不能指望小白用户去点击继续访问。

所以，我又想到一个办法，我们能否既把用户的DNS劫持掉、也把目标网站的证书也劫持掉，直接让他们访问目标网站时指向我的服务器，而且还用的是他访问的目标网站的合法证书呢？

DNS劫持这一步，显然是可以的做到，而且现在越来越简单可以做到；

盗取真实网站的证书也是可以的，毕竟证书是公开的。

然而，要实现https欺骗还是不行。因为虽然我们劫持了目标网站的证书，但是我们没有目标服务器的私钥。 所以尽管在客户端进行证书验证阶段确实是能欺骗成功的，但由于握手阶段计算sessionkey(后续会话秘钥key)的时候，是有一次对随机数的非对称解密的(客户端会使用公钥加密一个随机数给服务器，服务器把它解密出来作为会话秘钥的一个算法来源)。

此时作为中间人你是无法解开客户端用真正网站服务器的公钥加密过的随机数的；这就导致SSL握手的第四步无法完成。我司的https专家罗成也告诉我，这会爆出 SSL连接错误； 好吧，我们又不能优雅的进行入侵了。

域名入侵
域名入侵这个应该不能简单的理解为劫持了，而是直接入侵目标网站的域名服务器或者域名账户控制权。黑客通过拿到域名控制权然后去CA机构给自己的公钥申请数字证书，则黑客就可以拿到 合法 的一本证书，而且黑客是拥有跟这个证书匹配的私钥的。

有了这些，下一步就只需要通过DNS劫持等手段，让用户访问到黑客的服务器了。 然而，连域名都入侵了，我们还需要DNS劫持吗，显然不需要了，此时直接把域名指向我们自己的服务器就行了。

当然，这个几乎不可能发生，毕竟第一域名是比较难入侵而且能持续很长时间不被发现的；另外即使入侵了域名，你想重新申请到CA证书也是比较难的，因为知名公司的CA证书申请都是要提交营业执照等东西的。 但事实上在国外还真的发生过一起针对银行的大型攻击事件，黑客真的做到了 http://news.cnblogs.com/n/567978

中间人证书欺骗攻击
既然上面的方法都那么难，还有什么办法可以攻击呢。这时候，我们想到了一种 中间人攻击 的手法。

所谓中间人攻击，就是我们DNS劫持后，我们自己不对用户提供Web服务，我们作为一个中转，当用户请求过来时，我们给用户提供一个用自己的私钥颁发的私有的假的证书(当然这个假证书肯定会导致用户这边发出证书不是CA机构颁发的警告，我们要通过其他办法来让用户继续访问这个网站)

只要用户信任了中间人的证书，这样中间人跟用户建立https连接后，用户的信息对中间人来说是可解析的(因为中间人是拥有此本证书私钥的，可以正常管理当前建立的这个https连接)；

然后用户跟中间人建立握手连接的过程中，中间人顺便跟后方的目标服务器建立一个同样的https连接(此时中间人的角色是客户端)；接下来，用户SSL握手的所有请求以及后续的内容请求，中间人都在中间负责做内容中转–即先解析出明文再传递给另外一端。

![](/images/https/centerattach.png)

显然这种方法，是可以窃取到https的信息明文的。当然，唯一需要你做的，就是取用户电脑上帮他点一下 “继续浏览”…. 其实这就是mac上的charles对https抓包的原理, 所以如果你的手机需要抓包，则需要在手机上安装Charles的证书。 （如果你是windows用户，则fiddler的原理也是一样的）

### 中间人攻击的几种形式
直接抓取报文获得明文信息
非法中间加密代理，窃取明文信息
留存密文，如果对称密钥泄露，解密历史报文

### 中间人攻击的防范

* 防范直接获取明文

加密传输报文

* 防范非法中间加密代理

黑客对客户端伪装成服务器，对服务器伪装成客户端，通过非法代理窃取会话数据。上面图示的第一、第二阶段可以防止这种非法代理行为。虽然黑客可以获取站点的证书，伪装成站点服务器接收请求，但黑客没有站点服务器私钥，无法与实现客户端实现密钥交换，不能窃取明文的会话数据。

* 防范解密历史报文（前向安全性）

防范解密历史报文，这种安全防护叫前向安全。早期的HTTPS实现中，客户端将会话密钥通过站点公钥加密后，发送给服务器，服务器用私钥解密。此时如果服务器私钥保管不善泄露，黑客如果留存了历史报文，可以解密获取会话密钥，从而还原历史报文数据。目前通过DH算法保证前向安全。在第二阶段，客户端与服务器只交换少量信息，双方便可独立计算出临时会话密钥用于加密。即使黑客事后获取私钥，也不能计算出会话密钥，从而实现前向安全。


###  SSL PINNING
https://shunix.com/ssl-pinning/
https://medium.com/@anuj.rai2489/ssl-pinning-254fa8ca2109

## FAQ

### 什么是混合内容？
使用 TLS（也称为 SSL），可以对互联网通信进行加密，打造更加安全的浏览体验。用户可以轻松识别 TLS 加密的站点，因为其 URL 中含有“https://”而非“http://”。但在某些情况下，HTTPS 站点也可能包含一些使用明文 HTTP 协议加载的元素。这将形成一个称为混合内容的情形，有时也称为“HTTP over HTTPS”。

存在混合内容时，用户会感觉他们使用的是安全的加密连接，因为用户处在受 HTTPS 保护的站点上。然而，页面中的未加密元素会带来漏洞，使这些用户暴露在恶意活动中，例如未经授权的跟踪和在途攻击等。漏洞的严重性取决于混合内容是被动还是主动的。

#### 被动/显示混合内容和主动混合内容有什么区别？
被动/显示混合内容：在这种情况下，未加密的 HTTP 内容仅限于站点上封装的并且无法与页面其余部分交互的元素，如图片或视频。例如，攻击者可以阻止或替换通过 HTTP 加载的图片，但无法修改页面的其余部分。

主动混合内容：在这种情况下，通过 HTTP 提供的元素或依赖项能够与整个网页交互并对网页进行更改。这包括 JavaScript 文件和API 请求之类的依赖项。

与被动/显示混合内容相比，主动混合内容面临更为严重的威胁；在受损之后，它允许攻击者控制整个网页，收集敏感的用户输入（如登录凭据），为用户提供伪造的页面，或将用户重定向到攻击者的站点。

大多数现代 Web 浏览器都在开发者控制台中提供针对混合内容的警告，并且阻止危险程度较高的混合内容类型。各种浏览器都有自己的一套规则，但一般而言，主动混合内容更有可能会被阻止。

尽管被动/显示混合内容构成的威胁比较轻微，但仍为攻击者提供了破坏隐私并跟踪用户活动的机会。此外，许多浏览器都允许某些形式的被动混合内容，并且仅在开发者控制台中向用户提供混合内容警告，因此许多用户不会意识到自己正在接触混合内容。

![](/images/https/Screen_Shot_2019-01-14_at_4.53.45_PM.png)

使用过时 Web 浏览器的用户特别容易受到攻击，因为这些浏览器或许根本不会阻止混合内容。

#### 为什么浏览器不简单地阻止所有混合内容？

遗憾的是，大量流行网站以某种方式提供混合内容。如果 Web 浏览器阻止所有混合内容，它提供给用户的 Web 内容将非常局限。在更多网站解决此问题之前，浏览器必须做出妥协，允许某些不太严重的混合内容形式。

#### 如何修正混合内容错误？

Web 开发人员有责任消除混合内容。随着时间的推移，Web 浏览器对混合内容的限制越来越严格，并且这种趋势只会延续下去。因此，如果开发人员希望 Web 浏览器继续显示其站点，则必须消除混合内容。

混合内容的修正非常简单：Web 开发人员需要确保其页面上的每个资源都通过 HTTPS 加载。在实践中，这可能会颇为棘手，因为现代网站通常从不同的来源加载几种不同的资源。

有一个不错的工具可以帮助开发人员甄别其页面中存在的所有混合内容，那就是 Google Chrome 开发者控制台。开发人员还可以检查其源代码，以查找使用“http://”URL 加载的资源实例，如 API 调用和库。在某些情况下，解决方案只是简单地将“http://”URL 替换为“https://”。但是，必须首先验证资源的 HTTPS 版本是否可用。如果资源的加密版本不可用，则需要彻底替换或删除这个资源。

### HTTPS使用对称还是非对称加密？
HTTPS, which is HTTP with the TLS encryption protocol, uses both types of encryption. All communications over TLS start with a TLS handshake. Asymmetric encryption is crucial for making the TLS handshake work.

During the course of a TLS handshake, the two communicating devices will establish the four session keys, and these will be used for symmetric encryption for the rest of the session. Usually, the two communicating devices are a client, or a user device like a laptop or a smartphone, and a server, which is any web server that hosts a website.

### 为什么不直接使用非对称密钥加密传输报文？

首先非对称密钥加解密效率低，不如对称密钥，一般使用AES等加密算法。其次前面也提到，只使用非对称密钥加解密不能保证前向安全性。

### 浏览器怎么知道所访问的站点不是伪造的？

浏览器主要依靠数字证书来确认所访问的站点不是伪造的。当浏览器通过https访问站点，站点须返回数字证书。数字证书是CA机构“签发”的电子文件，其中包含使用者信息、站点公钥、颁发者（CA）信息和CA指纹等。假设数字证书是完全可信的，且其中的内容也是不可篡改的。浏览器首先验证数字证书中的使用者（站点）信息与所访问的站点域名是否一致，然后用数字证书中的站点公钥挑战站点服务器，只用拥有私钥的真实站点才能通过挑战。因此可以确保所访问的站点是真实的。

注意：如果验证有问题，浏览器会提示风险访问。

### 为什么数字证书是可信的？

CA机构是可信的，CA本身也包含一个非对称密钥对，私钥用于“签发”的数字证书，公钥发布出去用于验证数字证书。CA使用非对称密钥配合HASH算法保证数字证书可信且不可篡改。CA将使用者信息、站点公钥、有效期等关键信息打包做HASH运算，再将HASH运算结果用CA私钥签名生成指纹。然后将以上全部信息打包成数字证书。黑客没有私钥不可以伪造证书签名，且证书的内容如果被修改，HASH结果就会改变。因此黑客不可伪造或者篡改证书，有效的数字证书是可信的。

### 浏览器怎么知道CA是可信的？

浏览器主要依据客户端操作系统保存的根证书列表判断CA的权威性。如上图，在Windows操作系统中，这个列表放在“受信任的根证书颁发机构存储区”中，这个列表实际上是CA机构的根证书集合，根证书包含CA机构的信息和公钥。只要是这个列表中的CA签发的证书，浏览器就认为可信。微软会动态维护根证书列表，用户需要管理员权限才能向这个列表中加入CA证书。

注：Windows客户端运行在内网中时，若无法联网更新根证书列表，此时可能会出向访问https应用缓慢。解决方法如下：

https://support.microsoft.com/km-kh/help/2677070/an-automatic-updater-of-untrusted-certificates-is-available-for-window

### 为什么有些软件如Fiddler可以还原https报文？

Fiddler是通过中间代理的方式抓取报文，还原https报文的前提是在客户端的根证书列表下加入Fiddler生成的CA根证书。这样Fiddler就成为CA，可以伪造数字证书，伪装成服务器。但是只能用于测试，不能实现真正意义上的窃取数据。

### HTTPS only protects data transmission

![](/images/https/https-encr_v1_de.png)

The functioning of HTTPS is quite simple. Instead of the unencrypted transmission of data between the client and the web server via HTTP, the transmission via HTTPS starts with a “handshake”, which describes a process for protected identification and authorization between the server and the client. If this process is successful, an asymmetric key is exchanged, with the help of which the encryption and decryption of the data takes place. Additionally, SSL certificates are only issued if the server and the domain holder are clearly known. For this reason, the certification authorities check the actual owner of the domain and request their address data.

### Why is the protection with HTTPS not enough for my data?

If a continuous and efficient protection of data is required, then HTTPS is not a suitable solution against attackers. Since the data is decrypted after the secure transmission, data remains unprotected on the servers of the recipient. This means that the data cannot be intercepted when transmitted from the user to the servers of a company through the secure HTTPS transmission, but once the data is at destination everyone can access it, given that the data is stored in plain text on the servers. Thus, in principle, each platform operator can check what data is stored on its servers – that’s not possible for Stackfield or for services that apply end-to-end encryption. In our case, the data is already encrypted in the user’s browser and then transmitted protected by HTTPS / SSL to be stored in an encrypted state on our servers. When retrieving the data, it is transferred back via HTTPS and decrypted in the browser / on the device of the user. Only the combination between client-side encryption and HTTPS makes a Social Collaboration platform really safe.

![](/images/https/security_encr_v2.png)

::: tip 参考
* [cloudflare](https://www.cloudflare.com/zh-cn/learning/)
* [Electron SSL Pinning
](https://dialogs.github.io/electron-ssl-pinning/)
* [What does HTTPS mean – and how important is it?](https://www.stackfield.com/https)
:::