define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({el:"#feed-filter",events:{"click .btn":"onFeedTypeSelect"},initialize:function(){this.model={feedType:"videos"}},onFeedTypeSelect:function(t){var n=e(t.currentTarget);this.$el.find(".btn").removeClass("active"),n.addClass("active"),this.model.feedType=n.data("feed"),this.trigger("feed-type-change",this.model)}});return r})