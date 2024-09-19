import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.DrCKO7Ve.js";const W=JSON.parse('{"title":"爬虫相关内容","description":"","frontmatter":{},"headers":[],"relativePath":"articles/学习笔记/信息获取技巧/temp/爬虫相关.md","filePath":"articles/学习笔记/信息获取技巧/temp/爬虫相关.md"}'),e={name:"articles/学习笔记/信息获取技巧/temp/爬虫相关.md"},l=p(`<h1 id="爬虫相关内容" tabindex="-1">爬虫相关内容 <a class="header-anchor" href="#爬虫相关内容" aria-label="Permalink to &quot;爬虫相关内容&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><h4 id="本篇介绍爬虫相关内容-需要-python-运行环境。" tabindex="-1">本篇介绍爬虫相关内容，需要 <code>python</code> 运行环境。 <a class="header-anchor" href="#本篇介绍爬虫相关内容-需要-python-运行环境。" aria-label="Permalink to &quot;本篇介绍爬虫相关内容，需要 \`python\` 运行环境。&quot;">​</a></h4><br></div><h2 id="requests包" tabindex="-1">requests包 <a class="header-anchor" href="#requests包" aria-label="Permalink to &quot;requests包&quot;">​</a></h2><p><code>requests</code>包作为编写爬虫时常用的包，体积小巧且功能强大，非常推荐使用。 以下是一个简单的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>url = &quot;http://www.baidu.com&quot;</span></span>
<span class="line"><span>response = requests.get(url)</span></span>
<span class="line"><span>print(response.status_code)</span></span>
<span class="line"><span>response.encoding = &quot;utf-8&quot;</span></span>
<span class="line"><span>print(response.text)</span></span></code></pre></div><p>在上面的代码中，我们使用 <code>requests</code> 的 <code>get</code> 函数，对百度的首页地址发起get请求，并将请求结果赋给response变量。 如果你在网络环境良好的情况下试着运行这段代码，你应该能得到 <code>status_code</code> 的值为200，以及大量的文本内容（html标签）。</p><p>如果你对html标签不熟悉，也不要紧，你可以试试把 <code>response.text</code> 的内容写入到一个后缀为 <code>html</code> 的文本文件中，像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>url = &quot;https://train.hao86.com/&quot;</span></span>
<span class="line"><span>response = requests.get(url)</span></span>
<span class="line"><span>print(response.status_code)</span></span>
<span class="line"><span>response.encoding = &quot;utf-8&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>with open(&quot;demo.html&quot;, &#39;w&#39;, encoding=&quot;utf-8&quot;) as f:</span></span>
<span class="line"><span>  f.write(response.text)</span></span></code></pre></div><p>现在你的运行目录下应该多了一个名为 &quot;demo.html&quot; 的文件，试着双击打开它，你看到了什么？</p><p>我们在浏览器中打开了一个和该网站相差无几的页面！遗憾的是，由于部分内容的缺失，它无法像真正的网页那样实现各种功能。至于如何实现这些功能，那涉及到另外一些知识，我不会在本文中讲解。无论怎样，我们对get请求有了一个初步的认识。</p><h2 id="beautifulsoup-的使用" tabindex="-1">BeautifulSoup 的使用 <a class="header-anchor" href="#beautifulsoup-的使用" aria-label="Permalink to &quot;BeautifulSoup 的使用&quot;">​</a></h2><h2 id="使用随机ua" tabindex="-1">使用随机UA <a class="header-anchor" href="#使用随机ua" aria-label="Permalink to &quot;使用随机UA&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def get_ua():</span></span>
<span class="line"><span>    user_agent = [</span></span>
<span class="line"><span>    # Opera</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 OPR/26.0.1656.60&quot;,</span></span>
<span class="line"><span>    &quot;Opera/8.0 (Windows NT 5.1; U; en)&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.50&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.50&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Firefox</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Safari</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # chrome</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 360</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)&quot; ,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # QQ浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E) &quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # sogou浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0&quot;,</span></span>
<span class="line"><span>    &quot;Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; QQDownload 732; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # maxthon浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # UC浏览器</span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    return user_agent[random.randint(0,len(user_agent) - 1)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>headers = {}</span></span>
<span class="line"><span>headers[&quot;User-Agent&quot;] = get_ua()</span></span></code></pre></div><h2 id="使用随机代理" tabindex="-1">使用随机代理 <a class="header-anchor" href="#使用随机代理" aria-label="Permalink to &quot;使用随机代理&quot;">​</a></h2>`,14),o=[l];function i(t,c,r,u,d,q){return n(),a("div",null,o)}const T=s(e,[["render",i]]);export{W as __pageData,T as default};
