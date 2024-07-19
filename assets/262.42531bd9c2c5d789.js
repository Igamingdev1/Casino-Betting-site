"use strict"; (self["webpackChunkBitbots"] = self["webpackChunkBitbots"] || []).push([[262], { 77928: function (t, e, s) { s.d(e, { Z: function () { return d } }); var i = function () { var t = this, e = t._self._c; return e("div", { staticClass: "format-money-wrapper" }, [[2, 3, 0].includes(t.isWin) || t.show ? e("ul", { class: [{ lose: t.money <= 0 || 2 === t.isWin || 0 === t.isWin, win: t.money > 0 && 3 === t.isWin, isfloat: !1 === t.isfloat }], style: { float: !0 === t.isfloat ? "right" : "", color: t.moneyArr[0] < 0 && t.show || t.show && 1 === t.isWin ? "#FF001A" : "" } }, [t._l(t.moneyArr, (function (s, i) { return e("li", { key: i, class: { mask: 2 === i && !t.show } }, [t._v(" " + t._s(s) + " ")]) })), e("li", [e("img", { class: [t.icon ? "format-money-img-special" : "format-money-img"], attrs: { src: t.oosUrl + t.itemData.coinTypeImage } })])], 2) : e("div", { staticClass: "on-hold" }, [1 !== t.isWin || t.show ? t._e() : e("span", [t._v(t._s(t.$t("myBet.fy9")))]), 4 === t.isWin ? e("span", [t._v(t._s(t.$t("myBet.fy10")))]) : t._e()])]) }, a = [], o = (s(16879), s(90408)), n = { name: "formatMoney", props: { money: { type: Number, default: 0 }, isfloat: { type: Boolean, default: !0 }, show: { type: Boolean, default: !1 }, isWin: { type: Number, default: 3 }, itemData: { type: Object, default: () => null }, icon: { type: Boolean, default: !1 } }, data() { return { arr: [] } }, computed: { ...(0, o.rn)(["oosUrl"]), moneyArr() { let t = 8, e = 10, s = this.retain(this.money, t), i = s.split("."), [a, o] = i, n = 2 === Number(this.isWin) ? "-" : ""; return a.length + o.length > e ? (o = o.slice(0, e - a.length), [n + a + ".", o, "..."]) : (a = n + a + ".", [a, o]) } }, methods: { retain(t, e) { t = t.toString(); let s = t.indexOf("."); return t = -1 !== s ? t.substring(0, e + s + 1) : t.substring(0), parseFloat(t).toFixed(e) }, findZero(t) { for (let e = t.length - 1; e >= 0; e--)if ("0" !== t[e]) return e; return 0 } } }, l = n, r = s(1001), c = (0, r.Z)(l, i, a, !1, null, "b4895e76", null), d = c.exports }, 62262: function (t, e, s) { s.d(e, { Z: function () { return _ } }); var i = function () { var t = this, e = t._self._c; return e("div", { staticClass: "dialog" }, [e("el-dialog", { class: [4 === t.gameType || 1 === t.gameType ? "dialog_one" : "dialog_two"], attrs: { visible: t.showDialog }, on: { "update:visible": function (e) { t.showDialog = e }, close: t.handleClose } }, [e("div", { staticClass: "el-dialog__header" }, [e("img", { staticClass: "titleLog", attrs: { src: s(19973), alt: "" } }), e("span", { staticClass: "betTitle" }, [t._v(t._s(t.$t("betConfigure.fy43")))])]), t.scope ? e("div", { staticClass: "el-dialog-div" }, [e("div", [e("div", { staticClass: "gameName" }, [e("div", { staticClass: "gameName-content" }, [e("div", { staticClass: "shadow" }), t._v(" " + t._s(t.scope.gameName) + ":  " + t._s(t.scope.orderNumber) + " ")]), e("div", { staticClass: "icon_right" }, [e("img", { staticClass: "icon_1", attrs: { slot: "reference", src: s(56376), alt: "" }, on: { click: function (e) { return t.handleClipboard(t.scope.orderNumber, e) } }, slot: "reference" })])]), e("div", { staticClass: "bet_title" }, [t._v(" " + t._s(t.$t("betConfigure.fy44")) + t._s(t.scope.userName) + " ")]), t.scope.betPeriods ? e("div", { staticClass: "bet_title" }, [t._v(" " + t._s(t.$t("betConfigure.fy4")) + t._s(t.$t("hashPeriod.fy17")) + ": " + t._s(t.scope.betPeriods) + " ")]) : t._e(), e("div", { staticClass: "bet_title_hash" }, [e("span", [t._v(" 哈希值: ")]), e("p", [t._v(" " + t._s(t.scope.hashInfo) + " ")])]), e("div", { staticClass: "bet_title" }, [t._v(" " + t._s(t.$t("betConfigure.fy45")) + " " + t._s(t.timeFormat(t.scope.createTime)) + " ")]), e("div", { staticClass: "bet_info_content" }, [e("div", { staticClass: "bet_info_title" }, [e("div", { staticClass: "text test_top", staticStyle: { color: "#98a2b6" } }, [t._v(" " + t._s(t.$t("betConfigure.fy46")) + " ")]), e("div", { staticClass: "text test_margin" }, [e("formatMoney", { attrs: { money: t.getMoney(t.scope, !0), itemData: t.scope, isfloat: !1, isWin: Number(0) } })], 1)]), e("div", { staticClass: "bet_info_title" }, [e("div", { staticClass: "text", staticStyle: { color: "#98a2b6" } }, [t._v(" " + t._s(t.$t("myBet.fy3")) + " ")]), e("div", { staticClass: "text test_margin" }, [e("span", { staticStyle: { color: "#ffffff" } }, [t._v(t._s(t.scope.oddsNumber + "x"))])])]), e("div", { staticClass: "bet_info_title" }, [e("div", { staticClass: "text", staticStyle: { color: "#98a2b6" } }, [t._v(" " + t._s(t.$t("myBet.fy4")) + " ")]), 1 !== t.scope.isWin ? e("div", { staticClass: "text" }, [e("formatMoney", { attrs: { money: t.getMoney(t.scope), itemData: t.scope, isfloat: !1, show: t.show, isWin: Number(t.scope.isWin) } })], 1) : e("div", { staticClass: "text test_margin", staticStyle: { color: "#707c93" } }, [t._v(" " + t._s(t.$t("myBet.fy9")) + " ")])])]), e("div", { staticClass: "green_button" }, [e("div", { staticClass: "green_button-go", on: { click: function (e) { return t.enterGameDetails(t.scope) } } }, [t._v(" " + t._s(t.$t("betConfigure.fy47")) + " ")])])]), e("div", { directives: [{ name: "show", rawName: "v-show", value: 5 === t.scope.gameType, expression: "scope.gameType === 5" }], staticClass: "verifyFairnessBox" }, [e("verifyFairness", { attrs: { scope: t.scope } })], 1), e("LoginDialogVue", { directives: [{ name: "show", rawName: "v-show", value: t.dialogVisible, expression: "dialogVisible" }], attrs: { type: t.loginType }, model: { value: t.dialogVisible, callback: function (e) { t.dialogVisible = e }, expression: "dialogVisible" } })], 1) : t._e()])], 1) }, a = [], o = (s(57658), s(90408)), n = s(6666), l = s(77928), r = s(12709), c = s(34095), d = function () { var t = this, e = t._self._c; return e("div", { staticClass: "verify_fairness" }, [e("header", { on: { click: function (e) { t.isFold = !t.isFold } } }, [t._m(0), e("div", { staticClass: "header-right" }, [e("img", { class: { fold: t.isFold }, attrs: { src: s(81188) } })])]), e("main", { directives: [{ name: "show", rawName: "v-show", value: t.isFold, expression: "isFold" }] }, [1 === t.type ? [t._m(1), e("section", { staticClass: "item" }, [e("span", [t._v(" 服务器种子（散列化） ")]), e("div", { staticClass: "input_box" }, [e("input", { attrs: { readonly: "", type: "text" }, domProps: { value: t.scope.serverHashSeed } }), e("img", { attrs: { src: s(56376) }, on: { click: function (e) { return t.handleClipboard(t.scope.serverHashSeed, e) } } })])]), e("section", { staticClass: "item" }, [e("span", [t._v(" 客服端种子 ")]), e("div", { staticClass: "input_box" }, [e("input", { attrs: { readonly: "", type: "text" }, domProps: { value: t.scope.clientSeed } }), e("img", { attrs: { src: s(56376) }, on: { click: function (e) { return t.handleClipboard(t.scope.clientSeed, e) } } })])]), e("section", { staticClass: "item" }, [e("span", [t._v(" 现时标志 ")]), e("div", { staticClass: "input_box" }, [e("input", { attrs: { type: "text", value: "" } }), e("img", { attrs: { src: s(56376) }, on: { click: function (e) { return t.handleClipboard("0", e) } } })])]), e("div", { staticClass: "tip" }, [e("p", [t._v("必须更换服务器种子才能验证赌注……")]), e("span", { staticStyle: { cursor: "pointer" }, on: { click: function (e) { return t.$router.push("/fairness") } } }, [t._v("什么是可证明的公平？")])])] : [t._m(2), t._m(3), t._m(4)]], 2)]) }, p = [function () { var t = this, e = t._self._c; return e("div", { staticClass: "header-left" }, [e("img", { attrs: { src: s(53663) } }), e("span", [t._v("可证明的公平")])]) }, function () { var t = this, e = t._self._c; return e("section", { staticClass: "item" }, [e("span", [t._v(" 服务器种子 ")]), e("div", { staticClass: "input_box" }, [e("input", { attrs: { type: "text", placeholder: "种子尚未揭示" } })])]) }, function () { var t = this, e = t._self._c; return e("section", { staticClass: "item" }, [e("span", [t._v(" 开奖块哈希 ")]), e("div", { staticClass: "input_box" }, [e("input", { attrs: { type: "text" } })])]) }, function () { var t = this, e = t._self._c; return e("section", { staticClass: "item" }, [e("span", [t._v(" 块高度 ")]), e("div", { staticClass: "input_box" }, [e("input", { attrs: { type: "text" } })])]) }, function () { var t = this, e = t._self._c; return e("div", { staticClass: "tip" }, [e("a", [t._v(" 查询区块信息 ")]), e("div", [t._v(" 游戏每期开奖采取距离开奖时间最近的以太坊主链块哈 希，可通过每期记录查看取块高度和哈希 ")])]) }], g = { name: "Verify-Fairness", props: { scope: { type: Object, default: () => { } } }, data() { return { isFold: !1, type: 1 } }, methods: { handleClipboard: c.Z } }, u = g, m = s(1001), f = (0, m.Z)(u, d, p, !1, null, "276753ce", null), h = f.exports, v = s(71602), y = s.n(v), b = { components: { LoginDialogVue: n.Z, formatMoney: l.Z, verifyFairness: h }, props: { addOrUpdateVisible: { type: Boolean, default: !1 }, gameType: { type: Number, default: 1 }, scope: {} }, data() { return { loginType: "0", dialogVisible: !1, showDialog: !1, setHeight: { height: "420px" }, details: "", show: !0, gameInfo: [] } }, updated() { }, mounted() { console.log(this.details) }, computed: { ...(0, o.rn)(["oosUrl"]) }, methods: { handleClipboard: c.Z, getGameInfo() { let t = { id: this.scope.gameId }; (0, r.G)(t).then((t => { 200 === t.statusCode && (this.gameInfo = t.data) })).catch((t => { })) }, getMoney(t, e = !1) { return console.log(t, "bet_info_contentbet_info_contentbet_info_content"), "EvolutionElectronicGame" !== t.gameCode && "KaGame" !== t.gameCode || 2 !== t.isWin || e ? 2 === t.isWin || e ? t.betMoney : t.betWinMoney - t.betMoney : t.betMoney - t.betWinMoney }, ...(0, o.nv)(["openBlockGame", "warnTip"]), ...(0, o.OI)({ setData: "SET_DATA" }), register() { this.loginType = "0", this.dialogVisible = !0 }, enterGameDetails(t) { if (1 !== t.type && 4 !== t.type || this.isLogin) if (4 === t.gameType) this.getGameInfo(), this.$nextTick((() => { setTimeout((() => { this.openBlockGame(this.gameInfo) }), 1100) })), this.showDialog = !1; else if (t.gameId && t.gameType && t.gameCode) { let e; 1 === t.gameType ? e = 5 : 5 === t.gameType ? e = 1 : 6 === t.gameType && (e = 6), this.$router.push({ name: "gameDetail", query: { id: t.gameId, type: e, code: t.gameCode, url: t.jumpUrl } }), this.showDialog = !1 } else { let t = { title: "错误", content: "进入当前游戏失败！" }; this.setData({ key: "tipState", value: !1 }), this.setData({ key: "TooltipType", value: 2 }), this.warnTip(t) } else this.register() }, formatNumber(t, e, s) { var i, a, o, n = t, l = parseInt(n).toString().length, r = e, c = r - l; e = c, n < 0 && (e = c + 1), null != t && (t = t.toString().replace(/\$|\,/g, "")), isNaN(t) && (t = "0"), i = t == (t = Math.abs(t)), t = Math.floor(t * Math.pow(10, e) + .50000000001), a = t % Math.pow(10, e), t = Math.floor(t / Math.pow(10, e)).toString(), a = a.toString(); while (a.length < e) a = "0" + a; if (s) for (var d = 0; d < Math.floor((t.length - (1 + d)) / 3); d++)t = t.substring(0, t.length - (4 * d + 3)) + "," + t.substring(t.length - (4 * d + 3)); return o = e > 0 ? (i ? "" : "-") + t + "." + a : (i ? "" : "-") + t, o.length > 11 ? o.substr(0, 12) + "..." : o }, getFloat(t, e) { if (e = e ? parseInt(e) : 0, e <= 0) return Math.round(t); t = Math.round(t * Math.pow(10, e)) / Math.pow(10, e), t = Number(t).toFixed(e); const s = t.replace(".", ""); return s.length > 8 && (t = t.substr(0, 8) + "..."), t }, handleClose() { this.$emit("changeShow", "false") }, timeFormat(t) { return y()(t).format("YYYY-MM-DD HH:mm:ss") } }, watch: { addOrUpdateVisible() { this.showDialog = this.addOrUpdateVisible }, gameType() { 1 === this.gameType || 4 === this.gameType ? this.setHeight.height = "575px" : this.setHeight.height = "420px" } } }, A = b, C = (0, m.Z)(A, i, a, !1, null, "2a956d4c", null), _ = C.exports }, 53663: function (t, e, s) { t.exports = s.p + "img/icon1.0cd8f851.svg" }, 81188: function (t, e, s) { t.exports = s.p + "img/icon2.a8985a59.svg" }, 56376: function (t) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAiVJREFUWEftmD9oFFEQh7/ZywWC3Ekqi2CrEE5TCGJjEUkqa8GAIIJwNlbJXZJCUAtx9xICNkbEFJFIVLS1iFhrI/5BkbQWgk1MRDCY7MjLJdnkbhd2395lU2S6ffvmzfd+O293ZoUoUxWoDYMeA/EBjZyb/IYAOeAX5B4iw4tmoNn0XhH+LgJHksew8XBOR4B4F4BnwEqLldhJeTi4kJcRIG4B8ms2e4vvs34O9ClwCHgRDhJ/tXQz1fsEnACdD0C0dhH8HpA2KKEd4PyA4nOk/G+bXr3PQKkOog/ysPy+PtB2+w7rfcj40kYk9b4AvZsg7jjInbYjBAEmkepICIj3GLi0dyA6j4wOhYFMA+U9BHmEjF4NA7kPXDsACZLV27eKvAV1gWXASfHIfJAuYAw4G6yjcXPELyFj5ny3xvRuHzgfLEBYAP825FZAUyiyUTp0gX8D5LwNSGuUiFwl9qNpMwcHII0KJ1PEHN3VlMfX1LgdQPdulNggchP+1KB3Fb6aAtfWfCjmYa0C3LI4NTKIVF7bRm/yU7cf5I0FCD+BKZAl0E57IDWVWAHkOnDUBsQ+dizP2DkSa7UUk8JATBWvmX59PwInwfQ12YJstrE6kB1IvbeeBGcBGXmVHUhDlglamwG9kiL7krrOItXLjU4ZKMIcUm1qXwR1j4N8S7ot+/lyBqm8a1bEjOjEKfBNS1EAbeUPma14ptL7Dc4TpLLjdR/g/Actljpwy7JjNgAAAABJRU5ErkJggg==" }, 19973: function (t) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAAAXNSR0IArs4c6QAABXRJREFUWEfNmVtsFGUUx/9ndhfRUtRAkYtPJj4gJsjOV+qtcrOmiGKosRVsAobuhYBPEmN8MOiLD2qMQaQ76wWD2puCCChSsK0lETrzrYmJvmiMV4gQDbAQets5Zpdus92dncvukvi97ff9zzm/OXO++S5LcNEWR/UlfpMWSk187EJeEYmI6vdRiu/QF9S+ix1kZp2Sk/dgm2wihT/N6Bj91QuSDf07Vow72ZUzroaNNgDxqyFpYOboxcb+PSuG078dgdWwcQbA3CwAM7Uk4mp3OUB2tsGIbCHmzlwNMa834rWZPnvgHayop+U/AG7KcbBdauL1awEsovpSNulUvm9W6NFEu3rILfBfUzIM2pbQ1F2VBg6GZIiItQJYUCyhBbcAxP8b4GBYbiXwWwVJIAzKmHhgSnk4ZSq/hkHYImOi3cnO7bgaNtYAyLzuvHZCaqI+v9PNpPsTwIKcSdeaiKsfuQWynWBtsp4U/qZAw+iXcbHCyjYDvCSir1dMtDKUKgJnaiXzRUlPSsK9AKblGP/ETL8R2D/VofJ7deC6rf1vL7rk5mFEWN/GoJ0W2g+kJjYV80HBNrmSFD7uJoithgH20bFEu9rg5Mtmgg0kNHW5nT2pEeMlMF50CuJ2XM5XfbkrU76dGjbuBzBo4a9PamKlUxxKL4Fs0gknod04U7py0h8es8vQap8spl0SSaxS2DxWME74SsZEoxuGTA0vDg0t8pPSqLBZZULJrNsKzJQJxQfCcwCqJ50xDoHQD8b1mT4C+cZSJgg/Dr1Xt79YUDVsPAvgNYsJ9omMiyfcwF4N59DUsPEHgFuzMmZqSsTVomBW7kREX89MBRsnBh1LaM41n+vTzdJc1konovpyNqnPIrO9Mi4eckpY/vg1BRYR/WFmOlxOzZYCfBrALVlDAj9jaLWFy2ieZzVsPA/glUrCOtdwibu1YEg+QsQHKw3rDAxAbZNnoPDkfhhAs9RET7HaExG9gZmOFr5KPmJotau91qy3kkgDbzbWkJ/fZKYaEI7c9u8vG3p6mlNWgYMR2UQ8cTrJERD4uKHVPlgurKsMZ4Ms39Q3PXtMsQqsRowoGLvzx/w0fvhU7O5HKgHrCdguoAjpq5noi3xNwDd28OTue9ZWCrYiwFafLgJDIfPgUKyuorBlAwcjspWY9+Zn0KekBoba62x3XaVm3XFpLuY4GJJPEfGHBWVAqf0nY3VNuf3nO+ZE/WTWg+EHYfKOwQ00AT4mugJC34zmc3tKAhYhfS0THbD4dO0ztNrHc/uTHfOi5BvdDS4pVF4I3uTZi4jojzHTZxaLwtcyJlbl91/qnP0dCHe5yaazht/3BKyGjY0A9ljADl6YdmPDzztvHykA7pizHT7z1cyBq6yWriXTfYaLLQoAeqQmmu1YLnTNalWY6onZD7p6v+C+sUKgYVaUb2c0n93rKsPBkFxHxPssMtstY6LFffDylY7AxTLLID2hqUvLR/DmwRa4aBkweseGA+u+37v4srdw5auLAqthI33OKrylZHTIuNjgNXSye26NV5usfjwwPHbzuvPn078tgYMh2UzEXRbfWdtTsRXQ2e6aGdOZexTA83Eox98YEXrHMX1jAbDV/eyE4Q9SE3d6zdLlztnvMGGzV7t8PTNB8adengIcjMhGYv6yQAz6fOboxRa77WUxoGRXzVECO94GuXkgReFdk8Bq2JgHIH1+y2+2d11OgZKdsxYSKQMAl1zDEzH+HiFz5SSw2KwvZd/U2+9KnRTOHZhdfcMVLIOPfQBZnlaKPTgxB8xxvlQ1MnOQnv51ODfDAQb1EnjZhHGien6y7lr/AeP0hgonfk6PGjYCBHqBiEerRpJvlFKzXgG86v8DuzEqyfT5lHcAAAAASUVORK5CYII=" } }]);
//# sourceMappingURL=262.42531bd9c2c5d789.js.map