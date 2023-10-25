(function (win, $) {
	'use strict';
	win.PROJECTORY = win.PROJECTORY || {};

	// subAnimation
	win.PROJECTORY.subAnimation = (function () {
		var defParams = {
			viewportCheck: {
				case1: {
					addClass: 'start-animate',
					useViewportCheck: false,
					selector: '.page-title',
					classToAdd: 'delay_type1 fade-in-out_bottom-to-top_type2',
				},
				case2: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.object__title',
					classToAdd: 'fade-in-out_right-to-left_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case3: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.object__text',
					classToAdd: 'fade-in-out_bottom-to-top_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case4: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.list-desc__item',
					classToAdd: 'fade-in-out_bottom-to-top_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case5: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.list-order__item',
					classToAdd: 'fade-in-out_bottom-to-top_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case6: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.list-desc--horizontal .list-desc__item',
					classToAdd: 'fade-in-out_bottom-to-top_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
					series: true,
					seriesElements: [1],
					seriesDelay: ['delay_type2'],
				},
				case7: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.key-visual__img:not(:eq(0))',
					classToAdd: 'right-to-left_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case8: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.key-visual__img img:not(:eq(0))',
					classToAdd: 'fade-in-out_type2_scale-left-to-right_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case9: {
					addClass: 'start-animate',
					useViewportCheck: false,
					selector: '.key-visual__img:eq(0)',
					classToAdd: 'delay_type3 right-to-left_type1',
				},
				case10: {
					addClass: 'start-animate',
					useViewportCheck: false,
					selector: '.key-visual__img img:eq(0)',
					classToAdd: 'delay_type3 fade-in-out_type2_scale-left-to-right_type1',
				},
				case11: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.object__sub-title',
					classToAdd: 'fade-in-out_bottom-to-top_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
				case12: {
					addClass: 'start-animate',
					useViewportCheck: true,
					selector: '.list-meaning__item',
					classToAdd: 'fade-in-out_bottom-to-top_type1',
					offset: 100,
					repeat: true,
					invertBottomOffset: false,
				},
			}
		};
		return {
			init: function () {
				this.bindEvents();
			},
			bindEvents: function () {
				this.viewPortCheck();
			},
			viewPortCheck: function () {
				$.each(defParams.viewportCheck, function (key, value) {
					if (value.useViewportCheck) {
						if (value.series) {
							for (var i=0; i < value.seriesElements.length; i++) {
								$(value.selector).eq(value.seriesElements[i]).addClass(value.seriesDelay[i]);
							}
						}
						$(value.selector).addClass(value.addClass).viewportChecker({
							classToAdd: value.classToAdd,
							offset: value.offset,
							repeat: value.repeat,
							invertBottomOffset: value.invertBottomOffset,
						});
					} 
					else {
						$(value.selector).addClass(value.addClass + " " + value.classToAdd)
					}
				})
			}
		}
	})();

	$(function () {
		PROJECTORY.subAnimation.init();
	});
})(window, window.jQuery);