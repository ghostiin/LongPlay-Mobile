import { useRef, useEffect, useState, useCallback } from 'react';

function usePrevious(value) {
	// The ref object is a generic container whose current property is mutable ...
	// ... and can hold any value, similar to an instance property on a class
	const ref = useRef();

	// Store current value in ref
	useEffect(
		() => {
			ref.current = value;
		},
		[ value ]
	); // Only re-run if value changes

	// Return previous value (happens before update in useEffect above)
	return ref.current;
}

function useDebounce(value, delay) {
	// State and setters for debounced value
	const [ debouncedValue, setDebouncedValue ] = useState(value);

	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler);
			};
		},
		[ value, delay ] // Only re-call effect if value or delay changes
	);

	return debouncedValue;
}

function useToggle(initialState = false) {
	const [ state, setState ] = useState(initialState);
	const toggle = useCallback(() => setState((state) => !state), []);
	return [ state, toggle ];
}

function useFormatTime(time = 0) {
	const seconds = time | 0;
	const min = (seconds / 60) | 0;
	const sec = (seconds % 60).toString().padStart(2, '0'); // 不足两位时用0填充
	return `${min}:${sec}`;
}

export { usePrevious, useDebounce, useToggle, useFormatTime };
