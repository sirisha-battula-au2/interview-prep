function temporalDeadZoneExample() {
	// TDZ for `value` begins

	const func = function() {
		// Even though this function is defined _before_
		// `value` in the code, it's not called until after
		// `value` is declared, so accessing it is OK.
		console.log('value is: ', value);
	}

	// TDZ for `value` continues. Accessing `value`
	// here would be a ReferenceError. Calling `func`
	// here would cause a ReferenceError.

	// TDZ ends with declaration of `value`
	let value = 'foo';

	// no longer in TDZ when calling function so now
	// any access of `value` is ok
	func();
}
temporalDeadZoneExample();