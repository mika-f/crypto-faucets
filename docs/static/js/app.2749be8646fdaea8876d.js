webpackJsonp([1],{"7CZk":function(e,n){e.exports=[{name:"Free Monero (XMR) from Monero Faucet!",frequency:60,payment:"Pooling",url:"http://monerofaucet.info/ref/485hBEHtnV26No8MriUAdyjd7V8GrvFkVXD4AAAFYTD9cG1Jw64KrkjHqNiqcbLtj1CxLTRJVhqBjcU6PjQSTzJr33tGmmG",min:.05}]},"9M+g":function(e,n){},CMUZ:function(e,n){e.exports=[{name:"XPM-Faucet.com",frequency:60,payment:"FaucetHub",url:"https://xpm-faucet.com/?r=AM2QVydWBt23S5HCsCNVvaWqDRShqfkJKa"},{name:"Free Primecoin from the Primecoin Faucet!",frequency:60,payment:"Pooling",url:"http://primecoinfaucet.info/ref/AR1PhZrZsqiFysV8u8VboEjBfPow4kSoHs",min:.2}]},HCTz:function(e,n,t){"use strict";n.a={name:"Header"}},In9s:function(e,n){},Jmt5:function(e,n){},M93x:function(e,n,t){"use strict";function a(e){t("k5Nm")}var o=t("xJD8"),r=t("sDKM"),c=t("VU/8"),i=a,u=c(o.a,r.a,!1,i,null,null);n.a=u.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),o=t("sCSS"),r=t("M93x"),c=t("YaEn"),i=t("9M+g"),u=(t.n(i),t("Jmt5"));t.n(u);a.a.use(o.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,template:"<App/>",components:{App:r.a}})},O9pw:function(e,n){e.exports=[{name:"AllInFaucet",frequency:60,payment:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:1}]},P9gH:function(e,n,t){function a(e){return t(o(e))}function o(e){var n=r[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var r={"./bitcoin.json":"RYT6","./bitzeny.json":"sROK","./blackcoin.json":"uT2h","./dash.json":"h5P2","./dogecoin.json":"hX8c","./ethereum.json":"U3WZ","./fujicoin.json":"cxvo","./kumacoin.json":"O9pw","./lisk.json":"y764","./litecoin.json":"WM/k","./monacoin.json":"pRrM","./monero.json":"7CZk","./nekonium.json":"XlIt","./nem.json":"jjcZ","./peercoin.json":"npik","./primecoin.json":"CMUZ","./sha1coin.json":"enQ5"};a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="P9gH"},Q29k:function(e,n){e.exports=[{id:"Direct",min:0,name:"Direct",url:""},{id:"Pooling",min:-1,name:"Pooling",url:""},{id:"CoinPot",min:{bitcoin:1e-4,dogecoin:50,litecoin:.002},name:"CoinPot",url:"https://coinpot.co"},{id:"FaucetHub",min:{bitcoin:2e-4,ethereum:.01,litecoin:.01,dogecoin:10,"bitcoin cash":2e-4,blackcoin:2,dash:.001,peercoin:1,primecoin:2},name:"FaucetHub.io",url:"https://faucethub.io"}]},RGWY:function(e,n,t){"use strict";var a=t("teIl"),o=t("TVmP");n.a={name:"Container",components:{"l-header":a.a,"l-footer":o.a}}},RYT6:function(e,n){e.exports=[{name:"Bit Fun",frequency:0,payment:"CoinPot",url:"http://bitfun.co/?ref=6432A0FB3F81"},{name:"Bonus Bitcoin",frequency:15,payment:"CoinPot",url:"http://bonusbitcoin.co/?ref=D7ED3F50E1A9"},{name:"BtcForEveryone.xyz",frequency:60,payment:"FaucetHub",url:"https://btcforeveryone.xyz/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4"},{name:"FreeBitco.in",frequency:60,payment:"Pooling",url:"https://freebitco.in/?r=7713155",min:3e-4},{name:"Moon Bitcoin",frequency:0,payment:"CoinPot",url:"http://moonbit.co.in/?ref=7a838f6cbb5c"},{name:"xFaucet",frequency:5,payment:"FaucetHub",url:"https://www.xfaucet.net/bitcoin/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4"}]},Ryrf:function(e,n,t){"use strict";var a=t("woOf"),o=t.n(a),r=t("mtWM"),c=t.n(r),i=t("M4fF"),u=t.n(i);n.a={name:"Root",data:function(){var e=this.$route.query.refer&&"false"===this.$route.query.refer,n=u.a.sortBy(t("xLvj"),function(e){return e.name.toLowerCase()}),a=[];return u.a.forEach(n,function(n){var r=u.a.sortBy(t("P9gH")("./"+n.name.toLowerCase()+".json"),function(e){return e.name.toLowerCase()});u.a.forEach(r,function(t){e&&(t.url=t.url.replace(/(\?)?r(ef)?(=|\/).*/g,"")),a.push(o()(t,{currency:n.symbol}))})}),{currencies:n,faucets:a,fields:{currency:{label:"通貨"},website:{label:"ウェブサイト"},frequency:{label:"支払い間隔"},payment:{label:"支払い方法"},minimumAmount:{label:"最小出金額"},price:{label:"日本円"}},payments:t("Q29k"),selectedCurrency:"*",selectedPayment:"*",tickers:null}},methods:{amount:function(e){return""},filtered:function(){var e=this;return"*"===this.$data.selectedCurrency&&"*"===this.$data.selectedPayment?this.$data.faucets:u.a.filter(this.$data.faucets,function(n){var t=!0;return t&="*"===e.$data.selectedCurrency||n.currency===e.$data.selectedCurrency,t&="*"===e.$data.selectedPayment||n.payment===e.$data.selectedPayment})},minimumAmount:function(e){var n=this.resolve("currencies","symbol",e.currency);return"Direct"===e.payment||"Pooling"===e.payment?e.min?e.min+" "+n.symbol:"N/A":this.resolve("payments","id",e.payment).min[n.name.toLowerCase()]+" "+n.symbol},pricing:function(e){if(null===this.$data.tickers)return"読み込み中...";var n=this.resolve("tickers","symbol",e.currency);if(n){var t=n.price_jpy;return(t>=1e3?Math.floor(t):Math.floor(t*Math.pow(10,3))/Math.pow(10,3))+" 円"}return"N/A"},readable:function(e){if(e>=60){var n=e/60;return n>1?n+" hours":n+" hour"}return e>0?e+" min":"Generate"},resolve:function(e,n,t){return this.$data[e].find(function(e){return e[n]===t})}},mounted:function(){var e=this;null===this.$data.tickers?c.a.get("https://api.coinmarketcap.com/v1/ticker/?convert=JPY").then(function(n){e.$data.tickers=n.data}).catch(function(e){console.error(e)}):console.log("Already loaded, skip.")}}},TVmP:function(e,n,t){"use strict";function a(e){t("In9s")}var o=t("UthT"),r=t("aiZq"),c=t("VU/8"),i=a,u=c(o.a,r.a,!1,i,"data-v-f3b0fe52",null);n.a=u.exports},U3WZ:function(e,n){e.exports=[{name:"Claim your free ether from the Ethereum Faucet!",frequency:60,payment:"Pooling",url:"http://ethereumfaucet.info/ref/0x3cD67f16C2D7FE518E924930f645DD73AAdAAF39",min:.025},{name:"Ethereum-Faucet.org",frequency:60,payment:"FaucetHub",url:"https://ethereum-faucet.org/?r=0x3cD67f16C2D7FE518E924930f645DD73AAdAAF39"}]},UthT:function(e,n,t){"use strict";n.a={name:"Footer"}},"WM/k":function(e,n){e.exports=[{name:"Free LTC from the Litecoin Faucet!",frequency:60,payment:"Pooling",url:"http://litecoinfaucet.info/ref/LVfzaELameCFoEWoLQtKiBCsCUWgwkorcq",min:.01},{name:"Litecoin-Faucet.com",frequency:60,payment:"FaucetHub",url:"https://litecoin-faucet.com/?r=LiSmd3Pp1hCoPGPguSVCUyo1RHak5g1mcj"},{name:"Moon Litecoin",frequency:0,payment:"CoinPot",url:"http://moonliteco.in/?ref=c2f750048d81"},{name:"xFaucet",frequency:5,payment:"FaucetHub",url:"https://www.xfaucet.net/litecoin/?r=LiSmd3Pp1hCoPGPguSVCUyo1RHak5g1mcj"}]},XlIt:function(e,n){e.exports=[{name:"Nekonium Mining Pool",frequency:30,payment:"Direct",url:"http://nuko.oldbeyond.com/#/faucet"},{name:"ねこの水飲み場 - Nekonium Faucet",frequency:180,payment:"Direct",url:"https://faucet.nekonium.net/"},{name:"Nekonium Faucet",frequency:180,payment:"Direct",url:"http://namuyan.dip.jp/nekoniumFaucet.php"}]},YaEn:function(e,n,t){"use strict";var a=t("7+uW"),o=t("36EE"),r=t.n(o),c=t("/ocq"),i=t("c27y"),u=t("tBSM");a.a.use(c.a);var s=new c.a({routes:[{path:"/",name:"Root",component:u.a},{path:"/about",name:"About",component:i.a}]});r()(s,"UA-68289020-2"),n.a=s},Yk23:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",[t("section",[t("h2",[e._v("仮想通貨・暗号通貨フォーセットリスト")]),e._v(" "),t("p",[e._v("\n      仮想通貨・暗号通貨のフォーセット(蛇口)の一覧です。\n      "),t("br"),e._v(" 絞り込み機能を使うことで、 Monacoin (MONA) 限定にしたり、 Direct Payment のみ表示することも出来ます。\n    ")])]),e._v(" "),t("section",[t("b-card",{attrs:{title:"絞り込み"}},[t("b-form",[t("b-form-row",[t("b-col",{attrs:{col:"",md:"auto"}},[t("b-form-group",{attrs:{label:"通貨","label-for":"currency"}},[t("b-form-select",{attrs:{id:"currency"},model:{value:e.selectedCurrency,callback:function(n){e.selectedCurrency=n},expression:"selectedCurrency"}},[t("option",{attrs:{value:"*"}},[e._v("全て")]),e._v(" "),e._l(e.currencies,function(n){return t("option",{key:n.symbol,domProps:{value:n.symbol}},[e._v("\n                  "+e._s(n.name)+" ("+e._s(n.symbol)+")\n                ")])})],2)],1)],1),e._v(" "),t("b-col",{attrs:{col:"",md:"auto"}},[t("b-form-group",{attrs:{label:"支払い方法","label-for":"payment"}},[t("b-form-select",{attrs:{id:"payment"},model:{value:e.selectedPayment,callback:function(n){e.selectedPayment=n},expression:"selectedPayment"}},[t("option",{attrs:{value:"*"}},[e._v("全て")]),e._v(" "),e._l(e.payments,function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v("\n                  "+e._s(n.name)+"\n                ")])})],2)],1)],1)],1)],1)],1)],1),e._v(" "),t("section",[t("b-table",{attrs:{bordered:"",striped:"",hover:"","show-empty":"","empty-text":"アイテムが見つかりませんでした",items:e.filtered(),fields:e.fields},scopedSlots:e._u([{key:"currency",fn:function(n){return[e._v("\n        "+e._s(e.resolve("currencies","symbol",n.item.currency).name)+"\n      ")]}},{key:"website",fn:function(n){return[t("a",{attrs:{href:n.item.url,target:"_blank"}},[e._v(e._s(n.item.name))])]}},{key:"frequency",fn:function(n){return[e._v("\n        "+e._s(e.readable(n.item.frequency))+"\n      ")]}},{key:"payment",fn:function(n){return[""===e.resolve("payments","id",n.item.payment).url?[e._v("\n          "+e._s(e.resolve("payments","id",n.item.payment).name)+"\n        ")]:[t("a",{attrs:{href:e.resolve("payments","id",n.item.payment).url,target:"_blank"}},[e._v("\n            "+e._s(e.resolve("payments","id",n.item.payment).name)+"\n          ")])]]}},{key:"minimumAmount",fn:function(n){return[e._v("\n        "+e._s(e.minimumAmount(n.item))+"\n      ")]}},{key:"price",fn:function(n){return[e._v("\n        "+e._s(e.pricing(n.item))+"\n      ")]}}])})],1)])},o=[],r={render:a,staticRenderFns:o};n.a=r},ZpWT:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",fixed:"top"}},[t("b-container",[t("b-nav-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),t("b-navbar-brand",{attrs:{to:"/"}},[e._v("mochizuki.moe")]),e._v(" "),t("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[t("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[t("b-nav-item",{attrs:{to:"/about"}},[e._v("About")]),e._v(" "),t("b-nav-item",{attrs:{href:"https://github.com/mika-f/crypto-faucets/",target:"_blank"}},[e._v("GitHub")])],1)],1)],1)],1)},o=[],r={render:a,staticRenderFns:o};n.a=r},Zs8U:function(e,n,t){"use strict";n.a={name:"About",data:function(){return{frequency:{fields:{label:{label:"表記"},desc:{label:"説明"}},items:[{label:"時間表記 (例: 1 hour, 15 min)",desc:"表記されている時間が経過することで、一定量の暗号通貨をもらうことができます。"},{label:"Generate",desc:"時間経過によって、もらえる暗号通貨の量が増加します。"}]},payment:{fields:{label:{label:"表記"},desc:{label:"説明"}},items:[{label:"Direct",desc:"入力したアドレスに対して、直接暗号通貨が送信されます。通常、他の蛇口に比べて高額で、手数料も無料です。"},{label:"Pooling",desc:"一定量貯まるまで、サイト側でプールされます。一定量貯めることで、引き出すことが可能です。手数料がかかることがあります。"}]}}}}},aiZq:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",[t("footer",[t("p",[e._v("\n      仮想通貨, 暗号通貨や蛇口の追加, 削除は、\n      "),t("a",{attrs:{href:"https://github.com/mika-f/crypto-faucets/"}},[e._v("GitHub リポジトリ")]),e._v("\n      まで\n    ")]),e._v(" "),t("p",[e._v("\n      コンタクト:\n      "),t("a",{attrs:{href:"https://twitter.com/MikazukiFuyuno"}},[e._v("@MikazukiFuyuno")]),e._v("\n      寄付:\n      "),t("a",{attrs:{href:"https://mochizuki.moe/donation/"}},[e._v("こちら")])]),e._v(" "),t("p",[e._v("\n      Copyright © 2017 mochizuki.moe.\n    ")])])])},o=[],r={render:a,staticRenderFns:o};n.a=r},c27y:function(e,n,t){"use strict";function a(e){t("iARi")}var o=t("Zs8U"),r=t("w6lz"),c=t("VU/8"),i=a,u=c(o.a,r.a,!1,i,"data-v-7b9ad5fe",null);n.a=u.exports},cxvo:function(e,n){e.exports=[{name:"AllInFaucet",frequency:60,payment:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:0}]},dBjI:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"root"},[t("l-header"),e._v(" "),e._t("default"),e._v(" "),t("l-footer")],2)},o=[],r={render:a,staticRenderFns:o};n.a=r},enQ5:function(e,n){e.exports=[{name:"AllInFaucet",frequency:60,payment:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:0}]},fyf8:function(e,n){},h5P2:function(e,n){e.exports=[{name:"DASH-Faucet.com",frequency:60,payment:"FaucetHub",url:"https://dash-faucet.com/?r=XinqrYP4KD3vxFhuEniqkwa6GPRayhriqU"},{name:"Free DASH from the DASH Faucet!",frequency:60,payment:"Pooling",url:"http://dashfaucet.net/ref/XrTP5SXkzqDuwcEcdSfDASxoqU2ops9RjS",min:2e-4},{name:"xFaucet",frequency:5,payment:"FaucetHub",url:"https://www.xfaucet.net/dashcoin/?r=XinqrYP4KD3vxFhuEniqkwa6GPRayhriqU"}]},hX8c:function(e,n){e.exports=[{name:"DOGE-Faucet.com",frequency:60,payment:"FaucetHub",url:"https://doge-faucet.com/?r=DU2g1zeQbmhXdFzx3vzSFGbkuwzduVas85"},{name:"FreeDoge.co.in",frequency:60,payment:"Pooling",url:"https://freedoge.co.in/?r=1294087",min:200},{name:"Moon Dogecoin",frequency:0,payment:"CoinPot",url:"http://moondoge.co.in/?ref=22948157f96d"},{name:"xFaucet",frequency:5,payment:"FaucetHub",url:"https://www.xfaucet.net/dogecoin/?r=DU2g1zeQbmhXdFzx3vzSFGbkuwzduVas85"}]},iARi:function(e,n){},"ik/t":function(e,n,t){"use strict";function a(e){t("y2Wf")}var o=t("RGWY"),r=t("dBjI"),c=t("VU/8"),i=a,u=c(o.a,r.a,!1,i,null,null);n.a=u.exports},jjcZ:function(e,n){e.exports=[{name:"NEM mainnet Faucet",frequency:240,payment:"Pooling",url:"http://namuyan.dip.jp/nem/mainnet_nodb/",min:5},{name:"Free XEM from the NEM Faucet!",frequency:60,payment:"Pooling",url:"http://nemfaucet.info/ref/NDXD3H-ZJVPEI-JDWA7Q-56DUKJ-3YYQZV-QHX7DL-GMDV",min:.5}]},k5Nm:function(e,n){},npik:function(e,n){e.exports=[{name:"PPC-Faucet.com",frequency:60,payment:"FaucetHub",url:"https://ppc-faucet.com/?r=PBHB7UYxn1QQcavS1JZrVmXWza7tKt6Lxh"},{name:"Free PPC from the Peercoin Faucet!",frequency:60,payment:"Pooling",url:"http://peercoinfaucet.info/ref/PAhsQAGaarFr5CznSBii31mGgx9L3NhoVf",min:.05}]},pRrM:function(e,n){e.exports=[{name:"Monacoin Station",frequency:360,payment:"Pooling",url:"https://faucet.mona-coin.org",min:.002},{name:"Space Space Faucets",frequency:1440,payment:"Direct",url:"http://utyuu.space/spacespace-faucet/"},{name:"しがないふぉーせっと",frequency:1440,payment:"Direct",url:"http://shiganaifaucet.chocottokozukai.click/"},{name:"しがないふぉーせっと2",frequency:30,payment:"Pooling",url:"http://shiganaifaucet.chocottokozukai.click/faucet2/",min:1},{name:"しがないふぉーせっと3",frequency:10,payment:"Pooling",url:"http://www.shiganaicontents.ga/faucet3/",min:.1},{name:"AllInFaucet",frequency:60,payment:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:.01}]},sDKM:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("container",[t("router-view")],1)],1)},o=[],r={render:a,staticRenderFns:o};n.a=r},sROK:function(e,n){e.exports=[{name:"SA BitZeny Faucet",frequency:1440,payment:"Direct",url:"http://shiganairingozeny.chocottokozukai.click/bitzeny/faucet_top.php"},{name:"AllInFaucet",frequency:60,payment:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:.1}]},tBSM:function(e,n,t){"use strict";function a(e){t("fyf8")}var o=t("Ryrf"),r=t("Yk23"),c=t("VU/8"),i=a,u=c(o.a,r.a,!1,i,"data-v-12daecc4",null);n.a=u.exports},teIl:function(e,n,t){"use strict";var a=t("HCTz"),o=t("ZpWT"),r=t("VU/8"),c=r(a.a,o.a,!1,null,null,null);n.a=c.exports},uT2h:function(e,n){e.exports=[{name:"BlackcoinFaucet.com",frequency:60,payment:"FaucetHub",url:"https://blackcoinfaucet.com/?r=BGgDvUmW4mbF1jgi69wVUbwskYRNyB4Trx"},{name:"Free Blackcoin with the Blackcoin.info faucet!",frequency:60,payment:"Pooling",url:"http://blackcoin.info/ref/B69gaoqskF4LQ1ABqwJbFuqtuBKoNaDyts",min:.2}]},w6lz:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",[t("section",[t("h2",[e._v("このサイトについて")]),e._v(" "),t("p",[e._v("\n      このサイトは、仮想通貨・暗号通貨のフォーセット(蛇口)へのリンクを纏めた物です。\n    ")])]),e._v(" "),t("section",[t("h3",[e._v("フォーセット (蛇口) とは？")]),e._v(" "),t("p",[e._v("\n      無料で Bitcoin や Monacoin がもらえるサイトの事です。一定の条件を満たす (広告を見るなど) ことで、少額の暗号通貨を無料でもらうことが出来ます。 基本的には広告収入によって成り立っていますが、 Monacoin などでは、運営者の善意によって配布されていることがあります。\n    ")])]),e._v(" "),t("section",[t("h3",[e._v("支払い間隔について")]),e._v(" "),t("p",[e._v("\n      当サイトにて表記している支払い間隔について、以下の分類をしています。\n    ")]),e._v(" "),t("b-table",{attrs:{bordered:"",items:e.frequency.items,fields:e.frequency.fields}})],1),e._v(" "),t("section",[t("h3",[e._v("支払い方法について")]),e._v(" "),t("p",[e._v("\n      当サイトにて表記している支払い方法にについて、サイト名に加えて以下の2種類の表記があります。 なお、サイト名が表記されている場合においても、支払い方法は Pooling と同様です。\n    ")]),e._v(" "),t("b-table",{attrs:{bordered:"",items:e.payment.items,fields:e.payment.fields}})],1),e._v(" "),t("section",[t("h3",[e._v("その他")]),e._v(" "),t("div",[t("h4",[e._v("招待リンクになっているのウザい")]),e._v(" "),t("p",[e._v("\n        どうしてもという場合は、URL に\n        "),t("code",[e._v("?refer=false")]),e._v(" を付けてリロードすると、純粋なサイト URL になります。\n      ")])])])])},o=[],r={render:a,staticRenderFns:o};n.a=r},xJD8:function(e,n,t){"use strict";var a=t("ik/t");n.a={name:"app",components:{container:a.a}}},xLvj:function(e,n){e.exports=[{name:"Bitcoin",symbol:"BTC"},{name:"BitZeny",symbol:"ZNY"},{name:"DASH",symbol:"DASH"},{name:"Dogecoin",symbol:"DOGE"},{name:"Litecoin",symbol:"LTC"},{name:"Nekonium",symbol:"NUKO"},{name:"Monacoin",symbol:"MONA"},{name:"Kumacoin",symbol:"KUMA"},{name:"FujiCoin",symbol:"FJC"},{name:"Sha1coin",symbol:"SHA1"},{name:"NEM",symbol:"XEM"},{name:"Ethereum",symbol:"ETH"},{name:"Blackcoin",symbol:"BLK"},{name:"Peercoin",symbol:"PPC"},{name:"Primecoin",symbol:"XPM"},{name:"Lisk",symbol:"LSK"},{name:"Monero",symbol:"XMR"}]},y2Wf:function(e,n){},y764:function(e,n){e.exports=[{name:"Free LSK from the Lisk Faucet!",frequency:60,payment:"Pooling",url:"http://liskfaucet.info/ref/12123451325770747144L",min:.5}]}},["NHnr"]);
//# sourceMappingURL=app.2749be8646fdaea8876d.js.map