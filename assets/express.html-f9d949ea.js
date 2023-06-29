import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as u,a as e,d as n,w as l,b as s,e as d}from"./app-a5f89344.js";const c={},v=e("h1",{id:"express",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#express","aria-hidden":"true"},"#"),s(" Express")],-1),p={class:"table-of-contents"},m=d(`<h2 id="_1-引入express" tabindex="-1"><a class="header-anchor" href="#_1-引入express" aria-hidden="true">#</a> 1.引入express</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>npm install express --save
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//app.js
const express=require(&quot;express&quot;);
//这句代码相当于原生的http.createServer(),创建一个服务器端口
const app=express();
//express可以自动将静态的文件设置好路由
app.use(express.static(&quot;public&quot;));
/*
 上面的代码有两个作用:
 1.自动为public目录下的文件设置路由(public与app.js为同一层级)
 2.自动把public目录下的index.html设置为根路径对应的首页
*/
/*
    同时可以公开指定目录,通过这种方法可以直接访问文件目录下的所有资源(通过完整的文件名)
    第一个参数不一定是static,可以是随便的路由标识,但是后面可以直接使用static目录的资源
    app.use(&quot;/static/&quot;,express.static(&quot;./static/&quot;));
    而上面的方法其实是个省略第一个参数的简便写法,可以通过省略/public的方式获取资源
*/
app.listen(3000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>热部署服务器</strong></p><ul><li><p>node.js热部署,修改后立刻重启服务器<code>cnpm install -g supervisor</code>,全局安装后运行<code>supervisor app.js</code>(假设Node.js程序主入口是app.js)</p></li><li><p>热部署第二种方法为<code>cnpm install nodemon -g</code>,全局安装后运行<code>nodemon app.js</code>(假设Node.js程序主入口是app.js)</p></li><li><p>在使用项目前可以先初始化项目使用<code>npm init -y</code></p></li></ul><h2 id="_2-request请求" tabindex="-1"><a class="header-anchor" href="#_2-request请求" aria-hidden="true">#</a> 2.request请求</h2><ul><li><p><strong>app.get(路由,回调函数)</strong>,回调函数在符合指定路径并且是get请求时触发</p></li><li><p><strong>app.post(路由,回调函数)</strong>,回调函数在符合指定路径并且是post请求时触发</p></li><li><p><strong>app.use(路由,回调函数)</strong>,回调函数在符合指定路径并且不论请求方式是什么都会触发</p></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>const express=require(&quot;express&quot;);
const app=express();

app.use(&#39;/login&#39;,(req,res)=&gt;{//query和params等属性只有通过get方式进行请求的时候才会有
    console.log(req.query);//请求后面的查询数据保存在req.query中,req.query是一个对象
    console.log(req.params);//后面的如:number形式的数据保存在req.params里
    res.end(&quot;login&quot;);
})
</code></pre></div><p><strong>获取post请求数据</strong></p><p>express原生的post请求获取数据的方式很麻烦,所以推荐使用第三方的插件</p><p>**注:**现在好像不需要这个现在这个插件就能使用,只需要设置<code>app.use(express.json())</code>就能获取到</p><ul><li><p>formidable</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm i -S formidable
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const formidable=require(&quot;formidable&quot;);
const path=require(&quot;path&quot;);
var form = new formidable.IncomingForm();//创建实例
form.uploadDir=&quot;./upload&quot;;//如果是要得到post请求中上传的文件,需要指定上传文件目录,注意必须先创建
form.parse(req,(err,fileds,files)=&gt;{
    //fileds为字符型的post数据
    //files为文件类的post数据
    let extname=path.extname(files.myfile.name);
    //因为通过formidable存入的文件默认是没有后缀名的,所以加上
    fs.rename(files.myfile.path,files.myfile.path+extname,()=&gt;{
        res.send(&quot;OK&quot;);
    }) 
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>body-parser</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm install body-parser -S
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const bodyParser = require(&#39;body-parser&#39;);
const express=require(&quot;express&quot;);
const app=express();
app.use(bodyParser.urlencoded({//因为post数据传入的是url编码,所以在写中间件的时候需要解析
    extended:false //是否激活扩展,默认是激活状态
}));
app.use(bodyParser.json());//转换为json
//加入了body-parser配置后就会在req对象上多出body属性
app.post(&quot;/login&quot;,(req,res)=&gt;{
    console.log(req.body);//post请求就可以直接在req.body中取得
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>blueimp-md5</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm install body-parser -S
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const md5 = require(&quot;blueimp-md5&quot;);
const bodyParser = require(&#39;body-parser&#39;);
const express=require(&quot;express&quot;);
const app=express();
app.use(bodyParser.urlencoded({//因为post数据传入的是url编码,所以在写中间件的时候需要解析
    extended:false //是否激活扩展,默认是激活状态
}));
app.use(bodyParser.json());//转换为json
//加入了body-parser配置后就会在req对象上多出body属性
app.post(&quot;/login&quot;,(req,res)=&gt;{
    console.log(req.body);//post请求就可以直接在req.body中取得
    console.log(md5(md5(req.body.password)));
    //md5二次加密,以后在使用的时候也是会加密后再比较,只能加密不能解密
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>bcrypt</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm install bcrypt -S
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//bcrypt也是一个加密的模块
const bcrypt=require(&quot;bcrypt&quot;);
const bodyParser = require(&#39;body-parser&#39;);
const express=require(&quot;express&quot;);
const app=express();
app.use(bodyParser.urlencoded({//因为post数据传入的是url编码,所以在写中间件的时候需要解析
    extended:false //是否激活扩展,默认是激活状态
}));
app.use(bodyParser.json());//转换为json
//加入了body-parser配置后就会在req对象上多出body属性
app.post(&quot;/resgister&quot;,(req,res)=&gt;{
    console.log(req.body);//post请求就可以直接在req.body中取得
    console.log(body.password = bcrypt.hashSync(req.body.password),10);
    //通过散列的方法进行加密,后面的数字散列强度,数字越大强度越高,但是效率会减弱
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.post(&quot;/login&quot;,(req,res)=&gt;{
    //加密后比对密码,如果一致返回true,否则为false
    const isPasswordValid=bcrypt.compareSync(req.body.password,user.password);
    //req.body.password是接收到的登录密码user.password是数据库保存的密码
    if(!isPasswordValid){
        return res.status(422).send({
            message:&quot;密码无效&quot;
        })
    }
    res.send({
        user
    })  
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-response回应" tabindex="-1"><a class="header-anchor" href="#_3-response回应" aria-hidden="true">#</a> 3.response回应</h2>`,13),b=e("li",null,[e("p",null,[s("**res.send(数据),"),e("strong",null,"作为结束响应的标志,该方法比元素的"),s("res.end()**方法更加强大,不只可以穿buffer数据和字符串,也可以直接传入对象和数组等值")])],-1),g=e("li",null,[e("p",null,"**res.sendFile(文件路径),**发送文件到客户端,参数是文件路径")],-1),x=e("li",null,[e("p",null,"**res.json(json对象),**express封装过的方法,可以直接返回给前端一个json格式的对象字符串")],-1),q=e("p",null,"res.render(传入的模板页面,传入ejs页面的参数对象)",-1),h=e("p",null,",专门用来渲染",-1),_=e("p",null,"views目录(这是必须的)",-1),f=e("p",null,"下的ejs文件的方法",-1),y=e("p",null,"在这里使用ejs模板引擎",-1),k=e("p",null,"注:",-1),w=e("p",null,"也可使用",-1),j={href:"http://aui.github.io/art-template/zh-cn/docs/syntax.html#%E6%A8%A1%E6%9D%BF%E7%BB%A7%E6%89%BF",target:"_blank",rel:"noopener noreferrer"},S=d(`<div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm install ejs -S
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&quot;express&quot;);
const app = express();
app.set(&quot;view engine&quot;, &quot;ejs&quot;);//在这里设置使用ejs模板引擎
/*或者
app.engine(&quot;ejs&quot;,require(&quot;ejs&quot;));
*/
app.use(&#39;/login&#39;,(req,res)=&gt;{
    let result=10;
    res.render(&quot;showIndex&quot;,{
        a:result    
    });
    /*
    render()方法默认是不可用的,但是如果配置了模板引擎就可以使用
    res.render()可以默认将views目录下的ejs文件直接渲染到页面,只用传文件名,后面跟一个对象,对象中    的属性就是传入ejs页面的值
    如果要修改默认的views目录,可以使用app.set(&quot;views&quot;,render函数渲染的默认路径)
    */
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--showIndex.ejs--&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;ul&gt;
      &lt;%for(let i=0;i&lt;a;i++){ %&gt;    &lt;!--a是从render函数传过来的值--&gt;
      &lt;li&gt;我是第&lt;%= i%&gt;个li&lt;/li&gt;
      &lt;%}%&gt;
      &lt;!--
        ejs是后台模板
        通过&lt;% js代码%&gt;可以在中间写js代码,通过&lt;%= 变量%&gt;可以在中间赋值,实现传值进入页面
      --&gt;  
    &lt;/ul&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E=d(`<h2 id="_4-cookie和session" tabindex="-1"><a class="header-anchor" href="#_4-cookie和session" aria-hidden="true">#</a> 4.cookie和session</h2><h3 id="_4-1-cookie" tabindex="-1"><a class="header-anchor" href="#_4-1-cookie" aria-hidden="true">#</a> 4.1 cookie</h3><p><strong>在路由的response中可以使用下面的cookie方法进行对cookie的设置</strong></p><ul><li><p>res.cookie(name,value,[option]):</p><p>设置Cookie</p><p>opition包括:</p><p>domain / expires / httpOnly / maxAge / path / secure / signed</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const express=require(&quot;express&quot;);
const app=express();
app.get(&quot;/login&quot;,(req,res)=&gt;{
    res.cookie(&quot;key&quot;,&quot;666&quot;,{
        maxAge:1000 //设置此cookie过期时长
    });
    res.send();
});
</code></pre></div></li><li><p>res.clearCookie():</p><p>清除Cookie</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const express=require(&quot;express&quot;);
const app=express();
app.get(&quot;/login&quot;,(req,res)=&gt;{
    res.clearCookie();
    res.send();
});
</code></pre></div></li></ul><p><strong>获取cookies信息</strong></p><p><strong>在express中获取cookies的信息需要使用对应的中间件cookie-parser</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm install cookie-parser --save
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>const cookieParser=require(&quot;cookie-parser&quot;);
const express=require(&quot;express&quot;);
const app=express();
app.use(cookieParser());
app.get(&quot;/login&quot;,(req,res)=&gt;{
    console.log(req.cookies);//注意查询cookies在req中查看
    res.send();
});
</code></pre></div><h3 id="_4-2-session" tabindex="-1"><a class="header-anchor" href="#_4-2-session" aria-hidden="true">#</a> 4.2 session</h3><p><strong>在express设置和获取session需要使用中间件express-session</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm install express-session --save
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const session=require(&quot;express-session&quot;);
const express=require(&quot;express&quot;);
const app=express();
app.use(session({
    secret:&quot;key&quot;,//配置加密字符串,与存入的session配合加密,安全性更高,防止客户端恶意伪造
    cookie:{maxAge:60000},
    resave:true,
    //每次请求都重新设置session cookie，假设cookie是10分钟过期,每次请求都会再设置10分钟
    saveUninitialized:true
    /*
    无论有没有session cookie,每次请求都设置个session cookie,默认给个标示为 connect.sid,如果为      false就是当正在存了数据才会发送
    */
}));
app.get(&quot;/&quot;,(req,res)=&gt;{
    console.log(req.session);   
    console.log(req.session.user);  
});

app.get(&quot;/login&quot;,(req,res)=&gt;{
    req.session.user=req.session.user||[];//通过属性进行设置
    req.session.user.push(req.query.user);
    res.send();
})
/*
    读取:req.session.xxx
    设置:req.session.xxx=xxx
    删除:delete req.session.xxx
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意:**默认session数据是内存存储的,服务器一旦重启就会丢失,真正的生产环境会吧session进行持久化存储</p><h3 id="_4-3-token" tabindex="-1"><a class="header-anchor" href="#_4-3-token" aria-hidden="true">#</a> 4.3 token</h3><p><strong>在express中同样可以设置token来获取本地的存储信息,需要使用中间件jsonwebtoken</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>cnpm i jsonwebtoken -S
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const jwt=require(&quot;jsonwebtoken&quot;);
const SECRET=&quot;sadasdasda&quot;;//密钥
app.post(&quot;/login&quot;,(req,res)=&gt;{
    //加密后比对密码,如果一致返回true,否则为false
    const isPasswordValid=bcrypt.compareSync(req.body.password,user.password);
    //req.body.password是接收到的登录密码user.password是数据库保存的密码
    if(!isPasswordValid){
        return res.status(422).send({
            message:&quot;密码无效&quot;
        })
    }
    const token=jwt.sign({//设置用户的_id为token
        id:String(user._id)//只需要传入用户ID,不要传密码
    },SECRET);//第二个参数是一个密钥,随便填什么都可以,但是应该是保密的,不应该在git项目中,应该在本地,需要的时候获取,因为要多次使用,所以直接定义成一个变量
    res.send({
        user,
        token
    })  
})
//读取服务端返回的信息
app.get(&quot;/login/profile&quot;,(req,res)=&gt;{
    const raw=String(req.headers.authorization);
    //客户端发送请求的时候应该带上请求头,请求头中就是服务端返回给客户端的token
    const  {id}=jwt.verify(raw,SECRET);//解密,通过token和密钥解密
    const user=User.findById(id);//数据库查找用户
    res.send(user);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//一般每一步都需要用户进行验证,所以需要设置一个中间件在每一次需要用户信息的时候就调用这个中间件进行判断
const auth=async(req,res,next)=&gt;{
    const raw=String(req.headers.authorization);
    //客户端发送请求的时候应该带上请求头,请求头中就是服务端返回给客户端的token
    const  {id}=jwt.verify(raw,SECRET);//解密,通过token和密钥解密
    req.user=User.findById(id);//数据库查找用户,同时因为是使用中间件,所以需要挂载到req对象上
    next();
}

app.get(&quot;/login/profile&quot;,auth,(req,res)=&gt;{
    res.send(req.user);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-路由分离" tabindex="-1"><a class="header-anchor" href="#_5-路由分离" aria-hidden="true">#</a> 5.路由分离</h2><ul><li><p>常规写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//app.js
/*
    入门模块:创建服务、做服务相关配置、模板引擎、body-parser解析post请求、提供静态资源、监听端口
*/
let express=require(&quot;express&quot;);
let router=require(&quot;./router&quot;);
let app=express();
router(app);//通过这种方法将app传入router.js
app.listen(3000,function(){
    console.log(&quot;running 3000&quot;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text" data-ext="text"><pre class="language-text"><code>//router.js
/*
    路由模块:处理路由、根据不同请求方法和请求路径进行具体处理
*/
module.exports=function(app){
    app.get(&quot;/&quot;,function(req,res){
        res.send(&quot;index&quot;);
    });
}
</code></pre></div></li><li><p>express的router写法(express推荐)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//app.js
let express=require(&quot;express&quot;);
let router=require(&quot;./router&quot;);
let app=express();
//把路由容器挂载到app,这样就可以直接访问路由了
app.use(router);//注意配置模板引擎和body-parser必须在这之前
/*
    上面那种写法是讲所有路由都放在一个文件中,如果需要放入多个文件的话同时二级目录指定的话
    app.use(&quot;/login&quot;,require(./route/login));另一个文件的内部写法同上,不过如果内部也只用写    二级的目录格式,不需要在前面加上/login,不过在访问的时候还是需要加上的,这种方法可以实现分路由的     管理
*/
app.listen(3000,function(){
    console.log(&quot;running 3000&quot;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text" data-ext="text"><pre class="language-text"><code>//router.js
let express=require(&quot;express&quot;);
//创建一个路由容器
let router=express.Router();//express推荐使用的挂载路由的方式
//把路由都挂载到路由容器上
router.get(&quot;/&quot;,function(req,res){
        res.send(&quot;index&quot;);
});
module.exports=router;
</code></pre></div></li></ul><h2 id="_6-中间件" tabindex="-1"><a class="header-anchor" href="#_6-中间件" aria-hidden="true">#</a> 6.中间件</h2><p>中间件的本质就是一个请求处理方法,我们把用户从请求到响应的整个过程分发到多个中间件中去处理,这样做的目的是提高代码的灵活性,动态可扩展的</p><h3 id="_6-1-应用程序级别中间件" tabindex="-1"><a class="header-anchor" href="#_6-1-应用程序级别中间件" aria-hidden="true">#</a> 6.1 应用程序级别中间件</h3><p><strong>中间件的处理顺序是从上到下依次处理,而且相同的请求路径中的参数属性一致,所以才说第三方中间件必须要写在所有路由请求前,因为这样就能用中间件的各种查询了</strong></p><ul><li><p>万能匹配的中间件(不关心任何请求路径和请求方法),全部都能匹配</p><p>注:</p><p>第三方中间件常常就是这种万能匹配能够匹配到所有的路径</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app.use(function(req,res,next){
    console.log(&quot;Time&quot;,Data.now());
    next();
})
</code></pre></div></li><li><p>匹配所有以</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/xxx/
</code></pre></div><p>开头的</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app.use(&quot;/a&quot;,function(req,res,next){
    console.log(&quot;Time&quot;,Data.now());
    next();
})
</code></pre></div></li></ul><h3 id="_6-2-路由级别中间件" tabindex="-1"><a class="header-anchor" href="#_6-2-路由级别中间件" aria-hidden="true">#</a> 6.2 路由级别中间件</h3><ul><li><p>get</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app.get(&quot;/&quot;,function(req,res){
    res.send(&quot;Hello world&quot;);
})
</code></pre></div></li><li><p>post:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app.post(&quot;/&quot;,function(req,res){
    res.send(&quot;Hello world&quot;);
})
</code></pre></div></li><li><p>put:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app.put(&quot;/&quot;,function(req,res){
    res.send(&quot;Hello world&quot;);
})
</code></pre></div></li><li><p>delete:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app.delete(&quot;/&quot;,function(req,res){
    res.send(&quot;Hello world&quot;);
})
</code></pre></div></li></ul><p>**注意:**路由的中间件也是有next的,如果不调用就不会执行后续中间件,但是因为路由一般都只进入一个中间件,所有一般没有写next参数,但是如果写两个相同的路由,就必须写next才会从前面一个路由进入后面一个路由</p><h3 id="_6-3-错误处理中间件" tabindex="-1"><a class="header-anchor" href="#_6-3-错误处理中间件" aria-hidden="true">#</a> 6.3 错误处理中间件</h3><p><strong>可以在所有的路最后写入一个错误处理中间件,只要遇到错误就会直接跳到这个错误处理中间中.不必每一个路由就要进行专门的错误处理</strong></p><p>**注意:**只要向路由中的第三个形参传入值,就可以直接找到有四个参数的中间件</p><div class="language-text" data-ext="text"><pre class="language-text"><code>//错误处理中间件必须要写四个参数,第一个参数是其他中间件传过来的错误,如果只写三个就只是形参不同而已
app.use(function(err,req,res,next){
    console.log(err.message);
    res.status(500).send(&quot;error!&quot;);
})
</code></pre></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.get(&quot;/&quot;,function(req,res,next){
    fs.readFile(function(err,data){
        if(err){//一般都是直接传入错误对象
            next(err);   
        }  
    })
})

app.use(function(err,req,res,next){//上面传入的错误对象会直接复制给第一个形参err
    console.log(err.message);
    res.status(500).send(&quot;error!&quot;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们可以自定义错误处理的中间件，比如使用一个函数来进行包装（比如使用promise时）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// middleware/async.js
module.export = function (handler) {
    return async (req, res, next) =&gt; {
        try{
            await handler(req, res)
        }catch(e){
            next(e)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text" data-ext="text"><pre class="language-text"><code>const asyncMiddleware = require(&#39;../middleware/async&#39;)
app.use(asyncMiddleware(async (req, res) =&gt; {
    await // do something
}))
</code></pre></div><p><strong>当然，这样每次调用还是很麻烦，最后的方法是使用<code>express-async-errors</code>来帮忙处理异常。</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 直接加载，在index.js中加载全局引入
require(&#39;express-async-errors&#39;)

app.use((req, res ,next) =&gt; {
    await // do something
})
</code></pre></div>`,38);function P(C,B){const i=r("router-link"),t=r("ExternalLinkIcon");return o(),u("div",null,[v,e("nav",p,[e("ul",null,[e("li",null,[n(i,{to:"#_1-引入express"},{default:l(()=>[s("1.引入express")]),_:1})]),e("li",null,[n(i,{to:"#_2-request请求"},{default:l(()=>[s("2.request请求")]),_:1})]),e("li",null,[n(i,{to:"#_3-response回应"},{default:l(()=>[s("3.response回应")]),_:1})]),e("li",null,[n(i,{to:"#_4-cookie和session"},{default:l(()=>[s("4.cookie和session")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#_4-1-cookie"},{default:l(()=>[s("4.1 cookie")]),_:1})]),e("li",null,[n(i,{to:"#_4-2-session"},{default:l(()=>[s("4.2 session")]),_:1})]),e("li",null,[n(i,{to:"#_4-3-token"},{default:l(()=>[s("4.3 token")]),_:1})])])]),e("li",null,[n(i,{to:"#_5-路由分离"},{default:l(()=>[s("5.路由分离")]),_:1})]),e("li",null,[n(i,{to:"#_6-中间件"},{default:l(()=>[s("6.中间件")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#_6-1-应用程序级别中间件"},{default:l(()=>[s("6.1 应用程序级别中间件")]),_:1})]),e("li",null,[n(i,{to:"#_6-2-路由级别中间件"},{default:l(()=>[s("6.2 路由级别中间件")]),_:1})]),e("li",null,[n(i,{to:"#_6-3-错误处理中间件"},{default:l(()=>[s("6.3 错误处理中间件")]),_:1})])])])])]),m,e("ul",null,[b,g,x,e("li",null,[q,h,_,f,y,k,w,e("p",null,[e("a",j,[s("art-template模板引擎"),n(t)])]),S])]),E])}const V=a(c,[["render",P],["__file","express.html.vue"]]);export{V as default};
