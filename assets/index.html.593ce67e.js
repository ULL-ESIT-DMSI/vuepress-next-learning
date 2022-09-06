import{_ as p,r as c,o as i,c as l,a as n,b as s,t as e,d as u,e as t}from"./app.83287b6b.js";const r={},d={id:"frontmatter-title",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=t('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>For the course 22/23 I want to try Vuepress next with most of the subjects I teach. Hello Vuepress next!</p><h2 id="goals" tabindex="-1"><a class="header-anchor" href="#goals" aria-hidden="true">#</a> Goals</h2><p>This is an attempt to lean vuepress next to use for the DMSI and SYTWS subjects during the course 2021/2022</p><h2 id="deployment-of-this-site-on-github-pages" tabindex="-1"><a class="header-anchor" href="#deployment-of-this-site-on-github-pages" aria-hidden="true">#</a> Deployment of this site on GitHub Pages</h2>',5),m=t("<li><p>I have to go to <code>settings</code>in this repo and then to <code>pages</code> and configure the pages to set as <code>source</code> the value <code>deploy from a branch</code> and as branch <code>gh-pages</code> and folder to <code>/(root)</code></p></li><li><p>Have to create in the settings of this repo a secret with a token named <code>ACCESS_TOKEN</code> with the appropriate permits</p></li>",2),v=s("The I am using "),b={href:"https://github.com/marketplace/actions/vuepress-deploy",target:"_blank",rel:"noopener noreferrer"},_=s("jenkey2011/vuepress-deploy@master"),y=s(" in my action file:"),f=t(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy
<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@master

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>deploy
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> jenkey2011/vuepress<span class="token punctuation">-</span>deploy@master
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># token created</span>
        <span class="token key atrule">TARGET_REPO</span><span class="token punctuation">:</span> ULL<span class="token punctuation">-</span>ESIT<span class="token punctuation">-</span>DMSI/vuepress<span class="token punctuation">-</span>next<span class="token punctuation">-</span>learning
        <span class="token key atrule">TARGET_BRANCH</span><span class="token punctuation">:</span> main
        <span class="token key atrule">BUILD_SCRIPT</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build
        <span class="token key atrule">BUILD_DIR</span><span class="token punctuation">:</span> docs/.vuepress/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(a,x){const o=c("ExternalLinkIcon");return i(),l("div",null,[n("h1",d,[k,s(" "+e(a.$frontmatter.title),1)]),n("p",null,"frontmatter: "+e(a.$frontmatter),1),n("p",null,"page: "+e(a.$page.title),1),h,n("ol",null,[m,n("li",null,[n("p",null,[v,n("a",b,[_,u(o)]),y]),f])])])}const S=p(r,[["render",g],["__file","index.html.vue"]]);export{S as default};