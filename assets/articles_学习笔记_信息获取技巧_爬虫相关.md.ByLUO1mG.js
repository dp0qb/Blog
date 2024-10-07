import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.DrCKO7Ve.js";const b=JSON.parse('{"title":"爬虫相关内容","description":"","frontmatter":{},"headers":[],"relativePath":"articles/学习笔记/信息获取技巧/爬虫相关.md","filePath":"articles/学习笔记/信息获取技巧/爬虫相关.md"}'),p={name:"articles/学习笔记/信息获取技巧/爬虫相关.md"},o=e(`<h1 id="爬虫相关内容" tabindex="-1">爬虫相关内容 <a class="header-anchor" href="#爬虫相关内容" aria-label="Permalink to &quot;爬虫相关内容&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><h4 id="本篇介绍爬虫相关内容-需要-python-运行环境。" tabindex="-1">本篇介绍爬虫相关内容，需要 <code>python</code> 运行环境。 <a class="header-anchor" href="#本篇介绍爬虫相关内容-需要-python-运行环境。" aria-label="Permalink to &quot;本篇介绍爬虫相关内容，需要 \`python\` 运行环境。&quot;">​</a></h4><br></div><h2 id="requests包" tabindex="-1">requests包 <a class="header-anchor" href="#requests包" aria-label="Permalink to &quot;requests包&quot;">​</a></h2><p><code>requests</code> 包作为编写爬虫时常用的包，体积小巧且功能强大，非常推荐使用。 以下是一个简单的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>url = &quot;https://www.baidu.com&quot;</span></span>
<span class="line"><span>response = requests.get(url)</span></span>
<span class="line"><span>print(response.status_code)</span></span>
<span class="line"><span>response.encoding = &quot;utf-8&quot;</span></span>
<span class="line"><span>print(response.text)</span></span></code></pre></div><p>在上面的代码中，我们使用 <code>requests</code> 的 <code>get</code> 函数，对百度的首页地址发起get请求，并将请求结果赋给response变量。 如果你在网络环境良好的情况下试着运行这段代码，你应该能得到 <code>status_code</code> 的值为200，以及大量的文本内容（html标签）。</p><p>如果你对html标签不熟悉，也不要紧，你可以试试把 <code>response.text</code> 的内容写入到一个后缀为 <code>html</code> 的文本文件中，像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>url = &quot;https://www.baidu.com/&quot;</span></span>
<span class="line"><span>response = requests.get(url)</span></span>
<span class="line"><span>print(response.status_code)</span></span>
<span class="line"><span>response.encoding = &quot;utf-8&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>with open(&quot;demo.html&quot;, &#39;w&#39;, encoding=&quot;utf-8&quot;) as f:</span></span>
<span class="line"><span>  f.write(response.text)</span></span></code></pre></div><p>现在你的运行目录下应该多了一个名为 &quot;demo.html&quot; 的文件，试着双击打开它，你看到了什么？</p><p>我们在浏览器中打开了一个和百度首页相差无几的页面！遗憾的是，由于部分内容的缺失，它无法像真正的网页那样实现各种功能。至于如何实现这些功能，那涉及到另外一些知识，我不会在本文中讲解。无论怎样，我们对get请求有了一个初步的认识。</p><h2 id="beautifulsoup-的使用" tabindex="-1">BeautifulSoup 的使用 <a class="header-anchor" href="#beautifulsoup-的使用" aria-label="Permalink to &quot;BeautifulSoup 的使用&quot;">​</a></h2><h2 id="使用随机ua" tabindex="-1">使用随机UA <a class="header-anchor" href="#使用随机ua" aria-label="Permalink to &quot;使用随机UA&quot;">​</a></h2><p><code>UA</code> 是 <code>User Agent</code> 的缩写，通常指的是用户代理。它是一个字符串，包含了浏览器或其他客户端应用程序的名称、版本和其他有关客户端硬件和软件的信息。当客户端应用程序（如网页浏览器）请求网页时，它会向服务器发送一个包含User Agent字符串的HTTP头，服务器可以使用这个信息来确定如何处理该请求，或者用于统计目的，比如了解访问者使用的浏览器类型和操作系统。 例如，一个典型的User Agent字符串可能如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3</span></span></code></pre></div><p>这个字符串告诉我们，请求是由一个基于Mozilla代码的浏览器发起的，它运行在Windows 10操作系统上，浏览器是64位的Google Chrome，版本号为58.0.3029.110。服务器可以通过分析User Agent字符串来提供兼容特定浏览器的网页内容，或者进行用户行为分析。</p><p>当我们使用爬虫访问网页时，在请求头中包含一个伪装的 <code>UA</code> 字符串，可以避免被服务器识别为爬虫。在我们爬取数据的多数场景中，服务器可能会通过 <code>UA</code> 来反爬虫。若携带某个 <code>UA</code> 的客户端在短时间内发起大量请求，则可能被判定为爬虫。</p><p>当然，只要我们多准备几个 <code>UA</code> ，然后写一个随机切换 <code>UA</code> 的函数，最后将其放入请求头发起请求就能绕过这个限制。</p><p>例如这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def get_ua():</span></span>
<span class="line"><span>    user_agent = [</span></span>
<span class="line"><span>    # Opera</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 OPR/26.0.1656.60&quot;,</span></span>
<span class="line"><span>    &quot;Opera/8.0 (Windows NT 5.1; U; en)&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.50&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.50&quot;,</span></span>
<span class="line"><span>    # Firefox</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10&quot;,</span></span>
<span class="line"><span>    # Safari</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2&quot;,</span></span>
<span class="line"><span>    # chrome</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16&quot;,</span></span>
<span class="line"><span>    # 360</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)&quot; ,</span></span>
<span class="line"><span>    # QQ浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E) &quot;,</span></span>
<span class="line"><span>    # sogou浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; QQDownload 732; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)&quot;,</span></span>
<span class="line"><span>    # maxthon浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101 Safari/537.36&quot;,</span></span>
<span class="line"><span>    # UC浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    return user_agent[random.randint(0, len(user_agent) - 1)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>headers = {}</span></span>
<span class="line"><span>headers[&quot;User-Agent&quot;] = get_ua()</span></span></code></pre></div><p>你可能注意到所有的浏览器 <code>UA</code> 都以 <code>Mozilla</code> 开头。说起来这背后也有一段趣事，如果你感兴趣的话可以看看这个视频：</p><p>【为啥所有浏览器都假扮成Mozilla？】 <a href="https://www.bilibili.com/video/BV1E7421Z7Zb/?share_source=copy_web&amp;vd_source=366bd7fe36999d19fc64c15787d44347" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1E7421Z7Zb/?share_source=copy_web&amp;vd_source=366bd7fe36999d19fc64c15787d44347</a></p><h2 id="使用随机代理" tabindex="-1">使用随机代理 <a class="header-anchor" href="#使用随机代理" aria-label="Permalink to &quot;使用随机代理&quot;">​</a></h2><p>项目地址：</p><p><a href="https://github.com/jhao104/proxy_pool" target="_blank" rel="noreferrer">https://github.com/jhao104/proxy_pool</a></p><p>实测下来很好用，配合随机UA爬取数据未触发反爬。</p><p>运行需要先安装redis，安装教程：</p><p><a href="https://blog.csdn.net/weixin_44893902/article/details/123087435" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44893902/article/details/123087435</a></p><p>使用方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/jhao104/proxy_pool.git</span></span>
<span class="line"><span>cd proxy_pool</span></span>
<span class="line"><span>pip install -r requirements.txt</span></span></code></pre></div><p>TODO: 运行相关内容。</p><p>现在我们有了随机的代理服务器，让我们来试试把随机 <code>UA</code> 和<code>随机代理</code>结合起来！</p><p><strong>注意</strong> ： 爬取数据时请保持该服务在后台运行，不要关闭控制台。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def get_proxy():</span></span>
<span class="line"><span>    return requests.get(&quot;http://127.0.0.1:5010/get/&quot;).json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def delete_proxy(proxy):</span></span>
<span class="line"><span>    requests.get(&quot;http://127.0.0.1:5010/delete/?proxy={}&quot;.format(proxy))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def getResponse(base_url, headers):</span></span>
<span class="line"><span>    retry_count = 5</span></span>
<span class="line"><span>    proxy = get_proxy().get(&quot;proxy&quot;)</span></span>
<span class="line"><span>    while retry_count &gt; 0:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            html = requests.get(base_url, headers=headers, proxies={&quot;http&quot;: &quot;http://{}&quot;.format(proxy)}, allow_redirects=False)</span></span>
<span class="line"><span>            return html</span></span>
<span class="line"><span>        except Exception:</span></span>
<span class="line"><span>            retry_count -= 1</span></span>
<span class="line"><span>    delete_proxy(proxy)</span></span>
<span class="line"><span>    return None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>headers = {}</span></span>
<span class="line"><span>headers[&quot;User-Agent&quot;] = get_ua()</span></span>
<span class="line"><span>url = &quot;https://www.sougou.com&quot;</span></span>
<span class="line"><span>response = getResponse(url, headers)</span></span></code></pre></div>`,33),l=[o];function t(i,c,r,u,d,h){return n(),a("div",null,l)}const W=s(p,[["render",t]]);export{b as __pageData,W as default};
