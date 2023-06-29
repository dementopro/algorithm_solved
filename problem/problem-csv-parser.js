/**
 * We're going to implement a simple CSV parsing function.
 * There are two things to focus on. The first (and most importantly)
 * is correctly parsing the CSV format. The second is writing
 * clean code that another engineer would enjoy using.
 *
 * You may assume that the CSV file is correctly formatted.
 * 
 * csv_lines = [
 *   'John,Smith,john.smith@gmail.com,Los Angeles,10',
 *   'Jane,Roberts,janer@msn.com,"San Francisco, CA",0',
 *   '"Alexandra ""Alex""",Menendez,alex.menendez@gmail.com,Miami,1',
 *   '1,2,,4,"5"'
 * ]

 *
 * An ideal parse will look like this:
 * [['John', 'Smith', 'john.smith@gmail.com', 'Los Angeles', '1'],
 * ['Jane', 'Roberts', 'janer@msn.com', 'San Francisco, CA', '0'],
 * ['Alexandra "Alex"', 'Menendez', 'alex.menendez@gmail.com', 'Miami', '1'],
 * ['1','2','','4','5']]
 */