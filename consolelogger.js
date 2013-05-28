/**
The MIT License (MIT)

Copyright (c) <2013> <Paradox One, LLC; Johnathon Koster>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/**
 * ConsoleLogger
 *
 * Tracks the history of the console.
 * @author Johnathon Koster
 * @version 1.0.0
 */
var ConsoleLogger = function() {

	// Holds an instance of the current object.
	var _instance = this;

	this._logOverwrite = function(o) {

		var _log = o.log;
		
		// Overwrites the console.log function.
		o.log = function(e) {
			_instance.pushLog(e);
			// Calls the console.log function (normal browser behavior)
			_log.call(o, e);
		}
		
		// Overwrites the console.info function.
		o.info = function(e) {
			_instance.pushInfoLog(e);
			// Calls the console.info function (normal browser behavior)
			_log.call(o, e);
		}
		
		// Overwrites the console.warn function.
		o.warn = function(e) {
			_instance.pushWarnLog(e);
			// Calls the console.warn function (normal browser behavior)
			_log.call(o, e);
		}
		
		// Overwrites the console.error function.
		o.error = function(e) {
			_instance.pushErrorLog(e);
			// Calls the console.error function (normal browser behavior)
			_log.call(o, e);
		}

	}(console);

	// Holds the history of the console calls made by other scripts.
	this._logHistory = [];
	this._infoHistory = [];
	this._warnHistory = [];
	this._errorHistory = [];
	
	/**
	 * Adds an item to the log history.
	 *
	 * @param {log} object to log
	 */
	this.pushLog = function(log) {
		this._logHistory.push(log);
	}
	
	/**
	 * Adds an item to the information log history.
	 *
	 * @param {log} object to log
	 */
	this.pushInfoLog = function(log) {
		this._infoHistory.push(log);
	}
	
	/**
	 * Adds an item to the warning log history.
	 *
	 * @param {log} object to log
	 */
	this.pushWarnLog = function(log) {
		this._warnHistory.push(log);
	}
	
	/**
	 * Adds an item to the error log history.
	 *
	 * @param {log} object to log
	 */
	this.pushErrorLog = function(log) {
		this._errorHistory.push(log);
	}
	
	/**
	 * Returns the log history.
	 * @this {ConsoleLogger}
	 * @return {array} the log history.
	 */
	this.getLog = function() {
		return this._logHistory;
	}
	
	/**
	 * Returns the information log history.
	 * @this {ConsoleLogger}
	 * @return {array} the information log history.
	 */
	this.getInfoLog = function() {
		return this._infoHistory;
	}
	
	/**
	 * Returns the warning log history.
	 * @this {ConsoleLogger}
	 * @return {array} the warning log history.
	 */
	this.getWarnLog = function() {
		return this._warnHistory;
	}
	
	/**
	 * Returns the error log history.
	 * @this {ConsoleLogger}
	 * @return {array} the error log history.
	 */
	this.getErrorLog = function() {
		return this._errorHistory;
	}
	
	/**
	 * Returns all log histories.
	 * @this {ConsoleLogger}
	 * @return {array} the error log(s) history.
	 */
	this.getLogHistory = function() {
		var _return = [];
		_return = this._logHistory
		_return = _return.concat(this._infoHistory);
		_return = _return.concat(this._warnHistory);
		_return = _return.concat(this._errorHistory);
		return _return;
	}

}


