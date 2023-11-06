(function () {
    var t = {
        1269: function (t, e, i) {
            "use strict";
            var s = i(9242), a = i(3396);
            const n = {class: "position-relative min-vh-100"};

            function l(t, e, i, s, l, c) {
                const r = (0, a.up)("router-view"), o = (0, a.up)("NavBar");
                return (0, a.wg)(), (0, a.iD)("div", n, [(0, a.Wm)(r, {class: "pb-5"}), (0, a.Wm)(o, {class: "position-fixed w-100 m-0"})])
            }

            var c = i(7139);
            const r = {class: "menu row"}, o = {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, d = {width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg"},
                u = {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, m = {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                };

            function _(t, e, i, s, n, l) {
                const _ = (0, a.up)("router-link");
                return (0, a.wg)(), (0, a.iD)("div", r, [(0, a.Wm)(_, {
                    onClick: e[0] || (e[0] = t => l.changeSelectPage("home")),
                    to: "/",
                    class: (0, c.C_)("col-3 d-flex flex-column align-items-center " + ("home" === n.selectPage ? "text-primary" : "text-secondary"))
                }, {
                    default: (0, a.w5)((() => [(0, a._)("span", null, [((0, a.wg)(), (0, a.iD)("svg", o, [(0, a._)("path", {
                        class: (0, c.C_)("menu__link " + ("home" === n.selectPage ? "menu__link--active" : "")),
                        d: "M7.29289 1.49999C7.68342 1.10946 8.31658 1.10946 8.70711 1.49999L11 3.79288V2.49999C11 2.22384 11.2239 1.99999 11.5 1.99999H12.5C12.7761 1.99999 13 2.22384 13 2.49999V5.79288L15.3536 8.14643C15.5488 8.34169 15.5488 8.65828 15.3536 8.85354C15.1583 9.0488 14.8417 9.0488 14.6464 8.85354L8 2.20709L3 7.20709V13.5C3 13.7761 3.22386 14 3.5 14L7.5 14C7.77614 14 8 14.2238 8 14.5C8 14.7761 7.77614 15 7.5 15L3.5 15C2.67157 15 2 14.3284 2 13.5V8.20709L1.35355 8.85354C1.15829 9.0488 0.841709 9.0488 0.646447 8.85354C0.451184 8.65828 0.451184 8.34169 0.646447 8.14643L7.29289 1.49999Z"
                    }, null, 2)]))]), (0, a.Uk)(" Главная ")])), _: 1
                }, 8, ["class"]), (0, a.Wm)(_, {
                    onClick: e[1] || (e[1] = t => l.changeSelectPage("book")),
                    to: "/book",
                    class: (0, c.C_)("col-3 d-flex flex-column align-items-center " + ("book" === n.selectPage ? "text-primary" : "text-secondary"))
                }, {
                    default: (0, a.w5)((() => [(0, a._)("span", null, [((0, a.wg)(), (0, a.iD)("svg", d, [(0, a._)("path", {
                        class: (0, c.C_)("menu__link " + ("book" === n.selectPage ? "menu__link--active" : "")),
                        d: "M1 2.82754C1.88498 2.45777 3.1539 2.05941 4.38768 1.93497C5.71799 1.80079 6.8464 1.99806 7.5 2.68668V12.4325C6.56511 11.9025 5.38065 11.8297 4.28732 11.94C3.10693 12.0591 1.91771 12.4011 1 12.751V2.82754ZM8.5 2.68668C9.1536 1.99806 10.282 1.80079 11.6123 1.93497C12.8461 2.05941 14.115 2.45777 15 2.82754V12.751C14.0823 12.4011 12.8931 12.0591 11.7127 11.94C10.6194 11.8297 9.43489 11.9025 8.5 12.4325V2.68668ZM8 1.78303C7.01509 0.936435 5.58683 0.808944 4.28732 0.940018C2.77322 1.09274 1.24459 1.61232 0.293099 2.04481C0.114601 2.12595 0 2.30392 0 2.49999V13.5C0 13.67 0.0863761 13.8284 0.229307 13.9204C0.372238 14.0124 0.55214 14.0255 0.706901 13.9552C1.58875 13.5543 3.01012 13.0739 4.38768 12.935C5.79565 12.793 6.97747 13.0222 7.60957 13.8123C7.70445 13.9309 7.84811 14 8 14C8.15189 14 8.29555 13.9309 8.39043 13.8123C9.02253 13.0222 10.2043 12.793 11.6123 12.935C12.9899 13.0739 14.4113 13.5543 15.2931 13.9552C15.4479 14.0255 15.6278 14.0124 15.7707 13.9204C15.9136 13.8284 16 13.67 16 13.5V2.49999C16 2.30392 15.8854 2.12595 15.7069 2.04481C14.7554 1.61232 13.2268 1.09274 11.7127 0.940018C10.4132 0.808944 8.98491 0.936435 8 1.78303Z",
                        fill: "#AFBAC0"
                    }, null, 2)]))]), (0, a.Uk)(" Теория ")])), _: 1
                }, 8, ["class"]), (0, a.Wm)(_, {
                    onClick: e[2] || (e[2] = t => l.changeSelectPage("activity")),
                    to: "/activity",
                    class: (0, c.C_)("col-3 d-flex flex-column align-items-center " + ("activity" === n.selectPage ? "text-primary" : "text-secondary"))
                }, {
                    default: (0, a.w5)((() => [(0, a._)("span", null, [((0, a.wg)(), (0, a.iD)("svg", u, [(0, a._)("path", {
                        class: (0, c.C_)("menu__link " + ("activity" === n.selectPage ? "menu__link--active" : "")),
                        d: "M11.2514 0.0677753C11.4524 0.184693 11.5463 0.424765 11.4779 0.647028L9.67699 6.49999H13C13.1995 6.49999 13.3799 6.61855 13.459 6.80167C13.5381 6.98478 13.5008 7.19741 13.3641 7.34267L5.36411 15.8427C5.20473 16.012 4.94964 16.0491 4.74863 15.9322C4.54761 15.8153 4.45373 15.5752 4.52212 15.3529L6.32303 9.49998H3.00001C2.80053 9.49998 2.62014 9.38142 2.54102 9.1983C2.4619 9.01519 2.4992 8.80256 2.63591 8.6573L10.6359 0.157303C10.7953 -0.0120379 11.0504 -0.0491425 11.2514 0.0677753ZM4.15722 8.49998H7.00001C7.15868 8.49998 7.30794 8.5753 7.40221 8.70293C7.49647 8.83057 7.52456 8.99537 7.4779 9.14703L6.11074 13.5903L11.8428 7.49999H9.00001C8.84134 7.49999 8.69208 7.42467 8.59782 7.29704C8.50355 7.1694 8.47546 7.0046 8.52212 6.85294L9.88928 2.40968L4.15722 8.49998Z",
                        fill: "#AFBAC0"
                    }, null, 2)]))]), (0, a.Uk)(" Активность ")])), _: 1
                }, 8, ["class"]), (0, a.Wm)(_, {
                    onClick: e[3] || (e[3] = t => l.changeSelectPage("stopwatch")),
                    to: "/stopwatch",
                    class: (0, c.C_)("col-3 d-flex flex-column align-items-center " + ("stopwatch" === n.selectPage ? "text-primary" : "text-secondary"))
                }, {
                    default: (0, a.w5)((() => [(0, a._)("span", null, [((0, a.wg)(), (0, a.iD)("svg", m, [(0, a._)("path", {
                        class: (0, c.C_)("menu__link " + ("stopwatch" === n.selectPage ? "menu__link--active" : "")),
                        d: "M8.49999 5.09997C8.49999 4.82383 8.27613 4.59998 7.99999 4.59998C7.72384 4.59998 7.49999 4.82383 7.49999 5.09998L7.5 8H4.5C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9H8C8.13261 9 8.25979 8.94732 8.35355 8.85355C8.44732 8.75978 8.5 8.63261 8.5 8.5L8.49999 5.09997Z",
                        fill: "#AFBAC0"
                    }, null, 2), (0, a._)("path", {
                        class: (0, c.C_)("menu__link " + ("stopwatch" === n.selectPage ? "menu__link--active" : "")),
                        d: "M6.5 0.5C6.5 0.223858 6.72386 0 7 0H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1V1.57094C10.3599 1.76553 11.5936 2.35083 12.5838 3.20947C12.5879 3.20514 12.592 3.20087 12.5962 3.19665L12.9498 2.84309L12.5962 2.48954C12.401 2.29428 12.401 1.9777 12.5962 1.78243C12.7915 1.58717 13.1081 1.58717 13.3033 1.78243L14.7175 3.19665C14.9128 3.39191 14.9128 3.70849 14.7175 3.90375C14.5223 4.09902 14.2057 4.09902 14.0104 3.90375L13.6569 3.5502L13.3033 3.90375C13.2991 3.90797 13.2948 3.91208 13.2905 3.91611C14.3555 5.14417 15 6.74677 15 8.5C15 12.366 11.866 15.5 8 15.5C4.13401 15.5 1 12.366 1 8.5C1 4.97347 3.60749 2.05639 7 1.57094V1C6.72386 1 6.5 0.776142 6.5 0.5ZM8 2.5C7.84443 2.5 7.69034 2.50591 7.53793 2.5175C4.44038 2.75314 2 5.34182 2 8.5C2 11.8137 4.68629 14.5 8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.34182 11.5596 2.75314 8.46207 2.5175C8.30966 2.50591 8.15557 2.5 8 2.5Z",
                        fill: "#AFBAC0"
                    }, null, 2)]))]), (0, a.Uk)(" Секундомер ")])), _: 1
                }, 8, ["class"])])
            }

            var v = {
                name: "NavBar", data() {
                    return {selectPage: "home"}
                }, created() {
                    this.selectPage = window.location.pathname.replace(/\//g, "")
                }, methods: {
                    changeSelectPage(t) {
                        this.selectPage = t
                    }
                }
            }, p = i(89);
            const y = (0, p.Z)(v, [["render", _]]);
            var b = y, h = {name: "App", components: {NavBar: b}};
            const g = (0, p.Z)(h, [["render", l]]);
            var f = g, w = i(2483), x = i.p + "img/play.f82890c4.svg", C = i.p + "media/3.82c47c53.mp4",
                k = i.p + "media/1.8fb2e922.mp4", D = i.p + "media/2.02b81fb4.mp4", M = i.p + "media/4.3a8513f3.mp4",
                S = i.p + "media/5.ef0a83fd.mp4";
            const A = {
                    key: 0,
                    class: "position-absolute d-block h-100 w-100",
                    style: {"z-index": "1000", "background-color": "#212529d9"}
                }, T = {class: "modal fade show text-primary d-block"}, L = {class: "modal-dialog"},
                I = {class: "modal-content"}, V = (0, a._)("div", {
                    class: "modal-title text-dark d-flex mx-auto mt-2",
                    style: {"font-size": "14px"}
                }, "Аккаунт", -1), U = {class: "d-flex flex-column align-items-center w-100 py-3 px-4"},
                z = {class: "d-flex d-grid gap-3 input-group-sm justify-content-between w-100 align-items-center mb-2"},
                P = (0, a._)("label", {for: "name", class: "form-label text-secondary"}, "Имя", -1),
                j = {class: "d-flex d-grid gap-3 input-group-sm justify-content-between w-100 align-items-center mb-2"},
                Z = (0, a._)("label", {for: "age", class: "form-label text-secondary"}, "Возраст", -1),
                $ = {class: "d-flex d-grid gap-3 input-group-sm justify-content-between w-100 align-items-center mb-2"},
                q = (0, a._)("label", {for: "weight", class: "form-label text-secondary"}, "Вес", -1),
                E = {class: "d-flex d-grid gap-3 input-group-sm justify-content-between w-100 align-items-center mb-2"},
                H = (0, a._)("label", {for: "height", class: "form-label text-secondary"}, "Рост", -1),
                W = {class: "home"}, R = {class: "pt-5 home__top d-flex flex-column align-items-center"},
                O = {class: "container home__greetings mb-4"}, Y = {class: "home__greetings-title text-white mb-2"},
                B = {class: "home__greetings-date text-white"},
                F = (0, a._)("div", {class: "bg-white home__quote mt-2 p-3"}, " « Многие люди терпят неудачу только потому, что сдаются в двух шагах от успеха » - Саймон Хартли ", -1),
                N = {class: "home__body ms-2 me-2 mt-2"},
                G = (0, a._)("div", {class: "home__body-title mb-2"}, "Тренировка дня", -1),
                K = (0, a._)("div", null, [(0, a._)("div", {class: "training__title"}, "Розалия Насретдинова. Тренировка по плаванию от чемпионки мира"), (0, a._)("div", {class: "training__desc"}, [(0, a._)("span", null, "5:33")])], -1),
                J = (0, a._)("div", {class: "my-auto w-auto"}, [(0, a._)("img", {class: "w-100", src: x})], -1),
                Q = {ref: "videoPlayer", class: "video-js"},
                X = (0, a._)("source", {src: C, type: "video/mp4"}, null, -1), tt = [X],
                et = (0, a._)("div", {class: "home__bottom ms-2"}, [(0, a._)("div", {class: "home__bottom-title mt-3 mb-2"}, "Популярные программы")], -1),
                it = {class: "d-flex overflow-scroll px-2 gap-2 pb-2"},
                st = (0, a._)("source", {src: k, type: "video/mp4"}, null, -1),
                at = (0, a._)("source", {src: D, type: "video/mp4"}, null, -1),
                nt = (0, a._)("source", {src: M, type: "video/mp4"}, null, -1),
                lt = (0, a._)("source", {src: S, type: "video/mp4"}, null, -1);

            function ct(t, e, i, n, l, r) {
                const o = (0, a.up)("b-button"), d = (0, a.up)("VideoPlayer");
                return (0, a.wg)(), (0, a.iD)(a.HY, null, [l.isShowModal ? ((0, a.wg)(), (0, a.iD)("div", A, [(0, a._)("div", T, [(0, a._)("div", L, [(0, a._)("div", I, [V, (0, a._)("div", U, [(0, a._)("div", z, [P, (0, a.wy)((0, a._)("input", {
                    onChange: e[0] || (e[0] = t => r.changeUser()),
                    id: "name",
                    class: "form-control",
                    style: {"font-size": "12px"},
                    "onUpdate:modelValue": e[1] || (e[1] = t => l.user.name = t),
                    type: "text"
                }, null, 544), [[s.nr, l.user.name]])]), (0, a._)("div", j, [Z, (0, a.wy)((0, a._)("input", {
                    onChange: e[2] || (e[2] = t => r.changeUser()),
                    id: "age",
                    class: "form-control",
                    style: {"font-size": "12px"},
                    "onUpdate:modelValue": e[3] || (e[3] = t => l.user.age = t),
                    type: "number"
                }, null, 544), [[s.nr, l.user.age]])]), (0, a._)("div", $, [q, (0, a.wy)((0, a._)("input", {
                    onChange: e[4] || (e[4] = t => r.changeUser()),
                    id: "weight",
                    class: "form-control",
                    style: {"font-size": "12px"},
                    "onUpdate:modelValue": e[5] || (e[5] = t => l.user.weight = t),
                    type: "number"
                }, null, 544), [[s.nr, l.user.weight]])]), (0, a._)("div", E, [H, (0, a.wy)((0, a._)("input", {
                    onChange: e[6] || (e[6] = t => r.changeUser()),
                    id: "height",
                    class: "form-control",
                    style: {"font-size": "12px"},
                    "onUpdate:modelValue": e[7] || (e[7] = t => l.user.height = t),
                    type: "number"
                }, null, 544), [[s.nr, l.user.height]])]), (0, a.Wm)(o, {
                    class: "ms-auto mt-2",
                    style: {"font-size": "13px"},
                    variant: "primary",
                    onClick: e[8] || (e[8] = t => r.handlerModal())
                }, {
                    default: (0, a.w5)((() => [(0, a.Uk)("Начать тренировки ")])),
                    _: 1
                })])])])])])) : (0, a.kq)("", !0), (0, a._)("div", W, [(0, a._)("div", R, [(0, a._)("div", O, [(0, a._)("div", Y, "Здравствуйте, " + (0, c.zw)(l.user.name), 1), (0, a._)("div", B, (0, c.zw)((new Date).toLocaleDateString("ru-RU", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }).replace(/^\p{L}/u, (t => t.toUpperCase()))), 1)]), F]), (0, a._)("div", N, [G, (0, a._)("div", {
                    class: "training d-flex",
                    onClick: e[9] || (e[9] = t => r.showVideo())
                }, [K, J, (0, a._)("div", {class: (0, c.C_)(l.showActive ? "d-block" : "d-none")}, [(0, a._)("video", Q, tt, 512)], 2)])]), et, (0, a._)("div", it, [(0, a._)("div", null, [(0, a.Wm)(d, {
                    options: {
                        title: "Как научиться плавать С НУЛЯ?",
                        autoplay: !1,
                        controls: !0,
                        time: "5:13"
                    }
                }, {
                    default: (0, a.w5)((() => [st])),
                    _: 1
                })]), (0, a._)("div", null, [(0, a.Wm)(d, {
                    options: {
                        title: "10 приёмов в плавании на спине",
                        autoplay: !1,
                        controls: !0,
                        time: "5:46"
                    }
                }, {
                    default: (0, a.w5)((() => [at])),
                    _: 1
                })]), (0, a._)("div", null, [(0, a.Wm)(d, {
                    options: {
                        title: "Как ПРАВИЛЬНО плавать, чтобы не вредить здоровью спины и шеи",
                        autoplay: !1,
                        controls: !0,
                        time: "6:35"
                    }
                }, {
                    default: (0, a.w5)((() => [nt])),
                    _: 1
                })]), (0, a._)("div", null, [(0, a.Wm)(d, {
                    options: {
                        title: "Как плавание влияет на наш организм",
                        autoplay: !1,
                        controls: !0,
                        time: "3:48"
                    }
                }, {default: (0, a.w5)((() => [lt])), _: 1})])])])], 64)
            }

            const rt = {class: "w-100"}, ot = {ref: "videoPlayer", class: "video-js"},
                dt = {class: "d-flex flex-column fw-bold text-black mt-1 ms-2"},
                ut = {class: "fw-normal text-secondary"};

            function mt(t, e, i, s, n, l) {
                return (0, a.wg)(), (0, a.iD)("div", rt, [(0, a._)("video", ot, [(0, a.WI)(t.$slots, "default")], 512), (0, a._)("div", dt, [(0, a.Uk)((0, c.zw)(i.options.title) + " ", 1), (0, a._)("span", ut, (0, c.zw)(i.options.time), 1)])])
            }

            var _t = i(304), vt = {
                name: "VideoPlayer", data() {
                    return {player: null}
                }, props: {
                    options: {
                        type: Object, default() {
                            return {}
                        }
                    }
                }, mounted() {
                    this.player = (0, _t.Z)(this.$refs.videoPlayer, this.options, (() => {
                    }))
                }
            };
            const pt = (0, p.Z)(vt, [["render", mt]]);
            var yt = pt, bt = {
                name: "HomePage", components: {VideoPlayer: yt}, data() {
                    return {user: null, isShowModal: !0, player: null, showActive: !1}
                }, created() {
                    this.user = this.$store.state.user, this.isShowModal = "" === this.user.name.trim()
                }, mounted() {
                    this.player = (0, _t.Z)(this.$refs.videoPlayer, {
                        autoplay: !1,
                        controls: !0,
                        disablePictureInPicture: !0
                    }, (() => {
                        this.player.on("fullscreenchange", this.hiddenVideo)
                    }))
                }, methods: {
                    handlerModal() {
                        "" !== this.user.name.trim() && (this.isShowModal = !1)
                    }, changeUser() {
                        this.$store.dispatch("changeUser", this.user)
                    }, showVideo() {
                        this.showActive = !0, this.player.play(), this.player.requestFullscreen()
                    }, hiddenVideo() {
                        this.player.isFullscreen() || (this.player.pause(), this.showActive = !1)
                    }
                }
            };
            const ht = (0, p.Z)(bt, [["render", ct]]);
            var gt = ht;
            const ft = {class: "book wrapper container"}, wt = {class: "book__menu"},
                xt = (0, a._)("span", null, null, -1), Ct = [xt],
                kt = (0, a._)("div", {class: "text-secondary mb-3"}, " Плавание в широком смысле слова – это и олимпийский водный вид спорта, и отличный вариант укрепления здоровья, и один из типов базового навыка и физической активности. Уникальность плавания заключается в слаженной работе всех групп мышц независимо от выбранного стиля. Поэтому оно и завоевало особую популярность в качестве динамического спортивного вида и любимого занятия для поддержания здорового образа жизни. ", -1),
                Dt = {key: 0, class: "text-primary fw-bold"},
                Mt = (0, a.uE)('<div class="text-secondary fw-normal p-0 mt-3 mb-4"> На уроке физической культуры в бассейне для студентов колледжа и университета безопасность играет ключевую роль. Ведь вода может быть опасной средой, особенно для тех, кто не умеет плавать или имеет ограничения по здоровью. Поэтому необходимо соблюдать определенные меры предосторожности, чтобы каждый участник занятия мог наслаждаться тренировкой и не подвергать себя риску. <br><br> 1. Перед началом занятия важно проверить состояние бассейна. Убедитесь, что вода чистая и прозрачная, а система фильтрации работает должным образом. Если вы замечаете какие-либо проблемы, немедленно сообщите об этом инструктору или администрации бассейна. <br><br> 2. Перед входом в бассейн каждый студент должен быть ознакомлен с правилами безопасности. Обязательно убедитесь, что каждый понимает их и готов соблюдать. Правила могут включать запрет на бег по краю бассейна, прыжки с вышки без разрешения инструктора, использование спасательного оборудования только по назначению и т.д. <br><br> 3. Перед началом урока каждый студент должен пройти проверку наличия навыков плавания. Если кто-то не умеет плавать или имеет ограничения по здоровью, ему следует немедленно сообщить об этом инструктору. В таких случаях инструктор может предложить альтернативные упражнения или назначить дополнительного спасателя для обеспечения безопасности. <br><br> 4. Важно носить правильную одежду и обувь для занятий в бассейне. Избегайте слишком свободных или тяжелых нарядов, которые могут затруднять движение в воде. Обувь должна быть удобной и обеспечивать хорошую фиксацию стопы, чтобы предотвратить возможные травмы. <br><br> 5. Всегда следуйте инструкциям инструктора и не отклоняйтесь от предписанных тренировок. Они разработаны с учетом безопасности и максимальной эффективности тренировки. Не пытайтесь выполнять сложные упражнения без необходимых навыков или под риском получения травмы. <br><br> 6. Не забывайте о правилах личной гигиены. Перед входом в бассейн принимайте душ, чтобы удалить с кожи грязь и масла, которые могут загрязнить воду. Также регулярно мойте руки с мылом и водой, чтобы предотвратить распространение бактерий. <br><br> 7. При возникновении любых проблем или чувстве дискомфорта обязательно сообщайте об этом инструктору. Не стесняйтесь задавать вопросы или просить помощи, если что-то непонятно или вызывает беспокойство. <br><br> 8. Не забывайте о правильном питании и гидратации перед и после занятий в бассейне. Вода и питательные вещества играют важную роль в поддержании энергии и общего благополучия организма. Поэтому убедитесь, что вы употребляете достаточное количество воды и сбалансированной пищи, чтобы поддерживать свое физическое состояние. <br><br> 9. Не забывайте об общей безопасности вокруг бассейна. Убедитесь, что пол на краю бассейна не скользкий, чтобы избежать падений и травм. Также следите за другими участниками занятий, особенно если они находятся в воде, чтобы предотвратить возможные столкновения или несчастные случаи. <br><br> 10. Не забывайте о правильной подготовке перед занятиями в бассейне. Разминка и растяжка помогут избежать мышечных травм и улучшить гибкость. <br><br> 11. Не забывайте о правильной технике плавания. Неправильное выполнение движений может привести к травмам или утомлению. Поэтому рекомендуется обратиться к инструктору или тренеру, чтобы получить индивидуальные рекомендации и коррекцию техники. <br><br> Соблюдение всех указанных правил и мер предосторожности поможет избежать возможных травм и обеспечит безопасную и эффективную тренировку для всех участников. </div>', 1),
                St = {key: 1, class: "text-primary fw-bold"},
                At = (0, a.uE)('<div class="text-secondary fw-normal p-0 mt-3 mb-4"> В качестве спортивной дисциплины спортивное плавание представляет собой разнообразные виды соревнований, которые могут проводиться как в бассейне (25 м/50 м), так и на открытой воде. Главным условием является преодоление определенного расстояния (5/10/25 км на открытой воде и 50-1500 м в бассейне) обозначенным способом. Задача – приплыть к финишу первым за короткий промежуток времени. Основными установленными стилями спортивного плавания являются следующие: <br><br> • вольный стиль или кроль на груди; <br> • баттерфляй или дельфин; <br> • брасс; <br> • кроль на спине. <br><br> Как спортивный вид плавание первый раз было представлено в 1896 году на Олимпиаде в Афинах. <br><br> Рассмотрим подробнее, какие существующие виды спортивного плавания наиболее популярны, какой стиль плавания быстрее и другие особенности стилей спортивного плавания. <br><br><span class="text-primary">Брасс</span> <br><br> • Техника: выполнение симметричных толчковых движений ногами и полукруговых руками в одной плоскости. Вдох осуществляется ртом путем подъема головы и плеч над водой. Выдох происходит в воде. <br> • Особенности: один из самых древних, медленных и энергоэффективных способов плавания.<br> • Плюсы: в данном процессе задействованы ок. 70 % мышц, меньше тратится энергии и сил, чем при плавании другими стилями.<br> • Минусы: невысокая скорость, тяжело освоить технику с первого раза.<br><br><span class="text-primary">Баттерфляй</span> <br><br> • Техника: одновременное выполнение симметричных волнообразных движений тела, при котором руки осуществляют сильный гребок с подъемом тела над водой, а ноги – удар (работают как «хвост»). Вдох происходит путем подъема плечевого пояса и головы над водой, выдох – в воду.<br> • Особенности: второй по скорости и сложнейший стиль плавания, требующий от пловца выносливости и хорошей физической подготовки.<br> • Плюсы: эффектный и красивый стиль, позволяет развивать хорошую скорость в процессе плавания.<br> • Минусы: большие затраты сил и энергии, сложная техника, не рекомендуется начинающим пловцам.<br><br><span class="text-primary">Кроль на груди</span> <br><br> • Техника: одновременное выполнение движений прямыми ногами (махи) и руками, поочередно делающими взмах и гребок под водой до бедра. Вдох осуществляется путем поворота в сторону головы, а выдох (носом и ртом) – в воду.<br> • Особенности: данный стиль самый быстрый и высококоординированный.<br> • Плюсы: возможность развить максимальную скорость плавания, легок для освоения. <br> • Минусы: требует точной координации движения рук и ног. <br><br><span class="text-primary">Кроль на спине</span> <br><br> • Техника: не имеет принципиального отличия от кроля на груди, помимо того, что выполняется на идеально выпрямленной спине. <br> • Особенности: данный способ предпочтителен для укрепления мышц спины. <br> • Плюсы: несложный в усвоении техники, помогает снять напряжение в мышцах. <br> • Минусы: перед освоением кроля на спине желательно изучить технику плавания кролем на груди. <br></div>', 1),
                Tt = {key: 2, class: "text-primary fw-bold"},
                Lt = (0, a.uE)('<div class="text-secondary fw-normal p-0 mt-3 mb-4"> Плавание представляет собой процесс преодоления водного расстояния путем скоординированных специальным образом комплексов движения. Несмотря на популярность спортивных стилей плавания несомненным успехом пользуются и другие разновидности, которые больше выполняют роль упражнений, нежели полноценных стилей плавания: <br> <br> • по-собачьи; <br> • на боку (овер-арм); <br> • лягушка; <br> • комбинированный способ и пр. <br> <br><span class="text-primary">Подводное плавание и его подвиды </span> <br> <br> Одним из разновидностей прикладного вида плавания является подводное. Данный термин включает в себя как отдельный вид подводного спорта, так и способы передвижения под водой: <br> <br> • с аквалангом; <br> • фридайвинг (апноэ); <br> • спортивный дайвинг; <br> • в ластах; <br> • ориентирование; <br> • спортивная стрельба; <br> • борьба (акватлон); <br> • игровые виды (хоккей, регби); <br> • охота, туризм и пр. </div>', 1),
                It = {key: 3, class: "text-primary fw-bold"},
                Vt = (0, a.uE)('<div class="text-secondary fw-normal p-0 mt-3 mb-4"><span class="text-primary">Сланцы</span> <br><br> Обувь в бассейне не играет ключевую роль. Однако не следует недооценивать качество сланцев. <br> На сегодняшний день в магазинах можно найти любую модель - изящные модели для женщин, практичные для мужчин, удобные детские и даже модели, предназначенные для хождения по корралам, камням и песку, чего в бассейне Вы, конечно, не встретите, но купив такую обувь на летнем отдыхе, можно смело продолжать использовать ее и в городских условиях. <br> Главное при выборе обуви - это рельефная подошва для лучшего &quot;сцепления&quot; со скользкой поверхностью, особенно это касается детских моделей. Так же при выборе сланцев для ребенка желательно, чтобы они имели регулируемый ремешок для хорошей фиксации ноги. <br> Если Вы намерены посещать бассейн постоянно, то лучше выбирать сланцы проверенного качества, иначе, сланцы не предназначенные для постоянного контакта с водой прослужат недолго.<br><br><span class="text-primary">Очки для плавания</span> <br><br> При выборе очков для плавания, главное, чтобы они плотно прилегали, но не сдавливали. Сегодня многие модели очков выпускаются с затылочной клипсой для упрощения регулировки. Существуют так же модели с саморегулирующейся переносицей.<br> Для любителей подводного плавания лучший вариант - приобрести универсальную модель, с широким обзором, благодаря чему отлично подходящую как для тренировок в бассейне, так и для отдыха на море, где она может быть использована как маска для плавания.<br> Для детей лучше выбирать очки с гипоаллергенной оправой из силикона. Желательно, чтобы линзы были из поликарбоната с защитой от разбития на мелкие осколки. <br><br><span class="text-primary">Шапочки для плавания</span> <br><br> При выборе шапочки нужно выбирать ту, которая не будет морщинить и собираться на макушке. <br> Таковыми являются силиконовые шапочки сферической формы. <br> Для детей лучше выбирать модели из полиамида и эластомера. Этот материал идеален для детских волос и не давит на голову. Хорошо держит длинные волосы.<br><br><span class="text-primary">Купальники</span> <br><br> Выбрать купальник для женщины не легче, чем любую другу вещь, будь то платье, юбка или плащ. Конечно, если поход в бассейн - это средство поддержании фигуры, здоровья или просто расслабление, то купальник Вы скорее всего купите в том случае, если он понравится внешне.<br> Но, возможно, Вам будет интересно узнать следующее: <br> Купальники бывают сплошными и раздельными, пляжными и спортивными. При чем спортивные купальники могут быть только сплошными. Если Ваш инструктор разрешит Вам попрыгать с вышки или Вам захочется исполнить танцевальное па под водой, лучше делайте это в сплошном купальнике. По крайней мере Вы будете уверены, что ни одна его часть не уплывет от вас при ударе об воду.<br> Так же спортивный купальник обеспечивает лучшее облегание и скольжение под водой. При выборе купальника обратите внимание на содержание лайкры, если оно более 25%, то материал будет великолепно «прилипать» к телу, не вызывая чувства стеснения.<br><br><span class="text-primary">Аксессуары для плавания </span><br><br> Сегодня существует много различных приспособлений для плавания, которые помогут быстрее научиться плавать и свои посещения в бассейн делать более результативными.<br> Такая вещь, как калабашка обеспечивает необходимый уровень плавучести, что позволяет работать над гребком.<br> Доска для плавания предназначена для тренировки ног.<br> При выборе такого рода инвентаря, обратите внимание, чтобы края были закруглены. Это поможет предотвратить натирания кожи при частом использовании.<br> Чтобы препятствовать попаданию воды в ушной канал используйте беруши, а чтобы избежать попадания воды в нос - зажим.<br></div>', 1),
                Ut = {key: 4, class: "text-primary fw-bold"},
                zt = (0, a._)("div", {class: "text-secondary fw-normal p-0 mt-3 mb-4"}, null, -1);

            function Pt(t, e, i, s, n, l) {
                return (0, a.wg)(), (0, a.iD)("div", ft, [(0, a._)("div", wt, [(0, a._)("div", {
                    class: (0, c.C_)("book__burger " + (n.showMenu ? "book__burger--active" : "")),
                    onClick: e[0] || (e[0] = (...t) => l.changeShowMenu && l.changeShowMenu(...t))
                }, Ct, 2)]), (0, a._)("ul", {class: (0, c.C_)(["book__content " + (n.showMenu ? "book__content--active" : ""), "ps-0"])}, [(0, a._)("li", {
                    class: (0, c.C_)("tech" === n.currentMenuItem ? "text-primary" : "text-secondary"),
                    onClick: e[1] || (e[1] = t => l.changecurrentMenuItem("tech"))
                }, "Техника безопасности", 2), (0, a._)("li", {
                    class: (0, c.C_)("types" === n.currentMenuItem ? "text-primary" : "text-secondary"),
                    onClick: e[2] || (e[2] = t => l.changecurrentMenuItem("types"))
                }, "Классификация видов спортивного плавания", 2), (0, a._)("li", {
                    class: (0, c.C_)("other" === n.currentMenuItem ? "text-primary" : "text-secondary"),
                    onClick: e[3] || (e[3] = t => l.changecurrentMenuItem("other"))
                }, "Другие виды плавания", 2), (0, a._)("li", {
                    class: (0, c.C_)("unit" === n.currentMenuItem ? "text-primary" : "text-secondary"),
                    onClick: e[4] || (e[4] = t => l.changecurrentMenuItem("unit"))
                }, "Экипировка для плавания", 2), (0, a._)("li", {
                    class: (0, c.C_)("test" === n.currentMenuItem ? "text-primary" : "text-secondary"),
                    onClick: e[5] || (e[5] = t => l.changecurrentMenuItem("test"))
                }, "Тест", 2)], 2), kt, "tech" === n.currentMenuItem ? ((0, a.wg)(), (0, a.iD)("div", Dt, [(0, a.Uk)(" Техника безопасности "), Mt])) : (0, a.kq)("", !0), "types" === n.currentMenuItem ? ((0, a.wg)(), (0, a.iD)("div", St, [(0, a.Uk)(" Классификация видов спортивного плавания "), At])) : (0, a.kq)("", !0), "other" === n.currentMenuItem ? ((0, a.wg)(), (0, a.iD)("div", Tt, [(0, a.Uk)(" Другие виды плавания "), Lt])) : (0, a.kq)("", !0), "unit" === n.currentMenuItem ? ((0, a.wg)(), (0, a.iD)("div", It, [(0, a.Uk)(" Экипировка для плавания "), Vt])) : (0, a.kq)("", !0), "test" === n.currentMenuItem ? ((0, a.wg)(), (0, a.iD)("div", Ut, [(0, a.Uk)(" Тест "), zt])) : (0, a.kq)("", !0)])
            }

            var jt = {
                name: "BookPage", data() {
                    return {showMenu: !1, currentMenuItem: null}
                }, methods: {
                    changeShowMenu() {
                        this.showMenu = !this.showMenu
                    }, changecurrentMenuItem(t) {
                        this.currentMenuItem = t
                    }
                }
            };
            const Zt = (0, p.Z)(jt, [["render", Pt]]);
            var $t = Zt, qt = i.p + "img/plus-lg.b70f5fa8.svg", Et = i.p + "img/chevron-right.ee1073ef.svg";
            const Ht = {class: "wrapper min-vh-100 d-flex flex-column container"},
                Wt = {class: "d-flex align-items-center mb-3"},
                Rt = (0, a._)("div", {class: "mx-auto ps-3"}, "Тренировки", -1),
                Ot = (0, a._)("img", {src: qt, alt: ""}, null, -1), Yt = [Ot],
                Bt = {key: 0, class: "align-items-center justify-content-center flex-grow-1 d-flex flex-column"},
                Ft = (0, a._)("div", {class: "text-secondary"}, " У вас ещё нет ни одной тренировки ", -1), Nt = [Ft],
                Gt = ["onClick"], Kt = {class: "d-flex flex-column text-primary"}, Jt = {class: "text-secondary"},
                Qt = (0, a._)("img", {src: Et, alt: ""}, null, -1);

            function Xt(t, e, i, s, n, l) {
                return (0, a.wg)(), (0, a.iD)("div", Ht, [(0, a._)("div", Wt, [Rt, (0, a._)("button", {
                    onClick: e[0] || (e[0] = t => l.next()),
                    class: "btn p-0"
                }, Yt)]), 0 === n.activityList.length ? ((0, a.wg)(), (0, a.iD)("div", Bt, Nt)) : ((0, a.wg)(!0), (0, a.iD)(a.HY, {key: 1}, (0, a.Ko)(n.activityList, (t => ((0, a.wg)(), (0, a.iD)("div", {
                    key: t.id,
                    class: "d-flex justify-content-between align-items-center mb-2",
                    onClick: e => l.next("activityTo", t.id)
                }, [(0, a._)("div", Kt, [(0, a.Uk)((0, c.zw)("" === t.name ? "Тренировка" : t.name) + " ", 1), (0, a._)("span", Jt, (0, c.zw)(t.date), 1)]), Qt], 8, Gt)))), 128))])
            }

            i(560);
            var te = {
                name: "ActivityPage", data() {
                    return {activityList: null}
                }, created() {
                    this.activityList = this.$store.state.activityList
                }, methods: {
                    next(t = "addActivity", e) {
                        "addActivity" === t && this.$store.dispatch("addActivity"), this.$router.push({
                            name: t,
                            query: {id: e}
                        })
                    }
                }
            };
            const ee = (0, p.Z)(te, [["render", Xt]]);
            var ie = ee;
            const se = {class: "wrapper container"}, ae = {class: "d-flex flex-column align-items-center"},
                ne = (0, a._)("p", {class: "mb-4"}, "Секундомер", -1),
                le = (0, a._)("div", {class: "mt-3 w-100 d-flex justify-content-end"}, [(0, a._)("a", {
                    download: "",
                    href: "src/assets/docx/swim-training.docx",
                    class: "stopwatch__btn btn btn-primary"
                }, " Скачать тренировки ")], -1);

            function ce(t, e, i, s, n, l) {
                const c = (0, a.up)("TimerComponent");
                return (0, a.wg)(), (0, a.iD)("div", se, [(0, a._)("div", ae, [ne, (0, a.Wm)(c), le])])
            }

            var re = i.p + "img/timerGroup.5faee5f8.png", oe = i.p + "img/pause-fill.dfedf2b1.svg",
                de = i.p + "img/play-timer.a823f274.svg", ue = i.p + "img/arrow-clockwise.be76c410.svg";
            const me = {class: "timer"}, _e = {class: "timer__cover mb-4"},
                ve = (0, a._)("img", {class: "w-100", src: re, alt: ""}, null, -1),
                pe = {class: "timer__content text-primary"}, ye = {class: "timer__tools"},
                be = (0, a._)("img", {src: oe, alt: ""}, null, -1), he = (0, a._)("img", {src: de, alt: ""}, null, -1),
                ge = (0, a._)("img", {src: ue, alt: ""}, null, -1);

            function fe(t, e, i, s, n, l) {
                const r = (0, a.up)("b-button");
                return (0, a.wg)(), (0, a.iD)("div", me, [(0, a._)("div", _e, [ve, (0, a._)("div", pe, [(0, a._)("span", null, (0, c.zw)(l.timerHours), 1), (0, a._)("span", null, (0, c.zw)(l.timerMinutes), 1), (0, a._)("span", null, (0, c.zw)(l.timerSecond), 1)])]), (0, a._)("div", ye, [n.isStart ? ((0, a.wg)(), (0, a.j4)(r, {
                    key: 0,
                    variant: "primary",
                    onClick: e[0] || (e[0] = t => l.pauseTimer())
                }, {default: (0, a.w5)((() => [be])), _: 1})) : ((0, a.wg)(), (0, a.j4)(r, {
                    key: 1,
                    variant: "primary",
                    onClick: e[1] || (e[1] = t => l.startTimer())
                }, {default: (0, a.w5)((() => [he])), _: 1})), (0, a.Wm)(r, {
                    variant: "primary",
                    onClick: e[2] || (e[2] = t => l.restartTimer())
                }, {default: (0, a.w5)((() => [ge])), _: 1})])])
            }

            var we = i(1978), xe = {
                name: "TimerComponent", data() {
                    return {timer: null, isStart: null}
                }, computed: {
                    timerHours() {
                        return this.timer ? this.timer?.hours < 10 ? "0" + this.timer?.hours : this.timer?.hours : "00"
                    }, timerMinutes() {
                        if (!this.timer) return "00";
                        const t = this.timer?.minutes - 1;
                        return t < 10 ? "0" + t : t
                    }, timerSecond() {
                        return this.timer ? this.timer?.seconds < 10 ? "0" + this.timer?.seconds : this.timer?.seconds : "00"
                    }
                }, mounted() {
                }, methods: {
                    startTimer() {
                        this.isStart ? (this.isStart = !0, this.timer.start()) : (this.restartTimer(), this.isStart = !0, this.timer.start())
                    }, pauseTimer() {
                        this.isStart = !1, this.timer.pause()
                    }, restartTimer() {
                        this.isStart = !1, this.timer = (0, we.fZ)(), this.pauseTimer()
                    }
                }
            };
            const Ce = (0, p.Z)(xe, [["render", fe]]);
            var ke = Ce, De = {
                name: "StopwatchPage", components: {TimerComponent: ke}, methods: {
                    downloadFile() {
                        const t = "/docx/swim-training.docx", e = document.createElement("a");
                        e.href = t, e.download = "file.docx", document.body.appendChild(e), e.click(), document.body.removeChild(e)
                    }
                }
            };
            const Me = (0, p.Z)(De, [["render", ce]]);
            var Se = Me, Ae = i.p + "img/x-lg.599bca3f.svg", Te = i.p + "img/check-lg.f3e88302.svg",
                Le = i.p + "img/dash-lg.e558f441.svg";
            const Ie = {class: "w-100 activity flex-grow-1 justify-content-between py-5 d-flex flex-column align-items-center"},
                Ve = (0, a._)("div", {
                    class: "mb-3 text-secondary",
                    style: {"font-size": "12px"}
                }, " Вы действительно хотите отменить действие? ", -1),
                Ue = {class: "d-flex justify-content-end d-grid gap-2"},
                ze = (0, a._)("img", {src: Ae, alt: ""}, null, -1), Pe = [ze],
                je = (0, a._)("img", {src: Te, alt: ""}, null, -1), Ze = [je],
                $e = {class: "d-flex text-primary flex-column align-items-center mb-3 activity__value fw-bold"},
                qe = (0, a._)("span", {class: "h6 fw-normal"}, "Дистанция, м", -1),
                Ee = {class: "d-flex flex-column w-100 align-items-center"},
                He = {class: "row gap-2 mb-4 col-12 justify-content-center"},
                We = {class: "d-flex gap-2 align-items-center"}, Re = (0, a._)("img", {src: Le, alt: ""}, null, -1),
                Oe = [Re],
                Ye = (0, a._)("div", {class: "activity__tools activity__tools--more text-primary"}, " 25 ", -1),
                Be = (0, a._)("img", {src: qt, alt: ""}, null, -1), Fe = [Be],
                Ne = {class: "w-100 d-flex justify-content-between"};

            function Ge(t, e, i, s, n, l) {
                const r = (0, a.up)("b-toast");
                return (0, a.wg)(), (0, a.iD)("div", Ie, [(0, a.Wm)(r, {
                    class: "position-absolute bg-white w-75",
                    modelValue: n.showToast,
                    "onUpdate:modelValue": e[2] || (e[2] = t => n.showToast = t)
                }, {
                    default: (0, a.w5)((() => [Ve, (0, a._)("div", Ue, [(0, a._)("button", {
                        class: "btn p-0",
                        onClick: e[0] || (e[0] = () => {
                            n.showToast = !1
                        })
                    }, Pe), (0, a._)("button", {
                        class: "btn p-0",
                        onClick: e[1] || (e[1] = t => this.$router.push({name: "activity"}))
                    }, Ze)])])), _: 1
                }, 8, ["modelValue"]), (0, a._)("div", $e, [(0, a.Uk)((0, c.zw)(n.activity.distance) + " ", 1), qe]), (0, a._)("div", Ee, [(0, a._)("div", He, [(0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[3] || (e[3] = t => l.addDistance(12.5))
                }, "12,5"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[4] || (e[4] = t => l.addDistance(25))
                }, "25"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[5] || (e[5] = t => l.addDistance(50))
                }, "50"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[6] || (e[6] = t => l.addDistance(100))
                }, "100"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[7] || (e[7] = t => l.addDistance(200))
                }, "200"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[8] || (e[8] = t => l.addDistance(400))
                }, "400")]), (0, a._)("div", We, [(0, a._)("button", {
                    class: "activity__tools",
                    onClick: e[9] || (e[9] = t => l.addDistance(-25))
                }, Oe), Ye, (0, a._)("button", {
                    class: "activity__tools",
                    onClick: e[10] || (e[10] = t => l.addDistance(25))
                }, Fe)])]), (0, a._)("div", Ne, [(0, a._)("button", {
                    class: "activity__btn px-5",
                    onClick: e[11] || (e[11] = t => l.next("activity"))
                }, "Назад"), (0, a._)("button", {
                    class: "activity__btn activity__btn--primary px-5",
                    onClick: e[12] || (e[12] = t => l.next())
                }, "Далее")])])
            }

            var Ke = {
                name: "activityDistance", data() {
                    return {activity: null, showToast: !1}
                }, created() {
                    this.activity = this.$store.state.activity
                }, methods: {
                    addDistance(t) {
                        this.activity.distance + t >= 0 ? this.activity.distance += t : this.activity.distance = 0, this.$store.dispatch("changeActivity", this.activity)
                    }, next(t = "activityStyle") {
                        "activity" === t && 0 !== this.activity.distance ? this.showMessage() : this.showToast || 0 === this.activity.distance || this.$router.push({name: t})
                    }, showMessage() {
                        this.showToast = !0
                    }
                }
            };
            const Je = (0, p.Z)(Ke, [["render", Ge]]);
            var Qe = Je;
            const Xe = {class: "wrapper min-vh-100 container d-flex flex-column align-items-center"};

            function ti(t, e, i, s, n, l) {
                const c = (0, a.up)("router-view");
                return (0, a.wg)(), (0, a.iD)("div", Xe, [(0, a.Uk)(" Создать тренировку "), (0, a.Wm)(c)])
            }

            var ei = {name: "ActivityAdd"};
            const ii = (0, p.Z)(ei, [["render", ti]]);
            var si = ii;
            const ai = {class: "w-100 style flex-grow-1 justify-content-between py-5 d-flex flex-column align-items-center"},
                ni = (0, a._)("div", {class: "text-primary fw-bold fs-6"}, "Стиль", -1),
                li = {class: "container w-100 d-flex flex-column gap-2"},
                ci = {class: "d-flex justify-content-between"}, ri = (0, a._)("div", null, "Брасс", -1),
                oi = {class: "d-flex gap-2"}, di = {class: "d-flex justify-content-between"},
                ui = (0, a._)("div", null, "Дельфин", -1), mi = {class: "d-flex gap-2"},
                _i = {class: "d-flex justify-content-between"}, vi = (0, a._)("div", null, "Кроль", -1),
                pi = {class: "d-flex gap-2"}, yi = {class: "d-flex justify-content-between"},
                bi = (0, a._)("div", null, "На спине", -1), hi = {class: "d-flex gap-2"},
                gi = (0, a.uE)('<div class="w-100 d-flex flex-column gap-2 px-2"><div class="d-flex align-items-center gap-2"><button class="style__btn">П</button> Полная координация </div><div class="d-flex align-items-center gap-2"><button class="style__btn">Р</button> Руки </div><div class="d-flex align-items-center gap-2"><button class="style__btn">Н</button> Ноги </div><div class="d-flex align-items-center gap-2"><button class="style__btn">У</button> Упражнения </div></div>', 1),
                fi = {class: "w-100 d-flex justify-content-between"};

            function wi(t, e, i, s, n, l) {
                return (0, a.wg)(), (0, a.iD)("div", ai, [ni, (0, a._)("div", li, [(0, a._)("div", ci, [ri, (0, a._)("div", oi, [(0, a._)("button", {
                    onClick: e[0] || (e[0] = t => l.changeSelector("brass", "П")),
                    class: (0, c.C_)("style__btn " + ("П" === n.activity.style.brass ? "style__btn--active" : ""))
                }, "П ", 2), (0, a._)("button", {
                    onClick: e[1] || (e[1] = t => l.changeSelector("brass", "Р")),
                    class: (0, c.C_)("style__btn " + ("Р" === n.activity.style.brass ? "style__btn--active" : ""))
                }, "Р ", 2), (0, a._)("button", {
                    onClick: e[2] || (e[2] = t => l.changeSelector("brass", "Н")),
                    class: (0, c.C_)("style__btn " + ("Н" === n.activity.style.brass ? "style__btn--active" : ""))
                }, "Н ", 2), (0, a._)("button", {
                    onClick: e[3] || (e[3] = t => l.changeSelector("brass", "У")),
                    class: (0, c.C_)("style__btn " + ("У" === n.activity.style.brass ? "style__btn--active" : ""))
                }, "У ", 2)])]), (0, a._)("div", di, [ui, (0, a._)("div", mi, [(0, a._)("button", {
                    onClick: e[4] || (e[4] = t => l.changeSelector("delfin", "П")),
                    class: (0, c.C_)("style__btn " + ("П" === n.activity.style.delfin ? "style__btn--active" : ""))
                }, "П ", 2), (0, a._)("button", {
                    onClick: e[5] || (e[5] = t => l.changeSelector("delfin", "Р")),
                    class: (0, c.C_)("style__btn " + ("Р" === n.activity.style.delfin ? "style__btn--active" : ""))
                }, "Р ", 2), (0, a._)("button", {
                    onClick: e[6] || (e[6] = t => l.changeSelector("delfin", "Н")),
                    class: (0, c.C_)("style__btn " + ("Н" === n.activity.style.delfin ? "style__btn--active" : ""))
                }, "Н ", 2), (0, a._)("button", {
                    onClick: e[7] || (e[7] = t => l.changeSelector("delfin", "У")),
                    class: (0, c.C_)("style__btn " + ("У" === n.activity.style.delfin ? "style__btn--active" : ""))
                }, "У ", 2)])]), (0, a._)("div", _i, [vi, (0, a._)("div", pi, [(0, a._)("button", {
                    onClick: e[8] || (e[8] = t => l.changeSelector("krol", "П")),
                    class: (0, c.C_)("style__btn " + ("П" === n.activity.style.krol ? "style__btn--active" : ""))
                }, "П ", 2), (0, a._)("button", {
                    onClick: e[9] || (e[9] = t => l.changeSelector("krol", "Р")),
                    class: (0, c.C_)("style__btn " + ("Р" === n.activity.style.krol ? "style__btn--active" : ""))
                }, "Р ", 2), (0, a._)("button", {
                    onClick: e[10] || (e[10] = t => l.changeSelector("krol", "Н")),
                    class: (0, c.C_)("style__btn " + ("Н" === n.activity.style.krol ? "style__btn--active" : ""))
                }, "Н ", 2), (0, a._)("button", {
                    onClick: e[11] || (e[11] = t => l.changeSelector("krol", "У")),
                    class: (0, c.C_)("style__btn " + ("У" === n.activity.style.krol ? "style__btn--active" : ""))
                }, "У ", 2)])]), (0, a._)("div", yi, [bi, (0, a._)("div", hi, [(0, a._)("button", {
                    onClick: e[12] || (e[12] = t => l.changeSelector("spina", "П")),
                    class: (0, c.C_)("style__btn " + ("П" === n.activity.style.spina ? "style__btn--active" : ""))
                }, "П ", 2), (0, a._)("button", {
                    onClick: e[13] || (e[13] = t => l.changeSelector("spina", "Р")),
                    class: (0, c.C_)("style__btn " + ("Р" === n.activity.style.spina ? "style__btn--active" : ""))
                }, "Р ", 2), (0, a._)("button", {
                    onClick: e[14] || (e[14] = t => l.changeSelector("spina", "Н")),
                    class: (0, c.C_)("style__btn " + ("Н" === n.activity.style.spina ? "style__btn--active" : ""))
                }, "Н ", 2), (0, a._)("button", {
                    onClick: e[15] || (e[15] = t => l.changeSelector("spina", "У")),
                    class: (0, c.C_)("style__btn " + ("У" === n.activity.style.spina ? "style__btn--active" : ""))
                }, "У ", 2)])])]), gi, (0, a._)("div", fi, [(0, a._)("button", {
                    class: "activity__btn px-5",
                    onClick: e[16] || (e[16] = t => l.next("activityDistance"))
                }, "Назад"), (0, a._)("button", {
                    class: "activity__btn activity__btn--primary px-5",
                    onClick: e[17] || (e[17] = t => l.next())
                }, "Далее")])])
            }

            var xi = {
                name: "ActivityStyle", data() {
                    return {activity: null}
                }, created() {
                    this.activity = this.$store.state.activity
                }, methods: {
                    changeSelector(t, e) {
                        this.activity.style[t] === e ? this.activity.style[t] = "" : this.activity.style[t] = e, this.$store.dispatch("changeActivity", this.activity)
                    }, next(t = "activityRepetitions") {
                        this.$router.push({name: t})
                    }
                }
            };
            const Ci = (0, p.Z)(xi, [["render", wi]]);
            var ki = Ci;
            const Di = {class: "w-100 flex-grow-1 justify-content-between py-5 d-flex flex-column align-items-center"},
                Mi = {class: "d-flex text-primary flex-column align-items-center mb-3 activity__value fw-bold"},
                Si = (0, a._)("span", {class: "h6 fw-normal"}, "Количество повторений", -1),
                Ai = {class: "d-flex flex-column w-100 align-items-center"},
                Ti = {class: "row gap-2 mb-4 col-12 justify-content-center"},
                Li = {class: "d-flex gap-2 align-items-center"}, Ii = (0, a._)("img", {src: Le, alt: ""}, null, -1),
                Vi = [Ii],
                Ui = (0, a._)("div", {class: "activity__tools activity__tools--more text-primary"}, " 1 ", -1),
                zi = (0, a._)("img", {src: qt, alt: ""}, null, -1), Pi = [zi],
                ji = {class: "w-100 d-flex justify-content-between"},
                Zi = {class: "d-flex flex-column align-items-center"},
                $i = {class: "d-flex flex-column mt-3 gap-1 text-secondary mb-3 w-100"},
                qi = (0, a._)("label", {class: "text-secondary"}, "Название тренировки", -1),
                Ei = {class: "d-flex justify-content-end w-100"}, Hi = (0, a._)("img", {src: Te, alt: ""}, null, -1),
                Wi = [Hi];

            function Ri(t, e, i, n, l, r) {
                const o = (0, a.up)("b-modal");
                return (0, a.wg)(), (0, a.iD)("div", Di, [(0, a._)("div", Mi, [(0, a.Uk)((0, c.zw)(l.activity.repetition) + " ", 1), Si]), (0, a._)("div", Ai, [(0, a._)("div", Ti, [(0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[0] || (e[0] = t => r.addRepetition(1))
                }, "1"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[1] || (e[1] = t => r.addRepetition(2))
                }, "2"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[2] || (e[2] = t => r.addRepetition(3))
                }, "3"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[3] || (e[3] = t => r.addRepetition(4))
                }, "4"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[4] || (e[4] = t => r.addRepetition(5))
                }, "5"), (0, a._)("button", {
                    class: "activity__btn col-3",
                    onClick: e[5] || (e[5] = t => r.addRepetition(6))
                }, "6")]), (0, a._)("div", Li, [(0, a._)("button", {
                    class: "activity__tools",
                    onClick: e[6] || (e[6] = t => r.addRepetition(-1))
                }, Vi), Ui, (0, a._)("button", {
                    class: "activity__tools",
                    onClick: e[7] || (e[7] = t => r.addRepetition(1))
                }, Pi)])]), (0, a._)("div", ji, [(0, a._)("button", {
                    class: "activity__btn px-5",
                    onClick: e[8] || (e[8] = t => r.next("activityStyle"))
                }, "Назад"), (0, a._)("button", {
                    class: "activity__btn activity__btn--primary px-5",
                    onClick: e[9] || (e[9] = t => r.showModal())
                }, "Создать")]), (0, a.Wm)(o, {
                    modelValue: l.isShowModal,
                    "onUpdate:modelValue": e[12] || (e[12] = t => l.isShowModal = t),
                    hideHeader: "true",
                    hideFooter: "true",
                    title: "Создание тренировки",
                    class: "text-primary"
                }, {
                    default: (0, a.w5)((() => [(0, a._)("div", Zi, [(0, a.Uk)(" Придумайте название тренировки "), (0, a._)("div", $i, [qi, (0, a.wy)((0, a._)("input", {
                        class: "form-control",
                        style: {"font-size": "12px"},
                        "onUpdate:modelValue": e[10] || (e[10] = t => l.activity.name = t),
                        type: "text"
                    }, null, 512), [[s.nr, l.activity.name]])]), (0, a._)("div", Ei, [(0, a._)("button", {
                        class: "btn p-0",
                        onClick: e[11] || (e[11] = t => r.next("activity"))
                    }, Wi)])])])), _: 1
                }, 8, ["modelValue"])])
            }

            var Oi = i(2258), Yi = {
                name: "ActivityRepetitions", data() {
                    return {activity: null, isShowModal: !1}
                }, created() {
                    this.activity = this.$store.state.activity
                }, methods: {
                    addRepetition(t) {
                        this.activity.repetition + t >= 0 ? this.activity.repetition += t : this.activity.repetition = 0, this.$store.dispatch("changeActivity", this.activity)
                    }, showModal() {
                        this.isShowModal = !0
                    }, next(t = "activity") {
                        "activity" === t && (this.activity = {
                            ...this.activity,
                            id: Date.now(),
                            date: (0, Oi.WU)(new Date, "DD.MM.YYYY")
                        }, this.$store.dispatch("addActivityList", this.activity), this.$store.dispatch("addActivity")), this.$router.push({name: t})
                    }
                }
            };
            const Bi = (0, p.Z)(Yi, [["render", Ri]]);
            var Fi = Bi, Ni = i.p + "img/arrow.d4383a0f.svg", Gi = i.p + "img/trash.e693d632.svg",
                Ki = i.p + "img/calendar-date.f710f2e2.svg";
            const Ji = {class: "container py-4"}, Qi = {class: "d-flex justify-content-between"},
                Xi = (0, a._)("img", {src: Ni, alt: ""}, null, -1), ts = [Xi],
                es = (0, a._)("div", null, "Тренировки", -1), is = (0, a._)("img", {src: Gi, alt: ""}, null, -1),
                ss = [is], as = {class: "mt-4"}, ns = {class: "text-primary border-bottom pb-2 mb-2"},
                ls = {class: "d-flex align-items-center gap-1 border-bottom pb-2 mb-2"},
                cs = (0, a._)("img", {src: Ki, alt: ""}, null, -1), rs = {key: 0, class: "mb-1 d-flex gap-1"},
                os = {class: "text-primary"}, ds = (0, a._)("span", null, "x", -1),
                us = {key: 1, class: "mb-1 d-flex gap-1"}, ms = {class: "text-primary"},
                _s = (0, a._)("span", null, "x", -1), vs = {key: 2, class: "mb-1 d-flex gap-1"},
                ps = {class: "text-primary"}, ys = (0, a._)("span", null, "x", -1),
                bs = {key: 3, class: "mb-1 d-flex gap-1"}, hs = {class: "text-primary"},
                gs = (0, a._)("span", null, "x", -1);

            function fs(t, e, i, s, n, l) {
                return (0, a.wg)(), (0, a.iD)("div", Ji, [(0, a._)("div", Qi, [(0, a._)("button", {
                    class: "btn p-0",
                    onClick: e[0] || (e[0] = (...t) => l.back && l.back(...t))
                }, ts), es, (0, a._)("button", {
                    class: "btn p-0",
                    onClick: e[1] || (e[1] = (...t) => l.removeActivity && l.removeActivity(...t))
                }, ss)]), (0, a._)("div", as, [(0, a._)("div", ns, (0, c.zw)("" === n.activity.name ? "Тренировка" : n.activity.name), 1), (0, a._)("div", ls, [cs, (0, a._)("span", null, (0, c.zw)(n.activity.date), 1)]), "" !== n.activity.style.brass ? ((0, a.wg)(), (0, a.iD)("div", rs, [(0, a._)("div", os, [(0, a.Uk)((0, c.zw)(n.activity.repetition), 1), ds]), (0, a._)("div", null, (0, c.zw)(n.activity.distance) + " Брасс " + (0, c.zw)(n.activity.style.brass), 1)])) : (0, a.kq)("", !0), "" !== n.activity.style.delfin ? ((0, a.wg)(), (0, a.iD)("div", us, [(0, a._)("div", ms, [(0, a.Uk)((0, c.zw)(n.activity.repetition), 1), _s]), (0, a._)("div", null, (0, c.zw)(n.activity.distance) + " Дельфин " + (0, c.zw)(n.activity.style.brass), 1)])) : (0, a.kq)("", !0), "" !== n.activity.style.krol ? ((0, a.wg)(), (0, a.iD)("div", vs, [(0, a._)("div", ps, [(0, a.Uk)((0, c.zw)(n.activity.repetition), 1), ys]), (0, a._)("div", null, (0, c.zw)(n.activity.distance) + " Кроль " + (0, c.zw)(n.activity.style.brass), 1)])) : (0, a.kq)("", !0), "" !== n.activity.style.spina ? ((0, a.wg)(), (0, a.iD)("div", bs, [(0, a._)("div", hs, [(0, a.Uk)((0, c.zw)(n.activity.repetition), 1), gs]), (0, a._)("div", null, (0, c.zw)(n.activity.distance) + " Спина " + (0, c.zw)(n.activity.style.brass), 1)])) : (0, a.kq)("", !0)])])
            }

            var ws = {
                name: "ActivityTo", data() {
                    return {activity: null}
                }, created() {
                    this.activity = this.$store.state.activityList.filter((t => t.id == this.$route.query.id))[0]
                }, methods: {
                    back() {
                        this.$router.go(-1)
                    }, removeActivity() {
                        this.$store.dispatch("removeActivity", this.$route.query.id), this.back()
                    }
                }
            };
            const xs = (0, p.Z)(ws, [["render", fs]]);
            var Cs = xs;
            const ks = [{path: "/", name: "home", component: gt, meta: {title: "Главная"}, props: !0}, {
                    path: "/book",
                    name: "book",
                    component: $t,
                    meta: {title: "Теория"},
                    props: !0
                }, {
                    path: "/activity",
                    name: "activity",
                    component: ie,
                    meta: {title: "Активность"},
                    props: !0
                }, {
                    path: "/activity_to",
                    name: "activityTo",
                    component: Cs,
                    meta: {title: "Активность"},
                    props: !0
                }, {
                    path: "/add_activity",
                    name: "addActivity",
                    component: si,
                    meta: {title: "Активность"},
                    props: !0,
                    redirect: {name: "activityDistance"},
                    children: [{path: "", name: "activityDistance", component: Qe, props: !0}, {
                        path: "/style",
                        name: "activityStyle",
                        component: ki,
                        props: !0
                    }, {path: "/repetitions", name: "activityRepetitions", component: Fi, props: !0}]
                }, {path: "/stopwatch", name: "stopwatch", component: Se, meta: {title: "Нормативы"}, props: !0}],
                Ds = (0, w.p7)({
                    history: (0, w.PO)(),
                    linkActiveClass: "is-subactive",
                    linkExactActiveClass: "is-active",
                    routes: ks
                });
            var Ms = Ds, Ss = i(1095), As = i(65), Ts = i(5103);
            const Ls = new Ts.ZP({key: "swim", storage: window.localStorage}), Is = () => ({
                distance: 0,
                style: {brass: "", delfin: "", krol: "", spina: ""},
                repetition: 1,
                id: "",
                date: "",
                name: ""
            }), Vs = (0, As.MT)({
                state: {activityList: [], user: {name: "", age: "", weight: "", height: ""}},
                plugins: [Ls.plugin],
                mutations: {
                    ADD_ACTIVITY(t) {
                        t.activity = Is()
                    }, CHANGE_ACTIVITY(t, e) {
                        t.activity = e
                    }, CHANGE_USER(t, e) {
                        t.user = e
                    }, ADD_ACTIVITY_LIST(t, e) {
                        t.activityList.push(e)
                    }, REMOVE_ACTIVITY_LIST(t, e) {
                        t.activityList = t.activityList.filter((t => t.id != e))
                    }
                },
                actions: {
                    addActivity(t) {
                        t.commit("ADD_ACTIVITY")
                    }, changeActivity(t, e) {
                        t.commit("CHANGE_ACTIVITY", e)
                    }, addActivityList(t, e) {
                        t.commit("ADD_ACTIVITY_LIST", e)
                    }, removeActivity(t, e) {
                        t.commit("REMOVE_ACTIVITY_LIST", e)
                    }, changeUser(t, e) {
                        t.commit("CHANGE_USER", e)
                    }
                }
            });
            var Us = Vs;
            const zs = (0, s.ri)(f);
            zs.use(Ss.qq), zs.use(Ms), zs.use(Us), zs.mount("#app")
        }, 5893: function () {
        }
    }, e = {};

    function i(s) {
        var a = e[s];
        if (void 0 !== a) return a.exports;
        var n = e[s] = {exports: {}};
        return t[s].call(n.exports, n, n.exports, i), n.exports
    }

    i.m = t, function () {
        var t = [];
        i.O = function (e, s, a, n) {
            if (!s) {
                var l = 1 / 0;
                for (d = 0; d < t.length; d++) {
                    s = t[d][0], a = t[d][1], n = t[d][2];
                    for (var c = !0, r = 0; r < s.length; r++) (!1 & n || l >= n) && Object.keys(i.O).every((function (t) {
                        return i.O[t](s[r])
                    })) ? s.splice(r--, 1) : (c = !1, n < l && (l = n));
                    if (c) {
                        t.splice(d--, 1);
                        var o = a();
                        void 0 !== o && (e = o)
                    }
                }
                return e
            }
            n = n || 0;
            for (var d = t.length; d > 0 && t[d - 1][2] > n; d--) t[d] = t[d - 1];
            t[d] = [s, a, n]
        }
    }(), function () {
        i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return i.d(e, {a: e}), e
        }
    }(), function () {
        i.d = function (t, e) {
            for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {enumerable: !0, get: e[s]})
        }
    }(), function () {
        i.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    }(), function () {
        i.p = "/"
    }(), function () {
        var t = {143: 0};
        i.O.j = function (e) {
            return 0 === t[e]
        };
        var e = function (e, s) {
            var a, n, l = s[0], c = s[1], r = s[2], o = 0;
            if (l.some((function (e) {
                return 0 !== t[e]
            }))) {
                for (a in c) i.o(c, a) && (i.m[a] = c[a]);
                if (r) var d = r(i)
            }
            for (e && e(s); o < l.length; o++) n = l[o], i.o(t, n) && t[n] && t[n][0](), t[n] = 0;
            return i.O(d)
        }, s = self["webpackChunkswim_coach"] = self["webpackChunkswim_coach"] || [];
        s.forEach(e.bind(null, 0)), s.push = e.bind(null, s.push.bind(s))
    }();
    var s = i.O(void 0, [998], (function () {
        return i(1269)
    }));
    s = i.O(s)
})();
//# sourceMappingURL=app.529e2ce6.js.map