(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(e,n,i){"use strict";i.r(n);var t=i(1),a=i.n(t),c=i(3),s=i.n(c),o=(i(8),i(9),i(0)),r=function(e){var n=e.children;return Object(o.jsx)("div",{className:"page",children:n})},l=function(){return Object(o.jsx)("div",{className:"name",children:Object(o.jsx)("div",{className:"name--name",children:"Holly Meinert-Rita"})})},d=function(e){var n=e.icon;return Object(o.jsx)("i",{className:"ri-"+n+"-fill"})},m=function(e){var n=e.url,i=e.prependIcon,t=e.appendIcon,a=e.text,c=e.className,s=n.replace("https://","").replace("www.","").replace("mailto:","");return Object(o.jsxs)("a",{href:n,className:c,children:[Object(o.jsx)(d,{icon:i}),Object(o.jsx)("span",{className:"printer--show",children:s}),Object(o.jsx)("span",{className:"printer--hide",children:a||s}),Object(o.jsx)(d,{icon:t})]})},h=["I am Software Engineer dedicated to creating new and interesting things.","My goal is always to create unique and exciting experiences for those who use the things I make.","I have experience working in multidisciplinary teams as well as working independently.","I am committed to finishing tasks to a high standard, motivated and quick to learn new skills and technology, and find creative solutions to problems."].join(" "),j=function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsxs)("div",{className:"about--contact-heading",children:[Object(o.jsx)("h1",{className:"about--heading",children:"About Me"}),Object(o.jsxs)("div",{className:"about--contact",children:[Object(o.jsx)(m,{className:"about--contact-item",url:"https://www.github.com/hmeinertrita",text:"GitHub Repositories",appendIcon:"github"}),Object(o.jsx)(m,{className:"about--contact-item",url:"https://www.linkedin.com/in/hmeinertrita",text:"LinkedIn Profile",appendIcon:"linkedin"}),Object(o.jsx)(m,{className:"about--contact-item",url:"mailto:hmeinertrita@gmail.com",appendIcon:"mail-send"}),Object(o.jsxs)("div",{className:"about--contact-item",children:[Object(o.jsx)("span",{children:"1-585-733-3463"}),Object(o.jsx)(d,{icon:"phone"})]})]})]}),Object(o.jsx)("p",{className:"about--description",children:h})]})},p=[{name:"Unreal",lang:!1,proficiency:3.5},{name:"Unity",lang:!1,proficiency:4.5},{name:"Git",lang:!1,proficiency:4.5},{name:"SQL",lang:!1,proficiency:2},{name:"HTML 5 & CSS",lang:!1,proficiency:5},{name:"Node.js",lang:!1,proficiency:5},{name:"React & React Native",lang:!1,proficiency:5},{name:"AWS",lang:!1,proficiency:3},{name:"C++",lang:!0,proficiency:3.5},{name:"C#",lang:!0,proficiency:4},{name:"C",lang:!0,proficiency:3},{name:"Javascript",lang:!0,proficiency:5},{name:"Python",lang:!0,proficiency:3},{name:"Ruby",lang:!0,proficiency:2},{name:"Java",lang:!0,proficiency:3.5}],u=function(){var e=p.map((function(e){return Object(o.jsxs)("div",{className:"skills--skill-item"+(e.lang?" skills--lang":""),children:[Object(o.jsx)("p",{className:"skills--skill-name",children:e.name}),Object(o.jsx)("div",{className:"skills--proficiency-bar",children:Object(o.jsx)("div",{className:"skills--proficiency-foreground",style:{"--proficiency":(e.proficiency-1)/4*100+"%"}})})]})})),n=[1,2,3,4,5].map((function(e){return Object(o.jsx)("div",{className:"skills--tick",children:Object(o.jsx)("span",{className:"skills--tick-label",children:e})})}));return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("h1",{className:"skills--heading",children:"Skills"}),Object(o.jsx)("div",{className:"skills--scale",children:n}),e]})},b=[{company:"Psyop",location:"Los Angeles, CA",title:"Data Wrangler & AR Developer",contact:"Matthew Seymour",contactTitle:"General Manager VR/AR, Free Range Games",contactEmail:"matthew@freerangegames.com",items:["Worked in the Real-time Interactive group at renowned commercial & game content studio Psyop's LA division","Data wrangler for mocap data on a AAA video game project. Attended motion capture shoots and processed all data and footage for use in animation, client review, and Unreal.","Solo developer on various augmented reality proof-of-concepts using a variety of technologies including Unity, 8th Wall, and ARKit."]},{company:"Myplanet",location:"Toronto, ON",title:"Software Developer",contact:"Yashar Rassoulli",contactTitle:"CTO & Co-Founder, Myplanet",contactEmail:"yashar@myplanet.com",items:["Front-end lead on a project for a national telecom company developing a high profile customer facing, medical web application. Worked onsite at client's headquarters as primary liaison for front-end implementation.","Front-end developer and DevOps lead launching an eCommerce website for a new retail brand. Set up and maintained a continuous deployment pipeline using GitHub and AWS. Reseached and integrated various headless eCommerce platorms."]}],g=function(){var e=b.map((function(e,n){var i=e.items.map((function(e,n){return Object(o.jsx)("p",{children:e},n)}));return Object(o.jsxs)("div",{className:"work--job",children:[Object(o.jsx)("h2",{className:"work--job-company",children:e.company+" - "+e.location}),Object(o.jsx)("div",{className:"work--job-title",children:e.title}),Object(o.jsxs)("div",{className:"work--contact",children:[Object(o.jsx)(d,{icon:"contacts-book"}),Object(o.jsxs)("div",{className:"work--contact-info",children:[Object(o.jsx)("div",{className:"work--contact-name",children:e.contact}),Object(o.jsx)(m,{className:"work--contact-email",url:"mailto:"+e.contactEmail})]})]}),i]})}));return Object(o.jsxs)("div",{className:"work",children:[Object(o.jsx)("h1",{className:"work--heading heading--body",children:"Work Experience"}),e]})},x=[{name:"TETRA",link:"https://github.com/hmeinertrita/TETRA",demoLink:"https://hmeinertrita.github.io/TETRA/",description:"Audio visualizer dynamically animated purely with CSS. A proof of concept for doing nontrival math using only CSS.",technologies:["CSS","Web Audio API"]},{name:"time.claps",link:"https://github.com/hmeinertrita/time.claps",demoLink:"https://time-clap.glitch.me",description:"Web app used to display a synchronized countdown. Created to help coordinate certain activities with friends remotely, such as playing videos or syncing local audio recordings.",technologies:["React","express"]},{name:"ADALIN",link:"https://www.github.com/hmeinertrita/ADALIN",description:"Discord bot integrated with a Dialogflow agent and a wiki. Can answer freeform questions about the contents of the wiki through text or speech recognition.",technologies:["Dialogflow","Discord.js","Google Speech API"]},{name:"ocean",link:"https://www.github.com/hmeinertrita/ocean",demoLink:"https://hmeinertrita.github.io/ocean/",description:"First-person audio visualizer made in Unity. Made with easily configurable settings to change the visuals to fit any song.",technologies:["Unity"]}],f=function(){var e=x.map((function(e,n){return Object(o.jsxs)("div",{className:"personal--project",children:[Object(o.jsxs)("div",{className:"personal--repo-technologies",children:[Object(o.jsx)("h2",{className:"personal--name",children:e.name}),Object(o.jsxs)("div",{className:"personal--links",children:[Object(o.jsx)(m,{className:"personal--link",url:e.link,text:"GitHub",prependIcon:"github"}),e.demoLink?Object(o.jsx)(m,{className:"personal--link",url:e.demoLink,text:"Demo",prependIcon:"links"}):void 0]})]}),Object(o.jsx)("div",{className:"personal--technologies",children:e.technologies.join(" \u2022 ")}),Object(o.jsx)("p",{className:"personal--description",children:e.description})]},n)}));return Object(o.jsxs)("div",{className:"personal",children:[Object(o.jsx)("h1",{className:"personal--heading heading--body",children:"Personal Projects"}),e]})},O="Rochester Institute of Technology",v="BS Software Engineering",y="August 2016 - May 2021",N=function(){return Object(o.jsxs)("div",{className:"education",children:[Object(o.jsx)("h1",{className:"education--heading heading--body",children:"Education"}),Object(o.jsx)("div",{className:"education--degree",children:v}),Object(o.jsx)("div",{className:"education--school",children:O}),Object(o.jsx)("div",{className:"education--years",children:y})]})},w=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("span",{children:"Resume designed and built from the ground up by me using React"}),Object(o.jsx)(m,{className:"footer--link",url:"https://hmeinertrita.github.io/resume/",text:"View in browser",prependIcon:"links"}),Object(o.jsx)(m,{className:"footer--link",url:"https://www.github.com/hmeinertrita/resume",text:"Visit GitHub repository",prependIcon:"github"})]})};var k=function(){return Object(o.jsxs)(r,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)("div",{className:"left-column",children:Object(o.jsx)(u,{})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("div",{className:"info--left",children:Object(o.jsx)(g,{})}),Object(o.jsxs)("div",{className:"info--right",children:[Object(o.jsx)(N,{}),Object(o.jsx)(f,{})]})]})]}),Object(o.jsx)(w,{})]})},A=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,12)).then((function(n){var i=n.getCLS,t=n.getFID,a=n.getFCP,c=n.getLCP,s=n.getTTFB;i(e),t(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),A()},8:function(e,n,i){},9:function(e,n,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.9da635e6.chunk.js.map