(function () {

	$.extend(ch.events, {
		/**
		 * Keryboard event collection.
		 * @name key
		 * @namespace
		 * @memberOf ch.events
		 */
		'key': {

			/**
			 * Alphanumeric keys event.
			 * @name INPUT
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'INPUT': ('oninput' in document.createElement('input')) ? 'input' : 'keydown',

			/**
			 * Tab key event.
			 * @name TAB
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'TAB': 'tab',

			/**
			 * Enter key event.
			 * @name ENTER
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'ENTER': 'enter',

			/**
			 * Esc key event.
			 * @name ESC
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'ESC': 'esc',

			/**
			 * Left arrow key event.
			 * @name LEFT_ARROW
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'LEFT_ARROW': 'left_arrow',

			/**
			 * Up arrow key event.
			 * @name UP_ARROW
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'UP_ARROW': 'up_arrow',

			/**
			 * Rigth arrow key event.
			 * @name RIGHT_ARROW
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'RIGHT_ARROW': 'right_arrow',

			/**
			 * Down arrow key event.
			 * @name DOWN_ARROW
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'DOWN_ARROW': 'down_arrow',

			/**
			 * Backspace key event.
			 * @name BACKSPACE
			 * @constant
			 * @memberOf ch.events.key
			 * @type {String}
			 */
			'BACKSPACE': 'backspace'
		}

	});
}());