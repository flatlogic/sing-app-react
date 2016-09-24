import {Directive, ElementRef, OnInit} from '@angular/core';
declare var jQuery: any;

@Directive ({
  selector: '[notification-load]'
})

export class NotificationLoad implements OnInit {
  $el: any;
  resetData: any = null;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    this.$el.on('click change', function(e): boolean {
      let $this = jQuery(this),
        $target = jQuery($this.data('ajax-target'));
      if ($target.length > 0 ) {
        e = jQuery.Event('ajax-load:start', {originalEvent: e});
        $this.trigger(e);

        if (!e.isDefaultPrevented()) {
          $target.load($this.data('ajax-load'), () => {
            $this.trigger('ajax-load:end');
          });
        }
      }
      return false;
    });

    jQuery(window.document).on('click', '[data-toggle^=button]', (e) => {
      e.preventDefault();
      return jQuery(e.target).find('input').data('ajax-trigger') !== 'change';
    });

    if (this.$el.data('loading-text')) {
      this.$el.on('ajax-load:start', () => {
        this.resetData = this.$el.html();
        this.$el.empty().append(this.$el.data('loading-text')).attr('disabled', true);
      });
      this.$el.on('ajax-load:end', () => {
        this.$el.empty().append(this.resetData).attr('disabled', false);
      });
    }

    jQuery(document).on('ajax-load:end', '#load-notifications-btn', () => {
      setTimeout(() => {
        jQuery('#notifications-list').find('.bg-attention').removeClass('bg-attention');
      }, 10000);
    });
  }
}
