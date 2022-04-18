---
# NavLink
next:
  text: cuDNN 是什么？
  link: /ai/machinelearning/cudnn
---

# CUDA 是什么？

2006 年 11 月，NVIDIA® 推出了 CUDA®，这是一种通用并行计算平台和编程模型，它利用 NVIDIA GPU（图形处理器） 中的并行计算引擎以比 CPU 更有效的方式解决许多复杂的计算问题，可大幅提升计算性能。

CUDA 附带一个软件环境，允许开发人员使用 C++ 作为高级编程语言。 如下图所示，支持其他语言、应用程序编程接口或基于指令的方法，例如 FORTRAN、DirectCompute、OpenACC。

![](/images/cuda/003.png)

## CUDA 是一种编程语言吗？

CUDA 是用于 GPU 计算的架构，能在 GPU 上运行标准 C 语言。为实现这一点，NVIDIA 定义了一套通用计算指令集 (PTX) 和一小部分C语言扩展集，从而让开发者充分利用我们 GPU 中强大的并行计算能力。Portland Group 为 NVIDIA CUDA 架构上的 Fortran 提供支持，而其它一些公司则为 Java、Python、.NET 等其它语言提供支持。

我们用术语 “CUDA C” 来描述开发者指定 GPU 上要执行的功能、GPU 内存如何使用、应用程序如何使用 GPU 的并行处理功能所使用的语言和一小部分扩展集。

NVIDIA 的 C 语言编译器是使用 Edison Design Group C 语言分析器及 Open64 编译器构建的，并且它进行了扩展以支持 CUDA C 扩展。很多CPU公司在他们的编译器中都广泛使用 EDG 分析器和 Open64 编译器。

## CUDA 工具包

NVIDIA® CUDA® 工具包提供了开发环境，可供创建经 GPU 加速的高性能应用。借助 CUDA 工具包，您可以在经 GPU 加速的嵌入式系统、台式工作站、企业数据中心、基于云的平台和 HPC 超级计算机中开发、优化和部署应用。此工具包中包含多个 GPU 加速库、多种调试和优化工具、一个 C/C++ 编译器以及一个用于在主要架构（包括 x86、Arm 和 POWER）上构建和部署应用的运行时库。

![](/images/cuda/002.png)

## 为什么要是用 GPU

GPU（Graphics Processing Unit）在相同的价格和功率范围内，比CPU提供更高的指令吞吐量和内存带宽。许多应用程序利用这些更高的能力，在GPU上比在CPU上运行得更快(参见GPU应用程序)。其他计算设备，如FPGA，也非常节能，但提供的编程灵活性要比GPU少得多。

GPU和CPU在功能上的差异是因为它们的设计目标不同。虽然 CPU 旨在以尽可能快的速度执行一系列称为线程的操作，并且可以并行执行数十个这样的线程。但GPU却能并行执行成千上万个(摊销较慢的单线程性能以实现更大的吞吐量)。

GPU 专门用于高度并行计算，因此设计时更多的晶体管用于数据处理，而不是数据缓存和流量控制。

下图显示了 CPU 与 GPU 的芯片资源分布示例。

![](/images/cuda/004.png)

将更多晶体管用于数据处理，例如浮点计算，有利于高度并行计算。GPU可以通过计算隐藏内存访问延迟，而不是依靠大数据缓存和复杂的流控制来避免长时间的内存访问延迟，这两者在晶体管方面都是昂贵的。

::: tip 参考
* [CUDA](https://www.nvidia.cn/geforce/technologies/images/cuda/)
* [CUDA Toolkit](https://developer.nvidia.cn/zh-cn/cuda-toolkit)
* [CUDA 编程手册](https://developer.nvidia.com/zh-cn/blog/cuda-intro-cn/)
:::
