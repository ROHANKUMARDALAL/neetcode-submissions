/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=>a.start-b.start);
        let i=1
         while(i<intervals.length)
         {
            let prevEnd=intervals[i-1].end;
            let currentStart=intervals[i].start;
            if(prevEnd>currentStart){
                return false;
            }
            i++;
         }
         return true;
    }
}
