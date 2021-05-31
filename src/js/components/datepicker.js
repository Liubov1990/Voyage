import "air-datepicker";

import { datepickerLanguageOptions } from "../constants";

$('#my-datepicker').datepicker({ position: "top right", language: datepickerLanguageOptions, range: true, multipleDatesSeparator: " - ",  keyboardNav: true });
