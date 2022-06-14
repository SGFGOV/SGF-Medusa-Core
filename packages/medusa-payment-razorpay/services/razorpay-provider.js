"use strict";function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}function _typeof(obj) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {return typeof obj;} : function (obj) {return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}, _typeof(obj);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _lodash = _interopRequireDefault(require("lodash"));
var _razorpay = _interopRequireDefault(require("razorpay"));
var _medusaInterfaces = require("medusa-interfaces");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, "catch": function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!_instanceof(instance, Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var crypto = require('crypto');var

RazorpayProviderService = /*#__PURE__*/function (_PaymentService) {_inherits(RazorpayProviderService, _PaymentService);var _super = _createSuper(RazorpayProviderService);



  function RazorpayProviderService(_ref, options) {var _this;var customerService = _ref.customerService,totalsService = _ref.totalsService,regionService = _ref.regionService;_classCallCheck(this, RazorpayProviderService);
    _this = _super.call(this);

    /**
     * Razorpay payment provider modelled around the stripe payment provider. 
     * 
     * Required Razorpay options:
     *  {
     *    api_key: "razorpay_secret_key", REQUIRED
     *    api_key_secret: "razor_pay_key_secret", REQUIRED
     *    capture: true
     *  }
     */
    _this.options_ = options;

    /** @private @const {Razorpay} */
    _this.razorpay_ = new _razorpay["default"](options = { key_id: options.api_key, key_secret: options.api_key_secret });

    /** @private @const {CustomerService} */
    _this.customerService_ = customerService;

    /** @private @const {RegionService} */
    _this.regionService_ = regionService;

    /** @private @const {TotalsService} */
    _this.totalsService_ = totalsService;return _this;
  }_createClass(RazorpayProviderService, [{ key: "_validateSignature", value:

    function _validateSignature(razorpay_payment_id, razorpay_order_id, razorpay_signature)
    {

      var crypto = require("crypto");
      var body = razorpay_order_id + "|" + razorpay_payment_id;
      var expectedSignature = crypto.createHmac('sha256', this.options_.api_key_secret).
      update(body.toString()).
      digest('hex');
      //                             console.log("sig received " ,razorpay_signature);
      //                             console.log("sig generated " ,expectedSignature);
      return expectedSignature === razorpay_signature;
    }



    /**
     * Fetches Razorpay order. Check its status and returns the
     * corresponding Medusa status.
     * @param {object} paymentData - payment method data from cart
     * @returns {string} the status of the order
     */ }, { key: "getStatus", value: function () {var _getStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee(orderData) {var id, orderResponse, status;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                id = orderData.id;_context.next = 3;return (
                  this.razorpay_.orders.fetch(id));case 3:orderResponse = _context.sent;

                status = "pending";if (!(

                orderResponse.status === "created")) {_context.next = 7;break;}return _context.abrupt("return",
                status);case 7:if (!(


                orderResponse.status === "attempted")) {_context.next = 9;break;}return _context.abrupt("return",
                "processing");case 9:if (!(



                orderResponse.status === "paid")) {_context.next = 12;break;}
                status = "authorized";return _context.abrupt("return",
                status);case 12:case "end":return _context.stop();}}}, _callee, this);}));function getStatus(_x) {return _getStatus.apply(this, arguments);}return getStatus;}()


    /**
     * This function is irrelavent in razorpay standard checkout, as the payment types are stored and activiated in the client
     * Fetches a customers saved payment methods if registered in Razorpay.
     * @param {object} customer - customer to fetch saved cards for
     * @returns {Promise<Array<object>>} saved payments methods
     */ }, { key: "retrieveSavedMethods", value: function () {var _retrieveSavedMethods = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee2(customer) {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt("return",
                Promise.resolve([]));case 1:case "end":return _context2.stop();}}}, _callee2);}));function retrieveSavedMethods(_x2) {return _retrieveSavedMethods.apply(this, arguments);}return retrieveSavedMethods;}()


    /**
     * Fetches a Razorpay customer
     * @param {string} razorpayCustomerId - Razorpay customer id
     * @returns {Promise<object>} Razorpay customer
     */ }, { key: "retrieveCustomer", value: function () {var _retrieveCustomer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee3(razorpayCustomerId) {return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (
                razorpayCustomerId) {_context3.next = 2;break;}return _context3.abrupt("return",
                Promise.resolve());case 2:_context3.prev = 2;return _context3.abrupt("return",


                this.razorpay_.customers.fetch(razorpayCustomerId));case 6:_context3.prev = 6;_context3.t0 = _context3["catch"](2);throw _context3.t0;case 9:case "end":return _context3.stop();}}}, _callee3, this, [[2, 6]]);}));function retrieveCustomer(_x3) {return _retrieveCustomer.apply(this, arguments);}return retrieveCustomer;}() }, { key: "_findExistingCustomer", value: function () {var _findExistingCustomer2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(






      function _callee4(email, contact) {var customer_limit_per_page, razorpayCustomerOfInterest, notFound, fectchCustomerQueryParams, _razorpayCustomers, customers, customer_interest;return _regeneratorRuntime().wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:

                customer_limit_per_page = 100;
                razorpayCustomerOfInterest = undefined;
                notFound = true;
                fectchCustomerQueryParams = {
                  count: customer_limit_per_page,
                  skip: 0 };_context4.prev = 4;case 5:_context4.next = 7;return (



                  this.razorpay_.customers.all(fectchCustomerQueryParams));case 7:_razorpayCustomers = _context4.sent;
                customers = _razorpayCustomers.items;
                customer_interest = customers.filter(function (customer) {if (customer.email === email || customer.contact === contact) return true;});if (!(
                customer_interest.length > 0)) {_context4.next = 18;break;}_context4.next = 13;return (

                  this.razorpay_.customers.fetch(customer_interest[0].id));case 13:razorpayCustomerOfInterest = _context4.sent;
                notFound = false;return _context4.abrupt("break", 20);case 18:



                fectchCustomerQueryParams = {
                  count: customer_limit_per_page,
                  skip: _razorpayCustomers.count };case 19:if (


                razorpayCustomers.response <= customer_limit_per_page && notFound && razorpayCustomers.count) {_context4.next = 5;break;}case 20:_context4.next = 25;break;case 22:_context4.prev = 22;_context4.t0 = _context4["catch"](4);return _context4.abrupt("return", _context4.t0);case 25:return _context4.abrupt("return",





                razorpayCustomerOfInterest);case 26:case "end":return _context4.stop();}}}, _callee4, this, [[4, 22]]);}));function _findExistingCustomer(_x4, _x5) {return _findExistingCustomer2.apply(this, arguments);}return _findExistingCustomer;}()


    /**
     * Creates a Razorpay customer using a Medusa customer.
     * @param {object} customer - Customer data from Medusa
     * @returns {Promise<object>} Razorpay customer
     */ }, { key: "createCustomer", value: function () {var _createCustomer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee5(customer) {var _customer$first_name, _customer$last_name, _customer$name, _customer$email, _customer$contact, _razorpayCustomer, _razorpayCustomerUpda, createCustomerQueryParams, razorpayCustomer, razorpayCustomerUpdated, fullname, customerName, notes;return _regeneratorRuntime().wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;

                createCustomerQueryParams = { fail_existing: 0, email: "startup@medusa.com" };
                razorpayCustomer = undefined;
                razorpayCustomerUpdated = undefined;
                fullname = ((_customer$first_name = customer.first_name) !== null && _customer$first_name !== void 0 ? _customer$first_name : "") + " " + ((_customer$last_name = customer.last_name) !== null && _customer$last_name !== void 0 ? _customer$last_name : "");
                customerName = (_customer$name = customer.name) !== null && _customer$name !== void 0 ? _customer$name : fullname;
                notes = {};
                if ((customerName === null || customerName === void 0 ? void 0 : customerName.length) > RazorpayProviderService.RAZORPAY_NAME_LENGTH_LIMIT || customerName === " ") {
                  createCustomerQueryParams.name = customerName === null || customerName === void 0 ? void 0 : customerName.substring(0, 50);
                } else
                {
                  createCustomerQueryParams.name = customerName !== null && customerName !== void 0 ? customerName : "medusa-startup";
                }
                createCustomerQueryParams.notes = { fullname: customerName };
                //  if (customer.email !=undefined )  {
                createCustomerQueryParams.email = (_customer$email = customer.email) !== null && _customer$email !== void 0 ? _customer$email : "startup@medusa.com";
                // }
                //  if (customer.contact !=undefined ) {
                createCustomerQueryParams.contact = (_customer$contact = customer.contact) !== null && _customer$contact !== void 0 ? _customer$contact : "9000000000";
                //}
                createCustomerQueryParams["notes"]["customer_id"] = customer.id;_context5.prev = 12;_context5.next = 15;return (

                  this.razorpay_.customers.create(createCustomerQueryParams));case 15:razorpayCustomer = _context5.sent;if (!
                customer.id) {_context5.next = 19;break;}_context5.next = 19;return (
                  this.customerService_.update(customer.id, {
                    metadata: { razorpay_id: razorpayCustomer.id } }));case 19:_context5.next = 24;break;case 21:_context5.prev = 21;_context5.t0 = _context5["catch"](12);





                razorpayCustomer = this._findExistingCustomer(customer.email, customer.contact);case 24:if (!((_razorpayCustomer =

                razorpayCustomer) !== null && _razorpayCustomer !== void 0 && _razorpayCustomer.created_at)) {_context5.next = 28;break;}_context5.next = 27;return (
                  this.updateCustomer(razorpayCustomer.id, customer));case 27:razorpayCustomerUpdated = _context5.sent;case 28:return _context5.abrupt("return", (_razorpayCustomerUpda =


                razorpayCustomerUpdated) !== null && _razorpayCustomerUpda !== void 0 ? _razorpayCustomerUpda : razorpayCustomer);case 31:_context5.prev = 31;_context5.t1 = _context5["catch"](0);throw _context5.t1;case 34:case "end":return _context5.stop();}}}, _callee5, this, [[0, 31], [12, 21]]);}));function createCustomer(_x6) {return _createCustomer.apply(this, arguments);}return createCustomer;}()




    /**
       * Updates a Razorpay customer using a Medusa customer.
       * @param {object} razorpayCustomerId - razorpay customer id
       * @param {object} customer - Customer data from Medusa
       * @returns {Promise<object>} Razorpay customer
       */ }, { key: "updateCustomer", value: function () {var _updateCustomer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee6(razorpayCustomerId, customer) {var _customer$first_name2, _customer$last_name2, _customer$name2;var updateCustomerQueryParams, fullname, customerName, razorpayCustomerOfInterest, razorpayUpdateCustomer;return _regeneratorRuntime().wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:

                updateCustomerQueryParams = {};
                fullname = ((_customer$first_name2 = customer.first_name) !== null && _customer$first_name2 !== void 0 ? _customer$first_name2 : "") + " " + ((_customer$last_name2 = customer.last_name) !== null && _customer$last_name2 !== void 0 ? _customer$last_name2 : "");
                customerName = (_customer$name2 = customer.name) !== null && _customer$name2 !== void 0 ? _customer$name2 : fullname;
                delete customer.first_name;
                delete customer.last_name;
                Object.assign(updateCustomerQueryParams, customer);
                if (customerName.length > RazorpayProviderService.RAZORPAY_NAME_LENGTH_LIMIT) {
                  updateCustomerQueryParams.name = customerName.substring(0, 50);
                } else
                {
                  updateCustomerQueryParams.name = customerName !== null && customerName !== void 0 ? customerName : "";
                }_context6.prev = 7;

                delete updateCustomerQueryParams.id;
                delete updateCustomerQueryParams.password_hash;_context6.next = 12;return (
                  this.razorpay_.customers.fetch(razorpayCustomerId));case 12:razorpayCustomerOfInterest = _context6.sent;
                updateCustomerQueryParams.email = razorpayCustomerOfInterest.email;
                updateCustomerQueryParams.contact = razorpayCustomerOfInterest.contact;_context6.next = 17;return (
                  this.razorpay_.customers.edit(razorpayCustomerId, updateCustomerQueryParams));case 17:razorpayUpdateCustomer = _context6.sent;return _context6.abrupt("return",
                razorpayUpdateCustomer);case 21:_context6.prev = 21;_context6.t0 = _context6["catch"](7);throw _context6.t0;case 24:case "end":return _context6.stop();}}}, _callee6, this, [[7, 21]]);}));function updateCustomer(_x7, _x8) {return _updateCustomer.apply(this, arguments);}return updateCustomer;}()





    /**
     * Creates a Razorpay Order intent.
     * If customer is not registered in Razorpay, we do so.
     * @param {object} cart - cart to create an order for
     * @returns {object} Razorpay order intent
     */ }, { key: "createOrder", value: function () {var _createOrder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee7(cart) {var customer_id, region_id, email, order_number, display_id, _yield$this$regionSer, currency_code, amount, intentRequest, _customer$metadata, customer, razorpayCustomer, _razorpayCustomer2, orderIntent;return _regeneratorRuntime().wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:

                customer_id = cart.customer_id, region_id = cart.region_id, email = cart.email, order_number = cart.order_number, display_id = cart.display_id;_context7.next = 3;return (
                  this.regionService_.retrieve(region_id));case 3:_yield$this$regionSer = _context7.sent;currency_code = _yield$this$regionSer.currency_code;_context7.next = 7;return (

                  this.totalsService_.getTotal(cart));case 7:amount = _context7.sent;

                intentRequest = {
                  amount: amount,
                  currency: currency_code.toString().toUpperCase(),
                  receipt: (display_id !== null && display_id !== void 0 ? display_id : "0000") + "_seq_" + RazorpayProviderService.seq_number,
                  // partial_payment:true,
                  notes: { cart_id: "".concat(cart.id) } };

                RazorpayProviderService.seq_number = RazorpayProviderService.seq_number + 1;if (!
                customer_id) {_context7.next = 24;break;}_context7.next = 13;return (
                  this.customerService_.retrieve(customer_id));case 13:customer = _context7.sent;if (!((_customer$metadata =

                customer.metadata) !== null && _customer$metadata !== void 0 && _customer$metadata.razorpay_id)) {_context7.next = 18;break;}
                intentRequest.notes["customer"] = customer.metadata.razorpay_id;_context7.next = 22;break;case 18:_context7.next = 20;return (

                  this.createCustomer({
                    email: email,
                    id: customer_id,
                    name: "unknown" }));case 20:razorpayCustomer = _context7.sent;


                intentRequest.notes["customer_id"] = razorpayCustomer.id;case 22:_context7.next = 28;break;case 24:_context7.next = 26;return (


                  this.createCustomer({
                    email: email,
                    name: "unknown" }));case 26:_razorpayCustomer2 = _context7.sent;


                intentRequest.notes["customer_id"] = _razorpayCustomer2.id;case 28:_context7.prev = 28;_context7.next = 31;return (


                  this.razorpay_.orders.create(
                  intentRequest));case 31:orderIntent = _context7.sent;return _context7.abrupt("return",


                orderIntent);case 35:_context7.prev = 35;_context7.t0 = _context7["catch"](28);throw _context7.t0;case 38:case "end":return _context7.stop();}}}, _callee7, this, [[28, 35]]);}));function createOrder(_x9) {return _createOrder.apply(this, arguments);}return createOrder;}()








    /**
     * Creates a Razorpay order.
     * If customer is not registered in Razorpay, we do so.
     * @param {object} cart - cart to create a payment for
     * @returns {object} Razorpay order
     */ }, { key: "createPayment", value: function () {var _createPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee8(cart) {var orderIntent;return _regeneratorRuntime().wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                  this.createOrder(cart));case 2:orderIntent = _context8.sent;return _context8.abrupt("return",
                orderIntent);case 4:case "end":return _context8.stop();}}}, _callee8, this);}));function createPayment(_x10) {return _createPayment.apply(this, arguments);}return createPayment;}()


    /**
     * Retrieves Razorpay order.
     * @param {object} sessionData - the data of the payment to retrieve
     * @returns {Promise<object>} Razorpay order
     */ }, { key: "retrievePayment", value: function () {var _retrievePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee9(sessionData) {return _regeneratorRuntime().wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.prev = 0;return _context9.abrupt("return",

                this.razorpay_.orders.fetch(sessionData.id));case 4:_context9.prev = 4;_context9.t0 = _context9["catch"](0);throw _context9.t0;case 7:case "end":return _context9.stop();}}}, _callee9, this, [[0, 4]]);}));function retrievePayment(_x11) {return _retrievePayment.apply(this, arguments);}return retrievePayment;}()





    /**
     * Gets a Razorpay order intent and returns it.
     * @param {object} data - the data of the payment to retrieve
     * @returns {Promise<object>} Razorpay order
     */ }, { key: "getPaymentData", value: function () {var _getPaymentData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee10(sessionData) {return _regeneratorRuntime().wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.prev = 0;return _context10.abrupt("return",

                this.razorpay_.orders.fetch(sessionData.data.id));case 4:_context10.prev = 4;_context10.t0 = _context10["catch"](0);throw _context10.t0;case 7:case "end":return _context10.stop();}}}, _callee10, this, [[0, 4]]);}));function getPaymentData(_x12) {return _getPaymentData.apply(this, arguments);}return getPaymentData;}()





    /**
     * Authorizes Razorpay order by simply returning
     * the status for the order in use.
     * @param {object} sessionData - payment session data
     * @param {object} context - properties relevant to current context
     * @returns {Promise<{ status: string, data: object }>} result with data and status
     */ }, { key: "authorizePayment", value: function () {var _authorizePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee11(sessionData) {var context,stat,_args11 = arguments;return _regeneratorRuntime().wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:context = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};_context11.next = 3;return (
                  this.getStatus(sessionData.data));case 3:stat = _context11.sent;_context11.prev = 4;return _context11.abrupt("return",


                { data: sessionData.data, status: stat });case 8:_context11.prev = 8;_context11.t0 = _context11["catch"](4);throw _context11.t0;case 11:case "end":return _context11.stop();}}}, _callee11, this, [[4, 8]]);}));function authorizePayment(_x13) {return _authorizePayment.apply(this, arguments);}return authorizePayment;}() }, { key: "updatePaymentData", value: function () {var _updatePaymentData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(







      function _callee12(sessionData, update) {var result;return _regeneratorRuntime().wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.prev = 0;

                result = {};

                //razorpay_payment_id: 'pay_JE243QWSepvqeH', razorpay_order_id: 'order_JE217mxaUTILbJ', razorpay_signature: '28021fc7955db5841a386c95c5186e98fb6d529b8196cb195af17af22da0e4fa'
                if (update.razorpay_payment_id)
                {
                  result = this.razorpay_.orders.edit(sessionData.id, { "notes": { "razorpay_payment_id": update.razorpay_payment_id,
                      "razorpay_order_id": update.razorpay_order_id, "razorpay_signature": update.razorpay_signature } });
                } else

                {
                  result = this.razorpay_.orders.edit(sessionData.id, { "notes": update });
                }return _context12.abrupt("return",

                result);case 6:_context12.prev = 6;_context12.t0 = _context12["catch"](0);throw _context12.t0;case 9:case "end":return _context12.stop();}}}, _callee12, this, [[0, 6]]);}));function updatePaymentData(_x14, _x15) {return _updatePaymentData.apply(this, arguments);}return updatePaymentData;}()





    /**
     * Updates Razorpay order.
     * @param {object} sessionData - payment session data.
     * @param {object} update - object to update intent with
     * @returns {object} Razorpay order
     */ }, { key: "updatePayment", value: function () {var _updatePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee13(sessionData, cart) {return _regeneratorRuntime().wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:_context13.prev = 0;return _context13.abrupt("return",


                this.createPayment(cart));case 4:_context13.prev = 4;_context13.t0 = _context13["catch"](0);throw _context13.t0;case 7:case "end":return _context13.stop();}}}, _callee13, this, [[0, 4]]);}));function updatePayment(_x16, _x17) {return _updatePayment.apply(this, arguments);}return updatePayment;}() }, { key: "deletePayment", value: function () {var _deletePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


















      function _callee14(payment) {var id;return _regeneratorRuntime().wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.prev = 0;

                id = payment.data.payment_id.id;return _context14.abrupt("return",
                this.razorpay_.payments.cancel(id)["catch"](function (err) {
                  if (err.statusCode === 400) {
                    return;
                  }
                  throw err;
                }));case 5:_context14.prev = 5;_context14.t0 = _context14["catch"](0);throw _context14.t0;case 8:case "end":return _context14.stop();}}}, _callee14, this, [[0, 5]]);}));function deletePayment(_x18) {return _deletePayment.apply(this, arguments);}return deletePayment;}()





    /*razory pay doesn't support updating customer details of orders  thus we return an existing order as is*/
    /**
     * Updates customer of Razorpay order.
     * @param {string} order_id - id of order to update
     * @param {string} customerId - id of new Razorpay customer
     * @returns {object} Razorpay order
     */ }, { key: "updatePaymentIntentCustomer", value: function () {var _updatePaymentIntentCustomer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee15(order_id, customerId) {return _regeneratorRuntime().wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:_context15.prev = 0;

                order_of_interest = this.razorpay_.orders.fetch(order_id);return _context15.abrupt("return",
                order_of_interest);case 5:_context15.prev = 5;_context15.t0 = _context15["catch"](0);throw _context15.t0;case 8:case "end":return _context15.stop();}}}, _callee15, this, [[0, 5]]);}));function updatePaymentIntentCustomer(_x19, _x20) {return _updatePaymentIntentCustomer.apply(this, arguments);}return updatePaymentIntentCustomer;}()





    /**
     * Captures payment for Razorpay order.
     * @param {object} paymentData - payment method data from cart
     * @returns {object} Razorpay payment result
     */ }, { key: "capturePayment", value: function () {var _capturePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee16(paymentData) {var _paymentData$data$not, razorpay_payment_id, razorpay_order_id, razorpay_signature, paymentIntent;return _regeneratorRuntime().wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:_context16.prev = 0;_paymentData$data$not =


                paymentData.data.notes, razorpay_payment_id = _paymentData$data$not.razorpay_payment_id, razorpay_order_id = _paymentData$data$not.razorpay_order_id, razorpay_signature = _paymentData$data$not.razorpay_signature;if (
                this._validateSignature(razorpay_payment_id, razorpay_order_id, razorpay_signature)) {_context16.next = 4;break;}return _context16.abrupt("return");case 4:_context16.next = 6;return (

                  this.razorpay_.payments.fetch(razorpay_payment_id));case 6:paymentIntent = _context16.sent;if (!(
                paymentIntent.status === "captured")) {_context16.next = 11;break;}return _context16.abrupt("return",

                paymentIntent);case 11:_context16.next = 13;return (


                  this.razorpay_.payments.capture(razorpay_payment_id, paymentIntent.amount, paymentIntent.currency));case 13:return _context16.abrupt("return", _context16.sent);case 14:_context16.next = 22;break;case 16:_context16.prev = 16;_context16.t0 = _context16["catch"](0);if (!(




                _context16.t0.code === "payment_intent_unexpected_state")) {_context16.next = 21;break;}if (!(
                _context16.t0.payment_intent.status === "succeeded")) {_context16.next = 21;break;}return _context16.abrupt("return",
                _context16.t0.payment_intent);case 21:throw _context16.t0;case 22:case "end":return _context16.stop();}}}, _callee16, this, [[0, 16]]);}));function capturePayment(_x21) {return _capturePayment.apply(this, arguments);}return capturePayment;}()






    /**
     * Refunds payment for Razorpay order.
     * @param {object} paymentData - payment method data from cart
     * @param {number} amountToRefund - amount to refund
     * @returns {string} refunded order
     */ }, { key: "refundPayment", value: function () {var _refundPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee17(paymentData, amountToRefund) {var speed,orderInformation,_orderInformation$not,razorpay_payment_id,razorpay_order_id,razorpay_signature,paymentMade,refundResult,_args17 = arguments;return _regeneratorRuntime().wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:speed = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : "optimum";_context17.next = 3;return (
                  this.razorpay_.orders.fetch(paymentData.data.order_id));case 3:orderInformation = _context17.sent;_orderInformation$not =
                orderInformation.notes, razorpay_payment_id = _orderInformation$not.razorpay_payment_id, razorpay_order_id = _orderInformation$not.razorpay_order_id, razorpay_signature = _orderInformation$not.razorpay_signature;if (
                this._validateSignature(razorpay_payment_id, razorpay_order_id, razorpay_signature)) {_context17.next = 7;break;}return _context17.abrupt("return");case 7:_context17.prev = 7;_context17.next = 10;return (


                  this.razorpay_.payments.fetch(razorpay_payment_id));case 10:paymentMade = _context17.sent;if (!(
                paymentMade.amount - paymentMade.amount_refunded >= amountToRefund)) {_context17.next = 18;break;}_context17.next = 14;return (
                  this.razorpay_.payments.refund(razorpay_payment_id, {
                    amount: Math.round(amountToRefund),
                    // id: razorpay_payment_id,
                    speed: speed,
                    receipt: paymentData.data.order_id }));case 14:refundResult = _context17.sent;return _context17.abrupt("return",

                refundResult);case 18:return _context17.abrupt("return");case 19:_context17.next = 24;break;case 21:_context17.prev = 21;_context17.t0 = _context17["catch"](7);throw _context17.t0;case 24:case "end":return _context17.stop();}}}, _callee17, this, [[7, 21]]);}));function refundPayment(_x22, _x23) {return _refundPayment.apply(this, arguments);}return refundPayment;}()








    /**
     * Cancels payment for Razorpay order.
     * @param {object} paymentData - payment method data from cart
     * @returns {object} canceled order
     * razorpay doesn't support cancelled orders once created, 
     * the status of the, it merely returns the current order.
     */ }, { key: "cancelPayment", value: function () {var _cancelPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee18(payment) {var id;return _regeneratorRuntime().wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:
                id = payment.data.id;_context18.prev = 1;_context18.next = 4;return (

                  this.razorpay_.orders.fetch(id));case 4:return _context18.abrupt("return", _context18.sent);case 7:_context18.prev = 7;_context18.t0 = _context18["catch"](1);if (!(

                _context18.t0.payment_intent.status === "canceled")) {_context18.next = 11;break;}return _context18.abrupt("return",
                _context18.t0.payment_intent);case 11:throw _context18.t0;case 12:case "end":return _context18.stop();}}}, _callee18, this, [[1, 7]]);}));function cancelPayment(_x24) {return _cancelPayment.apply(this, arguments);}return cancelPayment;}()






    /**
     * Constructs Razorpay Webhook event
     * @param {object} data - the data of the webhook request: req.body
     * @param {object} signature - the Razorpay signature on the event, that
     *    ensures integrity of the webhook event
     * @returns {object} Razorpay Webhook event
     */ }, { key: "constructWebhookEvent", value:
    function constructWebhookEvent(data, signature) {
      return this.razorpay_.webhooks.constructEvent(
      data,
      signature,
      this.options_.webhook_secret);

    } }]);return RazorpayProviderService;}(_medusaInterfaces.PaymentService);_defineProperty(RazorpayProviderService, "identifier", "razorpay");_defineProperty(RazorpayProviderService, "RAZORPAY_NAME_LENGTH_LIMIT", 50);_defineProperty(RazorpayProviderService, "seq_number", 0);var _default =


RazorpayProviderService;exports["default"] = _default;