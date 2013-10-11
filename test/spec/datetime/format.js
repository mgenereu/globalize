define([
	"globalize/main",
	"json!fixtures/cldr/main/en/ca-gregorian.json",
	"json!fixtures/cldr/supplemental/likelySubtags.json",
	"json!fixtures/cldr/supplemental/weekData.json"
], function( Globalize, enCaGregorian, likelySubtags, weekData ) {

	var year0 = new Date( -62167190400000 ),
			yearBc = new Date( -62482053600000 ),
		date1 = new Date( 1982, 0, 2, 9, 5, 59 );
		date2 = new Date( 2010, 8, 15, 17, 35, 7, 369 ),
		date3 = new Date( 1981, 11, 31, 12 ), // thu
		date4 = new Date( 1994, 11, 31, 12 ); // sat

	Globalize.load( enCaGregorian );
	Globalize.load( likelySubtags );
	Globalize.load( weekData );
	Globalize.locale( "en" );

	describe("Datetime", function() {

		/**
		 *  Era
		 */

		it( "should format era (G|GG|GGG)", function() {
			expect( Globalize.format( date1, "G" ) ).to.equal( "AD" );
			expect( Globalize.format( year0, "G" ) ).to.equal( "AD" );
			expect( Globalize.format( yearBc, "G" ) ).to.equal( "BC" );
			expect( Globalize.format( date1, "GG" ) ).to.equal( "AD" );
			expect( Globalize.format( year0, "GG" ) ).to.equal( "AD" );
			expect( Globalize.format( yearBc, "GG" ) ).to.equal( "BC" );
			expect( Globalize.format( date1, "GGG" ) ).to.equal( "AD" );
			expect( Globalize.format( year0, "GGG" ) ).to.equal( "AD" );
			expect( Globalize.format( yearBc, "GGG" ) ).to.equal( "BC" );
		});

		it( "should format era (GGGG)", function() {
			expect( Globalize.format( date1, "GGGG" ) ).to.equal( "Anno Domini" );
			expect( Globalize.format( year0, "GGGG" ) ).to.equal( "Anno Domini" );
			expect( Globalize.format( yearBc, "GGGG" ) ).to.equal( "Before Christ" );
		});

		it( "should format era (GGGGG)", function() {
			expect( Globalize.format( date1, "GGGGG" ) ).to.equal( "A" );
			expect( Globalize.format( year0, "GGGGG" ) ).to.equal( "A" );
			expect( Globalize.format( yearBc, "GGGGG" ) ).to.equal( "B" );
		});

		/**
		 *  Year
		 */

		it( "should format year (y) with no padding", function() {
			expect( Globalize.format( date2, "y" ) ).to.equal( "2010" );
			expect( Globalize.format( date1, "y" ) ).to.equal( "1982" );
			expect( Globalize.format( year0, "y" ) ).to.equal( "0" );
		});

		it( "should format year (yy) with padding, and limit 2 digits", function() {
			expect( Globalize.format( date2, "yy" ) ).to.equal( "10" );
			expect( Globalize.format( date1, "yy" ) ).to.equal( "82" );
			expect( Globalize.format( year0, "yy" ) ).to.equal( "00" );
		});

		it( "should format year (yyy+) with padding", function() {
			expect( Globalize.format( date1, "yyy" ) ).to.equal( "1982" );
			expect( Globalize.format( date2, "yyy" ) ).to.equal( "2010" );
			expect( Globalize.format( year0, "yyyy" ) ).to.equal( "0000" );
			expect( Globalize.format( date1, "yyyyy" ) ).to.equal( "01982" );
			expect( Globalize.format( date2, "yyyyy" ) ).to.equal( "02010" );
		});

		it( "should format year in \"week of year\" (Y) with no padding", function() {
			expect( Globalize.format( date3, "Y" ) ).to.equal( "1982" );
			expect( Globalize.format( date4, "Y" ) ).to.equal( "1994" );
		});

		it( "should format year in \"week of year\" (YY) with padding, and limit 2 digits", function() {
			expect( Globalize.format( date3, "YY" ) ).to.equal( "82" );
			expect( Globalize.format( date4, "YY" ) ).to.equal( "94" );
		});

		it( "should format year in \"week of year\" (YYY+) with padding", function() {
			expect( Globalize.format( date3, "YYY" ) ).to.equal( "1982" );
			expect( Globalize.format( date4, "YYY" ) ).to.equal( "1994" );
			expect( Globalize.format( date3, "YYYYY" ) ).to.equal( "01982" );
			expect( Globalize.format( date4, "YYYYY" ) ).to.equal( "01994" );
		});

		/**
		 *  Quarter
		 */

		it( "should format quarter (Q|q) with no padding", function() {
			expect( Globalize.format( date1, "Q" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "Q" ) ).to.equal( "3" );
			expect( Globalize.format( date1, "q" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "q" ) ).to.equal( "3" );
		});

		it( "should format quarter (QQ|qq) with padding", function() {
			expect( Globalize.format( date1, "QQ" ) ).to.equal( "01" );
			expect( Globalize.format( date2, "QQ" ) ).to.equal( "03" );
			expect( Globalize.format( date1, "qq" ) ).to.equal( "01" );
			expect( Globalize.format( date2, "qq" ) ).to.equal( "03" );
		});

		it( "should format quarter (QQQ|qqq)", function() {
			expect( Globalize.format( date1, "QQQ" ) ).to.equal( "Q1" );
			expect( Globalize.format( date2, "QQQ" ) ).to.equal( "Q3" );
			expect( Globalize.format( date1, "qqq" ) ).to.equal( "Q1" );
			expect( Globalize.format( date2, "qqq" ) ).to.equal( "Q3" );
		});

		it( "should format quarter (QQQQ|qqqq) with padding", function() {
			expect( Globalize.format( date1, "QQQQ" ) ).to.equal( "1st quarter" );
			expect( Globalize.format( date2, "QQQQ" ) ).to.equal( "3rd quarter" );
			expect( Globalize.format( date1, "qqqq" ) ).to.equal( "1st quarter" );
			expect( Globalize.format( date2, "qqqq" ) ).to.equal( "3rd quarter" );
		});

		/**
		 *  Month
		 */

		it( "should format month (M|L) with no padding", function() {
			expect( Globalize.format( date1, "M" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "M" ) ).to.equal( "9" );
			expect( Globalize.format( date1, "L" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "L" ) ).to.equal( "9" );
		});

		it( "should format month (MM|LL) with padding", function() {
			expect( Globalize.format( date1, "MM" ) ).to.equal( "01" );
			expect( Globalize.format( date2, "MM" ) ).to.equal( "09" );
			expect( Globalize.format( date1, "LL" ) ).to.equal( "01" );
			expect( Globalize.format( date2, "LL" ) ).to.equal( "09" );
		});

		it( "should format month (MMM|LLL)", function() {
			expect( Globalize.format( date1, "MMM" ) ).to.equal( "Jan" );
			expect( Globalize.format( date2, "MMM" ) ).to.equal( "Sep" );
			expect( Globalize.format( date1, "LLL" ) ).to.equal( "Jan" );
			expect( Globalize.format( date2, "LLL" ) ).to.equal( "Sep" );
		});

		it( "should format month (MMMM|LLLL)", function() {
			expect( Globalize.format( date1, "MMMM" ) ).to.equal( "January" );
			expect( Globalize.format( date2, "MMMM" ) ).to.equal( "September" );
			expect( Globalize.format( date1, "LLLL" ) ).to.equal( "January" );
			expect( Globalize.format( date2, "LLLL" ) ).to.equal( "September" );
		});

		it( "should format month (MMMMM|LLLLL)", function() {
			expect( Globalize.format( date1, "MMMMM" ) ).to.equal( "J" );
			expect( Globalize.format( date2, "MMMMM" ) ).to.equal( "S" );
			expect( Globalize.format( date1, "LLLLL" ) ).to.equal( "J" );
			expect( Globalize.format( date2, "LLLLL" ) ).to.equal( "S" );
		});

		/**
		 *  Week
		 */

		it( "should format week of year (w) with no padding", function() {
			expect( Globalize.format( date1, "w" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "w" ) ).to.equal( "38" );
		});

		it( "should format week of year (ww) with padding", function() {
			expect( Globalize.format( date1, "ww" ) ).to.equal( "01" );
			expect( Globalize.format( date2, "ww" ) ).to.equal( "38" );
		});

		it( "should format week of month (W)", function() {
			expect( Globalize.format( date1, "W" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "W" ) ).to.equal( "3" );
			expect( Globalize.format( date3, "W" ) ).to.equal( "5" );
		});

		/**
		 *  Day
		 */

		it( "should format day (d) with no padding", function() {
			expect( Globalize.format( date1, "d" ) ).to.equal( "2" );
			expect( Globalize.format( date2, "d" ) ).to.equal( "15" );
		});

		it( "should format day (dd) with padding", function() {
			expect( Globalize.format( date1, "dd" ) ).to.equal( "02" );
			expect( Globalize.format( date2, "dd" ) ).to.equal( "15" );
		});

		it( "should format day of year (D) with no padding", function() {
			expect( Globalize.format( date1, "D" ) ).to.equal( "2" );
			expect( Globalize.format( date2, "D" ) ).to.equal( "258" );
		});

		it( "should format day of year (DD|DDD) with padding", function() {
			expect( Globalize.format( date1, "DD" ) ).to.equal( "02" );
			expect( Globalize.format( date1, "DDD" ) ).to.equal( "002" );
			expect( Globalize.format( date2, "DD" ) ).to.equal( "258" );
		});

		it( "should format day of week in month (F)", function() {
			expect( Globalize.format( date1, "F" ) ).to.equal( "1" );
			expect( Globalize.format( date2, "F" ) ).to.equal( "3" );
		});

		/**
		 *  Week day
		 */

		it( "should format local day of week (e|c) with no padding", function() {
			expect( Globalize.format( date1, "e" ) ).to.equal( "7" );
			expect( Globalize.format( date2, "e" ) ).to.equal( "4" );
			expect( Globalize.format( date1, "c" ) ).to.equal( "7" );
			expect( Globalize.format( date2, "c" ) ).to.equal( "4" );
		});

		it( "should format local day of week (ee|cc) with padding", function() {
			expect( Globalize.format( date1, "ee" ) ).to.equal( "07" );
			expect( Globalize.format( date2, "ee" ) ).to.equal( "04" );
			expect( Globalize.format( date1, "cc" ) ).to.equal( "07" );
			expect( Globalize.format( date2, "cc" ) ).to.equal( "04" );
		});

		it( "should format local day of week (E|EE|EEE|eee|ccc)", function() {
			expect( Globalize.format( date1, "E" ) ).to.equal( "Sat" );
			expect( Globalize.format( date2, "E" ) ).to.equal( "Wed" );
			expect( Globalize.format( date1, "EE" ) ).to.equal( "Sat" );
			expect( Globalize.format( date2, "EE" ) ).to.equal( "Wed" );
			expect( Globalize.format( date1, "EEE" ) ).to.equal( "Sat" );
			expect( Globalize.format( date2, "EEE" ) ).to.equal( "Wed" );
			expect( Globalize.format( date1, "eee" ) ).to.equal( "Sat" );
			expect( Globalize.format( date2, "eee" ) ).to.equal( "Wed" );
			expect( Globalize.format( date1, "ccc" ) ).to.equal( "Sat" );
			expect( Globalize.format( date2, "ccc" ) ).to.equal( "Wed" );
		});

		it( "should format local day of week (EEEE|eeee|cccc)", function() {
			expect( Globalize.format( date1, "EEEE" ) ).to.equal( "Saturday" );
			expect( Globalize.format( date2, "EEEE" ) ).to.equal( "Wednesday" );
			expect( Globalize.format( date1, "eeee" ) ).to.equal( "Saturday" );
			expect( Globalize.format( date2, "eeee" ) ).to.equal( "Wednesday" );
			expect( Globalize.format( date1, "cccc" ) ).to.equal( "Saturday" );
			expect( Globalize.format( date2, "cccc" ) ).to.equal( "Wednesday" );
		});

		it( "should format local day of week (EEEEE|eeeee|ccccc)", function() {
			expect( Globalize.format( date1, "EEEEE" ) ).to.equal( "S" );
			expect( Globalize.format( date2, "EEEEE" ) ).to.equal( "W" );
			expect( Globalize.format( date1, "eeeee" ) ).to.equal( "S" );
			expect( Globalize.format( date2, "eeeee" ) ).to.equal( "W" );
			expect( Globalize.format( date1, "ccccc" ) ).to.equal( "S" );
			expect( Globalize.format( date2, "ccccc" ) ).to.equal( "W" );
		});

		it( "should format local day of week (EEEEEE|eeeeee|cccccc)", function() {
			expect( Globalize.format( date1, "EEEEEE" ) ).to.equal( "Sa" );
			expect( Globalize.format( date2, "EEEEEE" ) ).to.equal( "We" );
			expect( Globalize.format( date1, "eeeeee" ) ).to.equal( "Sa" );
			expect( Globalize.format( date2, "eeeeee" ) ).to.equal( "We" );
			expect( Globalize.format( date1, "cccccc" ) ).to.equal( "Sa" );
			expect( Globalize.format( date2, "cccccc" ) ).to.equal( "We" );
		});

		// TODO all

		/**
		 *  Period
		 */

		it( "should format period (a)", function() {
			expect( Globalize.format( date1, "a" ) ).to.equal( "AM" );
			expect( Globalize.format( date2, "a" ) ).to.equal( "PM" );
		});

		/**
		 *  Hour
		 */

		it( "should format hour (h) using 12-hour-cycle [1-12] with no padding", function() {
			expect( Globalize.format( date1, "h" ) ).to.equal( "9" );
			expect( Globalize.format( date2, "h" ) ).to.equal( "5" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "h" ) ).to.equal( "12" );
		});

		it( "should format hour (hh) using 12-hour-cycle [1-12] with padding", function() {
			expect( Globalize.format( date1, "hh" ) ).to.equal( "09" );
			expect( Globalize.format( date2, "hh" ) ).to.equal( "05" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "hh" ) ).to.equal( "12" );
		});

		it( "should format hour (H) using 24-hour-cycle [0-23] with no padding", function() {
			expect( Globalize.format( date1, "H" ) ).to.equal( "9" );
			expect( Globalize.format( date2, "H" ) ).to.equal( "17" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "H" ) ).to.equal( "0" );
		});

		it( "should format hour (HH) using 24-hour-cycle [0-23] with padding", function() {
			expect( Globalize.format( date1, "HH" ) ).to.equal( "09" );
			expect( Globalize.format( date2, "HH" ) ).to.equal( "17" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "HH" ) ).to.equal( "00" );
		});

		it( "should format hour (K) using 12-hour-cycle [0-11] with no padding", function() {
			expect( Globalize.format( date1, "K" ) ).to.equal( "9" );
			expect( Globalize.format( date2, "K" ) ).to.equal( "5" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "K" ) ).to.equal( "0" );
		});

		it( "should format hour (KK) using 12-hour-cycle [0-11] with padding", function() {
			expect( Globalize.format( date1, "KK" ) ).to.equal( "09" );
			expect( Globalize.format( date2, "KK" ) ).to.equal( "05" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "KK" ) ).to.equal( "00" );
		});

		it( "should format hour (k) using 24-hour-cycle [1-24] with no padding", function() {
			expect( Globalize.format( date1, "k" ) ).to.equal( "9" );
			expect( Globalize.format( date2, "k" ) ).to.equal( "17" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "k" ) ).to.equal( "24" );
		});

		it( "should format hour (kk) using 24-hour-cycle [1-24] with padding", function() {
			expect( Globalize.format( date1, "kk" ) ).to.equal( "09" );
			expect( Globalize.format( date2, "kk" ) ).to.equal( "17" );
			expect( Globalize.format( new Date( 0, 0, 0, 0 ), "kk" ) ).to.equal( "24" );
		});

		// TODO ([HhKk)]\1{2}, j (all)

		/**
		 *  Minute
		 */

		it( "should format minute (m) with no padding", function() {
			expect( Globalize.format( date1, "m" ) ).to.equal( "5" );
			expect( Globalize.format( date2, "m" ) ).to.equal( "35" );
		});

		it( "should format minute (mm) with padding", function() {
			expect( Globalize.format( date1, "mm" ) ).to.equal( "05" );
			expect( Globalize.format( date2, "mm" ) ).to.equal( "35" );
		});

		/**
		 *  Second
		 */

		it( "should format second (s) with no padding", function() {
			expect( Globalize.format( date1, "s" ) ).to.equal( "59" );
			expect( Globalize.format( date2, "s" ) ).to.equal( "7" );
		});

		it( "should format second (ss) with padding", function() {
			expect( Globalize.format( date1, "ss" ) ).to.equal( "59" );
			expect( Globalize.format( date2, "ss" ) ).to.equal( "07" );
		});

		it( "should format various milliseconds (S+)", function() {
			expect( Globalize.format( date2, "S" ) ).to.equal( "4" );
			expect( Globalize.format( date2, "SS" ) ).to.equal( "37" );
			expect( Globalize.format( date2, "SSS" ) ).to.equal( "369" );
			expect( Globalize.format( date2, "SSSS" ) ).to.equal( "3690" );
			expect( Globalize.format( date2, "SSSSS" ) ).to.equal( "36900" );
		});

		it( "should format various milliseconds (A+)", function() {
			expect( Globalize.format( date2, "A" ) ).to.equal( "633074" );
			expect( Globalize.format( date2, "AA" ) ).to.equal( "6330737" );
			expect( Globalize.format( date2, "AAA" ) ).to.equal( "63307369" );
			expect( Globalize.format( date2, "AAAA" ) ).to.equal( "633073690" );
			expect( Globalize.format( date2, "AAAAA" ) ).to.equal( "6330736900" );
		});

		/**
		 *  Zone
		 */

		// TODO all

	});

});