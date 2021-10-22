import LocateConfirm from "./components/LocateConfirm.vue";
function changeLinkHandler(Vue,el){
    Vue.nextTick().then(() => {
        const allLinks = document.getElementsByTagName("a");
        const lastLink = location.href;
        Array.from(allLinks).forEach(item => {
            item.addEventListener("click",e => {
                const target = item.getAttribute("target");
                if(target === "_blank"){
                    e.preventDefault();
                    const currentLink = item.getAttribute("href");
                    new Vue({
                        render:(h) => h(LocateConfirm,{ props:{ link:currentLink,lastLink }})
                    }).$mount(el);
                }
            })
        })
    })
}
export default ({ isServer,Vue,router }) => {
   if(!isServer){
        console.log(
            `%c my-web-projects%c 联系QQ：854806732 %c 联系微信：eveningwater %c github:https://github.com/eveningwater/my-web-projects %c `,
            'background:#0ca6dc ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#ff7878 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
            'background:#ff7878 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#ff7878 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
            'background:transparent'
        );
        console.log("%c ", 
            "padding:50px;border-radius:15px;background:url(https://www.eveningwater.com/static/image/smile.svg)no-repeat center/cover;margin-left:15px;"
        );
        window.addEventListener("load",(e) => {
            const app = document.getElementById("app");
            changeLinkHandler(Vue,app);
            const config = {
                attributes:true,
                subtree:true,
                childList:true
            };
            const callback = () => {
                changeLinkHandler(Vue);
            }
            const observer = new MutationObserver(callback);
            observer.observe(app,config);
        })
   }
}