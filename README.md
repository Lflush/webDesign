个人主页网站设计：

页面设置：
登录页面（好像不是很必要）

主页 (index.html)：

介绍我的个人网站，可以包括欢迎语、网站主题或宗旨等。
展示我的最新内容或特色内容，例如最新博客文章、最新图片等。
提供导航链接，方便访客浏览其他页面。
个人简介 (profile.html)：

介绍我自己，包括姓名、职业、兴趣爱好、技能等。
可以添加一张个人照片。
讲述我的经历、教育背景、工作经历等。
我的博客 (blog.html)：

展示我的博客文章列表，包括标题、摘要、发布日期等。
提供文章分类或标签，方便访客筛选感兴趣的内容。
每篇文章可以包括评论区或分享按钮，方便访客交流和分享内容。
图片库 (gallery.html)：

展示我的图片作品，可以按照不同主题或分类进行展示。
每张图片可以添加标题或描述。
提供图片浏览功能，让访客轻松查看我的作品。
关于我 (about.html)：

进一步详细介绍关于这个网站，或者我对这个网站的一观点吧
网站导航 (sitemap.html)：

提供网站的整体结构和导航链接，方便访客快速浏览和访问我的各个页面。
可以采用树状结构、列表形式或其他形式展示导航链接。




通用组件：
背景：使用一个动态视频作为背景，全屏背景视频，确保视频能够覆盖整个视口，而不改变其宽高比，设置为自动播放、静音、循环。，而且播放失败使用Your browser does not support HTML5 video.文本提示，使用z-index使组件位于页面最下层

顶部导航栏：
颜色和渐变：侧边栏和顶部导航栏使用半透明背景，文本颜色为深色，确保在任何背景下都清晰可见。添加了阴影效果增强视觉层次感。
交互效果：导航栏在悬停时背景模糊度增加，按钮悬停时背景颜色变化，带来更好的交互体验。
字体和样式：增加了字体的粗细和阴影，使标题和按钮文字更加突出。
响应式布局：使用 Flexbox 布局，确保在不同屏幕尺寸下布局合理。
使用z-index使组件位于页面上层


最左边为openbtn，是打开侧边栏的按钮，点击之后打开侧边栏，使用js代码实现。
暨南大学图标，点击之后跳转https://www.jnu.edu.cn/main.htm暨大主页
搜索：搜索图标就放在顶部导航栏最右边，并且点击图标时会展开搜索框。但是还没有实现搜索的功能。

TOP按钮：使用flex点击之后平滑回到网页最上端，使用js实现，下滑出200px才显示TOP图标，TOP加了一个icon图标，悬停TOP图标会改变透明度和图标颜色和大小实现交互，点击之后回到网页最上端。使用了z-index: 100使TOP按钮组件位于展示页面上层

页脚：
包含简单的版权信息。
设置悬停时模糊度增加，添加交互效果

index.js代码为网站组件添加了几个交互功能，包括侧边栏的展开和收起、搜索框的显示切换，以及一个滚动到页面顶部的按钮。以下是每个功能的详细描述：

侧边栏控制:
当文档加载完成后，通过getElementById获取侧边栏(sidebar)、打开按钮(openBtn)、关闭按钮(closeBtn)和搜索按钮(searchBtn)的DOM元素。
点击打开按钮时，侧边栏宽度设置为250px，使其展开。
点击关闭按钮时，侧边栏宽度设置为0，使其收起。
搜索框切换:
点击搜索按钮时，搜索框(searchBox)的显示状态在block和none之间切换，从而显示或隐藏搜索框。
滚动到顶部按钮 (scrollToTop函数):
定义了一个scrollToTop函数，当调用时，页面会平滑滚动到顶部。
滚动监听:
为window对象添加滚动事件监听器。
当页面向下滚动超过200像素时，显示滚动到顶部的按钮(topBtn)。
当页面滚动位置小于200像素时，隐藏该按钮。

mouseClick.js:
鼠标点击特效：点击鼠标时，会在点击位置产生一系列彩色的小球，小球会向不同的方向运动，并且逐渐变小消失。
updateSize()：用于更新画布大小，使其填满整个窗口，并且将画布的宽高缩放为窗口大小的两倍，以提高绘制的清晰度。
class Ball：这是一个小球的类，构造函数用于初始化小球的位置、速度、大小和颜色，并且每个小球都会根据长按的状态来确定它们的运动速度。
pushBalls()：这个函数用于在给定位置产生一定数量的小球，每个小球都是 Ball 类的一个实例。
randBetween()：这个函数用于生成指定范围内的随机整数。
loop()：这个函数是一个循环函数，用于不断地更新画布上小球的位置和状态，并且根据长按的状态调整小球的生成速度。
removeBall()：这个函数用于移除已经离开画布范围或者消失的小球。

通过监听鼠标的点击事件来触发特效，当鼠标按下时会生成一系列小球，长按鼠标则会生成更多小球并且它们的移动速度更快。

mouseMove.js:
鼠标移动轨迹：鼠标移动时在页面上生成一些带有特定样式的字符元素

一个简单的鼠标移动特效，让页面中出现一些随机字符跟随鼠标移动，并且随着时间逐渐消失。以下是代码的主要组成部分和功能解释：

1. 初始化变量和数组：
   colors: 存储了可用的颜色数组。
   characters: 存储了可用的字符数组。
   elementGroup: 用于存储所有创建的元素对象。

2. 定义元素类 Element：
   在构造函数中，随机选择一个字符并初始化元素的一些属性，如生命周期、初始样式等。
   init 方法用于初始化元素的位置、颜色等属性，并将元素添加到页面中。
   update 方法用于更新元素的位置和样式。
   die 方法用于销毁元素。

3. 添加事件监听器：
   AddListener 函数用于添加鼠标移动和触摸事件的监听器。

4. 循环渲染：
   Rander 函数用于遍历并更新所有元素，当元素的生命周期小于零时，销毁元素。

5. 鼠标移动事件：
   onMouseMove 函数在鼠标移动时触发，随机选择一个颜色并创建一个元素。

6. 触摸事件：
   Touch 函数在触摸事件中触发，用于处理触摸点的位置并创建相应的元素。

7. 元素创建和样式应用：
   CreateElement 函数用于创建一个新的元素对象并将其添加到 elementGroup 数组中。
   ApplyStyle 函数用于将指定样式应用到指定的元素上。

8. 自执行函数：
   整个代码被包裹在一个自执行函数中，以避免污染全局命名空间。

这样，当用户在页面上移动鼠标或触摸屏幕时，就会触发相应的事件，创建并移动元素，从而产生鼠标移动特效。


使用了的CDN:
cdnjs.cloudflare.com - 这是Cloudflare提供的一个公共CDN服务，用于托管开源库和公共资源，如FontAwesome的CSS文件。
cdn.jsdelivr.net - jsDelivr是一个免费的开源CDN服务，它允许开发者托管自己的项目文件，同时也提供了对一些流行库的支持，比如你使用的jQuery库和font-awesome的CSS文件。
stevenjoezhang/live2d-widget - 这是一个GitHub上的项目，通过jsDelivr CDN提供服务，用于在网页上添加Live2D动画模型。


登录界面
一个简单的表单包含两个输入框和一个按钮，设置一个带有62.4%透明度的黑色背景，因为还没有添加后端代码，使用onclick="location.href='目标页面.html'"为登录按钮添加点击事件，点击按钮后会跳转到指定的目标页面。添加了hover伪类交互，鼠标在登录盒子中悬停就减少登录盒子的透明度，增加交互。

登录框 (#login_box): 登录框占据屏幕宽度的40%，高度为400px，背景色为半透明黑色（60%不透明度），居中显示。它具有圆角（10px）和内边距（50px），在鼠标悬停时背景色变得更不透明（80%不透明度），增加了视觉反馈。
登录文本 (.login_text): 登录框内的文本颜色为白色，位于登录框顶部5%的位置，提供了清晰的视觉对比。
输入框 (#input-box): 输入框距离登录文本5%的位置，宽度为60%，字体大小为15px，颜色为白色，背景透明，底部有2px的白色边框。在鼠标悬停时，输入框会变宽，背景变为白色，文字颜色变为黑色，提供了用户交互的反馈。
占位符文本 (input[type="text"]::placeholder, input[type="password"]::placeholder): 占位符文本颜色为灰色（#ccc），在用户输入之前提供指示。
登录按钮 (.login_btn): 登录按钮宽度为60%，高度为30px，圆角为10px，无边框，文字颜色为白色，背景是从左到右的渐变色（#30cfd0到#330867）。在鼠标悬停时，按钮会轻微放大（transform: scale(1.1)），增加了动态效果。



网页导航
主要是一些常用网页，设置了网格显示，用盒子显示网站的标题和一些简单介绍，每行三格，分类标题也用盒子显示，还对盒子和链接文字进行了美化，添加了hover伪类增加交互。
鼠标悬停文字颜色变蓝。

友情链接容器 (friend-links): 使用了flex布局和wrap属性来创建一个响应式的链接容器，其中的元素可以根据屏幕大小自动换行。容器内部的元素之间有20px的间隙，提供了足够的空间使得每个链接都清晰可见。
链接类别 (link-category): 每个链接类别使用了grid布局，将内容分为三列，这提供了一个结构化且均匀的布局。
类别标题 (catagory-title): 标题具有粗体、24px的字体大小，并在鼠标悬停时颜色变为蓝色，这增加了用户的交互体验。
链接盒子 (link-box): 每个链接盒子都有一个轻微的背景色和阴影，这使得它们在页面上突出显示。在鼠标悬停时，盒子会向上移动并增加阴影，这是一个常见的视觉反馈技术，表明元素是可交互的。
链接标题 (link-title a): 链接标题具有18px的字体大小和粗体，无文本装饰，确保了链接的清晰度和专业性。标题在鼠标悬停时变为蓝色，与类别标题的交互效果一致。
链接描述 (link-description): 描述文本使用了14px的字体大小，提供了足够的信息而不会显得过于拥挤。



自我介绍页面：
个人简介页面包含了多个章节，每个章节都通过标题、图标和内容来展示个人信息和经历。

容器 (container): 页面中心有一个容器，包含个人资料和社交媒体链接。背景为半透明黑色，带有模糊效果，使背景图像更加突出。
头像 (profile .avatar): 一个圆形头像位于页面顶部，带有白色边框，鼠标悬停时会放大，吸引访问者的注意。
标题 (profile h1): 页面的主标题使用大号字体和阴影效果，增加了深度感和视觉冲击力。
段落 (profile p): 段落文字采用斜体和大号字体，背景为渐变色，文字颜色透明，创造了独特的视觉效果。
社交图标 (social-icons): 社交媒体图标水平排列，居中显示，鼠标悬停时放大并改变颜色，鼓励用户进行互动。
主要内容 (main): 主要内容区域宽度为90%，背景为半透明黑色，带有模糊效果和阴影，增加了视觉层次。
章节标题 (chapter-title): 每个章节的标题使用大号字体，带有渐变色背景和金色下划线，图标和文字水平居中对齐。
章节内容 (chapter-section): 每个章节的内容使用大号字体，行高增加，背景为半透明白色，带有内边距和圆角。
引用 (comment): 每个章节下方的引用的语句使用斜体字，字体较大，颜色为亮绿色，背景为渐变色，文字颜色透明。




主页
在主页写欢迎语，欢迎语要在屏幕上水平和垂直都居中，欢迎语要有艺术字的效果显得比较醒目和清晰，这一页就欢迎语，然后下滑滚轮，到下页屏幕的内容，头像和社交媒体信息，接下来风景图片和少量文字穿插

欢迎部分 (welcome-section): 一个高度为视窗高度的容器，设置为占据整个视口高度，使用flex布局，居中显示一个大号字体的欢迎信息，字体大小为大，颜色为半透明白色，带有手写体风格，营造出温馨而个性化的氛围。
向下滚动提示 (scroll-down-effects): 一个向下的双箭头图标位于页面底部，通过bounce动画不断地上下跳动，提示用户继续向下探索页面。
欢迎语 (hello): 一段中文诗句以大号字体居中显示，背景是从左到右的渐变色，鼠标悬停时增加模糊效果，增强了视觉吸引力。
个人资料容器 (container): 包含一个个人头像、名字“Jay”和一句座右铭“不忘初心，方得始终”。
社交图标 (social-icons): 一系列社交媒体图标，提供了与个人在各大平台上联系的途径。
介绍 (introduce): 一系列简短的文本，鼓励用户记录下自己的情感和每天的点滴。介绍文本的背景也是渐变色，鼠标悬停时改变渐变色并增加模糊效果，使页面更加生动。
启发性语录 (hi-content): 一系列带有背景图片的引用语，从古代哲学到现代名言。
图片与语录 (hi-content): 相同的引用语，但这次是与它们相关的图片并排显示，为语录提供了一个直观的视觉背景。图片和段落文字在垂直方向上排列，图片在鼠标悬停时不透明度增加，而段落文字则有淡入动画和阴影效果，增加了深度和动态感。
结束语 (introduce): 一句托尔斯泰的名言，作为页面的结尾。
 


博客
我的博客主页html内容是这样，.blog主要装blog-box，每个blog-box装一篇博客，blog-title是博客标题，blog-cover是博客封面，blog-information是博客的信息，比如时间，地点，博客有关的标签等等的信息，blog-description是博客的简要描述，可以是博客的前几十个字，也可以是博客的主要内容的描述。

博客主页的设计旨在展示各篇博客的摘要，每个博客都有自己的盒子，包含标题、封面、信息和简要描述。博客页面描述：

主容器 (.main): 有20px的内边距，背景色为半透明的浅灰色，使用Flexbox布局使内容垂直居中。
博客容器 (.blog): 以Flex布局显示，允许内容换行，间隙为20px，最大宽度为1200px，上边距为40px，使得博客盒子在页面中心呈现。
单个博客盒子 (.blog-box): 每个博客盒子背景为白色，圆角为10px，有轻微的阴影效果。它们默认是不可见的，当类.visible被添加时，会通过淡入效果变为可见。鼠标悬停时，盒子会略微放大并增加阴影，增强了交互性。
博客标题 (.blog-title): 标题背景为从左到右的渐变色，文字颜色为白色，居中对齐，字体加粗，增加了视觉吸引力。
博客封面 (.blog-cover img): 封面图片宽度为100%，高度自适应，块级显示。
博客信息 (.blog-information): 包含字体大小为0.9em的博客信息，颜色为深灰色，底部有一条细线分隔。
博客描述 (.blog-description): 描述文字的字体大小为1em，颜色为深色，行高为1.6，提供了足够的可读性。
模态框 (.modal): 一个固定定位的模态框，背景色为半透明黑色，用于展示更多内容。
模态框内容 (.modal-content): 模态框的内容背景为白色，有圆角和淡入效果，提供了一个清晰的背景来展示额外信息。
关闭按钮 (.close): 一个关闭模态框的按钮，颜色为浅灰色，鼠标悬停时变为黑色，增加了用户交互的直观性。


blog.js代码为博客主页添加了两个主要的交互功能：模态框和滚动淡入效果。

模态框功能:
当文档加载完成后，为每个.blog-box元素添加点击事件监听器。
点击任何博客盒子时，会从该盒子中提取标题、封面图片、图片描述，并将这些信息设置到模态框的相应元素中。
然后显示模态框(#blogModal)。
如果用户点击模态框的关闭按钮(.close)或者点击模态框外的区域，模态框将被隐藏。
滚动淡入效果:
页面滚动时，检查每个.blog-box元素是否在视口中可见。
如果一个博客盒子进入视口，它将获得.visible类，触发CSS过渡效果，使其淡入并向上移动。
这个效果也在页面加载时立即执行一次，以确保初始在视口中的博客盒子正确显示。




图库
图库主要是放我的一些图片的，可能是我生活学习的图片，也可能是我喜欢的图片，漂亮美丽风景等等，目前只放了我搭这个网站的素材图片
主

容器 (.main): 宽度为100%，有20px的内边距，顶部外边距为20%，带有轻微的阴影和圆角，为画廊提供了一个清晰的背景。
画廊标题 (.gallery-title): 一个带有半透明黑色背景和模糊效果的标题栏，字体大小为36px，加粗，白色文字居中显示，标题栏圆角为20px。
图片容器 (.gallery): 背景颜色为白色，包含多个.img类的图片元素。
图片样式 (.img): 每张图片占据视口高度的100%，背景图像覆盖整个元素并居中显示。图片有圆角和阴影，且背景图像固定不动。
图片悬停效果:
当鼠标悬停在图片上时，图片会稍微放大并向上移动，同时阴影加深，增加了视觉吸引力。
同时，一个半透明的黑色遮罩层会出现在图片上，增加了视觉深度。


关于
主容器 (.main): 设置了50px的自动外边距，5%和20%的内边距，白色背景，轻微的阴影和圆角边框，以及平滑的过渡效果。
标题样式 (.about-title): 标题字体大小为2.5em，颜色为深蓝灰色，居中对齐，下方有一条3px厚的#3498db颜色的边线，增加了视觉焦点。
内容样式 (.about-content): 内容字体大小为1.2em，行高为1.8，灰色文字，段落两端对齐，提供了良好的可读性。
交互效果:
当鼠标悬停在主容器上时，容器会向上移动5px，并增加阴影，增强了用户的交互体验。
标题和段落在鼠标悬停时颜色会变深，链接在鼠标悬停时颜色变化并出现下划线，突出了可点击的元素。

