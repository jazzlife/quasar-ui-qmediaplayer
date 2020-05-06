(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0960":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("hero",[a("div",{staticClass:"q-markdown"},[a("q-markdown",[e._v("\n> Music courtesy of [Free Music Archive](https://freemusicarchive.org/music/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_Upbeat_Party)\n> Videos and subtitles courtesy of [Blender Organization](https://mango.blender.org/download) and [here](https://durian.blender.org/download/)\n\n::: warning\nThe videos are remotely hosted and may have issues loading depending where you live\n:::\n\n      ")]),a("example-title",{attrs:{title:"Basic"}}),a("example-viewer",{attrs:{title:"Audio - Basic",file:"AudioBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Basic",file:"VideoBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Color"}}),a("example-viewer",{attrs:{title:"Audio - Color",file:"AudioColor","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Color",file:"VideoColor","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\n::: tip\nThe color of the Big Play Button can also be changed independently\n:::\n        ")])],1),a("example-title",{attrs:{title:"Background Color"}}),a("example-viewer",{attrs:{title:"Audio - Background Color",file:"AudioBackgroundColor","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Background Color",file:"VideoBackgroundColor","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\n::: info\nThe background color of the video view is only visible until the video is loaded.\n:::\n        ")])],1),a("example-title",{attrs:{title:"Poster"}}),a("example-viewer",{attrs:{title:"Video - Poster",file:"VideoPoster","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Dark"}}),a("example-viewer",{attrs:{title:"Audio - Dark",file:"AudioDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Dark",file:"VideoDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Dense"}}),a("example-viewer",{attrs:{title:"Audio - Dense",file:"AudioDense","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Dense",file:"VideoDense","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"No Video (on audio)"}}),a("q-markdown",[e._v('\nQMediaPlayer uses the `video` tag, even for audio. This decision was made bause of issues when dynamically switching between `audio` and `video`.\n\nThe problem now is if you want to just play the audio of a video file, then the `audio` element **must** be used.\n\nYou can now do this by using the `type="audio"` along with `no-video` properties.\n      ')]),a("example-viewer",{attrs:{title:"Audio - No Video",file:"AudioNoVideo","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Hide Volume Slider"}}),a("q-markdown",[e._v("\nThe `hide-volumn-slider` property is available to hide the volume slider control, which is more applicable to mobile devices, but can also be used for desktops as well.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Hide Volume Slider",file:"AudioHideVolumeSlider","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Hide Volume Slider",file:"VideoHideVolumeSlider","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Audio - Hide Volume Slider (Dense)",file:"AudioHideVolumeSliderDense","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Hide Volume Slider (Dense)",file:"VideoHideVolumeSliderDense","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Mobile Mode"}}),a("example-viewer",{attrs:{title:"Video - Mobile Mode",file:"VideoMobileMode","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nThe `mobile-mode` property is available to turn off the hover effect that displays the controls window. With `mobile-mode` touching (clicking) the video will toggle the controls display. You can use this property for desktops too!\n        ")])],1),a("example-title",{attrs:{title:"Source"}}),a("q-markdown",[e._v("\nIt is preferable to use the property `sources` rather than `source` so the browser can have the associated type of media file, rather than relying on the extension.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Source",file:"AudioSource","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Source",file:"VideoSource","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Source (Blob)"}}),a("q-markdown",[e._v("\nThe examples below show how you can query your user for local audio or video files and inject them into QMediaPlayer using the `loadFileBlob` method, which expectes a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList).\n\nNote: These examples have `autoplay` turned on.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Source (Blob)",file:"AudioSourceBlob","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Source (Blob)",file:"VideoSourceBlob","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Tracks"}}),a("q-markdown",[e._v("\n> Tracks, are also known as captions or subtitles. When enabled, it can be changed from the configuration icon.\n      ")]),a("example-viewer",{attrs:{title:"Video - Tracks",file:"VideoTracks","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn the example below, the default language track has been set to French.\n      ")]),a("example-viewer",{attrs:{title:"Video - Track Language",file:"VideoTrackLanguage","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Language"}}),a("q-markdown",[e._v("\nNot all languages have been translated. If you can help out, please [PR a language pack](https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/dev/src/component/lang).\n\n> QMediaPlayer does not have a property to set the language directly. It uses Quasar's internal language support indirectly. When that switches, then QMediaPlayer also switches to that language.\n      ")]),a("example-viewer",{attrs:{title:"Video - Language",file:"VideoLanguage","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slot"}}),a("example-viewer",{attrs:{title:"Video - Slot",file:"VideoSlot","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Icon Set"}}),a("q-markdown",[e._v("\n> QMediaPlayer does not have a property to set the icon set directly. It uses Quasar's internal icon set support indirectly. When that switches, then QMediaPlayer also switches to the corresponding icon set.\nIn the examples below, when the icon set is changed, you will notice that all media player on this page also change their icon set.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Icon Set",file:"AudioIconSet","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Icon Set",file:"VideoIconSet","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{class:{"text-black bg-grey-4":e.$q.dark.isActive,"text-white bg-primary":!e.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},s=[],i=a("2514"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},r=[];a("a481");function n(e){var t=window.location.origin+window.location.pathname+"#"+e,a=document.createElement("textarea");a.className="fixed-top",a.value=t,document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function c(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}var d={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:n}},h=d,u=a("2877"),p=Object(u["a"])(h,l,r,!1,null,null,null),m=p.exports,T=a("384e"),v={name:"Examples",components:{Hero:i["a"],ExampleTitle:m},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(T["b"],"/dist/index.umd.min.js"),"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(T["b"],"/dist/lang/en-us.umd.js"),"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(T["b"],"/dist/icon-set/material-icons.umd.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(T["b"],"/dist/index.min.css")]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Basic"),this.addToToc("Audio - Basic",2),this.addToToc("Video - Basic",2),this.addToToc("Background Color"),this.addToToc("Audio - Background Color",2),this.addToToc("Video - Background Color",2),this.addToToc("Poster"),this.addToToc("Video - Poster",2),this.addToToc("Dark"),this.addToToc("Audio - Dark",2),this.addToToc("Video - Dark",2),this.addToToc("Dense"),this.addToToc("Audio - Dense",2),this.addToToc("Video - Dense",2),this.addToToc("No Video (on audio)"),this.addToToc("Audio - No Video",2),this.addToToc("Hide Volume Slider"),this.addToToc("Audio - Hide Volume Slider",2),this.addToToc("Video - Hide Volume Slider",2),this.addToToc("Audio - Hide Volume Slider (Dense)",2),this.addToToc("Video - Hide Volume Slider (Dense)",2),this.addToToc("Mobile Mode"),this.addToToc("Video - Mobile Mode",2),this.addToToc("Source"),this.addToToc("Audio - Source",2),this.addToToc("Video - Source",2),this.addToToc("Source (Blob)"),this.addToToc("Audio - Source (Blob)",2),this.addToToc("Video - Source (Blob)",2),this.addToToc("Tracks"),this.addToToc("Video - Tracks",2),this.addToToc("Video - Track Language",2),this.addToToc("Language"),this.addToToc("Video - Language",2),this.addToToc("Slot"),this.addToToc("Video - Slot",2),this.addToToc("Icon Set"),this.addToToc("Audio - Icon Set",2),this.addToToc("Video - Icon Set",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e;t>1&&(a="example-"+a);var o=c(a);this.tempToc.push({children:[],id:o,label:e,level:t})}}},f=v,w=Object(u["a"])(f,o,s,!1,null,null,null);t["default"]=w.exports},2514:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"page-header"},[a("div",{staticClass:"donate"},[a("a",{attrs:{href:e.donateUrl,target:"_blank",title:"Donate"}},[a("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),a("div",{staticClass:"text-h1 project-name"},[e._v(e._s(e.title))]),a("div",{staticClass:"text-h2 project-tagline"},[e._v(e._s(e.tagline))]),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:e.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),e.hasInteractiveDemo?a("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):e._e(),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:e.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),a("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[a("div",{staticClass:"quasar"},[e._v(e._s(e.quasarDesc))]),a("div",{staticClass:"byline"},[e._v(e._s(e.byline)),a("a",{attrs:{href:e.bylineTwitter,target:"_blank",title:"Twitter"}},[a("i",{staticClass:"fab fa-twitter"})])])])],1),a("main",{staticClass:"flex flex-start justify-center inset-shadow"},[a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},s=[],i={name:"Hero",data:function(){return{title:"QMediaPlayer",tagline:"Embeddable HTML5 Media Player for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmediaplayer",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!0}}},l=i,r=a("2877"),n=Object(r["a"])(l,o,s,!1,null,null,null);t["a"]=n.exports}}]);