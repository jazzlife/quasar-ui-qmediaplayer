(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7000335e"],{"028e":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    hide-volume-slider\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},"0960":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("hero",[a("div",[a("q-markdown",[e._v("\n> Music courtesy of [Free Music Archive](http://freemusicarchive.org/music/Dee_Yan-Key/years_and_years_ago/01--Dee_Yan-Key-Driving_Home)\n> Videos and subtitles courtesy of [Blender Organization](https://mango.blender.org/download) and [here](https://durian.blender.org/download/)\n\n::: warning\nThe videos are remotely hosted and may have issues loading depending where you live\n:::\n\n      ")]),a("example-title",{attrs:{title:"Basic"}}),a("example-card",{attrs:{title:"Audio - Basic",name:"AudioBasic","tag-parts":e.getTagParts(n("4228").default)}}),a("example-card",{attrs:{title:"Video - Basic",name:"VideoBasic","tag-parts":e.getTagParts(n("7ef5").default)}}),a("example-title",{attrs:{title:"Color"}}),a("example-card",{attrs:{title:"Audio - Color",name:"AudioColor","tag-parts":e.getTagParts(n("5582").default)}}),a("example-card",{attrs:{title:"Video - Color",name:"VideoColor","tag-parts":e.getTagParts(n("4204").default)}},[a("q-markdown",[e._v("\n::: tip\nThe color of the Big Play Button can also be changed independently\n:::\n        ")])],1),a("example-title",{attrs:{title:"Background Color"}}),a("example-card",{attrs:{title:"Audio - Background Color",name:"AudioBackgroundColor","tag-parts":e.getTagParts(n("4f28").default)}}),a("example-card",{attrs:{title:"Video - Background Color",name:"VideoBackgroundColor","tag-parts":e.getTagParts(n("e4d3").default)}},[a("q-markdown",[e._v("\n::: info\nThe background color of the video view is only visible until the video is loaded.\n:::\n        ")])],1),a("example-title",{attrs:{title:"Poster"}}),a("example-card",{attrs:{title:"Video - Poster",name:"VideoPoster","tag-parts":e.getTagParts(n("b4d2").default)}}),a("example-title",{attrs:{title:"Dark"}}),a("example-card",{attrs:{title:"Audio - Dark",name:"AudioDark","tag-parts":e.getTagParts(n("1c23").default)}}),a("example-card",{attrs:{title:"Video - Dark",name:"VideoDark","tag-parts":e.getTagParts(n("b3d8").default)}}),a("example-title",{attrs:{title:"Dense"}}),a("example-card",{attrs:{title:"Audio - Dense",name:"AudioDense","tag-parts":e.getTagParts(n("b8df").default)}}),a("example-card",{attrs:{title:"Video - Dense",name:"VideoDense","tag-parts":e.getTagParts(n("aeb6").default)}}),a("example-title",{attrs:{title:"Hide Volume Slider"}}),a("q-markdown",[e._v("\nThe `hide-volumn-slider` property is available to hide the volume slider control, which is more applicable to mobile devices, but can also be used for desktops as well.\n      ")]),a("example-card",{attrs:{title:"Audio - Hide Volume Slider",name:"AudioHideVolumeSlider","tag-parts":e.getTagParts(n("82d4").default)}}),a("example-card",{attrs:{title:"Video - Hide Volume Slider",name:"VideoHideVolumeSlider","tag-parts":e.getTagParts(n("028e").default)}}),a("example-card",{attrs:{title:"Audio - Hide Volume Slider (Dense)",name:"AudioHideVolumeSliderDense","tag-parts":e.getTagParts(n("909b").default)}}),a("example-card",{attrs:{title:"Video - Hide Volume Slider (Dense)",name:"VideoHideVolumeSliderDense","tag-parts":e.getTagParts(n("4874").default)}}),a("example-title",{attrs:{title:"Mobile Mode"}}),a("example-card",{attrs:{title:"Video - Mobile Mode",name:"VideoMobileMode","tag-parts":e.getTagParts(n("8174").default)}},[a("q-markdown",[e._v("\nThe `mobile-mode` property is available to turn off the hover effect that displays the controls window. With `mobile-mode` touching (clicking) the video will toggle the controls display. You can use this property for desktops too!\n        ")])],1),a("example-title",{attrs:{title:"Source"}}),a("q-markdown",[e._v("\nIt is preferable to use the property `sources` rather than `source` so the browser can have the associated type of media file, rather than relying on the extension.\n      ")]),a("example-card",{attrs:{title:"Audio - Source",name:"AudioSource","tag-parts":e.getTagParts(n("7edf").default)}}),a("example-card",{attrs:{title:"Video - Source",name:"VideoSource","tag-parts":e.getTagParts(n("82cd").default)}}),a("example-title",{attrs:{title:"Source (Blob)"}}),a("q-markdown",[e._v("\nThe examples below show how you can query your user for local audio or video files and inject them into QMediaPlayer using the `loadFileBlob` method, which expectes a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList).\n\nNote: These examples have `autoplay` turned on.\n      ")]),a("example-card",{attrs:{title:"Audio - Source (Blob)",name:"AudioSourceBlob","tag-parts":e.getTagParts(n("655d").default)}}),a("example-card",{attrs:{title:"Video - Source (Blob)",name:"VideoSourceBlob","tag-parts":e.getTagParts(n("4a0e").default)}}),a("example-title",{attrs:{title:"Tracks"}}),a("q-markdown",[e._v("\n> Tracks, are also known as captions or subtitles. When enabled, it can be changed from the configuration icon.\n      ")]),a("example-card",{attrs:{title:"Video - Tracks",name:"VideoTracks","tag-parts":e.getTagParts(n("d007").default)}}),a("q-markdown",[e._v("\nIn the example below, the default language track has been set to French.\n      ")]),a("example-card",{attrs:{title:"Video - Track Language",name:"VideoTrackLanguage","tag-parts":e.getTagParts(n("941b").default)}}),a("example-title",{attrs:{title:"Language"}}),a("q-markdown",[e._v("\nNot all languages have been translated. If you can help out, please [PR a language pack](https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/dev/src/component/lang).\n\n> QMediaPlayer does not have a property to set the language directly. It uses Quasar's internal language support indirectly. When that switches, then QMediaPlayer also switches to that language.\n      ")]),a("example-card",{attrs:{title:"Video - Language",name:"VideoLanguage","tag-parts":e.getTagParts(n("fa96").default)}}),a("example-title",{attrs:{title:"Icon Set"}}),a("q-markdown",[e._v("\n> QMediaPlayer does not have a property to set the icon set directly. It uses Quasar's internal icon set support indirectly. When that switches, then QMediaPlayer also switches to that icon set.\n      ")]),a("example-card",{attrs:{title:"Video - Icon Set",name:"VideoIconSet","tag-parts":e.getTagParts(n("7250").default)}})],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)},s=[],i=n("2514"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},o=[];n("a481");function l(e){var t=window.location.origin+window.location.pathname+"#"+e,n=document.createElement("textarea");n.className="fixed-top",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function d(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}var c={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return d(this.title)}},methods:{copyHeading:l}},u=c,p=n("2877"),m=Object(p["a"])(u,r,o,!1,null,null,null),f=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[n("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[n("q-toolbar",[n("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[n("q-toolbar-title",{staticClass:"example-title",on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[n("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),this.$slots.default?n("q-separator"):e._e(),this.$slots.default?n("q-card-section",[e._t("default")],2):e._e(),n("q-separator"),n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?n("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?n("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?n("q-tab-panel",{attrs:{name:"style"}},[n("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),n("q-separator"),n(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},g=[],b=(n("ac6a"),n("cadf"),n("06db"),n("456d"),{name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return d(this.title)}},methods:{copyHeading:l,updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==e.tagParts[t]&&(e.parts[t]="```\n"+e.tagParts[t]+"\n```")}))}}}),T=b,v=Object(p["a"])(T,h,g,!1,null,null,null),y=v.exports,S=function(e){var t,n={},a=k(e);a&&a.length>0&&(n.template=a);var s=document.createElement("html");return s.innerHTML=e,t=s.getElementsByTagName("script"),t.length>0&&(n.script=t[0].outerHTML),t=s.getElementsByTagName("style"),t.length>0&&(n.style=t[0].outerHTML),n},k=function(e){var t="";if(e&&e.length>0){var n="<template",a="</template>",s=e.indexOf(n),i=e.lastIndexOf(a);s>-1&&i>-1&&(t=e.substring(s,i+a.length))}return t},q={name:"Examples",components:{Hero:i["a"],ExampleTitle:f,ExampleCard:y},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Basic"),this.addToToc("Audio - Basic",2),this.addToToc("Video - Basic",2),this.addToToc("Background Color"),this.addToToc("Audio - Background Color",2),this.addToToc("Video - Background Color",2),this.addToToc("Poster"),this.addToToc("Video - Poster",2),this.addToToc("Dark"),this.addToToc("Audio - Dark",2),this.addToToc("Video - Dark",2),this.addToToc("Dense"),this.addToToc("Audio - Dense",2),this.addToToc("Video - Dense",2),this.addToToc("Hide Volume Slider"),this.addToToc("Audio - Hide Volume Slider",2),this.addToToc("Video - Hide Volume Slider",2),this.addToToc("Audio - Hide Volume Slider (Dense)",2),this.addToToc("Video - Hide Volume Slider (Dense)",2),this.addToToc("Mobile Mode"),this.addToToc("Video - Mobile Mode",2),this.addToToc("Source"),this.addToToc("Audio - Source",2),this.addToToc("Video - Source",2),this.addToToc("Source (Blob)"),this.addToToc("Audio - Source (Blob)",2),this.addToToc("Video - Source (Blob)",2),this.addToToc("Tracks"),this.addToToc("Video - Tracks",2),this.addToToc("Video - Track Language",2),this.addToToc("Language"),this.addToToc("Video - Language",2),this.addToToc("Icon Set"),this.addToToc("Audio - Icon Set",2),this.addToToc("Video - Icon Set",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:S,addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=d(e);this.tempToc.push({children:[],id:n,label:e,level:t})}}},x=q,_=(n("e872"),Object(p["a"])(x,a,s,!1,null,null,null));t["default"]=_.exports},"17bf":function(e,t,n){},"1c23":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="audio"\n    :sources="sources"\n    background-color="blue-grey-2"\n    dark\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: \'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3\',\n          type: \'audio/mp3\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'},2514:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"page-header"},[n("div",{staticClass:"text-h1 project-name"},[e._v("QMediaPlayer")]),n("div",{staticClass:"text-h2 project-tagline"},[e._v("Embeddable HTML5 Media Player for your Quasar App")]),e._m(0),n("div",{staticClass:"quasar"},[e._v("A Quasar Framework Component and App Extension")]),e._m(1),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/quasarframework/quasar-ui-qmediaplayer",target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/users/hawkeye64/sponsorship",target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),n("main",{staticClass:"flex flex-start justify-center inset-shadow"},[n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"byline"},[e._v("Created and maintained by Jeff Galbraith "),n("a",{attrs:{href:"https://twitter.com/jgalbraith64",target:"_blank",title:"Twitter"}},[n("i",{staticClass:"fab fa-twitter"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"donate"},[n("a",{attrs:{href:"https://github.com/sponsors/hawkeye64",target:"_blank",title:"Donate"}},[n("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])])}],i={name:"Hero"},r=i,o=n("2877"),l=Object(o["a"])(r,a,s,!1,null,null,null);t["a"]=l.exports},4204:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="video"\n    :sources="sources"\n    color="orange-8"\n    big-play-button-color="yellow-8"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: \'https://ftp.halifax.rwth-aachen.de/blender/demo/movies/Sintel.2010.1080p.mkv\',\n          type: \'video/mp4\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'},4228:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"audio\"\n    :sources=\"sources\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3',\n          type: 'audio/mp3'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},4874:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    dense\n    hide-volume-slider\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.halifax.rwth-aachen.de/blender/demo/movies/Sintel.2010.1080p.mkv',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},"4a0e":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div>\n    <q-input v-model="media" filled clearable type="file" style="width: 50%;" class="q-pa-md"/>\n    <q-media-player\n      type="video"\n      ref="mediaplayer"\n      autoplay\n      :source="itemUrl"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      media: null,\n      itemUrl: null\n    }\n  },\n  watch: {\n    media (fileList) {\n      if (fileList && fileList.length > 0) {\n        this.loadFileBlob(fileList)\n      }\n    }\n  },\n  methods: {\n    loadFileBlob (fileList) {\n      this.$refs.mediaplayer.loadFileBlob(fileList)\n    }\n  }\n}\n<\/script>\n'},"4f28":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="audio"\n    :sources="sources"\n    background-color="orange-8"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: \'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3\',\n          type: \'audio/mp3\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'},5582:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="audio"\n    :sources="sources"\n    color="orange-8"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: \'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3\',\n          type: \'audio/mp3\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'},"655d":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div>\n    <q-input v-model="media" filled clearable type="file" style="width: 50%;" class="q-pa-md"/>\n    <q-media-player\n      type="audio"\n      ref="mediaplayer"\n      autoplay\n      :source="itemUrl"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      media: null,\n      itemUrl: null\n    }\n  },\n  watch: {\n    media (fileList) {\n      if (fileList && fileList.length > 0) {\n        this.loadFileBlob(fileList)\n      }\n    }\n  },\n  methods: {\n    loadFileBlob (fileList) {\n      this.$refs.mediaplayer.loadFileBlob(fileList)\n    }\n  }\n}\n<\/script>\n'},7250:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div>\n    <q-select\n      v-model=\"iconSet\"\n      :options=\"iconSetOptions\"\n      label=\"Icon set\"\n      dense\n      borderless\n      emit-value\n      map-options\n      options-dense\n      style=\"min-width: 150px\"\n      class=\"q-ma-sm\"\n    />\n    <q-media-player\n      type=\"video\"\n      :sources=\"sources\"\n      :tracks=\"tracks\"\n      mobile-mode\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ],\n      tracks: [\n        {\n          src: 'statics/media/TearsOfSteel/TOS-en.vtt',\n          kind: 'subtitles',\n          srclang: 'en',\n          label: 'English'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-de.vtt',\n          kind: 'subtitles',\n          srclang: 'de',\n          label: 'German'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-es.vtt',\n          kind: 'subtitles',\n          srclang: 'es',\n          label: 'Spanish'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-fr-Goofy.vtt',\n          kind: 'subtitles',\n          srclang: 'fr',\n          label: 'French'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-it.vtt',\n          kind: 'subtitles',\n          srclang: 'it',\n          label: 'Italian'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-nl.vtt',\n          kind: 'subtitles',\n          srclang: 'nl',\n          label: 'Dutch'\n        }\n      ],\n      iconSet: this.$q.iconSet.name,\n      iconSetOptions: [\n        { label: 'Eva Icons', value: 'eva-icons' },\n        { label: 'Fontawesome', value: 'fontawesome-v5' },\n        { label: 'Ion Icons', value: 'ionicons-v4' },\n        { label: 'Material Icons', value: 'material-icons' },\n        { label: 'MDI', value: 'mdi-v3' },\n        { label: 'Themify', value: 'themify' }\n      ]\n    }\n  },\n  watch: {\n    iconSet (iconSet) {\n      switch (iconSet) {\n        case 'eva-icons':\n          this.changeIconSetToEvaIcons()\n          break\n        case 'fontawesome-v5':\n          this.changeIconSetToFontAwesome()\n          break\n        case 'ionicons-v4':\n          this.changeIconSetToIonIcons()\n          break\n        case 'material-icons':\n          this.changeIconSetToMaterialIcons()\n          break\n        case 'mdi-v3':\n          this.changeIconSetToMDI()\n          break\n        case 'themify':\n          this.changeIconSetToThemify()\n          break\n      }\n    }\n  },\n  methods: {\n    // in this scenario, each icon set must have a\n    // path and cannot be loaded dynamically.\n    // This allows webpack to know each font that\n    // could be used so it is available for loading.\n    changeIconSetToEvaIcons () {\n      this.$q.iconSet = require('quasar/icon-set/eva-icons.js').default\n    },\n    changeIconSetToFontAwesome () {\n      this.$q.iconSet = require('quasar/icon-set/fontawesome-v5.js').default\n    },\n    changeIconSetToIonIcons () {\n      this.$q.iconSet = require('quasar/icon-set/ionicons-v4.js').default\n    },\n    changeIconSetToMaterialIcons () {\n      this.$q.iconSet = require('quasar/icon-set/material-icons.js').default\n    },\n    changeIconSetToMDI () {\n      this.$q.iconSet = require('quasar/icon-set/mdi-v3.js').default\n    },\n    changeIconSetToThemify () {\n      this.$q.iconSet = require('quasar/icon-set/themify.js').default\n    }\n  }\n}\n<\/script>\n"},"7edf":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="audio"\n    source="statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n    }\n  }\n}\n<\/script>\n'},"7ef5":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},8174:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    :poster=\"poster\"\n    mobile-mode\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      poster: 'statics/media/TearsOfSteel/TearsOfSteel.jpeg',\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},"82cd":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="video"\n    source="https://ftp.halifax.rwth-aachen.de/blender/demo/movies/Sintel.2010.1080p.mkv"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n    }\n  }\n}\n<\/script>\n'},"82d4":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"audio\"\n    :sources=\"sources\"\n    hide-volume-slider\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3',\n          type: 'audio/mp3'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},"909b":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"audio\"\n    :sources=\"sources\"\n    dense\n    hide-volume-slider\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3',\n          type: 'audio/mp3'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},"941b":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    :tracks=\"tracks\"\n    track-language=\"French\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ],\n      tracks: [\n        {\n          src: 'statics/media/TearsOfSteel/TOS-en.vtt',\n          kind: 'subtitles',\n          srclang: 'en',\n          label: 'English'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-de.vtt',\n          kind: 'subtitles',\n          srclang: 'de',\n          label: 'German'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-es.vtt',\n          kind: 'subtitles',\n          srclang: 'es',\n          label: 'Spanish'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-fr-Goofy.vtt',\n          kind: 'subtitles',\n          srclang: 'fr',\n          label: 'French'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-it.vtt',\n          kind: 'subtitles',\n          srclang: 'it',\n          label: 'Italian'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-nl.vtt',\n          kind: 'subtitles',\n          srclang: 'nl',\n          label: 'Dutch'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},aeb6:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    dense\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.halifax.rwth-aachen.de/blender/demo/movies/Sintel.2010.1080p.mkv',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},b3d8:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    type="video"\n    :sources="sources"\n    background-color="blue-grey-2"\n    dark\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: \'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov\',\n          type: \'video/mp4\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'},b4d2:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    :poster=\"poster\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      poster: 'statics/media/TearsOfSteel/TearsOfSteel.jpeg',\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},b8df:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"audio\"\n    :sources=\"sources\"\n    dense\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3',\n          type: 'audio/mp3'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},d007:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    :tracks=\"tracks\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ],\n      tracks: [\n        {\n          src: 'statics/media/TearsOfSteel/TOS-en.vtt',\n          kind: 'subtitles',\n          srclang: 'en',\n          label: 'English'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-de.vtt',\n          kind: 'subtitles',\n          srclang: 'de',\n          label: 'German'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-es.vtt',\n          kind: 'subtitles',\n          srclang: 'es',\n          label: 'Spanish'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-fr-Goofy.vtt',\n          kind: 'subtitles',\n          srclang: 'fr',\n          label: 'French'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-it.vtt',\n          kind: 'subtitles',\n          srclang: 'it',\n          label: 'Italian'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-nl.vtt',\n          kind: 'subtitles',\n          srclang: 'nl',\n          label: 'Dutch'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},e4d3:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    background-color='orange-8'\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"},e872:function(e,t,n){"use strict";var a=n("17bf"),s=n.n(a);s.a},fa96:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div>\n    <q-select\n      v-model=\"lang\"\n      :options=\"langOptions\"\n      label=\"Language\"\n      dense\n      borderless\n      emit-value\n      map-options\n      options-dense\n      style=\"min-width: 150px\"\n      class=\"q-ma-sm\"\n    />\n    <q-media-player\n      type=\"video\"\n      :sources=\"sources\"\n      :tracks=\"tracks\"\n    />\n  </div>\n</template>\n\n<script>\nimport languages from 'quasar/lang/index.json'\n\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ],\n      tracks: [\n        {\n          src: 'statics/media/TearsOfSteel/TOS-en.vtt',\n          kind: 'subtitles',\n          srclang: 'en',\n          label: 'English'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-de.vtt',\n          kind: 'subtitles',\n          srclang: 'de',\n          label: 'German'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-es.vtt',\n          kind: 'subtitles',\n          srclang: 'es',\n          label: 'Spanish'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-fr-Goofy.vtt',\n          kind: 'subtitles',\n          srclang: 'fr',\n          label: 'French'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-it.vtt',\n          kind: 'subtitles',\n          srclang: 'it',\n          label: 'Italian'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-nl.vtt',\n          kind: 'subtitles',\n          srclang: 'nl',\n          label: 'Dutch'\n        }\n      ],\n      lang: this.$q.lang.isoName,\n      langOptions: []\n    }\n  },\n  created () {\n    this.langOptions = languages.map(lang => ({\n      label: lang.nativeName, value: lang.isoName\n    }))\n  },\n  watch: {\n    lang (lang) {\n      // dynamic import, so loading on demand only\n      import(`quasar/lang/${lang}`).then(lang => {\n        this.$q.lang.set(lang.default)\n      })\n    }\n  }\n}\n<\/script>\n"}}]);