jQuery(document).ready((function($) {
    function t(t) {
        var e = t.attr("id"),
            i = t.attr("class"),
            s = t.attr("src");
        s.endsWith("svg") && $.get(s, (function(s) {
            var n = $(s).find("svg"),
                a = n.attr("id");
            void 0 === e ? void 0 === a ? (e = "svg-replaced-" + r, n = n.attr("id", e)) : e = a : n = n.attr("id", e), void 0 !== i && (n = n.attr("class", i + " replaced-svg svg-replaced-" + r)), n = n.removeAttr("xmlns:a"), "on" == frontSanitizationEnabled && "" != n[0].outerHTML && (n = DOMPurify.sanitize(n[0].outerHTML)), t.replaceWith(n), $(document).trigger("svg.loaded", [e]), r++
        }), "xml")
    }
    let r = 0;
    (bodhisvgsInlineSupport = function() {
        if ("true" === ForceInlineSVGActive && jQuery("img").each((function() {
                void 0 !== jQuery(this).attr("src") && !1 !== jQuery(this).attr("src") && jQuery(this).attr("src").match(/\.(svg)/) && (jQuery(this).hasClass(cssTarget.ForceInlineSVG) || jQuery(this).addClass(cssTarget.ForceInlineSVG))
            })), String.prototype.endsWith || (String.prototype.endsWith = function(t, r) {
                var e = this.toString();
                ("number" != typeof r || !isFinite(r) || Math.floor(r) !== r || r > e.length) && (r = e.length), r -= t.length;
                var i = e.lastIndexOf(t, r);
                return -1 !== i && i === r
            }), String.prototype.endsWith = function(t) {
                var r = this.length - t.length;
                return r >= 0 && this.lastIndexOf(t) === r
            }, "true" === ForceInlineSVGActive) var r = "img." !== cssTarget.Bodhi ? cssTarget.Bodhi : ".style-svg";
        else var r = "img." !== cssTarget ? cssTarget : ".style-svg";
        r = r.replace("img", ""), $(r).each((function(r) {
            void 0 !== $(this).attr("src") && !1 !== $(this).attr("src") ? t($(this)) : $(this).find("img").each((function(r) {
                void 0 !== $(this).attr("src") && !1 !== $(this).attr("src") && t($(this))
            }))
        }))
    })()
}));