import {Component, ElementRef, OnInit} from '@angular/core';
import {AppConfig} from '../../app.config';
declare var jQuery: any;

@Component({
  selector: '[notifications]',
  templateUrl: './notifications.template.html'
})
export class Notifications implements OnInit {
  $el: any;
  config: any;

  constructor(el: ElementRef, config: AppConfig) {
    this.$el = jQuery(el.nativeElement);
    this.config = config;
  }

  moveNotificationsDropdown(): void {
    jQuery('.sidebar-status .dropdown-toggle').after(jQuery('[notifications]').detach());
  }

  moveBackNotificationsDropdown(): void {
    jQuery('#notifications-dropdown-toggle').after(jQuery('[notifications]').detach());
  }

  ngOnInit(): void {
    this.config.onScreenSize(['sm', 'xs'], this.moveNotificationsDropdown);
    this.config.onScreenSize(['sm', 'xs'], this.moveBackNotificationsDropdown, false);

    if (this.config.isScreen('sm')) { this.moveNotificationsDropdown(); }
    if (this.config.isScreen('xs')) { this.moveNotificationsDropdown(); }

    jQuery('.sidebar-status').on('show.bs.dropdown', () => {
      jQuery('#sidebar').css('z-index', 2);
    }).on('hidden.bs.dropdown', () => {
      jQuery('#sidebar').css('z-index', '');
    });

    jQuery(document).on('change', '[data-toggle="buttons"] > label', ($event) => {
      let $input = jQuery($event.target).find('input');
      $input.trigger('change');
    });
  }
}
